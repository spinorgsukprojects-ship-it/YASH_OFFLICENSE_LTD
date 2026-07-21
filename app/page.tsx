import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Phone, ShieldCheck } from "lucide-react";
import { MotionDiv } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { FeatureCard } from "@/components/FeatureCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { company, supportDisclaimer } from "@/data/company";
import { choiceFeatures, services, supportAudiences } from "@/data/services";
import { faqs } from "@/data/faqs";

const steps = [
  ["Tell Us What You Need", "Share the type of application or support required."],
  ["Initial Requirements Review", "We identify the documents and information likely to be needed."],
  ["Preparation and Guidance", "We help organise the application information and supporting documents."],
  ["Submission Support and Follow-Up", "We provide administrative support through the next stages."]
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <Image src="/images/administration-support-hero.png" alt="Business administration documents and application forms in a modern office" fill priority className="object-cover opacity-35" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/30" />
        <div className="container relative grid min-h-[680px] items-center py-20">
          <MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="eyebrow bg-white/10 text-white">UK Business Licensing and Administrative Support</p>
            <h1 className="mt-6 font-heading text-4xl font-extrabold md:text-6xl">Professional Licensing and Application Support for UK Businesses</h1>
            <p className="mt-6 text-lg leading-8 text-slate-100 md:text-xl">
              Yashofflicense LTD helps individuals and businesses understand application requirements, prepare documentation, manage renewals, and navigate administrative processes with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary" href="/contact">Get Support <ArrowRight size={18} /></Link>
              <Link className="btn bg-white text-navy hover:bg-slate-100" href="/contact">Contact Us</Link>
            </div>
            <p className="mt-6 text-sm font-bold text-slate-200">Clear guidance • Professional support • UK-based service</p>
          </MotionDiv>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeading align="left" eyebrow="About" title="Practical Support for Business Applications and Licensing" text="Yashofflicense LTD provides professional administrative support for individuals and businesses completing licence-related applications, renewals, documentation, and compliance processes. Our goal is to make each stage clearer, more organised, and easier to manage." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Clear application guidance", "Organised document support", "Renewal and deadline assistance", "Responsive customer communication"].map((item) => (
              <div className="card flex gap-3 p-5" key={item}><CheckCircle2 className="shrink-0 text-green" /><span className="font-bold">{item}</span></div>
            ))}
          </div>
          <Link className="btn btn-secondary w-fit" href="/about">Learn About Us</Link>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading title="Professional Support Services" text="Practical assistance from initial requirements through submission preparation and ongoing administration." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="A Clear and Simple Process" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, text], index) => <ProcessStep key={title} number={index + 1} title={title} text={text} />)}
          </div>
          <p className="mt-8 text-center font-bold text-slateText">Final approval and processing times are controlled by the relevant authority.</p>
        </div>
      </section>

      <section className="section bg-navy text-white">
        <div className="container">
          <SectionHeading inverse title="Professional Support You Can Rely On" text="Clear, careful assistance for customers who want a more organised application process." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {choiceFeatures.map((feature) => <FeatureCard key={feature} title={feature} text="Support is delivered with a practical, customer-focused approach and careful attention to administrative detail." />)}
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <SectionHeading title="Support for Individuals and Businesses" text="General administrative support for a range of customer types. Service availability should be confirmed directly with Yashofflicense LTD." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportAudiences.map((audience) => <div key={audience} className="card p-5 font-heading text-lg font-extrabold">{audience}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading align="left" title="Frequently Asked Questions" text="Helpful answers about our administrative and application support." />
          <FAQAccordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow"><ShieldCheck size={17} /> Enquiry Support</p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold md:text-5xl">Discuss Your Application or Business Support Needs</h2>
            <p className="mt-4 leading-8 text-slateText">{supportDisclaimer}</p>
          </div>
          <div className="card p-6">
            <p className="font-bold">Phone: <a className="text-royal" href={company.telHref}>{company.phone}</a></p>
            <p className="mt-3 font-bold">Email: <a className="break-all text-royal" href={company.mailHref}>{company.email}</a></p>
            <p className="mt-3 font-bold">Address: <span className="font-normal text-slateText">{company.fullAddress}</span></p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={company.telHref}><Phone size={18} /> Call Us</a>
              <a className="btn btn-secondary" href={company.mailHref}><Mail size={18} /> Email Us</a>
              <Link className="btn btn-secondary" href="/contact">Send an Enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
