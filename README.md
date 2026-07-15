# C4Sec — Consulting4Sec Website

International GRC advisory website built with **Next.js (App Router)** and deployed on **Vercel**.
The global HQ site lives at `/`; country sites are generated from data at `/tr`, `/az`, `/ae`, `/de`, `/ie`.

## Architecture

- **Data-driven regions.** Every country site is one entry in `src/data/regions.ts`.
  Adding a new market = adding an object there (name, flag, hero, local services,
  contact). No new pages to hand-write.
- **Dynamic routes.** `src/app/[region]/…` renders home / services / contact for
  each region via `generateStaticParams`.
- **i18n.** UI + shared copy live in `src/i18n/dictionaries.ts` (EN/TR/AZ fully;
  DE/AR fall back to EN). Region content is localised inline in the data file.
  The language switcher only shows the languages each market offers.
- **Design system.** `src/app/globals.css` holds the brand palette (indigo
  `#322452`, magenta `#E33961`) as CSS variables.
- **Contact form.** Posts to `src/app/api/contact/route.ts`, which emails the
  right country inbox via Resend.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Create a `.env.local` from `.env.example` and add your `RESEND_API_KEY`
(the form still works without it — it just logs instead of sending).

## Deploy to Vercel (GitHub import)

1. Push this folder to a new GitHub repository.
   ```bash
   git init && git add . && git commit -m "C4Sec website"
   git branch -M main
   git remote add origin git@github.com:<you>/c4sec-website.git
   git push -u origin main
   ```
2. Go to **vercel.com → Add New… → Project**, import the repo.
   Vercel auto-detects Next.js — no configuration needed.
3. In **Settings → Environment Variables** add:
   - `RESEND_API_KEY` — from https://resend.com
   - `CONTACT_FROM` — e.g. `C4Sec <noreply@c4sec.com>` (after verifying your domain)
4. Click **Deploy**. Every push to `main` redeploys automatically.
5. Add your domain (`c4sec.com`) in **Settings → Domains**.

## Adding a new country

Edit `src/data/regions.ts`, copy an existing region object, change the `code`,
`slug`, `name`, `flag`, `hero`, `localServices` and `contact`, then add it to the
`REGIONS` array. It appears in the region switcher, footer, sitemap and gets its
own `/[slug]`, `/[slug]/services`, `/[slug]/contact` pages automatically.

## Legacy prototype

The original static HTML prototype is preserved under `legacy/` for reference and
is not part of the build.
