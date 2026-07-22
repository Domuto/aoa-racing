import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Flag,
  Wrench,
  Trophy,
  CalendarDays,
  Car,
  Layers,
  PlusCircle,
  BadgeCheck,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { EVENTS, formatEventDate } from "@/data/events";
import { SERVICES } from "@/data/services";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { TimingBoard } from "@/components/EventCard";
import Media from "@/components/Media";
import LeadCapture from "@/components/LeadCapture";

/* ------------------------------------------------------------------
   Section 2 data — the three revenue streams, in framework priority
   order. The P1/P2/P3 grid positions encode real commercial priority.
------------------------------------------------------------------- */
const STREAMS = [
  {
    pos: "P1",
    icon: Flag,
    title: "Racing",
    body: "A real race program with track-proven coaching, support, and seat-time pathways for drivers who want to level up fast.",
    href: "/track-days",
    cta: "Get On Track",
    src: "/images/events/vir/dsc_4035.jpg",
    label: "AOA race weekend energy — grid rolling out at VIR",
  },
  {
    pos: "P2",
    icon: Wrench,
    title: "Track Days",
    body: "Choose your date, pick your package, and drive hard at iconic Southeast circuits with AOA support from paddock to checkered flag.",
    href: "/shop",
    cta: "View Events",
    src: "/images/events/barber/dsc_4818.jpg",
    label: "Track day action at Barber Motorsports Park",
  },
  {
    pos: "P3",
    icon: Trophy,
    title: "Cars",
    body: "Performance prep, fleet options, and race-ready cars handled by a team that builds, services, and drives at speed.",
    href: "/race-team",
    cta: "Explore Fleet + Builds",
    src: "/images/events/sonoma/dsc_5156.jpg",
    label: "AOA cars at speed — Sonoma Raceway",
  },
];

const BUILD_STEPS = [
  {
    icon: CalendarDays,
    title: "Pick your date",
    body: "Choose an upcoming track day from the calendar.",
  },
  {
    icon: Car,
    title: "Your car or ours",
    body: "Drive your own vehicle or reserve a prepped AOA fleet car.",
  },
  {
    icon: Layers,
    title: "Select a package",
    body: "Entry, Performance, Premium, or a private group format.",
  },
  {
    icon: PlusCircle,
    title: "Add what you need",
    body: "Tires, coaching, helmet rental, extra sessions, photography.",
  },
];

export default function HomePage() {
  const upcoming = EVENTS.slice(0, 5);
  const next = EVENTS[0];

  return (
    <>
      {/* ============ 1 · HERO ============ */}
      <section className="relative isolate overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="AOA car at speed on track"
        >
          <source src="/images/aoa.mp4" type="video/mp4" />
        </video>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(100deg, rgb(0 0 0 / 0.78) 0%, rgb(0 0 0 / 0.42) 46%, rgb(0 0 0 / 0.74) 100%), radial-gradient(90% 60% at 78% 12%, rgb(var(--accent) / 0.25), transparent 56%), repeating-linear-gradient(45deg, rgb(255 255 255 / 0.02) 0 2px, transparent 2px 14px)",
          }}
        />
        <div className="container-x relative flex min-h-[84svh] items-end py-14 sm:py-20 lg:min-h-[88svh] lg:py-24">
          <div className="max-w-2xl">
            <p className="tt-label flex items-center gap-3 text-paper/85">
              <span className="inline-block h-[2px] w-8 bg-accent" aria-hidden="true" />
              Kennesaw, GA · Racing · Track Days · Cars
            </p>
            <h1 className="display mt-6 text-[16vw] text-white sm:text-7xl lg:text-8xl">
              Get ready to
              <br />
              go <span className="text-accent">All Out.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/90">
              Drive real race cars at breakneck speeds. AOA blends track-day
              access, race-team expertise, and serious car prep into one
              premium motorsport experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/track-days" className="btn-primary">
                Reserve Your Spot <ArrowRight size={16} />
              </Link>
              <Link href="/shop/quote" className="btn-ghost border-paper/35 bg-black/25 text-paper hover:border-paper/70 hover:bg-black/40">
                Build My Car Plan
              </Link>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-3 border-t border-paper/25 pt-6 sm:grid-cols-3">
              <div>
                <dt className="tt-label text-paper/65">Next event</dt>
                <dd className="mt-1 font-mono text-[13px] text-paper">
                  {formatEventDate(next.date)}
                </dd>
              </div>
              <div>
                <dt className="tt-label text-paper/65">Circuit</dt>
                <dd className="mt-1 font-mono text-[13px] text-paper">
                  {next.track.replace("Michelin Raceway ", "")}
                </dd>
              </div>
              <div>
                <dt className="tt-label text-paper/65">The shop</dt>
                <dd className="mt-1 flex items-center gap-1.5 font-mono text-[13px] text-paper">
                  <Phone size={12} className="text-accent" />
                  {SITE.phoneDisplay}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-10 hidden px-5 sm:block sm:px-8" aria-hidden="true">
          <div className="mx-auto flex w-full max-w-site justify-end">
            <p className="border border-paper/20 bg-black/35 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/85 backdrop-blur-sm">
              Main Straight Feed · AOA Racing
            </p>
          </div>
        </div>
        <div className="kerb" aria-hidden="true" />
      </section>

      {/* ============ 2 · THREE REVENUE STREAMS ============ */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="Core experiences"
              title={
                <>
                  Pick your <span className="text-accent">lane</span>
                </>
              }
              lede="From the source AOA experience: Racing, Track Days, and Cars. Same foundation, rebuilt with a cleaner flow and stronger visual impact."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {STREAMS.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.pos} delay={i * 90}>
                  <Link
                    href={s.href}
                    className={`card card-hover group flex h-full flex-col ${
                      i === 0 ? "border-accent/60" : ""
                    }`}
                  >
                    <Media
                      src={s.src}
                      alt={s.label}
                      ratio="aspect-[16/10]"
                      className="border-0 border-b border-line"
                      imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2.5">
                          <Icon size={18} className="text-accent" />
                          <span className="font-display text-2xl uppercase">
                            {s.title}
                          </span>
                        </span>
                        <span
                          className={`font-display text-2xl ${
                            i === 0 ? "text-accent" : "text-chrome/40"
                          }`}
                        >
                          {s.pos}
                        </span>
                      </div>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-chrome">
                        {s.body}
                      </p>
                      <p className="mt-5 flex items-center gap-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors group-hover:text-accent">
                        {s.cta}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ 3 · UPCOMING TRACK DAYS (signature board) ============ */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                code="Live board — real dates, real tracks"
                title="Upcoming track days"
              />
              <Link href="/track-days" className="btn-ghost btn-sm">
                View All Events <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <TimingBoard events={upcoming} />
          </Reveal>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/60">
            Green flag = open slots · Yellow = limited · Waitlist = pit closed
          </p>
        </div>
      </section>

      {/* ============ 4 · BUILD YOUR EXPERIENCE ============ */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="On your mark"
              title="Build your day in four moves"
              lede="Pick your date, choose your car, lock your package, and add support. Clear, fast, and fully configurable before checkout."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUILD_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 80}>
                  <div className="card h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel2 text-accent">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="font-display text-3xl text-chrome/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl uppercase">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-chrome">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-8">
            <Link href="/track-days" className="btn-primary">
              Build Your Track Package <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ 5 · PERFORMANCE SHOP ============ */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Media
              src="/images/events/barber/dsc_6663.jpg"
              alt="AOA-prepped car in the paddock at Barber Motorsports Park"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHead
              code="P2 — Performance shop"
              title="Prepped by people who race"
              lede="AOA prepares and upgrades cars with a track-aware point of view — from pre-event inspections to full builds."
            />
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {SERVICES.slice(0, 8).map((s) => (
                <li
                  key={s.id}
                  className="flex items-center gap-2 text-sm text-chrome"
                >
                  <span className="h-1 w-1 shrink-0 bg-accent" aria-hidden="true" />
                  {s.name}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop/quote" className="btn-primary">
                Request a Shop Quote
              </Link>
              <a href={SITE.phoneTel} className="btn-ghost">
                <Phone size={15} /> Call the Shop
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 6 · RACE TEAM AUTHORITY ============ */}
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <SectionHead
              code="P3 — Race team"
              title="We race what we run"
              lede="AOA fields cars in real motorsports competition. That credibility flows back into every track day and every car on the lift — and it opens doors for drivers and sponsors."
            />
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {[
                ["Seasons run", "[XX]"],
                ["Podiums", "[XX]"],
                ["Team cars", "[XX]"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dd className="font-display text-4xl text-paper">{value}</dd>
                  <dt className="tt-label mt-1">{label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-chrome/50">
              Stats are placeholders — verified results only, per AOA
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/race-team" className="btn-primary">
                Meet the Race Team
              </Link>
              <Link href="/race-team#inquiries" className="btn-ghost">
                Request Sponsorship Information
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <Media
              src="/images/events/vir/dsc_2418.jpg"
              alt="AOA race team on a race weekend at Virginia International Raceway"
              ratio="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ 7 · PROOF / GALLERY ============ */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead
                code="Proof — real customers, real tracks"
                title="Seen at speed"
              />
              <div className="flex flex-wrap gap-3">
                <Link href="/gallery" className="btn-ghost btn-sm">
                  View Full Gallery <ArrowUpRight size={14} />
                </Link>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost btn-sm"
                >
                  Follow @aoamotorsports <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              ["AOA on track at Barber Motorsports Park", "/images/events/barber/dsc_2678.jpg"],
              ["Pit lane at Virginia International Raceway", "/images/events/vir/dsc_7197.jpg"],
              ["Race weekend at Sonoma Raceway", "/images/events/sonoma/dsc_6777.jpg"],
              ["Wheel-to-wheel at Barber Motorsports Park", "/images/events/barber/dsc_9023.jpg"],
            ].map(([alt, src], i) => (
              <Reveal key={src} delay={i * 70}>
                <Link href="/gallery" className="group block">
                  <Media
                    src={src}
                    alt={alt}
                    ratio="aspect-square"
                    imgClassName="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="card flex flex-col items-start gap-4 border-l-2 border-l-accent p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-3 text-sm text-chrome">
                <BadgeCheck size={18} className="shrink-0 text-accent" />
                Reviews and results shown on this site are verified before
                publishing — placeholder space reserved for real customer
                quotes.
              </p>
              <a
                href={SITE.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost btn-sm shrink-0"
              >
                Watch AOA on YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 8 · LEAD CAPTURE ============ */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="card grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="tt-label tt-label--accent">Stay on the grid</p>
                <h2 className="display mt-3 text-4xl sm:text-5xl">
                  Sign up for updates
                </h2>
                <p className="mt-4 max-w-lg text-chrome">
                  Be first to know about new driving events, vehicle
                  availability, and race-weekend announcements.
                </p>
              </div>
              <LeadCapture />
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/60">
              <MapPin size={12} className="text-accent" />
              {SITE.address.line1}, {SITE.address.city}, {SITE.address.state} —
              15 min from downtown Kennesaw
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
