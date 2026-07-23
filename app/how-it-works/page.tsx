import type { Metadata } from "next";
import { ProcessStep } from "@/components/ProcessStep";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How to shop, call ahead and visit Yash Off Licence.",
  alternates: { canonical: "/how-it-works" }
};

const steps = [
  ["Pop In Locally", "Visit the store for drinks, snacks, groceries and daily essentials."],
  ["Browse the Range", "Check chilled fridges, shelves and counter items for current stock."],
  ["Ask for Help", "If you need a product or want to check availability, speak to the store team."],
  ["Shop and Go", "Pick up what you need quickly and continue your day."]
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container"><SectionHeading title="How Shopping Works" text="A simple local shop experience for quick visits and everyday top-ups." /></div></section>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], index) => <ProcessStep key={title} number={index + 1} title={title} text={text} />)}
        </div>
        <p className="container mt-8 rounded-md bg-mist p-5 text-center font-bold text-slateText">For age-restricted products, valid ID may be required and sales are in store only.</p>
      </section>
    </>
  );
}
