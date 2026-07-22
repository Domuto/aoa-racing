import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin } from "lucide-react";
import { getEvent, formatEventDate } from "@/data/events";
import { getTrack } from "@/data/tracks";
import FlagStatus from "@/components/FlagStatus";
import BookingConfigurator from "@/components/BookingConfigurator";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event not found" };
  return {
    title: `${event.name} — ${formatEventDate(event.date)}`,
    description: `${event.name} at ${event.track}. ${event.audience}. Reserve your spot with AOA Racing.`,
  };
}

// PLACEHOLDER schedule — replace with the real run sheet per event.
const DAY_SCHEDULE = [
  ["7:00 AM", "Gates open — unload, tech inspection"],
  ["8:15 AM", "Mandatory drivers' meeting"],
  ["9:00 AM", "Sessions begin — rotating run groups"],
  ["12:00 PM", "Lunch break — open paddock"],
  ["1:00 PM", "Afternoon sessions + coaching slots"],
  ["5:00 PM", "Checkered flag — debrief with AOA crew"],
];

export default async function EventDetailPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const track = getTrack(event.trackSlug);

  return (
    <>
      {/* Event header */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-12 sm:py-16">
          <Link
            href="/track-days"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-chrome transition-colors hover:text-paper"
          >
            <ArrowLeft size={13} /> All track days
          </Link>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
                {formatEventDate(event.date)}
              </p>
              <h1 className="display mt-3 text-5xl sm:text-6xl lg:text-7xl">
                {event.name}
              </h1>
              <p className="mt-4 flex items-center gap-2 text-chrome">
                <MapPin size={15} className="text-accent" />
                {event.track} · {event.city}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <FlagStatus
                  status={event.availability}
                  label={event.slotsNote}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
                  {event.audience}
                </span>
              </div>
            </div>
            <div className="w-full max-w-sm lg:w-auto">
              <Media
                src={track?.image || "/images/events/barber/dsc_4818.jpg"}
                alt={`AOA Racing at ${track?.shortName || event.track}`}
                ratio="aspect-[16/10]"
                priority
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Configurator */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <BookingConfigurator event={event} />
          </Reveal>
        </div>
      </section>

      {/* Day schedule + track intel */}
      <section className="section-pad border-t border-line bg-panel/40">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-3xl sm:text-4xl">
              What the day looks like
            </h2>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-chrome/60">
              Sample run sheet — final schedule in your confirmation email
            </p>
            <div className="card mt-6 divide-y divide-line">
              {DAY_SCHEDULE.map(([time, item]) => (
                <div key={time} className="flex gap-5 px-5 py-4">
                  <p className="w-20 shrink-0 font-mono text-[12px] uppercase tracking-[0.08em] text-accent">
                    {time}
                  </p>
                  <p className="text-sm text-chrome">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {track && (
            <Reveal delay={100}>
              <h2 className="display text-3xl sm:text-4xl">Know the circuit</h2>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-chrome/60">
                {track.name}
              </p>
              <div className="card mt-6 p-6">
                <dl className="grid grid-cols-3 gap-4 border-b border-line pb-5">
                  <div>
                    <dd className="font-display text-2xl">{track.length}</dd>
                    <dt className="tt-label mt-1">Length</dt>
                  </div>
                  <div>
                    <dd className="font-display text-2xl">{track.turns}</dd>
                    <dt className="tt-label mt-1">Turns</dt>
                  </div>
                  <div>
                    <dd className="font-display text-2xl leading-tight">
                      {track.driveTime.split(" from")[0]}
                    </dd>
                    <dt className="tt-label mt-1">From the shop</dt>
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
                <Link
                  href="/racetracks"
                  className="btn-ghost btn-sm mt-6"
                >
                  View All Racetracks
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
