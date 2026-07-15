"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon } from "../Icon";
import { Arrow, CtaBand, PageHero } from "../blocks";
import { CATEGORIES, servicesByCategory, type Service } from "@/data/services";

export function ServiceDetail({ service }: { service: Service }) {
  const { t } = useI18n();
  const category = CATEGORIES.find((c) => c.id === service.category);
  const related = servicesByCategory(service.category).filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        crumbHome={t("nav.services")}
        crumb={service.title}
        title={service.title}
        sub={service.tagline}
        homeHref="/services"
      />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div data-reveal>
            {category && <span className="eyebrow"><Icon name={category.icon} size={14} /> {category.title}</span>}
            <p className="lead" style={{ marginTop: 8 }}>{service.overview}</p>

            <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, marginTop: 34, marginBottom: 18 }}>
              {t("services.includes")}
            </h3>
            <ul className="feature-list">
              {service.included.map((item, i) => (
                <li key={i}>
                  <span className="tick"><Icon name="check" size={14} /></span>
                  <span><b style={{ fontWeight: 500 }}>{item}</b></span>
                </li>
              ))}
            </ul>

            <Link href="/contact" className="btn btn--primary" style={{ marginTop: 30 }}>
              <span>{t("cta.btn1")}</span><Arrow />
            </Link>
          </div>

          <aside data-reveal>
            <div className="card" style={{ position: "sticky", top: 96 }}>
              <div className="card__icon"><Icon name={service.icon} size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 18 }}>{category?.title}</h3>
              <p style={{ marginTop: 6 }}>{category?.blurb}</p>
              {related.length > 0 && (
                <>
                  <div style={{ height: 1, background: "var(--line)", margin: "20px 0" }} />
                  <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
                    {category?.title}
                  </div>
                  <ul>
                    {related.map((s) => (
                      <li key={s.slug} style={{ marginBottom: 8 }}>
                        <Link href={`/services/${s.slug}`} className="card__link" style={{ marginTop: 0 }}>
                          <Icon name="arrow" size={14} /> <span>{s.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* APPROACH */}
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
          <CtaBand
            title={t("cta.title")}
            sub={t("cta.sub")}
            primary={{ href: "/contact", label: t("cta.btn1") }}
            secondary={{ href: "/services", label: t("services.title") }}
          />
        </div>
      </section>
    </>
  );
}
