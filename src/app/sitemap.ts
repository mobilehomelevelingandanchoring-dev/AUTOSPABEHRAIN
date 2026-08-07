import type { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES, COVERAGE_AREAS, areaToSlug } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  return [
    // Homepage — highest priority
    {
      url: base,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Individual service pages
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.id}`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),

    // Location landing pages — core local SEO
    ...COVERAGE_AREAS.map((area) => ({
      url: `${base}/car-detailing-${areaToSlug(area)}`,
      lastModified: new Date("2026-08-07"),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
