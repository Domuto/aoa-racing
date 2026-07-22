# AOA Racing — Website Revenue Engine

Next.js 15 build of aoaracing.com per the Website Revenue Engine Framework.
Black/charcoal premium motorsports design, one red accent, "timing tower" event system.

## Quickstart
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Structure
- `app/` — 12 core pages: home, track-days (+ /[slug] booking detail), shop, shop/quote, race-team, events, racetracks, about, faq, contact, policies
- `components/` — Header, Footer, BookingConfigurator (full flow: driver type → package → add-ons → policies → deposit/full), QuoteForm, RaceInquiryTabs, TimingBoard, etc.
- `data/` — events.js, packages.js, services.js, tracks.js, faq.js — **edit these to update the site**
- `lib/site.js` — contact info, nav, form handler

## Before launch (placeholder checklist)
1. **Dates & pricing** — `data/events.js`, `data/packages.js` are PLACEHOLDERS. Replace with real dates/prices.
2. **Forms** — set `web3formsKey` in `lib/site.js` (free key: web3forms.com). Until set, forms simulate success.
3. **Images** — drop photos into `public/images/` using the exact file paths printed on every placeholder block on the site, then swap `<ImagePlaceholder>` for `<Image>`/`<img>`.
4. **Draft banner** — set `draftMode: false` in `lib/site.js` to hide the preview banner.
5. **Policies/waiver** — `app/policies/page.jsx` needs AOA's attorney-approved language.
6. **Race team** — cars, schedule, results, drivers in `app/race-team/page.jsx` are bracketed placeholders. Verified results only.
7. **Email** — confirm `email` in `lib/site.js`.

## Accent color
One variable: `--accent` in `app/globals.css`. Racing red `225 6 0` by default; legacy AOA blue `0 65 102` noted inline as the alternative.

## Deploy
Push to GitHub → import in Vercel → done. No env vars required.
