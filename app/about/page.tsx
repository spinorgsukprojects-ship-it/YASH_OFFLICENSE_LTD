import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CompanyDetails } from "@/components/CompanyDetails";
import { legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yashofflicense LTD and its professional administrative support approach.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading title="About Yashofflicense LTD" text="Professional administrative support for business applications, licence-related processes, renewals, and documentation." />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-8 text-slateText">
            <p>Yashofflicense LTD provides professional administrative support for individuals and businesses managing application information, supporting documents, renewals, and general compliance administration.</p>
            <p className="font-bold text-navy">Our mission is to make licensing and administrative processes easier to understand and manage through clear communication, organised support, and professional service.</p>
            <p>We focus on practical guidance, careful document handling, and a clear process so customers can understand what information may be needed and what steps may follow.</p>
            <p>Customer information is handled with care and used to respond to enquiries, prepare support, and communicate about requested services.</p>
            <p className="rounded-md bg-mist p-5 font-bold text-navy">{legalDisclaimer}</p>
          </div>
          <CompanyDetails />
        </div>
      </section>
    </>
  );
}
