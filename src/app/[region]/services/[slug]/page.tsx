import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { ServiceView } from "@/components/pages/ServiceView";
import { REGIONS, getRegion, type Region } from "@/data/regions";
import { SERVICES, getService, slugify } from "@/data/services";

export const dynamicParams = false;

// Valid service slugs within a region: its local services + the global catalog.
function slugsForRegion(r: Region): string[] {
  return [...r.localServices.map((s) => slugify(s.title.en)), ...SERVICES.map((s) => s.slug)];
}

export function generateStaticParams() {
  const params: { region: string; slug: string }[] = [];
  for (const r of REGIONS) {
    for (const slug of slugsForRegion(r)) {
      params.push({ region: r.slug, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ region: string; slug: string }> }): Promise<Metadata> {
  const { region, slug } = await params;
  const r = getRegion(region);
  if (!r) return {};
  const local = r.localServices.find((s) => slugify(s.title.en) === slug);
  const g = getService(slug);
  const title = local ? local.title.en : g?.title;
  if (!title) return {};
  return { title: `${title} — C4Sec ${r.name.en}`, description: local ? local.desc.en : g?.tagline };
}

export default async function Page({ params }: { params: Promise<{ region: string; slug: string }> }) {
  const { region, slug } = await params;
  const r = getRegion(region);
  if (!r) notFound();
  if (!slugsForRegion(r).includes(slug)) notFound();
  return (
    <Shell regionSlug={r.slug} regionName={r.name} regionFlag={r.flag} locales={r.locales} defaultLocale={r.defaultLocale}>
      <ServiceView regionSlug={r.slug} slug={slug} />
    </Shell>
  );
}
