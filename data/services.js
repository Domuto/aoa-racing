// ============================================================
// PERFORMANCE SHOP — the 8 service cards from the framework,
// each with its conversion message. Icons map to lucide names
// used in components/ServiceCard.jsx.
// ============================================================

export const SERVICES = [
  {
    id: "track-day-prep",
    name: "Track-Day Prep",
    icon: "gauge",
    message:
      "Inspection, fluids, brakes, tires, basic safety, and readiness before an event.",
  },
  {
    id: "race-prep",
    name: "Race Prep",
    icon: "flag",
    message:
      "Higher-level preparation, support, reliability work, and race-specific needs.",
  },
  {
    id: "tires-wheels",
    name: "Tires & Wheels",
    icon: "circle-dot",
    message:
      "Selection, fitment, mounting, balancing, and performance-focused recommendations.",
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: "octagon",
    message:
      "Pads, rotors, fluid, lines, inspection, and track-focused setup.",
  },
  {
    id: "suspension-alignment",
    name: "Suspension & Alignment",
    icon: "ruler",
    message:
      "Setup, adjustments, alignment, handling, and confidence on track.",
  },
  {
    id: "performance-upgrades",
    name: "Performance Upgrades",
    icon: "zap",
    message:
      "Approved modifications, parts installation, power, cooling, and handling improvements.",
  },
  {
    id: "maintenance-inspection",
    name: "Maintenance & Inspection",
    icon: "wrench",
    message:
      "Service work and pre-track inspection for customers who need a qualified starting point.",
  },
  {
    id: "custom-builds",
    name: "Custom Builds",
    icon: "hammer",
    message:
      "Higher-value projects that need a conversation, budget, and scope review.",
  },
];

// ============================================================
// SHOP CATEGORIES — the performance shop is organized into
// three service categories, each with its own dedicated page
// (app/shop/[category]). Add/adjust items here to update the
// category pages and the shop landing cards.
// ============================================================
export const SHOP_CATEGORIES = [
  {
    id: "repair",
    name: "Repair",
    icon: "wrench",
    tagline: "Diagnose it, fix it, get it back on track.",
    description:
      "General mechanical repairs, diagnostics, suspension work, brake service, electrical diagnostics, and performance-related repairs.",
    items: [
      "General mechanical repairs",
      "Diagnostics",
      "Suspension work",
      "Brake service",
      "Electrical diagnostics",
      "Performance-related repairs",
    ],
    image: "/images/events/barber/dsc_0256.jpg",
  },
  {
    id: "rebuild",
    name: "Rebuild",
    icon: "hammer",
    tagline: "Ground-up builds and full mechanical rebuilds.",
    description:
      "Engine rebuilds, transmission rebuilds, complete race car builds, restorations, and custom performance projects.",
    items: [
      "Engine rebuilds",
      "Transmission rebuilds",
      "Complete race car builds",
      "Restorations",
      "Custom performance projects",
    ],
    image: "/images/events/vir/dsc_3836.jpg",
  },
  {
    id: "maintenance",
    name: "Maintenance",
    icon: "gauge",
    tagline: "Keep it performing at its best, event after event.",
    description:
      "Routine maintenance, oil services, brake fluid flushes, cooling system service, alignments, track inspections, and preventative maintenance to keep vehicles performing at their best.",
    items: [
      "Routine maintenance",
      "Oil services",
      "Brake fluid flushes",
      "Cooling system service",
      "Alignments",
      "Track inspections",
      "Preventative maintenance",
    ],
    image: "/images/events/sonoma/dsc_3901.jpg",
  },
];

export function getShopCategory(id) {
  return SHOP_CATEGORIES.find((c) => c.id === id);
}

export const INTENDED_USE = [
  "Street car — occasional track days",
  "Dedicated track / HPDE car",
  "Time trial or wheel-to-wheel race car",
  "Daily driver + weekend track use",
  "Show / build project",
];

export const BUDGET_RANGES = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Not sure yet — advise me",
];

export const TIMING_OPTIONS = [
  "Before my next track day",
  "Within 2 weeks",
  "Within 1–2 months",
  "This season",
  "Just planning ahead",
];
