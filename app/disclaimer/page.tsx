import type { Metadata } from "next";
import { legalDisclaimer } from "@/data/company";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important disclaimer for Yash Off Licence store information and age-restricted products.",
  alternates: { canonical: "/disclaimer" }
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-black md:text-5xl">Disclaimer</h1></div></section>
      <section className="section">
        <div className="container prose-policy max-w-4xl">
          <p className="rounded-md bg-mist p-5 font-bold text-emerald-950">{legalDisclaimer}</p>
          <h2>Product Availability</h2>
          <p>Products, prices, offers and opening hours may change without notice. Please call or visit the store to confirm current availability.</p>
          <h2>Age-Restricted Products</h2>
          <p>Alcohol, tobacco, vape and other restricted items are available in store only to eligible customers. Valid identification may be requested before sale.</p>
          <h2>Website Information</h2>
          <p>Information on this website is provided for general customer convenience and should not be treated as a live stock list or guaranteed offer.</p>
        </div>
      </section>
    </>
  );
}
