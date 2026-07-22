import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FlagStatus from "@/components/FlagStatus";
import { formatEventDate } from "@/data/events";
import { money } from "@/data/packages";

/**
 * Event card per the framework spec: name · date+track ·
 * audience · starting price · availability · action button.
 */
export default function EventCard({ event }) {
  const inquiry = !event.startingPrice;
  return (
    <article className="card card-hover group flex flex-col">
      <div className="flex items-start justify-between gap-3 border-b border-line p-5">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {formatEventDate(event.date)}
          </p>
          <h3 className="mt-2 font-display text-2xl uppercase leading-tight">
            {event.name}
          </h3>
        </div>
        <FlagStatus status={event.availability} label={event.slotsNote} />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <p className="text-sm text-chrome">
          {event.track} · {event.city}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/80">
          {event.audience}
        </p>
        <p className="text-sm text-chrome/90">{event.format}</p>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            <p className="tt-label">{inquiry ? "Pricing" : "Starting at"}</p>
            <p className="font-display text-3xl">
              {inquiry ? "Inquiry" : money(event.startingPrice)}
            </p>
          </div>
          <Link
            href={`/track-days/${event.slug}`}
            className="btn-primary btn-sm"
          >
            {event.availability === "waitlist"
              ? "Join Waitlist"
              : "Reserve Your Spot"}
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/**
 * Signature element: the "timing board" — upcoming events laid
 * out like a live timing screen. Grid position encodes real
 * order (soonest event first). Used on the homepage.
 */
export function TimingBoard({ events }) {
  return (
    <div className="card overflow-hidden">
      {/* header row */}
      <div className="hidden grid-cols-[64px_1.4fr_1fr_150px_140px_170px] gap-4 border-b border-line bg-panel2 px-5 py-3 md:grid">
        {["Pos", "Event", "Track", "Date", "Starting At", "Status"].map(
          (h) => (
            <p key={h} className="tt-label">
              {h}
            </p>
          )
        )}
      </div>

      {events.map((event, i) => {
        const inquiry = !event.startingPrice;
        return (
          <Link
            key={event.slug}
            href={`/track-days/${event.slug}`}
            className="group grid grid-cols-1 gap-3 border-b border-line px-5 py-5 transition-colors last:border-0 hover:bg-panel2 md:grid-cols-[64px_1.4fr_1fr_150px_140px_170px] md:items-center md:gap-4"
          >
            <p className="font-display text-2xl text-chrome/60 transition-colors group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </p>
            <div>
              <p className="font-display text-xl uppercase leading-tight sm:text-2xl">
                {event.name}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome md:hidden">
                {event.track}
              </p>
            </div>
            <p className="hidden text-sm text-chrome md:block">
              {event.track}
            </p>
            <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-paper">
              {formatEventDate(event.date)}
            </p>
            <p className="font-mono text-[13px] text-paper">
              {inquiry ? "Inquiry" : money(event.startingPrice)}
            </p>
            <div className="flex items-center justify-between gap-3 md:justify-start">
              <FlagStatus status={event.availability} label={event.slotsNote} />
              <ArrowRight
                size={16}
                className="text-chrome transition-transform group-hover:translate-x-1 group-hover:text-accent"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
