import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="card flex h-full flex-col p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-royal text-white">
        <Icon aria-hidden size={24} />
      </div>
      <h3 className="mt-5 font-heading text-xl font-extrabold">{service.title}</h3>
      <p className="mt-3 flex-1 leading-7 text-slateText">{service.shortDescription}</p>
      <Link className="mt-5 inline-flex items-center gap-2 font-extrabold text-royal" href={`/services/${service.slug}`}>
        Learn More <ArrowRight size={18} />
      </Link>
    </article>
  );
}
