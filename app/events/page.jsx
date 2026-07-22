import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { EVENTS, eventMonthKey } from "@/data/events";
import { money } from "@/data/packages";
import FlagStatus from "@/components/FlagStatus";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Events Calendar — Track Days, Race Weekends & Clinics",
  description:
    "The full AOA Racing calendar: track days, race weekends, clinics, and community events across the Southeast.",
};

function groupByMonth(events) {
  const map = new Map();
  for (const e of events) {
    const key = eventMonthKey(e.date);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(e);
  }
  return [...map.entries()];
}

function dayParts(iso) {
  const d = new Date(iso + "T12:00:00");
  return {
    day: d.toLocaleDateString("en-US", { day: "2-digit" }),
    weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
  };
}

export default function EventsPage() {
  const months = groupByMonth(EVENTS);

  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="The full calendar"
              title="Events"
              lede="Every AOA date in one place — track days, race weekends, clinics, and community events. Tap any event to register or reserve."
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x space-y-14">
          {months.map(([month, events], mi) => (
            <Reveal key={month} delay={mi * 60}>
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <CalendarDays size={18} className="text-accent" />
                  <h2 className="font-display text-3xl uppercase">{month}</h2>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <div className="card divide-y divide-line">
                  {events.map((event) => {
                    const { day, weekday } = dayParts(event.date);
                    return (
                      <Link
                        key={event.slug}
                        href={`/track-days/${event.slug}`}
                        className="group flex flex-col gap-4 px-5 py-5 transition-colors hover:bg-panel2 sm:flex-row sm:items-center sm:px-7"
                      >
                        {/* date rail */}
                        <div className="flex w-20 shrink-0 flex-col items-center border border-line bg-panel2 py-2">
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                            {weekday}
                          </span>
                          <span className="font-display text-3xl leading-none">
                                {day}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                            {event.name}
                          </h3>
                          <p className="mt-1 text-sm text-chrome">
                            {event.track} · {event.city}
                          </p>
                          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-chrome/70">
                            {event.format}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-4">
                          <div className="text-right">
                            <p className="tt-label">
                              {event.startingPrice ? "From" : "Pricing"}
                            </p>
                            <p className="font-display text-2xl">
                              {event.startingPrice
                                ? money(event.startingPrice)
                                : "Inquiry"}
                            </p>
                          </div>
                          <FlagStatus
                            status={event.availability}
                            label={event.slotsNote}
                          />
                          <ArrowRight
                            size={18}
                            className="text-chrome transition-transform group-hover:translate-x-1 group-hover:text-accent"
                          />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div className="card flex flex-col items-start justify-between gap-5 border-l-2 border-l-accent p-7 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl uppercase">
                  Want a private date?
                </h2>
                <p className="mt-1 text-sm text-chrome">
                  Corporate groups and private buyouts run on their own
                  calendar — tell us your headcount and timing.
                </p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0">
                Send Inquiry
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
