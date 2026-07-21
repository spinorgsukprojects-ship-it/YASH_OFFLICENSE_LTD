import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Yashofflicense LTD for administrative and application support.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container"><SectionHeading title="Send an Enquiry" text="Tell us what support you need and how you would prefer us to contact you." /></div></section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <ContactInfo icon={<Phone />} label="Phone" value={company.phone} href={company.telHref} />
            <ContactInfo icon={<Mail />} label="Email" value={company.email} href={company.mailHref} />
            <ContactInfo icon={<MapPin />} label="Address" value={company.fullAddress} />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ContactInfo({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = <span className="break-words text-lg font-bold text-royal">{value}</span>;
  return (
    <div className="card flex gap-4 p-5">
      <div className="text-green">{icon}</div>
      <div>
        <p className="font-heading text-xl font-extrabold">{label}</p>
        {href ? <a href={href}>{content}</a> : <p>{content}</p>}
      </div>
    </div>
  );
}
