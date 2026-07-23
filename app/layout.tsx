import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { company, legalDisclaimer, siteUrl, storeIntro } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yash Off Licence | Food, Wine & Convenience Store",
    template: "%s | Yash Off Licence"
  },
  description: storeIntro,
  openGraph: {
    title: "Yash Off Licence",
    description: storeIntro,
    url: siteUrl,
    siteName: "Yash Off Licence",
    images: [{ url: "/images/off-licence-hero.png", width: 1600, height: 916, alt: "Modern off licence and convenience store interior" }],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Off Licence",
    description: storeIntro
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: company.tradingName,
    legalName: company.registeredName,
    email: company.email,
    telephone: company.phone,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: "100 Charter House, Ebony Close",
      addressLocality: "Colchester",
      addressRegion: "Essex",
      postalCode: "CO2 9LX",
      addressCountry: "GB"
    },
    description: legalDisclaimer
  };

  return (
    <html lang="en-GB">
      <body className="bg-white text-emerald-950 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
