"use client";

import Link from "next/link";
import { useI18n } from "./I18nProvider";
import { Icon } from "./Icon";
import { SITE } from "@/data/site";
import { REGION_LINKS } from "@/data/regions";

export function Footer({ regionSlug }: { regionSlug: string }) {
  const { t, L } = useI18n();
  const base = regionSlug ? `/${regionSlug}` : "";
  const home = base || "/";

  const company: [string, string][] = [
    ["nav.about", `${base}/about`],
    ["nav.services", `${base}/services`],
    ["nav.sectors", `${base}/sectors`],
    ["nav.contact", `${base}/contact`],
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Link href={home} className="brand" aria-label="C4Sec home">
              <img src="/c4sec-logo-white.png" alt="C4Sec — Consulting4Sec" className="brand__logo brand__logo--footer" />
            </Link>
            <p className="footer__about">{t("footer.about")}</p>
            <div className="footer__social">
              <a href={SITE.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size={17} /></a>
              <a href={SITE.social.medium} aria-label="Medium" target="_blank" rel="noopener noreferrer"><Icon name="medium" size={17} /></a>
            </div>
          </div>

          <div>
            <h5>{t("footer.company")}</h5>
            <ul className="footer__links">
              {company.map(([key, href]) => (
                <li key={href}><Link href={href}>{t(key)}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h5>{t("footer.services")}</h5>
            <ul className="footer__links">
              <li><Link href={`${base}/services`}>{t("pillars.c1t")}</Link></li>
              <li><Link href={`${base}/services`}>{t("pillars.c2t")}</Link></li>
              <li><Link href={`${base}/services`}>{t("pillars.c3t")}</Link></li>
            </ul>
          </div>

          <div>
            <h5>{t("region.label")}</h5>
            <ul className="footer__links">
              {REGION_LINKS.map((r) => {
                const href = r.slug ? `/${r.slug}` : "/";
                return (
                  <li key={r.slug || "global"}>
                    {r.status === "soon" ? (
                      <span style={{ opacity: 0.6 }}>{r.flag} {L(r.name)} · {t("region.soon")}</span>
                    ) : (
                      <Link href={href}>{r.flag} {L(r.name)}</Link>
                    )}
                  </li>
                );
              })}
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t("footer.rights")}</span>
          <span>{t("footer.partner")}</span>
        </div>
      </div>
    </footer>
  );
}
