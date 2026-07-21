"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/data/company";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["How It Works", "/how-it-works"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/94 backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="font-heading text-xl font-extrabold text-navy" onClick={() => setOpen(false)}>
          Yashofflicense <span className="text-royal">LTD</span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`rounded-md px-3 py-2 text-sm font-bold transition hover:bg-mist ${pathname === href ? "text-royal" : "text-navy"}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a className="inline-flex items-center gap-2 text-sm font-bold text-navy" href={company.telHref}>
            <Phone size={17} /> {company.phone}
          </a>
          <Link className="btn btn-primary" href="/contact">Get Support</Link>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container flex flex-col gap-1 py-4" aria-label="Mobile navigation">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md px-3 py-3 font-bold text-navy hover:bg-mist" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a className="rounded-md px-3 py-3 font-bold text-royal hover:bg-mist" href={company.telHref}>{company.phone}</a>
            <a className="rounded-md px-3 py-3 font-bold text-royal hover:bg-mist" href={company.mailHref}>{company.email}</a>
            <Link className="btn btn-primary mt-2" href="/contact" onClick={() => setOpen(false)}>Get Support</Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
