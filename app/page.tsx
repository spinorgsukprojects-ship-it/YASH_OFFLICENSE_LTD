import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Beer, CheckCircle2, Clock, MapPin, Phone, ShoppingBasket, Sparkles, type LucideIcon } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { company, legalDisclaimer, storeIntro } from "@/data/company";
import { choiceFeatures, services } from "@/data/services";

const highlights = [
  "Chilled wines, beers and soft drinks",
  "Snacks, sweets and confectionery",
  "Milk, bread, groceries and daily basics",
  "Friendly local service with quick checkout"
];

const offers: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Weekend Drinks", text: "Pick up chilled beers, wines, mixers and snacks in one easy local stop.", icon: Beer },
  { title: "Daily Essentials", text: "Top up on milk, bread, toiletries, household basics and grab-and-go food.", icon: ShoppingBasket },
  { title: "New Arrivals", text: "Ask in store about new drinks, sweets and seasonal favourites.", icon: BadgePercent },
  { title: "Open Late", text: "Convenient hours for after-work shops, evenings and last-minute plans.", icon: Clock }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <Image src="/images/off-licence-hero.png" alt="Modern off licence and convenience store interior with chilled drinks and shelves" fill priority className="object-cover opacity-70" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/82 to-emerald-950/18" />
        <div className="container relative grid min-h-[680px] items-center py-20">
          <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="eyebrow border-white/20 bg-white/10 text-white"><Sparkles size={17} /> Local food, wine & convenience store</p>
            <h1 className="mt-6 font-heading text-4xl font-black md:text-6xl">Yash Off Licence</h1>
            <p className="mt-5 max-w-2xl text-xl font-extrabold text-gold md:text-2xl">Your nearby stop for chilled drinks, snacks, groceries and everyday essentials.</p>
            <p className="mt-5 text-lg leading-8 text-emerald-50 md:text-xl">{storeIntro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/services">Shop Products <ArrowRight size={18} /></Link>
              <a className="btn bg-white text-emerald-950 hover:bg-cream" href={company.directionsUrl}>Get Directions</a>
              <a className="btn bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15" href={company.telHref}><Phone size={18} /> Call Store</a>
            </div>
            <p className="mt-6 text-sm font-bold text-emerald-50/80">18+ only for alcohol, tobacco and vape products. ID may be required.</p>
          </MotionDiv>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div className="card flex gap-3 p-5" key={item}>
              <CheckCircle2 className="shrink-0 text-green" />
              <span className="font-extrabold">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Why visit" title="Everything You Need From a Proper Local Shop" text="Inspired by the best neighbourhood convenience stores, Yash Off Licence is built around quick visits, tidy shelves, helpful service and products customers actually need day to day." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {choiceFeatures.map((feature) => (
                <div key={feature} className="rounded-md border border-emerald-950/10 bg-mist p-4 font-heading text-lg font-black">{feature}</div>
              ))}
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <ImageCard src="/images/drinks-selection.png" alt="Wine, beer, spirits and soft drinks selection" title="Drinks for Every Plan" />
            <ImageCard src="/images/groceries-snacks.png" alt="Convenience store snacks, groceries and chilled items" title="Essentials Close By" />
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading title="What You Can Find In Store" text="Product availability changes, but these are the ranges customers can usually ask us about." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Popular Reasons To Pop In" text="Whether it is a full basket or one item you forgot, the shop is set up for easy local convenience." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {offers.map(({ title, text, icon: Icon }) => (
              <article key={title} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-burgundy text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 font-heading text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-slateText">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-emerald-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow border-white/20 bg-white/10 text-white"><Clock size={17} /> Opening hours</p>
            <h2 className="mt-4 font-heading text-3xl font-black md:text-5xl">Open for Everyday Top-Ups and Late Local Shops</h2>
            <p className="mt-5 leading-8 text-emerald-50/80">{legalDisclaimer}</p>
          </div>
          <div className="rounded-md bg-white p-6 text-emerald-950 shadow-soft">
            <div className="space-y-4">
              {company.hours.map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between gap-4 border-b border-emerald-950/10 pb-4 last:border-0 last:pb-0">
                  <span className="font-extrabold">{day}</span>
                  <span className="text-right font-heading text-lg font-black text-burgundy">{hours}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={company.telHref}><Phone size={18} /> Call Us</a>
              <a className="btn btn-secondary" href={company.directionsUrl}><MapPin size={18} /> Directions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ImageCard({ src, alt, title }: { src: string; alt: string; title: string }) {
  return (
    <figure className="overflow-hidden rounded-md bg-emerald-950 shadow-soft">
      <Image src={src} alt={alt} width={900} height={700} className="aspect-[4/3] w-full object-cover" />
      <figcaption className="p-5 font-heading text-xl font-black text-white">{title}</figcaption>
    </figure>
  );
}
