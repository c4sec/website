"use client";

import Link from "next/link";
import { useI18n } from "../I18nProvider";
import { Icon } from "../Icon";
import { Arrow, ServiceCard, StandardCard, CtaBand, PageHero } from "../blocks";
import { ContactForm } from "../ContactForm";
import type { Region } from "@/data/regions";
import { CATEGORIES, servicesByCategory, slugify } from "@/data/services";

export function RegionHome({ region }: { region: Region }) {
  const { t, L } = useI18n();
  const base = `/${region.slug}`;

  return (
    <>
      <section className="hero">
        <div className="hero__grid-bg" />
        <div className="container hero__inner">
          <span className="hero__badge"><span className="dot" />{L(region.hero.badge)}</span>
          <h1 dangerouslySetInnerHTML={{ __html: L(region.hero.title) }} />
          <p className="hero__sub">{L(region.hero.sub)}</p>
          <div className="hero__cta">
            <Link href={`${base}/services`} className="btn btn--primary"><span>{t("nav.services")}</span><Arrow /></Link>
            <Link href={`${base}/contact`} className="btn btn--ghost">{t("nav.cta")}</Link>
          </div>
          {region.partner && (
            <div className="hero__meta">
              <div><b>C4Sec</b><span>{L(region.name)}</span></div>
              <div><b>×</b><span>{L(region.partner)}</span></div>
            </div>
          )}
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container split">
          <div data-reveal>
            <span className="eyebrow">{L(region.intro.eyebrow)}</span>
            <h2 className="section-title">{L(region.intro.title)}</h2>
            <p className="lead" style={{ marginTop: 18 }}>{L(region.intro.lead)}</p>
            <p style={{ marginTop: 18, color: "var(--slate)" }}>{L(region.intro.body)}</p>
            <Link href={`${base}/services`} className="btn btn--outline" style={{ marginTop: 26 }}><span>{t("nav.services")}</span><Arrow /></Link>
          </div>
          <div className="split__media" data-reveal>
            <div className="grid-lines" />
            <div className="panel">
              <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#fff", lineHeight: 1.3 }}>
                C4Sec {L(region.name)}
              </div>
              <ul className="feature-list">
                {region.localServices.slice(0, 3).map((s, i) => (
                  <li key={i}>
                    <span className="tick"><Icon name="check" size={14} /></span>
                    <span><b>{L(s.title)}</b></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL SERVICES */}
      <section className="section section--soft">
        <div className="container">
          <div className="text-center" style={{ maxWidth: 680, marginInline: "auto" }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: "center" }}>{L(region.localHeading)}</span>
            <h2 className="section-title">{L(region.intro.title)}</h2>
            <p className="lead mx-auto" style={{ marginTop: 16 }}>{L(region.localLead)}</p>
          </div>
          <div className="cards" style={{ marginTop: 48 }}>
            {region.localServices.map((s, i) => (
              <ServiceCard key={i} icon={s.icon} title={L(s.title)} desc={L(s.desc)} />
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL STANDARDS */}
      {region.showGlobalStandards && (
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: 680 }} data-reveal>
              <span className="eyebrow">{t("std.eyebrow")}</span>
              <h2 className="section-title">{t("std.title")}</h2>
              <p className="lead" style={{ marginTop: 16 }}>{t("std.lead")}</p>
            </div>
            <div className="cards" style={{ marginTop: 44 }}>
              {["1", "2", "4", "5"].map((k) => <StandardCard key={k} title={t(`std.${k}t`)} desc={t(`std.${k}d`)} />)}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section" style={{ paddingTop: region.showGlobalStandards ? undefined : 0 }}>
        <div className="container">
          <CtaBand
            title={L(region.cta.title)}
            sub={L(region.cta.sub)}
            primary={{ href: `${base}/contact`, label: t("cta.btn1") }}
            secondary={{ href: "/", label: t("region.global") }}
          />
        </div>
      </section>
    </>
  );
}

export function RegionServices({ region }: { region: Region }) {
  const { t, L } = useI18n();
  const base = `/${region.slug}`;

  return (
    <>
      <PageHero
        crumbHome={t("nav.home")}
        crumb={t("nav.services")}
        title={`${L(region.name)} — ${t("nav.services")}`}
        sub={L(region.localLead)}
        homeHref={base}
      />

      <section className="section">
        <div className="container">
          {/* LOCAL CATEGORY */}
          <div style={{ marginBottom: 64 }}>
            <div className="svc-row__head" style={{ maxWidth: 720, marginBottom: 28 }} data-reveal>
              <span className="eyebrow"><Icon name="building" size={14} /> {L(region.localHeading)}</span>
              <p className="lead" style={{ marginTop: 6 }}>{L(region.localLead)}</p>
            </div>
            <div className="cards">
              {region.localServices.map((s, i) => (
                <Link href={`${base}/services/${slugify(s.title.en)}`} className="card" key={i} data-reveal>
                  <div className="card__icon"><Icon name={s.icon} size={26} /></div>
                  <h3>{L(s.title)}</h3>
                  <p>{L(s.desc)}</p>
                  <span className="card__link"><span>{t("pillars.link")}</span><Arrow /></span>
                </Link>
              ))}
            </div>
          </div>

          {/* GLOBAL CATALOG CATEGORIES */}
          {CATEGORIES.map((cat) => (
            <div key={cat.id} style={{ marginBottom: 64 }}>
              <div className="svc-row__head" style={{ maxWidth: 720, marginBottom: 28 }} data-reveal>
                <span className="eyebrow"><Icon name={cat.icon} size={14} /> {cat.title}</span>
                <p className="lead" style={{ marginTop: 6 }}>{cat.blurb}</p>
              </div>
              <div className="cards">
                {servicesByCategory(cat.id).map((s) => (
                  <Link href={`${base}/services/${s.slug}`} className="card" key={s.slug} data-reveal>
                    <div className="card__icon"><Icon name={s.icon} size={26} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.tagline}</p>
                    <span className="card__link"><span>{t("pillars.link")}</span><Arrow /></span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
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
            title={L(region.cta.title)}
            sub={L(region.cta.sub)}
            primary={{ href: `${base}/contact`, label: t("cta.btn1") }}
            secondary={{ href: "/", label: t("region.global") }}
          />
        </div>
      </section>
    </>
  );
}

export function RegionContact({ region }: { region: Region }) {
  const { t, L } = useI18n();
  const base = `/${region.slug}`;
  const interests = region.localServices.map((s) => L(s.title));

  return (
    <>
      <PageHero
        crumbHome={t("nav.home")}
        crumb={t("nav.contact")}
        title={`${t("contact.title")} — ${L(region.name)}`}
        sub={L(region.cta.sub)}
        homeHref={base}
      />

      <section className="section">
        <div className="container contact-grid">
          <div data-reveal>
            <span className="eyebrow">{t("contact.offices_eyebrow")}</span>
            <h2 className="section-title">{t("contact.offices_title")}</h2>
            <div className="contact-cards" style={{ marginTop: 28 }}>
              <div className="contact-card">
                <span className="cic" style={{ fontSize: 22 }}>{region.flag}</span>
                <div><h4>{L(region.name)}</h4><p>{L(region.contact.address)}</p></div>
              </div>
              <div className="contact-card">
                <span className="cic"><Icon name="mail" size={20} /></span>
                <div><h4>{t("contact.email_t")}</h4><a href={`mailto:${region.contact.email}`}>{region.contact.email}</a></div>
              </div>
              {region.contact.phone && (
                <div className="contact-card">
                  <span className="cic"><Icon name="phone" size={20} /></span>
                  <div><h4>{t("contact.phone_t")}</h4><a href={`tel:${region.contact.phone.replace(/\s/g, "")}`}>{region.contact.phone}</a></div>
                </div>
              )}
              <div className="contact-card">
                <span className="cic" style={{ fontSize: 22 }}>🌐</span>
                <div><h4>{t("region.global")}</h4><Link href="/">{t("cta.btn2")}</Link></div>
              </div>
            </div>
          </div>

          <div data-reveal>
            <ContactForm region={region.code} interests={interests} />
          </div>
        </div>
      </section>
    </>
  );
}
