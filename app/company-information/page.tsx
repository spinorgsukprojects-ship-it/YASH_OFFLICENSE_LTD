import type { Metadata } from "next";
import { CompanyDetails } from "@/components/CompanyDetails";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Company Information",
  description: "Verified company information for Yashofflicense LTD.",
  alternates: { canonical: "/company-information" }
};

export default function CompanyInformationPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container"><SectionHeading title="Company Information" text="Company information is provided for transparency. Store product availability should be confirmed directly with Yash Off Licence." /></div></section>
      <section className="section"><div className="container max-w-4xl"><CompanyDetails /></div></section>
    </>
  );
}
