import type { Metadata } from "next";
import { company, legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website and service terms for Yashofflicense LTD.",
  alternates: { canonical: "/terms-and-conditions" }
};

export default function TermsPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-extrabold md:text-5xl">Terms and Conditions</h1></div></section>
      <section className="section">
        <div className="container prose-policy max-w-4xl">
          <p>These terms apply to use of the Yashofflicense LTD website and enquiries submitted through it.</p>
          <h2>Services</h2>
          <p>Yashofflicense LTD provides administrative and application support for business-related processes. Specific services should be confirmed directly before work begins.</p>
          <h2>No Guaranteed Outcomes</h2>
          <p>{legalDisclaimer}</p>
          <h2>Customer Responsibilities</h2>
          <p>Customers are responsible for providing accurate information, complete documents, and timely responses. Authorities may request further information directly from the customer.</p>
          <h2>Website Content</h2>
          <p>Website content is provided for general information and may be updated. It does not constitute legal, tax, immigration, or regulated professional advice.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact {company.email} or {company.phone}.</p>
        </div>
      </section>
    </>
  );
}
