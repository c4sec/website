"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon } from "../Icon";
import { Arrow, CtaBand, PageHero } from "../blocks";
import { FRAMEWORKS } from "@/data/site";
import { CATEGORIES, servicesByCategory } from "@/data/services";

export function GlobalServices() {
  const { t, L } = useI18n();

  return (
    <>
      <PageHero crumbHome={t("nav.home")} crumb={t("services.crumb")} title={t("services.title")} sub={t("services.sub")} />

      <section className="trust">
        <div className="container trust__inner">
          <span className="trust__label">{t("trust.label")}</span>
          <div className="trust__items">{FRAMEWORKS.map((f) => <span className="chip" key={f}>{f}</span>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {CATEGORIES.map((cat, ci) => (
            <div key={cat.id} style={{ marginBottom: ci < CATEGORIES.length - 1 ? 64 : 0 }}>
              <div className="svc-row__head" style={{ maxWidth: 720, marginBottom: 28 }} data-reveal>
                <span className="eyebrow"><Icon name={cat.icon} size={14} /> {L(cat.title)}</span>
                <p className="lead" style={{ marginTop: 6 }}>{L(cat.blurb)}</p>
              </div>
              <div className="cards">
                {servicesByCategory(cat.id).map((s) => (
                  <Link href={`/services/${s.slug}`} className="card" key={s.slug} data-reveal>
                    <div className="card__icon"><Icon name={s.icon} size={26} /></div>
                    <h3>{L(s.title)}</h3>
                    <p>{L(s.tagline)}</p>
                    <span className="card__link"><span>{t("pillars.link")}</span><Arrow /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: 680 }} data-reveal>
            <span className="eyebrow">{t("appr.eyebrow")}</span>
            <h2 className="section-title">{t("appr.title")}</h2>
          </div>
          <div className="steps" style={{ marginTop: 44 }}>
            {["s1", "s2", "s3", "s4"].map((s) => (
              <div className="step" key={s} data-reveal><h4>{t(`appr.${s}t`)}</h4><p>{t(`appr.${s}d`)}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand title={t("cta.title")} sub={t("cta.sub")} primary={{ href: "/contact", label: t("cta.btn1") }} secondary={{ href: "/sectors", label: t("nav.sectors") }} />
        </div>
      </section>
    </>
  );
}
