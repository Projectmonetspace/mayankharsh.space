import type { MetadataRoute } from "next";
import { publishedRoutes, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return publishedRoutes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.6,
  }));
}
