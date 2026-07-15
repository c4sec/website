"use client";

import { useI18n } from "../I18nProvider";
import { Icon, type IconName } from "../Icon";
import { CtaBand, PageHero } from "../blocks";
import { REGIONS } from "@/data/regions";

const VALUES: { key: string; icon: IconName }[] = [
  { key: "v1", icon: "shield" }, { key: "v2", icon: "graduation" }, { key: "v3", icon: "doc" },
  { key: "v4", icon: "pulse" }, { key: "v5", icon: "users" }, { key: "v6", icon: "book" },
];
const MODEL: { key: string; icon: IconName }[] = [
  { key: "mv1", icon: "users" }, { key: "mv2", icon: "globe" }, { key: "mv3", icon: "clipboard" },
];

export function GlobalAbout() {
  const { t, L } = useI18n();
  return (
    <>
      <PageHero crumbHome={t("nav.home")} crumb={t("about.crumb")} title={t("about.title")} sub={t("about.sub")} />

      {/* STORY */}
      <section className="section">
        <div className="container split">
          <div data-reveal>
            <span className="eyebrow">{t("about.story_eyebrow")}</span>
            <h2 className="section-title">{t("about.story_title")}</h2>
            <p style={{ marginTop: 18, color: "var(--slate)" }}>{t("about.story_p1")}</p>
            <p style={{ marginTop: 16, color: "var(--slate)" }}>{t("about.story_p2")}</p>
            <p style={{ marginTop: 16, color: "var(--slate)" }}>{t("about.story_p3")}</p>
          </div>
          <div className="split__media" data-reveal>
            <div className="grid-lines" />
            <div className="panel">
              <div style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "#fff" }}>Consulting4Sec</div>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "#fff" }}>2025</div><div style={{ color: "#9fb0c8", fontSize: 13 }}>London</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "var(--gold)" }}>6</div><div style={{ color: "#9fb0c8", fontSize: 13 }}>{t("stats.3l")}</div></div>
                <div><div style={{ fontFamily: "var(--font-display)", fontSize: 34, color: "#fff" }}>20+</div><div style={{ color: "#9fb0c8", fontSize: 13 }}>{t("stats.4l")}</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODEL */}
      <section className="section section--soft">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, marginInline: "auto" }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>{t("about.model_eyebrow")}</span>
            <h2 className="section-title">{t("about.model_title")}</h2>
            <p className="lead mx-auto" style={{ marginTop: 16 }}>{t("about.model_lead")}</p>
          </div>
          <div className="cards" style={{ marginTop: 48 }}>
            {MODEL.map(({ key, icon }) => (
              <article className="card" key={key} data-reveal>
                <div className="card__icon"><Icon name={icon} size={26} /></div>
                <h3>{t(`about.${key}t`)}</h3>
                <p>{t(`about.${key}d`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 680 }} data-reveal>
            <span className="eyebrow">{t("about.values_eyebrow")}</span>
            <h2 className="section-title">{t("about.values_title")}</h2>
          </div>
          <div className="values" style={{ marginTop: 44 }}>
            {VALUES.map(({ key, icon }) => (
              <div className="value" key={key} data-reveal>
                <div className="vic"><Icon name={icon} size={22} /></div>
                <h4>{t(`about.${key}t`)}</h4>
                <p>{t(`about.${key}d`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP / OFFICES */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ maxWidth: 680 }} data-reveal>
            <span className="eyebrow">{t("pres.eyebrow")}</span>
            <h2 className="section-title">{t("pres.title")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{t("pres.lead")}</p>
          </div>
          <div className="team" style={{ marginTop: 44 }}>
            <article className="member" data-reveal>
              <div className="member__photo"><span className="initials">C4</span><span className="country">🇬🇧</span></div>
              <div className="member__body"><h4>{t("pres.uk_t")}</h4><div className="role">{t("pres.uk_tag")}</div><p>{t("about.member_bio")}</p></div>
            </article>
            {REGIONS.slice(0, 2).map((r) => (
              <article className="member" key={r.slug} data-reveal>
                <div className="member__photo"><span className="initials">{r.slug.toUpperCase()}</span><span className="country">{r.flag}</span></div>
                <div className="member__body"><h4>{L(r.name)}</h4><div className="role">{t("about.role_country")}</div><p>{t("about.member_bio")}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand title={t("cta.title")} sub={t("cta.sub")} primary={{ href: "/contact", label: t("cta.btn1") }} secondary={{ href: "/services", label: t("cta.btn2") }} />
        </div>
      </section>
    </>
  );
}
