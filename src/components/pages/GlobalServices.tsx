"use client";

import { useI18n } from "../I18nProvider";
import { Icon, type IconName } from "../Icon";
import { CtaBand, PageHero } from "../blocks";
import { FRAMEWORKS } from "@/data/site";

type Item = { key: string; icon: IconName };

const CONSULTING: Item[] = [
  { key: "isms", icon: "shield" }, { key: "bcms", icon: "pulse" }, { key: "privacy", icon: "lock" },
  { key: "cyber", icon: "shield" }, { key: "pci", icon: "card" }, { key: "itsm", icon: "server" },
  { key: "dora", icon: "chart" }, { key: "soc2", icon: "clipboard" }, { key: "cra", icon: "doc" }, { key: "governance", icon: "columns" },
];
const TRAINING: Item[] = [
  { key: "tr_priv", icon: "graduation" }, { key: "tr_qual", icon: "check" }, { key: "tr_grc", icon: "book" },
  { key: "tr_bc", icon: "pulse" }, { key: "tr_is", icon: "shield" }, { key: "cra", icon: "doc" },
];
const AUDIT: Item[] = [
  { key: "ia", icon: "clipboard" }, { key: "sa", icon: "users" }, { key: "gap", icon: "search" },
];
const DPO: Item[] = [
  { key: "dpo1", icon: "users" }, { key: "dpo2", icon: "lock" },
];

function Row({ num, title, desc, items }: { num: string; title: string; desc: string; items: Item[] }) {
  const { t } = useI18n();
  return (
    <div className="svc-row" data-reveal>
      <div className="svc-row__head">
        <span className="num">{num}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="svc-items">
        {items.map(({ key, icon }) => (
          <div className="svc-item" key={key + icon}>
            <span className="ic"><Icon name={icon} size={20} /></span>
            <div><b>{t(`svc.${key}`)}</b><span>{t(`svc.${key}_d`)}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GlobalServices() {
  const { t } = useI18n();
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
          <Row num={t("services.consult_num")} title={t("services.consult_t")} desc={t("services.consult_d")} items={CONSULTING} />
          <Row num={t("services.train_num")} title={t("services.train_t")} desc={t("services.train_d")} items={TRAINING} />
          <Row num={t("services.audit_num")} title={t("services.audit_t")} desc={t("services.audit_d")} items={AUDIT} />
          <Row num={t("services.dpo_num")} title={t("services.dpo_t")} desc={t("services.dpo_d")} items={DPO} />
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
