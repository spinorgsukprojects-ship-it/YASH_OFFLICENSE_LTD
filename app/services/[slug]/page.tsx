import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { getService, services } from "@/data/services";
import { legalDisclaimer } from "@/data/company";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="section bg-cream">
        <div className="container">
          <Link href="/services" className="inline-flex items-center gap-2 font-bold text-burgundy"><ArrowLeft size={18} /> Back to Products</Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-md bg-burgundy text-white"><Icon size={36} /></div>
            <SectionHeading align="left" title={service.title} text={service.overview} />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-3">
          <InfoList title="Good For" items={service.suitableFor} />
          <InfoList title="You May Find" items={service.includes} />
          <InfoList title="Helpful Notes" items={service.customerInfo} />
        </div>
      </section>
      <section className="section bg-mist">
        <div className="container grid gap-10 lg:grid-cols-2">
          <InfoList title="How Shopping Works" items={service.process} numbered />
          <div>
            <h2 className="font-heading text-3xl font-black">Customer FAQ</h2>
            <div className="mt-6"><FAQAccordion items={faqs.slice(0, 4)} /></div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container rounded-md bg-emerald-950 p-8 text-white md:p-10">
          <h2 className="font-heading text-3xl font-black">Need to Check Stock?</h2>
          <p className="mt-4 max-w-3xl leading-8 text-emerald-50/80">{legalDisclaimer}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/contact">Contact Store <ArrowRight size={18} /></Link>
            <Link className="btn bg-white text-emerald-950 hover:bg-cream" href="/services">Browse Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoList({ title, items, numbered = false }: { title: string; items: string[]; numbered?: boolean }) {
  const List = numbered ? "ol" : "ul";
  return (
    <div className="card p-6">
      <h2 className="font-heading text-2xl font-black">{title}</h2>
      <List className={`mt-5 space-y-3 text-slateText ${numbered ? "list-decimal pl-5" : ""}`}>
        {items.map((item) => <li key={item} className="leading-7">{item}</li>)}
      </List>
    </div>
  );
}
