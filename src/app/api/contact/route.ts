import { NextResponse } from "next/server";
import { getRegion } from "@/data/regions";
import { SITE } from "@/data/site";

export const runtime = "nodejs";

function recipientFor(regionCode: string): string {
  const r = getRegion(regionCode);
  return r?.contact.email || SITE.email;
}

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();
  const company = (body.company || "").trim();
  const interest = (body.interest || "").trim();
  const region = (body.region || "global").trim();
  const locale = (body.locale || "en").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const to = recipientFor(region);
  const subject = `New enquiry — C4Sec ${region.toUpperCase()} (${interest || "General"})`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Region: ${region}`,
    `Language: ${locale}`,
    `Interest: ${interest || "—"}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM || "C4Sec Website <onboarding@resend.dev>";

  // Without an API key (e.g. local dev before secrets are set) we accept the
  // submission and log it, so the UI works end-to-end. Configure RESEND_API_KEY
  // in Vercel to actually deliver mail.
  if (!apiKey) {
    console.log("[contact] (no RESEND_API_KEY) would send to", to, "\n", text);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] send failed", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}
