// ============================================================
// ⚠️  PLACEHOLDER PRICING — package tiers, add-ons, and fleet
//     entries below are sample structure for the booking
//     configurator. Replace names/prices/inclusions with AOA
//     Racing's approved offer before launch.
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
// Framework rule: only show availability AOA has actually
// approved — these are generic sample classes, not real cars.
export const FLEET = [
  {
    id: "fleet-a",
    name: "AOA Track Coupe — GT-class", // PLACEHOLDER vehicle
    price: 950, // PLACEHOLDER per-event rental
    note: "Prepped, insured track car. Availability confirmed after request.",
  },
  {
    id: "fleet-b",
    name: "AOA Spec Sedan — Momentum-class", // PLACEHOLDER vehicle
    price: 650, // PLACEHOLDER per-event rental
    note: "Ideal first track car. Availability confirmed after request.",
  },
];

// Deposit terms — PLACEHOLDER. Confirm real policy with AOA.
export const DEPOSIT_RATE = 0.5;

export function money(n) {
  if (n === null || n === undefined) return "Inquiry";
  return "$" + n.toLocaleString("en-US");
}
