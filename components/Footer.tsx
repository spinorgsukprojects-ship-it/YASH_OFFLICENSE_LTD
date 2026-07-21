import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-heading text-2xl font-extrabold">Yashofflicense LTD</h2>
          <p className="mt-4 leading-7 text-slate-300">
            Professional administrative support for business applications, licensing processes, renewals, and documentation.
          </p>
          <p className="mt-4 text-sm font-bold text-slate-300">Company Number: {company.number}</p>
        </div>
        <FooterLinks title="Quick Links" links={[["Home", "/"], ["About", "/about"], ["Services", "/services"], ["How It Works", "/how-it-works"], ["FAQ", "/faq"], ["Contact", "/contact"]]} />
        <FooterLinks title="Company" links={[["Company Information", "/company-information"], ["Privacy Policy", "/privacy-policy"], ["Terms and Conditions", "/terms-and-conditions"], ["Cookie Policy", "/cookie-policy"], ["Disclaimer", "/disclaimer"]]} />
        <div>
          <h3 className="font-heading text-lg font-extrabold">Contact</h3>
          <div className="mt-4 space-y-3 text-slate-300">
            <a href={company.telHref} className="flex gap-3 hover:text-white"><Phone size={18} /> {company.phone}</a>
            <a href={company.mailHref} className="flex break-all gap-3 hover:text-white"><Mail size={18} /> {company.email}</a>
            <p className="flex gap-3"><MapPin size={18} className="shrink-0" /> {company.shortAddress}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-300">
        © 2026 Yashofflicense LTD. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-heading text-lg font-extrabold">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link className="text-slate-300 hover:text-white" href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
