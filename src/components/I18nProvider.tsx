"use client";

import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { LOCALE_META, type Locale, type Localized } from "@/i18n/config";
import { makeT } from "@/i18n/dictionaries";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  locales: Locale[];
  t: (key: string) => string;
  L: <T>(v: Localized<T>) => T;
};

const I18nContext = createContext<Ctx | null>(null);

export function useI18n(): Ctx {
  const c = useContext(I18nContext);
  if (!c) throw new Error("useI18n must be used within I18nProvider");
  return c;
}

export function I18nProvider({
  locales,
  defaultLocale,
  children,
}: {
  locales: Locale[];
  defaultLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("c4sec_lang") as Locale | null;
      if (saved && locales.includes(saved)) setLocaleState(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = LOCALE_META[locale]?.dir || "ltr";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("c4sec_lang", l);
    } catch {}
  };

  const t = makeT(locale);
  const L = <T,>(v: Localized<T>): T => (v[locale] ?? v.en) as T;

  return (
    <I18nContext.Provider value={{ locale, setLocale, locales, t, L }}>
      {children}
    </I18nContext.Provider>
  );
}
