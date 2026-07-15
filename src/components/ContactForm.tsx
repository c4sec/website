"use client";

import { useState } from "react";
import { useI18n } from "./I18nProvider";

type Status = "idle" | "sending" | "ok" | "error";

export function ContactForm({
  region,
  interests,
}: {
  region: string;
  interests?: string[];
}) {
  const { t, locale } = useI18n();
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, region, locale }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 style={{ fontFamily: "var(--font-sans)", fontSize: 22 }}>{t("contact.form_title")}</h3>
      <p style={{ color: "var(--slate)", fontSize: 15, margin: "8px 0 24px" }}>{t("contact.form_sub")}</p>

      <div className="field--row">
        <div className="field"><label>{t("form.name")}</label><input name="name" type="text" required placeholder={t("form.name")} /></div>
        <div className="field"><label>{t("form.email")}</label><input name="email" type="email" required placeholder={t("form.email")} /></div>
      </div>
      <div className="field"><label>{t("form.company")}</label><input name="company" type="text" placeholder={t("form.company")} /></div>

      {interests && interests.length > 0 && (
        <div className="field">
          <label>{t("form.interest")}</label>
          <select name="interest" defaultValue="">
            <option value="" disabled>{t("form.interest_ph")}</option>
            {interests.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      )}

      <div className="field"><label>{t("form.message")}</label><textarea name="message" placeholder={t("form.message")} /></div>

      <button type="submit" className="btn btn--primary" style={{ width: "100%", justifyContent: "center" }} disabled={status === "sending"}>
        <span>{status === "sending" ? "…" : t("form.submit")}</span>
      </button>

      {status === "ok" && (
        <p style={{ marginTop: 14, color: "var(--accent-600)", fontWeight: 600, fontSize: 14 }}>✓ {t("contact.form_sub")}</p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 14, color: "#c0392b", fontWeight: 600, fontSize: 14 }}>⚠ {t("form.note")}</p>
      )}

      <p style={{ color: "var(--muted)", fontSize: 12.5, marginTop: 14 }}>{t("form.note")}</p>
    </form>
  );
}
