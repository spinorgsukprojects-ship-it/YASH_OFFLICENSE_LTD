import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy information for enquiries submitted to Yash Off Licence.",
  alternates: { canonical: "/privacy-policy" }
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Privacy Policy">
      <p>This Privacy Policy explains how Yashofflicense LTD handles information provided through website enquiries and customer communications.</p>
      <h2>Information We Collect</h2>
      <p>We may collect your name, email address, phone number, enquiry type, preferred contact method, subject, message, submission date, page URL and enquiry reference.</p>
      <h2>Why We Collect It</h2>
      <p>This information is used to respond to your enquiry, check product or store information where possible, and keep appropriate records of customer communications.</p>
      <h2>Email Delivery Provider</h2>
      <p>Website enquiries may be delivered using an email delivery provider such as Resend. That provider processes the email content for delivery to Yashofflicense LTD and, where applicable, confirmation to the customer.</p>
      <h2>Retention</h2>
      <p>Enquiry records are retained only for as long as reasonably needed for customer communication, administration and legitimate business record keeping.</p>
      <h2>Your Contact Rights</h2>
      <p>You can request correction or deletion of enquiry information by contacting {company.email}. Some records may need to be retained where there is a valid business or legal reason.</p>
      <h2>Professional Review</h2>
      <p>This policy is provided as general website information and should be reviewed professionally for full legal compliance.</p>
    </PolicyPage>
  );
}

function PolicyPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <section className="section bg-cream"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-black md:text-5xl">{title}</h1></div></section>
      <section className="section"><div className="container prose-policy max-w-4xl">{children}</div></section>
    </>
  );
}
