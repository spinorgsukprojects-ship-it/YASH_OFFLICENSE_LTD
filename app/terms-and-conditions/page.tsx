import type { Metadata } from "next";
import { company, legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website and store information terms for Yash Off Licence.",
  alternates: { canonical: "/terms-and-conditions" }
};

export default function TermsPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-black md:text-5xl">Terms and Conditions</h1></div></section>
      <section className="section">
        <div className="container prose-policy max-w-4xl">
          <p>These terms apply to use of the Yashofflicense LTD website and enquiries submitted through it.</p>
          <h2>Store Information</h2>
          <p>Website content describes general product ranges and store information. Current products, prices, offers and opening hours should be confirmed directly with the store.</p>
          <h2>Age-Restricted Products</h2>
          <p>{legalDisclaimer}</p>
          <h2>Customer Responsibilities</h2>
          <p>Customers are responsible for providing accurate enquiry details and valid identification where required for age-restricted purchases.</p>
          <h2>Website Content</h2>
          <p>Website content is provided for general customer information and may be updated. It is not a live stock list or a guaranteed product offer.</p>
          <h2>Contact</h2>
          <p>For questions about these terms, contact {company.email} or {company.phone}.</p>
        </div>
      </section>
    </>
  );
}
