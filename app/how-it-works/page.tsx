import type { Metadata } from "next";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works",
  description: "A clear process for Yashofflicense LTD administrative and application support.",
  alternates: { canonical: "/how-it-works" }
};

const steps = [
  ["Tell Us What You Need", "Share the type of application or support required."],
  ["Initial Requirements Review", "We identify the documents and information likely to be needed."],
  ["Preparation and Guidance", "We help organise the application information and supporting documents."],
  ["Submission Support and Follow-Up", "We provide administrative support through the next stages."]
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container"><SectionHeading title="A Clear and Simple Process" text="Straightforward support from first enquiry to organised follow-up." /></div></section>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], index) => <ProcessStep key={title} number={index + 1} title={title} text={text} />)}
        </div>
        <p className="container mt-8 rounded-md bg-mist p-5 text-center font-bold text-slateText">Final approval and processing times are controlled by the relevant authority.</p>
      </section>
    </>
  );
}
