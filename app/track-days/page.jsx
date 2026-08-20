import Link from "next/link";
import { Phone } from "lucide-react";
import { EVENTS } from "@/data/events";
import { TRACKS } from "@/data/tracks";
import { FLEET, FLEET_NOTES, money } from "@/data/packages";
import { SITE } from "@/lib/site";
import EventCard from "@/components/EventCard";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Track Days — Dates, Packages & Booking",
  description:
    "Upcoming AOA Racing track days at Road Atlanta, AMP, Barber, and more. Pick an event, build your package, and reserve your spot.",
};

export default async function TrackDaysPage({ searchParams }) {
  const sp = await searchParams;
  const activeTrack = typeof sp?.track === "string" ? sp.track : "";
  const events = activeTrack
    ? EVENTS.filter((e) => e.trackSlug === activeTrack)
    : EVENTS;

  const trackName = TRACKS.find((t) => t.slug === activeTrack)?.shortName;

  return (
    <>
      {/* Page hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="P1 — Highest priority · The event store"
              title="Track days"
              lede="Pick a date, understand the choices, and start a reservation without calling first. Own car or AOA fleet — every event is configurable."
            />
          </Reveal>

          {/* Track filter chips */}
          <Reveal className="mt-8">
            <div className="flex flex-wrap gap-2">
              <Link
                href="/track-days"
                className={`border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                  !activeTrack
                    ? "border-accent bg-accent text-white"
                    : "border-line text-chrome hover:border-chrome hover:text-paper"
                }`}
              >
                All Tracks
              </Link>
              {TRACKS.map((t) => (
                <Link
                  key={t.slug}
                  href={`/track-days?track=${t.slug}`}
                  className={`border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                    activeTrack === t.slug
                      ? "border-accent bg-accent text-white"
                      : "border-line text-chrome hover:border-chrome hover:text-paper"
                  }`}
                >
                  {t.shortName}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Event grid */}
      <section className="section-pad">
        <div className="container-x">
          {events.length === 0 ? (
            <div className="card p-10 text-center">
              <h2 className="display text-3xl">
                Nothing on the calendar at {trackName} yet
              </h2>
              <p className="mx-auto mt-3 max-w-md text-chrome">
                New dates drop regularly. Join the list on the homepage or
                call the shop — we may be able to point you at the next one
                before it's public.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link href="/track-days" className="btn-primary">
                  View All Events
                </Link>
                <a href={SITE.phoneTel} className="btn-ghost">
                  <Phone size={15} /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {events.map((event, i) => (
                <Reveal key={event.slug} delay={(i % 3) * 80}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          )}

          {/* Fleet & pricing */}
          <Reveal className="mt-16">
            <SectionHead
              code="Arrive and drive"
              title="Track day fleet & pricing"
              lede="Rent a prepped AOA vehicle for your event — or bring your own car if eligible."
            />
            <div className="card mt-8 overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-line bg-panel2 px-5 py-3">
                {["Vehicle", "Daily Rate"].map((h) => (
                  <p key={h} className="tt-label">
                    {h}
                  </p>
                ))}
              </div>
              {FLEET.map((v) => (
                <div
                  key={v.id}
                  className="border-b border-line px-5 py-4 last:border-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-semibold text-paper">{v.name}</p>
                    <p className="whitespace-nowrap font-mono text-paper">
                      {money(v.price)}
                      <span className="text-chrome">/day</span>
                    </p>
                  </div>
                  {v.tagline && (
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                      {v.tagline}
                    </p>
                  )}
                  {v.specs && (
                    <p className="mt-1.5 text-[13px] leading-relaxed text-chrome">
                      {v.specs.join(" · ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <ul className="mt-4 space-y-1.5">
              {FLEET_NOTES.map((note) => (
                <li
                  key={note}
                  className="flex gap-2 text-[13px] leading-relaxed text-chrome"
                >
                  <span className="text-accent" aria-hidden="true">
                    –
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* How booking works */}
          <Reveal className="mt-16">
            <div className="card grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
              {[
                "Select your event date and track",
                "Drive your own car, rent an AOA vehicle, or ask about availability",
                "Choose your package and add-ons — tires, coaching, helmets, sessions",
                "Pay a deposit or the full amount, get confirmation and event instructions",
              ].map((step, i) => (
                <div key={step} className="flex gap-3">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-chrome">{step}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-6">
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-chrome/60">
              Every reservation includes safety requirements, waiver link, and
              event logistics before payment ·{" "}
              <Link href="/policies" className="underline hover:text-paper">
                Read policies
              </Link>{" "}
              ·{" "}
              <Link href="/faq" className="underline hover:text-paper">
                Track day FAQ
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
