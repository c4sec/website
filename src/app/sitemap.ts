import type { MetadataRoute } from "next";
import { REGIONS } from "@/data/regions";
import { SERVICES, slugify } from "@/data/services";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.domain;
  const globalPages = ["", "/about", "/services", "/sectors", "/contact"];
  const entries: MetadataRoute.Sitemap = globalPages.map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.8,
  }));

  for (const s of SERVICES) {
    entries.push({ url: `${base}/services/${s.slug}`, changeFrequency: "monthly", priority: 0.6 });
  }

  for (const r of REGIONS) {
    for (const p of ["", "/services", "/contact"]) {
      entries.push({ url: `${base}/${r.slug}${p}`, changeFrequency: "monthly", priority: 0.7 });
    }
    const regionSlugs = [...r.localServices.map((s) => slugify(s.title.en)), ...SERVICES.map((s) => s.slug)];
    for (const slug of regionSlugs) {
      entries.push({ url: `${base}/${r.slug}/services/${slug}`, changeFrequency: "monthly", priority: 0.5 });
    }
  }
  return entries;
}
