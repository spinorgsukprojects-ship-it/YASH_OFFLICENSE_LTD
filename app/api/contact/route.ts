import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/company";
import { getDb } from "@/lib/firebaseAdmin";

const requiredFields = ["fullName", "email", "phone", "serviceRequired", "applicationType", "preferredContact", "subject", "message", "consent"];
const limits: Record<string, number> = {
  fullName: 120,
  email: 160,
  phone: 40,
  businessName: 140,
  companyNumber: 40,
  serviceRequired: 80,
  applicationType: 160,
  preferredContact: 20,
  subject: 180,
  message: 2000,
  pageUrl: 500
};

const submissions = new Map<string, { count: number; firstSeen: number; fingerprints: Set<string> }>();
const windowMs = 15 * 60 * 1000;
const maxSubmissions = 5;

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (String(body.website || "").trim()) {
    return NextResponse.json({ message: "Unable to submit enquiry." }, { status: 400 });
  }

  const data = sanitize(body);
  for (const field of requiredFields) {
    if (!data[field]) return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const fingerprint = `${data.email}:${data.serviceRequired}:${data.subject}:${data.message}`.toLowerCase();
  const now = Date.now();
  const record = submissions.get(ip);
  if (record && now - record.firstSeen < windowMs) {
    if (record.count >= maxSubmissions || record.fingerprints.has(fingerprint)) {
      return NextResponse.json({ message: "This enquiry was already received or too many attempts were made. Please try again later." }, { status: 429 });
    }
    record.count += 1;
    record.fingerprints.add(fingerprint);
  } else {
    submissions.set(ip, { count: 1, firstSeen: now, fingerprints: new Set([fingerprint]) });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || company.email;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const reference = `YOL-${new Date(now).toISOString().slice(0, 10).replaceAll("-", "")}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  const submittedAt = new Date(now).toLocaleString("en-GB", { timeZone: "Europe/London", dateStyle: "medium", timeStyle: "short" });

  const internalHtml = table({
    "Enquiry Reference": reference,
    Name: data.fullName,
    Email: data.email,
    Phone: data.phone,
    "Business Name": data.businessName || "Not provided",
    "Company Number": data.companyNumber || "Not provided",
    "Service Required": data.serviceRequired,
    "Application or Licence Type": data.applicationType,
    "Renewal Date": data.renewalDate || "Not provided",
    "Preferred Contact Method": data.preferredContact,
    Subject: data.subject,
    Message: data.message,
    "Submission Date and Time": submittedAt,
    "Page URL": data.pageUrl || "Not provided"
  });

  const internal = await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New Website Enquiry - ${data.serviceRequired} - ${data.fullName}`,
    html: internalHtml
  });

  if (internal.error) {
    return NextResponse.json({ message: "Unable to send enquiry at this time." }, { status: 502 });
  }

  const autoReply = await resend.emails.send({
    from,
    to: data.email,
    subject: "We received your enquiry - Yashofflicense LTD",
    html: `<p>Dear ${escapeHtml(data.fullName)},</p><p>Thank you for contacting Yashofflicense LTD. We have received your enquiry and will respond using your preferred contact method where possible.</p><p><strong>Reference:</strong> ${reference}</p><p>${escapeHtml(company.tradingName)}</p>`
  });

  await saveContactEnquiry({
    data,
    ip,
    reference,
    submittedAtIso: new Date(now).toISOString(),
    emailDelivery: {
      internalId: internal.data?.id || null,
      autoReplyId: autoReply.data?.id || null,
      autoReplyError: autoReply.error?.message || null
    }
  });

  return NextResponse.json({ message: "Thank you. Your enquiry has been sent.", reference });
}

function sanitize(body: Record<string, unknown>) {
  const data: Record<string, string> = {};
  for (const [key, value] of Object.entries(body)) {
    const limit = limits[key] || 200;
    data[key] = String(value ?? "").trim().slice(0, limit);
  }
  return data;
}

function table(rows: Record<string, string>) {
  const body = Object.entries(rows)
    .map(([key, value]) => `<tr><th align="left" style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(key)}</th><td style="padding:8px;border-bottom:1px solid #e5e7eb">${escapeHtml(value).replaceAll("\n", "<br>")}</td></tr>`)
    .join("");
  return `<h1>New Website Enquiry</h1><table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif">${body}</table>`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] || char);
}

async function saveContactEnquiry({
  data,
  ip,
  reference,
  submittedAtIso,
  emailDelivery
}: {
  data: Record<string, string>;
  ip: string;
  reference: string;
  submittedAtIso: string;
  emailDelivery: {
    internalId: string | null;
    autoReplyId: string | null;
    autoReplyError: string | null;
  };
}) {
  try {
    await getDb().collection("contactEnquiries").doc(reference).set({
      ...data,
      reference,
      submittedAt: submittedAtIso,
      sourceIp: ip,
      emailDelivery
    });
  } catch (error) {
    console.error("Unable to save contact enquiry to Firestore", error);
  }
}
