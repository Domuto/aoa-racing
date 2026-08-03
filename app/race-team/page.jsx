import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import RaceInquiryTabs from "@/components/RaceInquiryTabs";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Race Team — Programs, Sponsorship & Race Support",
  description:
    "AOA Racing's motorsports program: team cars, race schedule, results, driver pathways, sponsorship opportunities, and trackside race support.",
};

// ⚠️ PLACEHOLDER content below — cars, schedule rows, results, and
// drivers must be replaced with AOA's verified information.
const TEAM_CARS = [
  {
    name: "Team Car #1 — [Class]",
    src: "/images/events/barber/dsc_3590.jpg",
    note: "[PLACEHOLDER — chassis, class, build highlights]",
  },
  {
    name: "Team Car #2 — [Class]",
    src: "/images/events/vir/dsc_3836.jpg",
    note: "[PLACEHOLDER — chassis, class, build highlights]",
  },
  {
    name: "Team Car #3 — [Class]",
    src: "/images/events/sonoma/dsc_3901.jpg",
    note: "[PLACEHOLDER — chassis, class, build highlights]",
  },
];

const SCHEDULE = [
  ["[DATE]", "[Series / Event name]", "[Track]", "Entered"],
  ["[DATE]", "[Series / Event name]", "[Track]", "Entered"],
  ["[DATE]", "[Series / Event name]", "[Track]", "Planned"],
];

const RESULTS = [
  ["[DATE]", "[Event]", "[Class]", "[Finish — e.g., P2]"],
  ["[DATE]", "[Event]", "[Class]", "[Finish]"],
  ["[DATE]", "[Event]", "[Class]", "[Finish]"],
];

const DRIVERS = [
  { name: "[Driver Name]", role: "[Role / class]", src: "/images/events/vir/dsc_5573.jpg" },
  { name: "[Driver Name]", role: "[Role / class]", src: "/images/events/barber/dsc_7461.jpg" },
];

export default function RaceTeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <SectionHead
              code="P3 — Real motorsports credibility"
              title="The AOA race team"
              lede="This isn't marketing garnish — AOA fields cars in real competition. The race program is how the shop stays sharp, how drivers level up, and how partners get in front of a crowd that loves cars."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.racingEmail}?subject=Racing%20Inquiry`}
                className="btn-primary"
              >
                Contact Us About Racing
              </a>
              <a href={SITE.phoneTel} className="btn-ghost sm:hidden">
                Call {SITE.phoneDisplay}
              </a>
              <a href="#inquiries" className="btn-ghost">
                Explore Race Programs
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Media
              src="/images/events/vir/dsc_0002.jpg"
              alt="AOA race team car and crew on the grid at Virginia International Raceway"
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Cars & builds */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead code="The machinery" title="Vehicles & builds" />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-chrome/50">
              Placeholder entries — replace with AOA&apos;s real cars
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TEAM_CARS.map((car, i) => (
              <Reveal key={car.name} delay={i * 80}>
                <div className="card card-hover h-full">
                  <Media
                    src={car.src}
                    alt={car.name}
                    ratio="aspect-[16/10]"
                    className="border-0 border-b border-line"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl uppercase">
                      {car.name}
                    </h3>
                    <p className="mt-2 text-sm text-chrome">{car.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule + results */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead code="Where we'll be" title="Race schedule" />
            <div className="card mt-8 overflow-hidden">
              <div className="grid grid-cols-[110px_1fr_1fr_90px] gap-3 border-b border-line bg-panel2 px-5 py-3">
                {["Date", "Event", "Track", "Status"].map((h) => (
                  <p key={h} className="tt-label">
                    {h}
                  </p>
                ))}
              </div>
              {SCHEDULE.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[110px_1fr_1fr_90px] gap-3 border-b border-line px-5 py-4 text-sm last:border-0"
                >
                  <p className="font-mono text-[12px] text-accent">{row[0]}</p>
                  <p className="text-paper">{row[1]}</p>
                  <p className="text-chrome">{row[2]}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-chrome">
                    {row[3]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHead code="Verified only" title="Results & recaps" />
            <div className="card mt-8 overflow-hidden">
              <div className="grid grid-cols-[110px_1fr_1fr_90px] gap-3 border-b border-line bg-panel2 px-5 py-3">
                {["Date", "Event", "Class", "Finish"].map((h) => (
                  <p key={h} className="tt-label">
                    {h}
                  </p>
                ))}
              </div>
              {RESULTS.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[110px_1fr_1fr_90px] gap-3 border-b border-line px-5 py-4 text-sm last:border-0"
                >
                  <p className="font-mono text-[12px] text-accent">{row[0]}</p>
                  <p className="text-paper">{row[1]}</p>
                  <p className="text-chrome">{row[2]}</p>
                  <p className="font-display text-lg">{row[3]}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-chrome/50">
              Framework rule: only verified results are published. Race recaps
              link here once AOA supplies write-ups or video.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Drivers + media */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead code="Behind the wheel" title="Drivers" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {DRIVERS.map((d) => (
                <div key={d.name} className="card card-hover">
                  <Media
                    src={d.src}
                    alt="AOA race team driver on a race weekend"
                    ratio="aspect-square"
                    className="border-0 border-b border-line"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl uppercase">{d.name}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
                      {d.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHead code="From the paddock" title="Team media" />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "/images/events/vir/dsc_2002.jpg",
                "/images/events/sonoma/dsc_8305.jpg",
                "/images/events/barber/dsc_6837.jpg",
                "/images/events/vir/dsc_8381.jpg",
              ].map((src, i) => (
                <Media
                  key={src}
                  src={src}
                  alt={`AOA race weekend photo ${i + 1}`}
                  ratio="aspect-square"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              ))}
            </div>
            <a
              href={SITE.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost btn-sm mt-6"
            >
              More on Instagram <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Inquiry paths */}
      <section id="inquiries" className="section-pad border-t border-line bg-panel/40 scroll-mt-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="Three ways in"
              title="Work with the team"
              lede="Sponsorship, driver and race-program interest, or race support for your own car — each path lands with the right person, already tagged."
            />
          </Reveal>
          <Reveal className="mt-8">
            <div className="card border-l-2 border-l-accent p-6">
              <p className="text-sm leading-relaxed text-chrome">
                For competitive racing opportunities, pricing varies depending
                on the event, series, support requirements, and vehicle.{" "}
                <span className="text-paper">
                  Contact us directly to discuss race participation and receive
                  a custom quote.
                </span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${SITE.racingEmail}?subject=Racing%20Inquiry`}
                  className="btn-primary"
                >
                  Contact Us About Racing
                </a>
                <p className="font-mono text-[12px] text-chrome">
                  <a
                    href={`mailto:${SITE.racingEmail}`}
                    className="text-paper underline hover:text-accent"
                  >
                    {SITE.racingEmail}
                  </a>{" "}
                  ·{" "}
                  <a
                    href={SITE.phoneTel}
                    className="text-paper underline hover:text-accent"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-10">
            <RaceInquiryTabs />
          </Reveal>
          <Reveal className="mt-8">
            <p className="text-sm text-chrome">
              Prefer the phone? Call the shop at{" "}
              <a href={SITE.phoneTel} className="text-paper underline hover:text-accent">
                {SITE.phoneDisplay}
              </a>{" "}
              and ask for the race program.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
