import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { supportDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Services",
  description: "Business licence application support, renewal support, document preparation, compliance administration, and general business support.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <section className="section bg-mist">
        <div className="container">
          <SectionHeading title="Professional Support Services" text="Editable service content for licensing-related applications, renewals, documents, compliance administration, and general business support." />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
          <p className="mt-10 rounded-md bg-mist p-5 font-bold text-slateText">{supportDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
