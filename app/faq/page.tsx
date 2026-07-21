import type { Metadata } from "next";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Yashofflicense LTD administrative support.",
  alternates: { canonical: "/faq" }
};

export default function FAQPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container"><SectionHeading title="Frequently Asked Questions" text="General answers about our services, applications, documents, renewals, and outcomes." /></div></section>
      <section className="section"><div className="container max-w-4xl"><FAQAccordion items={faqs} /></div></section>
    </>
  );
}
