"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  "New Licence Application Support",
  "Licence Renewal Support",
  "Document Preparation",
  "Application Review",
  "Compliance Administration",
  "Business Registration Support",
  "General Enquiry",
  "Other"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, pageUrl: window.location.href })
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to submit enquiry.");
      setStatus("success");
      setMessage(result.message || "Thank you. Your enquiry has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit enquiry.");
    }
  }

  return (
    <form className="card grid gap-5 p-6" onSubmit={onSubmit} noValidate>
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <FormField label="Full Name" name="fullName" required maxLength={120} />
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Email Address" name="email" type="email" required maxLength={160} />
        <FormField label="Phone Number" name="phone" type="tel" required maxLength={40} />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Business Name" name="businessName" maxLength={140} />
        <FormField label="Company Number" name="companyNumber" maxLength={40} />
      </div>
      <label className="grid gap-2 font-bold">
        Service Required
        <select className="min-h-12 rounded-md border border-slate-300 px-3 font-normal" name="serviceRequired" required defaultValue="">
          <option value="" disabled>Select a service</option>
          {services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>
      <div className="grid gap-5 md:grid-cols-2">
        <FormField label="Application or Licence Type" name="applicationType" required maxLength={160} />
        <FormField label="Renewal Date" name="renewalDate" type="date" />
      </div>
      <label className="grid gap-2 font-bold">
        Preferred Contact Method
        <select className="min-h-12 rounded-md border border-slate-300 px-3 font-normal" name="preferredContact" required defaultValue="">
          <option value="" disabled>Select preference</option>
          <option>Email</option>
          <option>Phone</option>
          <option>Either</option>
        </select>
      </label>
      <FormField label="Subject" name="subject" required maxLength={180} />
      <label className="grid gap-2 font-bold">
        Message
        <textarea className="min-h-36 rounded-md border border-slate-300 p-3 font-normal" name="message" required maxLength={2000} />
      </label>
      <label className="flex gap-3 text-sm leading-6 text-slateText">
        <input className="mt-1 h-5 w-5 shrink-0" type="checkbox" name="consent" required />
        <span>I agree that Yashofflicense LTD may use the information provided to respond to my enquiry.</span>
      </label>
      <p className="text-sm leading-6 text-slateText">Your information will only be used to respond to your enquiry. Please review our Privacy Policy for more information.</p>
      <button className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={status === "loading"}>
        <Send size={18} /> {status === "loading" ? "Sending..." : "Send Enquiry"}
      </button>
      {message ? (
        <p className={`rounded-md p-4 text-sm font-bold ${status === "success" ? "bg-green/10 text-green" : "bg-red-50 text-red-700"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}

function FormField({ label, name, type = "text", required = false, maxLength }: { label: string; name: string; type?: string; required?: boolean; maxLength?: number }) {
  return (
    <label className="grid gap-2 font-bold">
      {label}{required ? <span className="sr-only"> required</span> : null}
      <input className="min-h-12 rounded-md border border-slate-300 px-3 font-normal" name={name} type={type} required={required} maxLength={maxLength} />
    </label>
  );
}
