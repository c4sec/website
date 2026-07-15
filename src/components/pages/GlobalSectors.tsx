"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon, type IconName } from "../Icon";
import { Arrow, PageHero } from "../blocks";
import { SECTOR_KEYS } from "@/data/site";

export function GlobalSectors() {
  const { t } = useI18n();
  return (
    <>
      <PageHero crumbHome={t("nav.home")} crumb={t("sectors.crumb")} title={t("sectors.title")} sub={t("sectors.sub")} />

      <section className="section">
        <div className="container">
          <div className="sectors">
            {SECTOR_KEYS.map(({ key, icon }) => (
              <article className="sector" key={key} data-reveal>
                <span className="sic"><Icon name={icon as IconName} size={30} /></span>
                <h3>{t(`sectors.${key}t`)}</h3>
                <p>{t(`sectors.${key}d`)}</p>
              </article>
            ))}
          </div>

          <div className="cta" style={{ marginTop: 56 }} data-reveal>
            <h2>{t("sectors.cta_t")}</h2>
            <p>{t("sectors.cta_d")}</p>
            <div className="cta__btns">
              <Link href="/contact" className="btn btn--primary"><span>{t("nav.cta")}</span><Arrow /></Link>
              <Link href="/services" className="btn btn--ghost">{t("cta.btn2")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
