import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { GlobalSectors } from "@/components/pages/GlobalSectors";
import { GLOBAL_META } from "@/data/regions";

export const metadata: Metadata = {
  title: "Sectors — Industry Expertise",
  description: "C4Sec focuses on regulated and high-growth sectors — banking, payments, digital assets, digital ID, automotive and technology.",
};

export default function Page() {
  return (
    <Shell regionSlug="" regionName={GLOBAL_META.name} regionFlag={GLOBAL_META.flag} locales={GLOBAL_META.locales} defaultLocale={GLOBAL_META.defaultLocale}>
      <GlobalSectors />
    </Shell>
  );
}
