import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CompanyDetails } from "@/components/CompanyDetails";
import { legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Yash Off Licence, a local food, wine and convenience store.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-cream">
        <div className="container">
          <SectionHeading title="About Yash Off Licence" text="A local shop built for quick, friendly and reliable everyday convenience." />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-lg leading-8 text-slateText">
            <p>Yash Off Licence is designed around the way customers actually shop: a chilled drink after work, milk on the way home, snacks for the evening, or a quick stop for household basics.</p>
            <p className="font-bold text-emerald-950">Our focus is simple: tidy shelves, useful products, fair local convenience and friendly service when customers need help finding something.</p>
            <p>We stock drinks, groceries, snacks, chilled items, tobacco and vape products, and everyday essentials. Availability changes, so customers are welcome to call ahead before making a special trip.</p>
            <p className="rounded-md bg-mist p-5 font-bold text-emerald-950">{legalDisclaimer}</p>
          </div>
          <Image src="/images/groceries-snacks.png" alt="Convenience store groceries and snacks display" width={900} height={700} className="rounded-md object-cover shadow-soft" />
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container max-w-4xl"><CompanyDetails /></div>
      </section>
    </>
  );
}
