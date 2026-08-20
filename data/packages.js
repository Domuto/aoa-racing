// ============================================================
// ⚠️  PLACEHOLDER PRICING — package tiers and add-ons below are
//     sample structure for the booking configurator. Replace
//     names/prices/inclusions with AOA Racing's approved offer
//     before launch.
//     ✅ FLEET pricing is REAL — approved per-vehicle, per-track-
//     day rates from AOA (July 2026).
// ============================================================

export const PACKAGES = [
  {
    id: "entry",
    name: "Entry",
    price: 495, // PLACEHOLDER
    blurb: "Everything you need for a full day on track.",
    includes: [
      "All open track sessions",
      "Morning drivers' meeting & track walk-through",
      "Grouped run sessions by experience",
      "Event support & flagging",
    ],
  },
  {
    id: "performance",
    name: "Performance",
    price: 795, // PLACEHOLDER
    popular: true,
    blurb: "Track time plus coaching and pit support.",
    includes: [
      "Everything in Entry",
      "One 1:1 coached session",
      "Pre-grid tire pressure & torque check",
      "Priority pit space near AOA support",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 1195, // PLACEHOLDER
    blurb: "The full AOA treatment for a serious day.",
    includes: [
      "Everything in Performance",
      "All-day dedicated coach",
      "Data & video review between sessions",
      "Trackside photography set included",
    ],
  },
  {
    id: "private",
    name: "Private / Group",
    price: null, // inquiry-priced
    blurb: "Buyouts, corporate groups, and custom formats.",
    includes: [
      "Private or semi-private track time",
      "Catering & hospitality options",
      "Arrive-and-drive fleet options",
      "Custom schedule built around your group",
    ],
  },
];

export const ADD_ONS = [
  {
    id: "tires",
    name: "Performance tire set (mounted)",
    price: 350, // PLACEHOLDER
    note: "Track-focused rubber mounted on your wheels for the event.",
  },
  {
    id: "coaching",
    name: "Extra 1:1 coaching session",
    price: 195, // PLACEHOLDER
    note: "Add a session with an AOA instructor riding along.",
  },
  {
    id: "helmet",
    name: "Helmet rental (SA-rated)",
    price: 45, // PLACEHOLDER
    note: "Clean, current-spec loaner helmet for the day.",
  },
  {
    id: "sessions",
    name: "Additional track sessions",
    price: 120, // PLACEHOLDER
    note: "Extra 20-minute session where the schedule allows.",
  },
  {
    id: "photo",
    name: "Trackside photography",
    price: 150, // PLACEHOLDER
    note: "Edited gallery of your car on track, delivered digitally.",
  },
  {
    id: "support",
    name: "Garage & support crew",
    price: 275, // PLACEHOLDER
    note: "Covered garage space plus AOA crew checks between sessions.",
  },
];

// Rental fleet shown when a driver chooses "Rent an AOA vehicle".
// ✅ Real vehicles, specs & rates — pricing is per vehicle, per track day.
export const FLEET = [
  {
    id: "miata-25",
    name: "Mazda MX-5 Miata — 2.5L Manual",
    price: 1750,
    tagline: "Fully caged race car",
    note: "Fully caged race car · 2.5L, 200 HP · RWD · 6-speed manual.",
    specs: [
      "2.5-liter",
      "200 HP",
      "RWD",
      "6-speed manual transmission",
      "2,400 lbs",
      "AIM data acquisition & camera",
      "Power steering & ABS",
    ],
  },
  {
    id: "miata-20",
    name: "Mazda MX-5 Miata — 2.0L Paddle Auto",
    price: 1750,
    tagline: "Fully caged race car",
    note: "Fully caged race car · 2.0L, 180 HP · RWD · paddle-shift auto.",
    specs: [
      "2.0-liter",
      "180 HP",
      "RWD",
      "Paddle-shift automatic transmission",
      "2,350 lbs",
      "AIM data acquisition & camera",
      "Power steering & ABS",
    ],
  },
  {
    id: "gr-corolla-mt",
    name: "Toyota GR Corolla — 6-Speed Manual",
    price: 1950,
    note: "1.6L turbo 3-cyl, 300 HP · AWD · 6-speed iMT manual.",
    specs: [
      "1.6-liter 3-cylinder turbo",
      "300 HP",
      "AWD",
      "6-speed iMT manual",
      "3,268 lbs",
    ],
  },
  {
    id: "gr-corolla-at",
    name: "Toyota GR Corolla — 8-Speed Auto",
    price: 1950,
    note: "1.6L turbo 3-cyl, 300 HP · AWD · 8-speed auto w/ paddles.",
    specs: [
      "1.6-liter 3-cylinder turbo",
      "300 HP",
      "AWD",
      "8-speed DAT automatic w/ paddle shifters",
      "3,345 lbs",
    ],
  },
  {
    id: "bmw-e90",
    name: "BMW 3-Series E90 Race Car",
    price: 2500,
    tagline: "Fully caged race car",
    note: "Fully caged race car · 3.0L M52 LSD, 240 HP · 6-speed manual.",
    specs: [
      "3.0-liter M52 engine, LSD",
      "240 HP",
      "AWD",
      "6-speed manual transmission",
      "AIM data acquisition & camera",
      "3,000 lbs",
    ],
  },
  {
    id: "bmw-m2cs",
    name: "BMW M2 CS Racing",
    price: 4500,
    tagline: "Fully caged factory race car",
    note: "Fully caged factory race car · twin-turbo S55, 365–450 HP · RWD · 7-speed DCT.",
    specs: [
      "Twin-turbo 6-cylinder S55 engine",
      "365–450 HP",
      "RWD",
      "ELSD",
      "7-speed dual-clutch transmission",
      "AIM data acquisition & camera",
      "3,470 lbs",
    ],
  },
  {
    id: "c8",
    name: "Chevrolet C8 Corvette Stingray",
    price: 5500,
    note: "6.2L V8, 495 HP · RWD · 8-speed DCT · eLSD.",
    specs: [
      "6.2-liter V8",
      "495 HP",
      "RWD",
      "8-speed dual-clutch transmission",
      "Electronic LSD",
      "3,600 lbs",
    ],
  },
  {
    id: "audi-tcr",
    name: "Audi TCR Gen2 Race Car",
    price: 5500,
    tagline: "Fully caged factory race car",
    note: "Fully caged factory race car · 2.0L turbo, 340 HP · FWD · 6-speed sequential.",
    specs: [
      "2.0-liter turbocharged inline-4",
      "340 HP",
      "FWD",
      "6-speed sequential racing transmission w/ paddle shifters",
      "MoTeC data acquisition & camera",
    ],
  },
];

// Booking notes shown wherever fleet pricing appears.
export const FLEET_NOTES = [
  "Pricing is per vehicle, per track day.",
  "Availability is subject to scheduling and maintenance.",
  "Additional costs (track entry fees, tires, fuel, insurance, transportation, etc.) may apply depending on the selected package.",
  "Customers can also choose to bring their own vehicle if eligible.",
];

// Deposit terms — PLACEHOLDER. Confirm real policy with AOA.
export const DEPOSIT_RATE = 0.5;

export function money(n) {
  if (n === null || n === undefined) return "Inquiry";
  return "$" + n.toLocaleString("en-US");
}
