import * as React from "react";
import Link from "next/link";
import { Icon, type IconName } from "./Icon";

export function Arrow() {
  return <Icon name="arrow" size={16} />;
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  onDark,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  onDark?: boolean;
}) {
  return (
    <div className={center ? "text-center" : undefined} style={center ? { maxWidth: 680, marginInline: "auto" } : { maxWidth: 680 }} data-reveal>
      {eyebrow && (
        <span className="eyebrow" style={center ? { justifyContent: "center" } : undefined}>
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {lead && (
        <p className={`lead${center ? " mx-auto" : ""}`} style={{ marginTop: 16 }}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  crumbHome,
  crumb,
  title,
  sub,
  homeHref = "/",
}: {
  crumbHome: string;
  crumb: string;
  title: string;
  sub: string;
  homeHref?: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" />
      <div className="container page-hero__inner">
        <div className="crumbs">
          <Link href={homeHref}>{crumbHome}</Link>
          <span>/</span>
          <span>{crumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{sub}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ icon, title, desc }: { icon: IconName; title: string; desc: string }) {
  return (
    <article className="card" data-reveal>
      <div className="card__icon">
        <Icon name={icon} size={26} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

export function StandardCard({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="card" data-reveal>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

export function CtaBand({
  title,
  sub,
  primary,
  secondary,
}: {
  title: string;
  sub: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <div className="cta" data-reveal>
      <h2>{title}</h2>
      <p>{sub}</p>
      <div className="cta__btns">
        <Link href={primary.href} className="btn btn--primary">
          <span>{primary.label}</span>
          <Arrow />
        </Link>
        {secondary && (
          <Link href={secondary.href} className="btn btn--ghost">
            {secondary.label}
          </Link>
        )}
      </div>
    </div>
  );
}
