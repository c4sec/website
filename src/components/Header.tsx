"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "./I18nProvider";
import { Icon, type IconName } from "./Icon";
import { LOCALE_META, type Localized } from "@/i18n/config";
import { REGION_LINKS, getRegion } from "@/data/regions";
import { CATEGORIES, servicesByCategory, slugify } from "@/data/services";

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const target = e.target as Node;
      if (regionRef.current && !regionRef.current.contains(target)) setRegionOpen(false);
      if (langRef.current && !langRef.current.contains(target)) setLangOpen(false);
      if (servicesRef.current && !servicesRef.current.contains(target)) setServicesOpen(false);
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

  // Services mega-menu columns: region-local category (if any) + global catalog.
  type MegaCol = { title: string; icon: IconName; items: { slug: string; title: string }[] };
  const megaRegion = regionSlug ? getRegion(regionSlug) : undefined;
  const megaCols: MegaCol[] = [];
  if (megaRegion) {
    megaCols.push({
      title: L(megaRegion.localHeading),
      icon: "building",
      items: megaRegion.localServices.map((s) => ({ slug: slugify(s.title.en), title: L(s.title) })),
    });
  }
  CATEGORIES.forEach((c) => {
    megaCols.push({ title: c.title, icon: c.icon, items: servicesByCategory(c.id).map((s) => ({ slug: s.slug, title: s.title })) });
  });

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
            {nav.map(([key, href]) => {
              // "Services" becomes a mega-menu of categories + services in every context.
              if (key === "nav.services") {
                return (
                  <li key={href} className={`has-mega${servicesOpen ? " open" : ""}`} ref={servicesRef}>
                    <button
                      className={`menu__trigger${isActive(`${base}/services`) ? " active" : ""}`}
                      onClick={() => setServicesOpen((v) => !v)}
                    >
                      {t(key)}
                      <Icon name="chevron" size={13} className="menu__chev" />
                    </button>
                    <div className="mega">
                      <div className="mega__grid">
                        {megaCols.map((col, ci) => (
                          <div className="mega__col" key={ci}>
                            <div className="mega__cat">
                              <span className="mega__cat-ic"><Icon name={col.icon} size={16} /></span>
                              {col.title}
                            </div>
                            <ul className="mega__list">
                              {col.items.map((s) => (
                                <li key={s.slug}>
                                  <Link href={`${base}/services/${s.slug}`} onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                                    {s.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <Link href={`${base}/services`} className="mega__all" onClick={() => { setServicesOpen(false); setMenuOpen(false); }}>
                        {t("services.title")} →
                      </Link>
                    </div>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link href={href} className={isActive(href) ? "active" : undefined} onClick={() => setMenuOpen(false)}>
                    {t(key)}
                  </Link>
                </li>
              );
            })}
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
