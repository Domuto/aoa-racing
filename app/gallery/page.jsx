import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { GALLERY, eventPhotos } from "@/data/gallery";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import GalleryGrid from "@/components/GalleryGrid";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Gallery — AOA Racing at the Track",
  description:
    "Race-weekend photography from AOA Racing — on-track action, paddock, and pit lane at Barber Motorsports Park, VIR, and Sonoma Raceway.",
};

export default function GalleryPage() {
  const totalPhotos = GALLERY.reduce((n, e) => n + e.photos.length, 0);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code={`Shot at speed — ${totalPhotos} photos`}
              title="Gallery"
              lede="Real race weekends, real cars, real AOA drivers — straight from the paddock and the pit wall. Tap any frame to view it full size."
            />
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid gap-4 sm:grid-cols-3">
              {GALLERY.map((e) => (
                <a
                  key={e.slug}
                  href={`#${e.slug}`}
                  className="card card-hover group overflow-hidden"
                >
                  <Media
                    src={`${e.dir}/${e.cover}`}
                    alt={`AOA Racing at ${e.name}`}
                    ratio="aspect-[16/10]"
                    className="border-0 border-b border-line"
                    imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-display text-xl uppercase">
                        {e.shortName}
                      </h3>
                      <p className="mt-0.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
                        <MapPin size={12} className="text-accent" />
                        {e.location}
                      </p>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
                      {e.photos.length} shots
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* One section per event */}
      {GALLERY.map((e, i) => (
        <section
          key={e.slug}
          id={e.slug}
          className={`section-pad scroll-mt-24 ${
            i % 2 ? "border-y border-line bg-panel/40" : ""
          }`}
        >
          <div className="container-x">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionHead
                  code={`${e.season} · ${e.location}`}
                  title={e.shortName}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
                  {e.name}
                </p>
              </div>
            </Reveal>
            <Reveal className="mt-8">
              <GalleryGrid photos={eventPhotos(e)} />
            </Reveal>
          </div>
        </section>
      ))}

      {/* Follow CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="card flex flex-col items-start gap-4 border-l-2 border-l-accent p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-3 text-sm text-chrome">
              <Camera size={18} className="shrink-0 text-accent" />
              More race-weekend photos and video land on our channels after
              every event.
            </p>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost btn-sm shrink-0"
            >
              Follow @aoamotorsports <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
