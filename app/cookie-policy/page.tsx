import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie information for the Yashofflicense LTD website.",
  alternates: { canonical: "/cookie-policy" }
};

export default function CookiePolicyPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container max-w-4xl"><h1 className="font-heading text-4xl font-extrabold md:text-5xl">Cookie Policy</h1></div></section>
      <section className="section">
        <div className="container prose-policy max-w-4xl">
          <p>This website uses essential functionality needed for the site to work properly. A small local preference may be stored when you accept the cookie notice.</p>
          <h2>Essential Cookies and Local Storage</h2>
          <p>Essential technologies may support navigation, security, form submission, and cookie consent preference storage.</p>
          <h2>Analytics and Marketing Cookies</h2>
          <p>No analytics or marketing cookies are intentionally set by this implementation. If these are added later, this policy should be updated.</p>
          <h2>Managing Cookies</h2>
          <p>You can manage or clear cookies and local storage through your browser settings.</p>
        </div>
      </section>
    </>
  );
}
