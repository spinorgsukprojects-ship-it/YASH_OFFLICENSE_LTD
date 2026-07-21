import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { siteUrl } from "@/data/company";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/how-it-works", "/faq", "/blog", "/contact", "/company-information", "/privacy-policy", "/terms-and-conditions", "/cookie-policy", "/disclaimer"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date("2026-07-21") })),
    ...services.map((service) => ({ url: `${siteUrl}/services/${service.slug}`, lastModified: new Date("2026-07-21") })),
    ...posts.map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: new Date("2026-07-21") }))
  ];
}
