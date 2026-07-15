"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "./I18nProvider";
import { Icon } from "./Icon";
import { LOCALE_META, type Localized } from "@/i18n/config";
import { REGION_LINKS } from "@/data/regions";

export function Header({
  regionSlug,
  regionName,
  regionFlag,
}: {
  regionSlug: string;
  regionName: Localized;
  regionFlag: string;
}) {
  const { t, locale, setLocale, locales, L } = useI18n();
  const pathname = usePathname() || "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [regionOpen, setRegionOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const target = e.target as Node;
      if (regionRef.current && !regionRef.current.contains(target)) setRegionOpen(false);
      if (langRef.current && !langRef.current.contains(target)) setLangOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const base = regionSlug ? `/${regionSlug}` : "";
  const home = base || "/";
  const nav = regionSlug
    ? [
        ["nav.home", home],
        ["nav.services", `${base}/services`],
        ["nav.contact", `${base}/contact`],
      ]
    : [
        ["nav.home", "/"],
        ["nav.about", "/about"],
        ["nav.services", "/services"],
        ["nav.sectors", "/sectors"],
        ["nav.contact", "/contact"],
      ];

  const isActive = (href: string) =>
    href === "/" || href === home ? pathname === href : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className={`header${menuOpen ? " menu-open" : ""}`}>
      <div className="container nav">
        <Link href={home} className="brand" aria-label="C4Sec home">
          <img src="/c4sec-logo.png" alt="C4Sec — Consulting4Sec" className="brand__logo" />
          <span className="brand__divider" />
          <span className="brand__region">
            <span className="brand__region-flag">{regionFlag}</span>
            <span>{L(regionName)}</span>
          </span>
        </Link>

        <nav>
          <ul className="menu">
            {nav.map(([key, href]) => (
              <li key={href}>
                <Link href={href} className={isActive(href) ? "active" : undefined} onClick={() => setMenuOpen(false)}>
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__right">
          {/* Region switcher */}
          <div className={`region${regionOpen ? " open" : ""}`} ref={regionRef}>
            <button
              className="region__btn"
              aria-label="Change region"
              onClick={() => {
                setRegionOpen((v) => !v);
                setLangOpen(false);
              }}
            >
              <Icon name="globe" size={15} />
              <span className="region__cur">{regionFlag}</span>
              <Icon name="chevron" size={13} className="region__chev" />
            </button>
            <div className="region__menu">
              <div className="region__label">{t("region.label")}</div>
              {REGION_LINKS.map((r) => {
                const active = r.slug === regionSlug;
                const href = r.slug ? `/${r.slug}` : "/";
                if (r.status === "soon") {
                  return (
                    <span key={r.slug || "global"} className="region__opt region__opt--soon">
                      <span className="region__flag">{r.flag}</span>
                      <span>{L(r.name)}</span>
                      <span className="region__soon">{t("region.soon")}</span>
                    </span>
                  );
                }
                return (
                  <Link key={r.slug || "global"} href={href} className={`region__opt${active ? " active" : ""}`}>
                    <span className="region__flag">{r.flag}</span>
                    <span>{L(r.name)}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Language switcher */}
          {locales.length > 1 && (
            <div className={`lang${langOpen ? " open" : ""}`} ref={langRef}>
              <button
                className="lang__btn"
                aria-label="Change language"
                onClick={() => {
                  setLangOpen((v) => !v);
                  setRegionOpen(false);
                }}
              >
                <span className="lang__current">{locale.toUpperCase()}</span>
                <Icon name="chevron" size={13} className="region__chev" />
              </button>
              <div className="lang__menu">
                {locales.map((l) => (
                  <button
                    key={l}
                    className={l === locale ? "active" : undefined}
                    onClick={() => {
                      setLocale(l);
                      setLangOpen(false);
                    }}
                  >
                    <span className="lang__flag">{LOCALE_META[l].flag}</span>
                    {LOCALE_META[l].label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Link href={`${base}/contact`} className="btn btn--dark">
            {t("nav.cta")}
          </Link>
          <button className="burger" aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
