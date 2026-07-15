"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon, type IconName } from "../Icon";
import { Arrow, CtaBand, PageHero } from "../blocks";
import { CATEGORIES, servicesByCategory, getService, slugify } from "@/data/services";
import { getRegion } from "@/data/regions";

type Resolved = {
  icon: IconName;
  title: string;
  tagline: string;
  overview: string;
  included: string[];
  categoryTitle?: string;
  categoryIcon?: IconName;
  related: { slug: string; title: string }[];
};

// Resolve a service slug within an optional region context.
export function ServiceView({ regionSlug, slug }: { regionSlug: string; slug: string }) {
  const { t, L } = useI18n();
  const base = regionSlug ? `/${regionSlug}` : "";
  const region = regionSlug ? getRegion(regionSlug) : undefined;

  let r: Resolved | undefined;

  // 1) region-local service (keyed on English title)
  if (region) {
    const local = region.localServices.find((s) => slugify(s.title.en) === slug);
    if (local) {
      r = {
        icon: local.icon,
        title: L(local.title),
        tagline: L(local.desc),
        overview: L(local.desc),
        included: [],
        categoryTitle: L(region.localHeading),
        categoryIcon: "building",
        related: region.localServices
          .filter((s) => s !== local)
          .map((s) => ({ slug: slugify(s.title.en), title: L(s.title) })),
      };
    }
  }

  // 2) global catalog service
  if (!r) {
    const g = getService(slug);
    if (g) {
      const cat = CATEGORIES.find((c) => c.id === g.category);
      r = {
        icon: g.icon,
        title: L(g.title),
        tagline: L(g.tagline),
        overview: L(g.overview),
        included: L(g.included),
        categoryTitle: cat ? L(cat.title) : undefined,
        categoryIcon: cat?.icon,
        related: servicesByCategory(g.category)
          .filter((s) => s.slug !== g.slug)
          .map((s) => ({ slug: s.slug, title: L(s.title) })),
      };
    }
  }

  if (!r) return null;

  return (
    <>
      <PageHero crumbHome={t("nav.services")} crumb={r.title} title={r.title} sub={r.tagline} homeHref={`${base}/services`} />

      <section className="section">
        <div className="container split" style={{ alignItems: "start" }}>
          <div data-reveal>
            {r.categoryTitle && (
              <span className="eyebrow">
                {r.categoryIcon && <Icon name={r.categoryIcon} size={14} />} {r.categoryTitle}
              </span>
            )}
            <p className="lead" style={{ marginTop: 8 }}>{r.overview}</p>

            {r.included.length > 0 && (
              <>
                <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 20, marginTop: 34, marginBottom: 18 }}>{t("services.includes")}</h3>
                <ul className="feature-list">
                  {r.included.map((item, i) => (
                    <li key={i}>
                      <span className="tick"><Icon name="check" size={14} /></span>
                      <span><b style={{ fontWeight: 500 }}>{item}</b></span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <Link href={`${base}/contact`} className="btn btn--primary" style={{ marginTop: 30 }}>
              <span>{t("cta.btn1")}</span><Arrow />
            </Link>
          </div>

          <aside data-reveal>
            <div className="card" style={{ position: "sticky", top: 96 }}>
              <div className="card__icon"><Icon name={r.icon} size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 18 }}>{r.categoryTitle}</h3>
              {r.related.length > 0 && (
                <>
                  <div style={{ height: 1, background: "var(--line)", margin: "20px 0" }} />
                  <ul>
                    {r.related.map((s) => (
                      <li key={s.slug} style={{ marginBottom: 8 }}>
                        <Link href={`${base}/services/${s.slug}`} className="card__link" style={{ marginTop: 0 }}>
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
          <CtaBand title={t("cta.title")} sub={t("cta.sub")} primary={{ href: `${base}/contact`, label: t("cta.btn1") }} secondary={{ href: `${base}/services`, label: t("services.title") }} />
        </div>
      </section>
    </>
  );
}
