import { CheckCircle2 } from "lucide-react";

export function FeatureCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="card p-6">
      <CheckCircle2 className="text-green" aria-hidden />
      <h3 className="mt-4 font-heading text-xl font-extrabold">{title}</h3>
      <p className="mt-2 leading-7 text-slateText">{text}</p>
    </article>
  );
}
