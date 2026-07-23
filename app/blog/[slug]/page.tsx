import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` } };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="section bg-cream">
        <div className="container max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 font-bold text-burgundy"><ArrowLeft size={18} /> Back to Customer Notes</Link>
          <p className="eyebrow mt-8">Store Guide</p>
          <h1 className="mt-5 font-heading text-4xl font-black md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-8 text-slateText">{post.description}</p>
        </div>
      </section>
      <article className="section">
        <div className="container max-w-3xl space-y-6 text-lg leading-8 text-slateText">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="rounded-md bg-mist p-5 font-bold text-emerald-950">
            Product availability, opening hours and offers can change. Please call or visit the store to confirm current details.
          </p>
        </div>
      </article>
    </>
  );
}
