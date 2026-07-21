import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "General information articles about documents, applications, renewals, and business administration.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  return (
    <>
      <section className="section bg-mist"><div className="container"><SectionHeading title="Business Support Blog" text="General information for people preparing documents, tracking renewals, and managing administrative processes." /></div></section>
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article className="card flex flex-col p-6" key={post.slug}>
              <p className="text-sm font-bold text-green">General Information</p>
              <h2 className="mt-3 font-heading text-2xl font-extrabold">{post.title}</h2>
              <p className="mt-3 flex-1 leading-7 text-slateText">{post.description}</p>
              <Link className="mt-5 inline-flex items-center gap-2 font-extrabold text-royal" href={`/blog/${post.slug}`}>Read Article <ArrowRight size={18} /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
