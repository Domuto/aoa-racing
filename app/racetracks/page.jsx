import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { TRACKS } from "@/data/tracks";
import { EVENTS } from "@/data/events";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Racetracks — Where AOA Runs",
  description:
    "The circuits AOA Racing calls home: Road Atlanta, Atlanta Motorsports Park, Barber, Roebling Road, and Carolina Motorsports Park.",
};

export default function RacetracksPage() {
  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="Know before you go"
              title="The circuits we run"
              lede="Every venue, demystified — what it's like, how far it is from the shop, and what first-timers should know. No track feels intimidating once you've read the card."
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x space-y-8">
          {TRACKS.map((track, i) => {
            const upcomingCount = EVENTS.filter(
              (e) => e.trackSlug === track.slug
            ).length;
            return (
              <Reveal key={track.slug} delay={i * 50}>
                <article className="card card-hover grid gap-0 overflow-hidden lg:grid-cols-[420px_1fr]">
                  <Media
                    src={track.image}
                    alt={`AOA Racing on track — ${track.shortName}`}
                    ratio="aspect-[16/10] lg:aspect-auto lg:h-full"
                    className="border-0 lg:border-r lg:border-line"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="flex flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-3xl uppercase leading-tight sm:text-4xl">
                          {track.shortName}
                        </h2>
                        <p className="mt-1 text-sm text-chrome">{track.name}</p>
                      </div>
                      <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
                        <MapPin size={13} className="text-accent" />
                        {track.location}
                      </p>
                    </div>

                    <dl className="mt-5 grid grid-cols-3 gap-4 border-y border-line py-4">
                      <div>
                        <dd className="font-display text-2xl">{track.length}</dd>
                        <dt className="tt-label mt-0.5">Length</dt>
                      </div>
                      <div>
                        <dd className="font-display text-2xl">{track.turns}</dd>
                        <dt className="tt-label mt-0.5">Turns</dt>
                      </div>
                      <div>
                        <dd className="flex items-center gap-1.5 font-display text-2xl">
                          <Clock size={16} className="text-accent" />
                          {track.driveTime.split(" from")[0]}
                        </dd>
                        <dt className="tt-label mt-0.5">From the shop</dt>
                      </div>
                    </dl>

                    <p className="mt-5 text-sm leading-relaxed text-chrome">
                      {track.blurb}
                    </p>
                    <p className="mt-4 border-l-2 border-accent pl-4 text-sm leading-relaxed text-chrome">
                      <span className="font-semibold text-paper">
                        First time here?
                      </span>{" "}
                      {track.firstTimer}
                    </p>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
                      Signature: {track.signature}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/track-days?track=${track.slug}`}
                        className="btn-primary btn-sm"
                      >
                        View Events at This Track <ArrowRight size={14} />
                      </Link>
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
                        {upcomingCount > 0
                          ? `${upcomingCount} upcoming ${upcomingCount === 1 ? "event" : "events"}`
                          : "New dates announced regularly"}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
