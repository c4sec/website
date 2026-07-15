import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { RegionHome } from "@/components/pages/RegionPages";
import { REGIONS, getRegion } from "@/data/regions";

export const dynamicParams = false;

export function generateStaticParams() {
  return REGIONS.map((r) => ({ region: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ region: string }> }): Promise<Metadata> {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) return {};
  return {
    title: `C4Sec ${r.name.en} — GRC & Compliance Advisory`,
    description: r.hero.sub.en,
  };
}

export default async function Page({ params }: { params: Promise<{ region: string }> }) {
  const { region } = await params;
  const r = getRegion(region);
  if (!r) notFound();
  return (
    <Shell regionSlug={r.slug} regionName={r.name} regionFlag={r.flag} locales={r.locales} defaultLocale={r.defaultLocale}>
      <RegionHome region={r} />
    </Shell>
  );
}
