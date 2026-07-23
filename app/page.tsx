import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Beer, Clock, Phone, ShoppingBasket, Sparkles, type LucideIcon } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { company, legalDisclaimer } from "@/data/company";
import { services } from "@/data/services";

const quickLinks = [
  "Chilled drinks",
  "Wines & spirits",
  "Fresh essentials",
  "Snacks & sweets"
];

const gallery = [
  { src: "/images/chilled-drinks-gallery.png", title: "Chilled Drinks", text: "Cold beers, wines, mixers and soft drinks.", href: "/services/wines-beers-spirits" },
  { src: "/images/confectionery-gallery.png", title: "Sweets & Treats", text: "Colourful snacks, chocolate and confectionery.", href: "/services/snacks-confectionery" },
  { src: "/images/groceries-snacks.png", title: "Daily Essentials", text: "Groceries, chilled food and household basics.", href: "/services/groceries-essentials" },
  { src: "/images/drinks-selection.png", title: "Wine Selection", text: "Bottles for dinners, gifts and weekends.", href: "/services/wines-beers-spirits" }
];

const moments: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Weekend Plans", text: "Drinks, mixers and sharing snacks.", icon: Beer },
  { title: "Quick Top-Ups", text: "Milk, bread, toiletries and basics.", icon: ShoppingBasket },
  { title: "New Stock", text: "Fresh arrivals and seasonal favourites.", icon: BadgePercent },
  { title: "Open Late", text: "A local stop when plans change.", icon: Clock }
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <Image src="/images/storefront-evening.png" alt="Beautiful off licence storefront at dusk" fill priority className="object-cover opacity-80" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/74 to-emerald-950/18" />
        <div className="container relative grid min-h-[720px] items-center py-20">
          <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="eyebrow border-white/20 bg-white/10 text-white"><Sparkles size={17} /> Local food, wine & convenience</p>
            <h1 className="mt-6 font-heading text-5xl font-black md:text-7xl">Yash Off Licence</h1>
            <p className="mt-5 text-2xl font-black text-gold md:text-3xl">Beautifully stocked. Open late. Close to home.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/services">Explore Store <ArrowRight size={18} /></Link>
              <a className="btn bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/15" href={company.telHref}><Phone size={18} /> Call</a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {quickLinks.map((item) => <span key={item} className="rounded-md bg-white/12 px-3 py-3 text-center text-sm font-black backdrop-blur">{item}</span>)}
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="bg-cream py-5">
        <div className="container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-black uppercase text-emerald-950 md:justify-between">
          <span>Wines</span>
          <span>Beers</span>
          <span>Spirits</span>
          <span>Soft Drinks</span>
          <span>Snacks</span>
          <span>Groceries</span>
          <span>Essentials</span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">In store</p>
            <h2 className="mt-5 font-heading text-4xl font-black md:text-6xl">A Better Looking Local Shop</h2>
            <p className="mt-5 text-lg leading-8 text-slateText">Less searching, more finding. Clean shelves, chilled fridges and everyday favourites ready when you need them.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-[260px_260px]">
            <PhotoTile className="md:col-span-2 md:row-span-2" src="/images/off-licence-hero.png" title="Fresh, Bright, Easy" href="/services" />
            <PhotoTile src="/images/chilled-drinks-gallery.png" title="Chilled Drinks" href="/services/soft-drinks-energy" />
            <PhotoTile src="/images/confectionery-gallery.png" title="Treats" href="/services/snacks-confectionery" />
            <PhotoTile src="/images/drinks-selection.png" title="Wine & Spirits" href="/services/wines-beers-spirits" />
            <PhotoTile src="/images/groceries-snacks.png" title="Essentials" href="/services/groceries-essentials" />
          </div>
        </div>
      </section>

      <section className="section bg-emerald-950 text-white">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow border-white/20 bg-white/10 text-white">Shop by mood</p>
            <h2 className="mt-5 font-heading text-4xl font-black md:text-5xl">Whatever You Came For</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {moments.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-md border border-white/10 bg-white/8 p-5 backdrop-blur">
                <Icon className="text-gold" size={28} />
                <h3 className="mt-5 font-heading text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-emerald-50/75">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {gallery.map((item) => <GalleryCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Image src="/images/storefront-evening.png" alt="Yash Off Licence style storefront at dusk" width={1600} height={916} className="aspect-[16/9] rounded-md object-cover shadow-soft" />
          <div>
            <p className="eyebrow"><Clock size={17} /> Opening hours</p>
            <h2 className="mt-5 font-heading text-4xl font-black md:text-5xl">Open Late for Local Convenience</h2>
            <div className="mt-7 rounded-md bg-cream p-5">
              {company.hours.map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between gap-4 border-b border-emerald-950/10 py-3 first:pt-0 last:border-0 last:pb-0">
                  <span className="font-extrabold">{day}</span>
                  <span className="text-right font-heading text-lg font-black text-burgundy">{hours}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold leading-6 text-slateText">{legalDisclaimer}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={company.telHref}><Phone size={18} /> Call Us</a>
              <Link className="btn btn-secondary" href="/contact">Contact Store</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhotoTile({ src, title, href, className = "" }: { src: string; title: string; href: string; className?: string }) {
  return (
    <Link href={href} className={`group relative min-h-[240px] overflow-hidden rounded-md bg-emerald-950 shadow-soft ${className}`}>
      <Image src={src} alt={title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 768px) 50vw, 100vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/78 via-emerald-950/10 to-transparent" />
      <span className="absolute bottom-5 left-5 font-heading text-2xl font-black text-white">{title}</span>
    </Link>
  );
}

function GalleryCard({ src, title, text, href }: { src: string; title: string; text: string; href: string }) {
  return (
    <Link href={href} className="group overflow-hidden rounded-md bg-white shadow-soft">
      <Image src={src} alt={title} width={900} height={700} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="p-5">
        <h3 className="font-heading text-xl font-black">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slateText">{text}</p>
      </div>
    </Link>
  );
}
