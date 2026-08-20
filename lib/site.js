// ============================================================
// SITE CONFIG — single source of truth for business info.
// Phone / address / socials pulled from the current
// aoaracing.com. Confirm everything with the client before
// launch (matches the Final Build Checklist).
// ============================================================

export const SITE = {
  name: "AOA Racing",
  tagline: "Drive Faster. Race Smarter.",
  description:
    "Track days, performance services, race programs, and premium driving experiences for people who expect more from their cars and their time on track. Marietta, Georgia.",

  // ---- Contact (verified against current live site) ----
  phoneDisplay: "(404) 314-5380",
  phoneTel: "tel:4043145380",
  racingEmail: "john@aoamotorsports.com", // direct contact for racing inquiries
  address: {
    line1: "503 Commerce Park Drive",
    line2: "Suite A",
    city: "Marietta",
    state: "GA",
    zip: "30060",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=503+Commerce+Park+Drive+Suite+A+Marietta+GA+30060",
  hours: "Mon–Fri 9a–6p · Sat by appointment", // PLACEHOLDER — confirm shop hours

  // ---- Socials (from current live site) ----
  socials: {
    instagram: "https://www.instagram.com/aoa_racing_/",
    instagramHandle: "aoa_racing_",
    // OPTION A (auto, needs a free widget): paste a LightWidget/Behold/SnapWidget
    // iframe URL here for a live, auto-updating feed of newest posts.
    instagramEmbedUrl: "",
    // OPTION B (no signup): paste public post links (post → ••• → Copy link),
    // e.g. "https://www.instagram.com/p/XXXXXXXX/". Shows those real posts.
    instagramPosts: [
      "https://www.instagram.com/p/CqtCmbGK3b3/",
      "https://www.instagram.com/p/CqtCeC3oF5P/",
      "https://www.instagram.com/p/CqtCb5MK0--/",
      "https://www.instagram.com/p/Dbq6vGGiNUg/",
      "https://www.instagram.com/p/Dbei6KLjYAQ/",
    ],
    facebook: "https://www.facebook.com/aoamotorsports/",
    youtube: "https://www.youtube.com/watch?v=HSm9sb8XvSs",
  },

  // ---- Build flags ----
  // Shows a slim "preview" bar site-wide while dates/pricing
  // are placeholders. Flip to false for launch.
  draftMode: false,

  // Web3Forms access key (https://web3forms.com) — paste a key
  // here and every form on the site emails the shop. Leave ""
  // during development; forms will simulate success locally.
  web3formsKey: "cd082658-6e9f-4589-9677-76e24f44e1e6",
};

export const NAV = [
  { label: "Track Days", href: "/track-days" },
  { label: "Shop", href: "/shop" },
  { label: "Racing", href: "/racing" },
  { label: "Events", href: "/events" },
  { label: "Racetracks", href: "/racetracks" },
  { label: "Gallery", href: "/gallery" },
  { label: "About AOA", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/**
 * Shared form submit helper.
 * With a Web3Forms key set -> real email delivery.
 * Without -> simulated success so the UI can be reviewed.
 */
export async function submitForm(subject, payload) {
  if (!SITE.web3formsKey) {
    console.warn(
      "[AOA] No form backend key set (lib/site.js -> web3formsKey). Simulating success.",
      { subject, payload }
    );
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true, simulated: true };
  }
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: SITE.web3formsKey,
      subject: `[aoaracing.com] ${subject}`,
      ...payload,
    }),
  });
  const data = await res.json();
  return { ok: data.success === true, simulated: false };
}
