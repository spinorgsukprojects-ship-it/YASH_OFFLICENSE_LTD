import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yash Off Licence for opening hours and product availability.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container"><SectionHeading title="Visit or Contact Yash Off Licence" text="Call, email, or send a quick enquiry about stock and opening hours." /></div></section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <ContactInfo icon={<Phone />} label="Phone" value={company.phone} href={company.telHref} />
            <ContactInfo icon={<Mail />} label="Email" value={company.email} href={company.mailHref} />
            <ContactInfo icon={<MapPin />} label="Address" value={company.fullAddress} />
            <div className="card p-5">
              <p className="font-heading text-xl font-black">Opening Hours</p>
              <div className="mt-4 space-y-3">
                {company.hours.map(([day, hours]) => (
                  <p key={day} className="flex justify-between gap-4 text-sm"><span className="font-bold">{day}</span><span className="text-right text-burgundy">{hours}</span></p>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = <span className="break-words text-lg font-bold text-burgundy">{value}</span>;
  return (
    <div className="card flex gap-4 p-5">
      <div className="text-green">{icon}</div>
      <div>
        <p className="font-heading text-xl font-black">{label}</p>
        {href ? <a href={href}>{content}</a> : <p>{content}</p>}
      </div>
    </div>
  );
}
