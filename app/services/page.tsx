import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse wines, beers, spirits, soft drinks, snacks, groceries, tobacco, vape and everyday essentials available in store.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-cream">
        <div className="container">
          <SectionHeading title="Products In Store" text="A customer-friendly local shop for drinks, snacks, groceries, chilled food and everyday essentials." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <p className="mt-10 rounded-md bg-mist p-5 font-bold text-slateText">{legalDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
