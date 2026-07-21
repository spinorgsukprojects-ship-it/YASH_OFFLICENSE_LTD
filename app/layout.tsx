import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { company, legalDisclaimer, siteUrl } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yashofflicense LTD | Business Licensing and Application Support UK",
    template: "%s | Yashofflicense LTD"
  },
  description:
    "Professional administrative support for business licence applications, renewals, documentation, and compliance processes across the UK.",
  openGraph: {
    title: "Yashofflicense LTD",
    description: "Business licensing and application support across the UK.",
    url: siteUrl,
    siteName: "Yashofflicense LTD",
    images: [{ url: "/images/administration-support-hero.png", width: 1600, height: 916, alt: "Business administration documents on a modern office desk" }],
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashofflicense LTD",
    description: "Professional administrative support for business applications and licensing processes."
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
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
      <body className="bg-white text-navy antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
