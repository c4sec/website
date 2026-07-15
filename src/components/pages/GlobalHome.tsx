"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon } from "../Icon";
import { Arrow, ServiceCard, StandardCard, CtaBand } from "../blocks";
import { FRAMEWORKS, STANDARD_KEYS } from "@/data/site";
import { REGIONS } from "@/data/regions";

export function GlobalHome() {
  const { t, L } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__grid-bg" />
        <div className="container hero__inner">
          <span className="hero__badge"><span className="dot" />{t("hero.badge")}</span>
          <h1 dangerouslySetInnerHTML={{ __html: t("hero.title") }} />
          <p className="hero__sub">{t("hero.sub")}</p>
          <div className="hero__cta">
            <Link href="/services" className="btn btn--primary"><span>{t("hero.cta1")}</span><Arrow /></Link>
            <Link href="/contact" className="btn btn--ghost">{t("hero.cta2")}</Link>
          </div>
          <div className="hero__meta">
            <div><b>6</b><span>{t("stats.3l")}</span></div>
            <div><b>{t("hero.m2n")}</b><span>{t("hero.m2l")}</span></div>
            <div><b>{t("hero.m3n")}</b><span>{t("hero.m3l")}</span></div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="container trust__inner">
          <span className="trust__label">{t("trust.label")}</span>
          <div className="trust__items">
            {FRAMEWORKS.map((f) => <span className="chip" key={f}>{f}</span>)}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container split">
          <div data-reveal>
            <span className="eyebrow">{t("intro.eyebrow")}</span>
            <h2 className="section-title">{t("intro.title")}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{t("intro.lead")}</p>
            <p style={{ marginTop: 18, color: "var(--slate)" }}>{t("intro.body")}</p>
            <Link href="/about" className="btn btn--outline" style={{ marginTop: 26 }}><span>{t("intro.cta")}</span><Arrow /></Link>
          </div>
          <div className="split__media" data-reveal>
            <div className="grid-lines" />
            <div className="panel">
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#fff", lineHeight: 1.3 }}>
                “One firm.<br />Many borders.<br />One standard.”
              </div>
              <ul className="feature-list">
                {["p1", "p2", "p3", "p4"].map((p) => (
                  <li key={p}>
                    <span className="tick"><Icon name="check" size={14} /></span>
                    <span><b>{t(`intro.${p}t`)}</b><span>{t(`intro.${p}d`)}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section section--soft">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, marginInline: "auto" }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>{t("pillars.eyebrow")}</span>
            <h2 className="section-title">{t("pillars.title")}</h2>
            <p className="lead mx-auto" style={{ marginTop: 16 }}>{t("pillars.lead")}</p>
          </div>
          <div className="cards" style={{ marginTop: 48 }}>
            <PillarCard icon="shield" t={t} n="c1" />
            <PillarCard icon="graduation" t={t} n="c2" />
            <PillarCard icon="clipboard" t={t} n="c3" />
          </div>
        </div>
      </section>

      {/* STANDARDS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 680 }} data-reveal>
            <span className="eyebrow">{t("std.eyebrow")}</span>
            <h2 className="section-title">{t("std.title")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{t("std.lead")}</p>
          </div>
          <div className="cards" style={{ marginTop: 44 }}>
            {STANDARD_KEYS.map((k) => <StandardCard key={k} title={t(`std.${k}t`)} desc={t(`std.${k}d`)} />)}
          </div>
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

      {/* STATS */}
      <section className="section section--ink">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 620, marginInline: "auto" }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>{t("stats.eyebrow")}</span>
            <h2 className="section-title">{t("stats.title")}</h2>
          </div>
          <div className="stats" style={{ marginTop: 48 }}>
            <Stat n={t("stats.1n")} l={t("stats.1l")} />
            <Stat n={t("stats.2n")} l={t("stats.2l")} gold />
            <Stat n="6" l={t("stats.3l")} />
            <Stat n={t("stats.4n")} l={t("stats.4l")} gold />
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 680 }} data-reveal>
            <span className="eyebrow">{t("pres.eyebrow")}</span>
            <h2 className="section-title">{t("pres.title")}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{t("pres.lead")}</p>
          </div>
          <div className="offices" style={{ marginTop: 40, gridTemplateColumns: "repeat(2,1fr)", display: "grid", gap: 16 }}>
            {REGIONS.map((r) => (
              <Link href={`/${r.slug}`} className="office" key={r.slug}>
                <span className="office__flag">{r.flag}</span>
                <div><h4><span>{L(r.name)}</span><span className="tag">{L(r.city)}</span></h4><p>{L(r.intro.lead)}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CtaBand
            title={t("cta.title")}
            sub={t("cta.sub")}
            primary={{ href: "/contact", label: t("cta.btn1") }}
            secondary={{ href: "/services", label: t("cta.btn2") }}
          />
        </div>
      </section>
    </>
  );
}

function PillarCard({ icon, t, n }: { icon: any; t: (k: string) => string; n: string }) {
  return <ServiceCard icon={icon} title={t(`pillars.${n}t`)} desc={t(`pillars.${n}d`)} />;
}

function Stat({ n, l, gold }: { n: string; l: string; gold?: boolean }) {
  return (
    <div className="stat text-center" data-reveal>
      <b className={gold ? "gold" : undefined}>{n}</b>
      <span>{l}</span>
    </div>
  );
}
