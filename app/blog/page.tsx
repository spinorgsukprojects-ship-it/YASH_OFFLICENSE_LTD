import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Customer Notes",
  description: "Customer information about local off-licence and convenience store shopping.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  return (
    <>
      <section className="section bg-cream"><div className="container"><SectionHeading title="Customer Notes" text="Simple ideas for quick local shopping, weekend plans and everyday convenience." /></div></section>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article className="card flex flex-col p-6" key={post.slug}>
              <p className="text-sm font-bold text-green">Store Guide</p>
              <h2 className="mt-3 font-heading text-2xl font-black">{post.title}</h2>
              <p className="mt-3 flex-1 leading-7 text-slateText">{post.description}</p>
              <Link className="mt-5 inline-flex items-center gap-2 font-extrabold text-burgundy" href={`/blog/${post.slug}`}>Read Note <ArrowRight size={18} /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
