import { Shell } from "@/components/Shell";
import { GlobalHome } from "@/components/pages/GlobalHome";
import { GLOBAL_META } from "@/data/regions";

export default function Page() {
  return (
    <Shell regionSlug="" regionName={GLOBAL_META.name} regionFlag={GLOBAL_META.flag} locales={GLOBAL_META.locales} defaultLocale={GLOBAL_META.defaultLocale}>
      <GlobalHome />
    </Shell>
  );
}
