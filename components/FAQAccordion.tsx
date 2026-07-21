"use client";

import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/data/faqs";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details key={item.question} className="card group p-5" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-extrabold">
            {item.question}
            <ChevronDown className="shrink-0 transition group-open:rotate-180" aria-hidden />
          </summary>
          <p className="mt-4 leading-7 text-slateText">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
