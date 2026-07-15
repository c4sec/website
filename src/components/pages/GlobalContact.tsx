"use client";

import { useI18n } from "../I18nProvider";
import { Icon } from "../Icon";
import { PageHero } from "../blocks";
import { ContactForm } from "../ContactForm";
import { SITE } from "@/data/site";
import { REGIONS } from "@/data/regions";

export function GlobalContact() {
  const { t, L } = useI18n();
  const interests = [t("pillars.c1t"), t("pillars.c2t"), t("pillars.c3t"), t("services.dpo_t")];

  return (
    <>
      <PageHero crumbHome={t("nav.home")} crumb={t("contact.crumb")} title={t("contact.title")} sub={t("contact.sub")} />

      <section className="section">
        <div className="container contact-grid">
          <div data-reveal>
            <span className="eyebrow">{t("contact.offices_eyebrow")}</span>
            <h2 className="section-title">{t("contact.offices_title")}</h2>
            <div className="contact-cards" style={{ marginTop: 28 }}>
              <div className="contact-card">
                <span className="cic" style={{ fontSize: 22 }}>🇬🇧</span>
                <div><h4>{t("contact.uk_t")}</h4><p>{SITE.hqAddress}</p></div>
              </div>
              {REGIONS.map((r) => (
                <div className="contact-card" key={r.slug}>
                  <span className="cic" style={{ fontSize: 22 }}>{r.flag}</span>
                  <div><h4>{L(r.name)}</h4><p>{L(r.contact.address)}</p></div>
                </div>
              ))}
              <div className="contact-card">
                <span className="cic"><Icon name="mail" size={20} /></span>
                <div><h4>{t("contact.email_t")}</h4><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              </div>
              <div className="contact-card">
                <span className="cic"><Icon name="phone" size={20} /></span>
                <div><h4>{t("contact.phone_t")}</h4><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></div>
              </div>
            </div>
          </div>

          <div data-reveal>
            <ContactForm region="global" interests={interests} />
          </div>
        </div>
      </section>
    </>
  );
}
