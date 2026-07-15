import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { GlobalAbout } from "@/components/pages/GlobalAbout";
import { GLOBAL_META } from "@/data/regions";

export const metadata: Metadata = {
  title: "About — The firm behind your compliance",
  description: "An international GRC advisory structured as a global partnership — managing partners, country representations and one shared standard of quality.",
};

export default function Page() {
  return (
    <Shell regionSlug="" regionName={GLOBAL_META.name} regionFlag={GLOBAL_META.flag} locales={GLOBAL_META.locales} defaultLocale={GLOBAL_META.defaultLocale}>
      <GlobalAbout />
    </Shell>
  );
}
