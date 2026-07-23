"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  "Check product availability",
  "Wines, beers or spirits",
  "Soft drinks or mixers",
  "Snacks and confectionery",
  "Groceries and essentials",
  "Tobacco or vape products",
  "Opening hours or directions",
  "General enquiry"
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
      <label className="grid gap-2 font-bold">
        Enquiry Type
        <select className="min-h-12 rounded-md border border-emerald-950/20 px-3 font-normal" name="serviceRequired" required defaultValue="">
          <option value="" disabled>Select enquiry type</option>
          {services.map((service) => <option key={service}>{service}</option>)}
        </select>
      </label>
      <label className="grid gap-2 font-bold">
        Preferred Contact Method
        <select className="min-h-12 rounded-md border border-emerald-950/20 px-3 font-normal" name="preferredContact" required defaultValue="">
          <option value="" disabled>Select preference</option>
          <option>Email</option>
          <option>Phone</option>
          <option>Either</option>
        </select>
      </label>
      <FormField label="Subject" name="subject" required maxLength={180} />
      <label className="grid gap-2 font-bold">
        Message
        <textarea className="min-h-36 rounded-md border border-emerald-950/20 p-3 font-normal" name="message" required maxLength={2000} placeholder="Tell us what you would like to check, reserve or ask about." />
      </label>
      <input type="hidden" name="applicationType" value="Store enquiry" />
      <label className="flex gap-3 text-sm leading-6 text-slateText">
        <input className="mt-1 h-5 w-5 shrink-0" type="checkbox" name="consent" required />
        <span>I agree that Yashofflicense LTD may use the information provided to respond to my enquiry.</span>
      </label>
      <p className="text-sm leading-6 text-slateText">Please do not include payment details. Age-restricted products are sold in store only and ID may be required.</p>
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
      <input className="min-h-12 rounded-md border border-emerald-950/20 px-3 font-normal" name={name} type={type} required={required} maxLength={maxLength} />
    </label>
  );
}
