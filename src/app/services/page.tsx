import type { Metadata } from "next";
import { Shell } from "@/components/Shell";
import { GlobalServices } from "@/components/pages/GlobalServices";
import { GLOBAL_META } from "@/data/regions";

export const metadata: Metadata = {
  title: "Services — Consulting, Training & Audit",
  description: "Comprehensive GRC services across information security, business continuity, data protection, DORA, SOC 2 and the Cyber Resilience Act.",
};

export default function Page() {
  return (
    <Shell regionSlug="" regionName={GLOBAL_META.name} regionFlag={GLOBAL_META.flag} locales={GLOBAL_META.locales} defaultLocale={GLOBAL_META.defaultLocale}>
      <GlobalServices />
    </Shell>
  );
}
