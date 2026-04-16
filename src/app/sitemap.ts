import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { allLocations, unitSizes } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/units",
    "/features",
    "/about",
    "/faq",
    "/contact",
    "/rent",
    "/legal/terms",
    "/legal/privacy",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const loc of allLocations) {
    entries.push({
      url: `${base}/locations/${loc.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    });
  }

  for (const unit of unitSizes) {
    entries.push({
      url: `${base}/units/${unit.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
