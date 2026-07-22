// ============================================================
// ⚠️  PLACEHOLDER DATA — EVERY DATE, PRICE, AND CAPACITY BELOW
//     IS SAMPLE CONTENT. Replace with AOA Racing's real
//     calendar before launch. (Framework rule: do not invent
//     pricing, event dates, or availability.)
//
// Event card spec (per framework):
//   name · date · track · audience · startingPrice ·
//   availability (green | yellow | waitlist) · slug
// ============================================================

export const EVENTS = [
  {
    slug: "road-atlanta-aug",
    name: "Road Atlanta Track Day",
    date: "2026-08-15", // PLACEHOLDER
    trackSlug: "road-atlanta",
    track: "Michelin Raceway Road Atlanta",
    city: "Braselton, GA",
    audience: "All levels · Grouped by experience",
    startingPrice: 495, // PLACEHOLDER — "starting at" (package cost varies)
    availability: "green", // green = open slots · yellow = limited · waitlist
    slotsNote: "Open slots",
    format: "Open lapping · 4 sessions · instructors on site",
  },
  {
    slug: "amp-sep",
    name: "AMP Skills Day",
    date: "2026-09-05", // PLACEHOLDER
    trackSlug: "atlanta-motorsports-park",
    track: "Atlanta Motorsports Park",
    city: "Dawsonville, GA",
    audience: "Beginner & Intermediate",
    startingPrice: 445, // PLACEHOLDER
    availability: "yellow",
    slotsNote: "Limited — 6 slots left",
    format: "Coached sessions · classroom + lead-follow",
  },
  {
    slug: "road-atlanta-sep",
    name: "Road Atlanta Track Day",
    date: "2026-09-14", // PLACEHOLDER
    trackSlug: "road-atlanta",
    track: "Michelin Raceway Road Atlanta",
    city: "Braselton, GA",
    audience: "Intermediate & Advanced",
    startingPrice: 495, // PLACEHOLDER
    availability: "green",
    slotsNote: "Open slots",
    format: "Open lapping · 4 sessions · timing available",
  },
  {
    slug: "barber-oct",
    name: "Barber Weekend Trip",
    date: "2026-10-03", // PLACEHOLDER (2-day)
    trackSlug: "barber-motorsports-park",
    track: "Barber Motorsports Park",
    city: "Birmingham, AL",
    audience: "Mixed group · 2-day event",
    startingPrice: 895, // PLACEHOLDER
    availability: "yellow",
    slotsNote: "Limited garages",
    format: "2 days · garages · group dinner Saturday",
  },
  {
    slug: "cmp-oct",
    name: "CMP Time Trial Prep",
    date: "2026-10-24", // PLACEHOLDER
    trackSlug: "carolina-motorsports-park",
    track: "Carolina Motorsports Park",
    city: "Kershaw, SC",
    audience: "Advanced · Time trial focus",
    startingPrice: 545, // PLACEHOLDER
    availability: "waitlist",
    slotsNote: "Waitlist only",
    format: "Timed sessions · data review with coaches",
  },
  {
    slug: "amp-corporate-nov",
    name: "AMP Corporate Experience",
    date: "2026-11-07", // PLACEHOLDER
    trackSlug: "atlanta-motorsports-park",
    track: "Atlanta Motorsports Park",
    city: "Dawsonville, GA",
    audience: "Corporate & private groups",
    startingPrice: 0, // inquiry-priced
    availability: "green",
    slotsNote: "Booking by inquiry",
    format: "Half/full day buyouts · catering available",
  },
];

export function getEvent(slug) {
  return EVENTS.find((e) => e.slug === slug);
}

export function formatEventDate(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function eventMonthKey(iso) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
