import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-heading text-2xl font-black">Yash Off Licence</h2>
          <p className="mt-4 leading-7 text-emerald-50/80">
            Your local shop for wines, beers, spirits, chilled drinks, snacks, groceries and everyday essentials.
          </p>
          <p className="mt-4 text-sm font-bold text-emerald-50/80">Company Number: {company.number}</p>
        </div>
        <FooterLinks title="Shop" links={[["Home", "/"], ["Products", "/services"], ["About", "/about"], ["FAQ", "/faq"], ["Contact", "/contact"]]} />
        <FooterLinks title="Information" links={[["Company Information", "/company-information"], ["Privacy Policy", "/privacy-policy"], ["Terms and Conditions", "/terms-and-conditions"], ["Cookie Policy", "/cookie-policy"], ["Disclaimer", "/disclaimer"]]} />
        <div>
          <h3 className="font-heading text-lg font-black">Visit Us</h3>
          <div className="mt-4 space-y-3 text-emerald-50/80">
            <a href={company.telHref} className="flex gap-3 hover:text-white"><Phone size={18} /> {company.phone}</a>
            <a href={company.mailHref} className="flex break-all gap-3 hover:text-white"><Mail size={18} /> {company.email}</a>
            <p className="flex gap-3"><MapPin size={18} className="shrink-0" /> {company.shortAddress}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-emerald-50/70">
        © 2026 {company.registeredName}. Alcohol and age-restricted products are available in store only to customers aged 18+.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-black">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link className="text-emerald-50/80 hover:text-white" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
