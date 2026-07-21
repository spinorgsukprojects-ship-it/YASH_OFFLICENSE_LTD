import type { Metadata } from "next";
import { legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer for Yashofflicense LTD administrative support services.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-extrabold md:text-5xl">Disclaimer</h1></div></section>
      <section className="section">
        <div className="container prose-policy max-w-4xl">
          <p className="rounded-md bg-mist p-5 font-bold text-navy">{legalDisclaimer}</p>
          <h2>General Information</h2>
          <p>Information on this website is provided for general administrative guidance only and may not reflect every requirement for every authority or application type.</p>
          <h2>No Legal or Regulated Advice</h2>
          <p>Yashofflicense LTD does not provide legal advice, immigration advice, tax advice, or regulated professional services through this website.</p>
          <h2>Authority Decisions</h2>
          <p>Final decisions, requests for further information, approval outcomes, and processing times are controlled by the relevant authority.</p>
        </div>
      </section>
    </>
  );
}
