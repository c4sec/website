// Supported locales across the C4Sec network.
// en/tr/az are fully translated; de/ar are reserved for the German & Dubai
// markets and currently fall back to English until their copy is authored.
export const LOCALES = ["en", "tr", "az", "de", "ar"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; flag: string; dir: "ltr" | "rtl" }> = {
  en: { label: "English", flag: "🇬🇧", dir: "ltr" },
  tr: { label: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  az: { label: "Azərbaycan", flag: "🇦🇿", dir: "ltr" },
  de: { label: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  ar: { label: "العربية", flag: "🇦🇪", dir: "rtl" },
};

// A value that may be provided in several languages. `en` is always required
// so there is a guaranteed fallback.
export type Localized<T = string> = { en: T } & Partial<Record<Locale, T>>;

// Resolve a localized value for the active locale, falling back to English.
export function tr<T>(value: Localized<T>, locale: Locale): T {
  return (value[locale] ?? value.en) as T;
}
