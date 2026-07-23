"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/data/company";

const nav = [
  ["Home", "/"],
  ["Products", "/services"],
  ["About", "/about"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-white/92 backdrop-blur">
      <div className="bg-burgundy py-2 text-sm font-bold text-white">
        <div className="container flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-between">
          <span className="inline-flex items-center gap-2"><Clock size={16} /> Open late for drinks, treats and essentials</span>
          <a className="inline-flex items-center gap-2 hover:text-gold" href={company.telHref}><Phone size={16} /> {company.phone}</a>
        </div>
      </div>
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="leading-tight" onClick={() => setOpen(false)}>
          <span className="block font-heading text-2xl font-black tracking-normal text-emerald-950">Yash Off Licence</span>
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-burgundy">Food • Wine • Essentials</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-sm font-extrabold transition hover:bg-cream ${pathname === href ? "text-burgundy" : "text-emerald-950"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link className="btn btn-primary" href="/contact">Visit / Call</Link>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-emerald-950/15 bg-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-emerald-950/10 bg-cream lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md px-3 py-3 font-extrabold text-emerald-950 hover:bg-white" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a className="rounded-md px-3 py-3 font-extrabold text-burgundy hover:bg-white" href={company.telHref}>{company.phone}</a>
            <a className="rounded-md px-3 py-3 font-extrabold text-burgundy hover:bg-white" href={company.mailHref}>{company.email}</a>
            <Link className="btn btn-primary mt-2" href="/contact" onClick={() => setOpen(false)}>Visit / Call</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
