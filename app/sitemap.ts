import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map(path => ({ url: `${site.url}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.3 : 1 }));
}
