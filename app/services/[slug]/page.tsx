import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/faqs";
import { getService, services } from "@/data/services";
import { legalDisclaimer } from "@/data/company";

const galleries: Record<string, { src: string; title: string }[]> = {
  "wines-beers-spirits": [
    { src: "/images/chilled-drinks-gallery.png", title: "Chilled wine, beer and mixers" },
    { src: "/images/detail-chilled-drinks.png", title: "Cold beers and cans" },
    { src: "/images/drinks-selection.png", title: "Wine and spirits shelves" },
    { src: "/images/off-licence-hero.png", title: "Bright store drinks wall" }
  ],
  "snacks-confectionery": [
    { src: "/images/confectionery-gallery.png", title: "Colourful confectionery" },
    { src: "/images/detail-sweets-treats.png", title: "Sweets and sharing snacks" },
    { src: "/images/groceries-snacks.png", title: "Snacks and everyday treats" }
  ],
  "groceries-essentials": [
    { src: "/images/detail-daily-essentials.png", title: "Fresh daily essentials" },
    { src: "/images/groceries-snacks.png", title: "Groceries and household basics" },
    { src: "/images/off-licence-hero.png", title: "Clean local convenience store" }
  ]
};

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
  const gallery = galleries[service.slug] || [
    { src: "/images/off-licence-hero.png", title: "Yash Off Licence store" },
    { src: "/images/groceries-snacks.png", title: "Everyday store selection" },
    { src: "/images/chilled-drinks-gallery.png", title: "Chilled drinks display" }
  ];

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
        <div className="container">
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <figure key={image.src} className={`group overflow-hidden rounded-md bg-emerald-950 shadow-soft ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <Image src={image.src} alt={image.title} width={1200} height={900} className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? "aspect-[8/5] md:h-full" : "aspect-[4/3]"}`} />
                <figcaption className="p-4 font-heading text-lg font-black text-white">{image.title}</figcaption>
              </figure>
            ))}
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
