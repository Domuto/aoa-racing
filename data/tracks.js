// ============================================================
// RACETRACKS — venues shown on /racetracks and used by events.
// Track specs are public info; blurbs are draft copy for AOA
// to approve. Add/remove tracks freely.
// ============================================================

export const TRACKS = [
  {
    slug: "road-atlanta",
    name: "Michelin Raceway Road Atlanta",
    shortName: "Road Atlanta",
    location: "Braselton, GA",
    length: "2.54 mi",
    turns: 12,
    driveTime: "45 min from the shop",
    signature: "The Esses & Turn 12 downhill",
    // Stand-in AOA action shot — replace with a real Road Atlanta photo.
    image: "/images/events/vir/dsc_1163.jpg",
    blurb:
      "Georgia's crown jewel — fast, flowing, and famous for the plunge through the Esses and the blind drop into Turn 12. Home of Petit Le Mans and the benchmark every Southeast driver measures themselves against.",
    firstTimer:
      "Elevation change is the story here. Expect big speed on the back straight and commit to learning the Esses with an instructor before chasing lap times.",
  },
  {
    slug: "atlanta-motorsports-park",
    name: "Atlanta Motorsports Park",
    shortName: "AMP",
    location: "Dawsonville, GA",
    length: "2.00 mi",
    turns: 16,
    driveTime: "55 min from the shop",
    signature: "Formula 1-inspired elevation",
    // Stand-in AOA action shot — replace with a real AMP photo.
    image: "/images/events/sonoma/dsc_4175.jpg",
    blurb:
      "A Hermann Tilke-designed members' circuit in the North Georgia mountains. Technical, rhythmic, and hard on brakes — one of the best tracks in the country to build real car-control skills.",
    firstTimer:
      "Short straights and constant cornering make AMP forgiving on top speed but demanding on precision. Great first track day venue.",
  },
  {
    slug: "barber-motorsports-park",
    name: "Barber Motorsports Park",
    shortName: "Barber",
    location: "Birmingham, AL",
    length: "2.38 mi",
    turns: 17,
    driveTime: "2 hr 15 min from the shop",
    signature: "The Alabama rollercoaster",
    // Real photo from the AOA shoot at Barber.
    image: "/images/events/barber/dsc_5075.jpg",
    blurb:
      "Immaculate grounds, museum-grade facility, and a ribbon of tarmac that never stops turning. Barber rewards smooth hands and punishes overdriving — a favorite for multi-day trips.",
    firstTimer:
      "Reference points matter here; the blind crests catch people out. Coaching add-on strongly recommended for your first visit.",
  },
  {
    slug: "roebling-road",
    name: "Roebling Road Raceway",
    shortName: "Roebling",
    location: "Bloomingdale, GA",
    length: "2.02 mi",
    turns: 9,
    driveTime: "3 hr 30 min from the shop",
    signature: "Momentum-keeping sweepers",
    // Stand-in AOA action shot — replace with a real Roebling Road photo.
    image: "/images/events/vir/dsc_6151.jpg",
    blurb:
      "Fast, flat, and friendly near Savannah. Long sweepers and a huge front straight make Roebling ideal for learning momentum driving and validating aero or suspension changes.",
    firstTimer:
      "Low-stress layout with generous runoff — a confidence-builder and a great venue for first-time track drivers.",
  },
  {
    slug: "carolina-motorsports-park",
    name: "Carolina Motorsports Park",
    shortName: "CMP",
    location: "Kershaw, SC",
    length: "2.27 mi",
    turns: 14,
    driveTime: "3 hr 15 min from the shop",
    signature: "Technical infield rhythm",
    // Stand-in AOA action shot — replace with a real CMP photo.
    image: "/images/events/sonoma/dsc_2618.jpg",
    blurb:
      "A driver's track with a bit of everything — heavy braking zones, a technical infield, and enough straight to stretch a built car's legs. Popular for time trial and race weekends.",
    firstTimer:
      "Varied corner types make CMP an excellent classroom. Expect to work the brakes; a Track-Day Prep inspection pays off here.",
  },
];

export function getTrack(slug) {
  return TRACKS.find((t) => t.slug === slug);
}
