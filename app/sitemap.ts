import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/solutions", "/pricing", "/how-it-works", "/support", "/get-started", "/privacy", "/terms"].map((path) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.7 }));
}
