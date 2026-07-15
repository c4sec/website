import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { GlobalContact } from "@/components/pages/GlobalContact";
import { GLOBAL_META } from "@/data/regions";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach a C4Sec managing partner in the UK, Türkiye, Azerbaijan, UAE, Germany or Ireland.",
};

export default function Page() {
  return (
    <Shell regionSlug="" regionName={GLOBAL_META.name} regionFlag={GLOBAL_META.flag} locales={GLOBAL_META.locales} defaultLocale={GLOBAL_META.defaultLocale}>
      <GlobalContact />
    </Shell>
  );
}
