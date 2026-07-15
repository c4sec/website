"use client";

import * as React from "react";
import { I18nProvider } from "./I18nProvider";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollReveal } from "./ScrollReveal";
import type { Locale, Localized } from "@/i18n/config";

// Client shell that provides i18n context and renders the region-aware
// header/footer around page content. Used by both the global site and the
// dynamic country sites.
export function Shell({
  regionSlug,
  regionName,
  regionFlag,
  locales,
  defaultLocale,
  children,
}: {
  regionSlug: string;
  regionName: Localized;
  regionFlag: string;
  locales: Locale[];
  defaultLocale: Locale;
  children: React.ReactNode;
}) {
  return (
    <I18nProvider locales={locales} defaultLocale={defaultLocale} scope={regionSlug || "global"}>
      <Header regionSlug={regionSlug} regionName={regionName} regionFlag={regionFlag} />
      <main>{children}</main>
      <Footer regionSlug={regionSlug} />
      <ScrollReveal />
    </I18nProvider>
  );
}
