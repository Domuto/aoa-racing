// ============================================================
// GALLERY — real AOA Racing event photography.
//
// Web-optimized copies (max 2400px, ~80% JPEG) live in
//   /public/images/events/<slug>/
// The full-resolution camera originals stay in the
//   "AOA Racing at …" folders under /public.
//
// To add/remove photos: drop an optimized file into the event
// folder and update its `photos` array below. `cover` must be
// one of the filenames in `photos`.
// ============================================================

export const GALLERY = [
  {
    slug: "barber",
    shortName: "Barber",
    name: "Barber Motorsports Park",
    location: "Birmingham, AL",
    season: "2026 Season",
    dir: "/images/events/barber",
    cover: "dsc_4818.jpg",
    photos: [
      "dsc_0085.jpg", "dsc_0094.jpg", "dsc_0256.jpg", "dsc_0465.jpg",
      "dsc_0662.jpg", "dsc_1703.jpg", "dsc_2318.jpg", "dsc_2678.jpg",
      "dsc_2925.jpg", "dsc_3393.jpg", "dsc_3590.jpg", "dsc_4356.jpg",
      "dsc_4604.jpg", "dsc_4818.jpg", "dsc_5075.jpg", "dsc_6401.jpg",
      "dsc_6413.jpg", "dsc_6663.jpg", "dsc_6683.jpg", "dsc_6837.jpg",
      "dsc_7461.jpg", "dsc_7564.jpg", "dsc_7704.jpg", "dsc_8418.jpg",
      "dsc_8946.jpg", "dsc_9023.jpg", "dsc_9154.jpg", "dsc_9778.jpg",
      "dsc_9987.jpg",
    ],
  },
  {
    slug: "vir",
    shortName: "VIR",
    name: "Virginia International Raceway",
    location: "Alton, VA",
    season: "2026 Season",
    dir: "/images/events/vir",
    cover: "dsc_4035.jpg",
    photos: [
      "dsc_0002.jpg", "dsc_0093.jpg", "dsc_0280.jpg", "dsc_0389.jpg",
      "dsc_0563.jpg", "dsc_1163.jpg", "dsc_1587.jpg", "dsc_1669.jpg",
      "dsc_2002.jpg", "dsc_2418.jpg", "dsc_3132.jpg", "dsc_3371.jpg",
      "dsc_3678.jpg", "dsc_3836.jpg", "dsc_4035.jpg", "dsc_4279.jpg",
      "dsc_4350.jpg", "dsc_4513.jpg", "dsc_5003.jpg", "dsc_5573.jpg",
      "dsc_5893.jpg", "dsc_6151.jpg", "dsc_7061.jpg", "dsc_7197.jpg",
      "dsc_7484.jpg", "dsc_7950.jpg", "dsc_8381.jpg", "dsc_8982.jpg",
      "dsc_9703.jpg", "dsc_9941.jpg",
    ],
  },
  {
    slug: "sonoma",
    shortName: "Sonoma",
    name: "Sonoma Raceway",
    location: "Sonoma, CA",
    season: "2026 Season",
    dir: "/images/events/sonoma",
    cover: "dsc_5156.jpg",
    photos: [
      "dsc_0140.jpg", "dsc_0965.jpg", "dsc_1364.jpg", "dsc_1832.jpg",
      "dsc_2276.jpg", "dsc_2618.jpg", "dsc_3193.jpg", "dsc_3901.jpg",
      "dsc_4175.jpg", "dsc_4915.jpg", "dsc_5156.jpg", "dsc_5176.jpg",
      "dsc_5331.jpg", "dsc_5588.jpg", "dsc_5995.jpg", "dsc_6346.jpg",
      "dsc_6777.jpg", "dsc_6896.jpg", "dsc_7383.jpg", "dsc_7440.jpg",
      "dsc_8305.jpg", "dsc_8355.jpg", "dsc_8998.jpg", "dsc_9248.jpg",
      "dsc_9822.jpg", "dsc_9834.jpg",
    ],
  },
];

export function getGalleryEvent(slug) {
  return GALLERY.find((e) => e.slug === slug);
}

/** Returns [{ src, alt }] for an event's photos, in order. */
export function eventPhotos(event) {
  return event.photos.map((file, i) => ({
    src: `${event.dir}/${file}`,
    alt: `AOA Racing at ${event.shortName} — ${event.season}, frame ${i + 1}`,
  }));
}
