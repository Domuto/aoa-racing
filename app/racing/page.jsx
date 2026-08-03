import Link from "next/link";
import { Mail, Phone, ArrowRight, Trophy, Gauge } from "lucide-react";
import { SITE } from "@/lib/site";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Racing — Endurance Programs, WRL & Zenith Racing Series",
  description:
    "AOA Racing competes in the World Racing League (GP1, GP2, GTO) and the Zenith Racing Series (ZR2, ZR3, ZR4). Endurance racing that sharpens our cars, drivers, and customer service.",
};

const WRL_CLASSES = ["GP1", "GP2", "GTO"];
const ZENITH_CLASSES = ["ZR2", "ZR3", "ZR4"];

const WHY_WE_RACE = [
  "Improved vehicle setups",
  "Better maintenance practices",
  "Driver coaching",
  "Performance development",
];

export default function RacingPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <SectionHead
              code="Our racing programs"
              title="We race what we build"
              lede="AOA Racing actively competes in multiple endurance racing series to continuously develop our drivers, refine our vehicles, and test our performance in real racing conditions."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.racingEmail}?subject=Racing%20Inquiry`}
                className="btn-primary"
              >
                Contact Us About Racing <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn-ghost">
                Contact John
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Media
              src="/images/events/vir/dsc_0002.jpg"
              alt="AOA Racing endurance car and crew on the grid"
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Series */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="Where we compete"
              title="Endurance racing series"
              lede="Two endurance series, multiple classes, a wide range of vehicles and drivers — every weekend is real-world R&D."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {/* WRL */}
            <Reveal>
              <div className="card h-full p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel2 text-accent">
                    <Trophy size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl uppercase">
                    World Racing League (WRL)
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {WRL_CLASSES.map((c) => (
                    <span
                      key={c}
                      className="border border-line bg-panel2 px-3 py-1 font-mono text-[12px] uppercase tracking-[0.14em] text-paper"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-relaxed text-chrome">
                  We compete in the <span className="text-paper">GP1</span>,{" "}
                  <span className="text-paper">GP2</span>, and{" "}
                  <span className="text-paper">GTO</span> classes within the
                  World Racing League. Endurance racing pushes our cars and our
                  crew for hours at a time, which directly improves vehicle
                  reliability, driver development, race strategy, and overall
                  performance.
                </p>
              </div>
            </Reveal>

            {/* Zenith */}
            <Reveal delay={100}>
              <div className="card h-full p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel2 text-accent">
                    <Gauge size={20} strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-2xl uppercase">
                    Zenith Racing Series
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ZENITH_CLASSES.map((c) => (
                    <span
                      key={c}
                      className="border border-line bg-panel2 px-3 py-1 font-mono text-[12px] uppercase tracking-[0.14em] text-paper"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <p className="mt-5 leading-relaxed text-chrome">
                  We compete in the <span className="text-paper">ZR2</span>,{" "}
                  <span className="text-paper">ZR3</span>, and{" "}
                  <span className="text-paper">ZR4</span> classes within the
                  Zenith Racing Series. Competing across multiple classes allows
                  us to work with a wide range of vehicles and drivers, broadening
                  the experience we bring back to the shop and to our customers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why we race */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal>
            <SectionHead
              code="Why we race"
              title="Racing is at our core"
              lede="Racing is at the core of AOA Racing. Every event provides valuable data and real-world experience that directly benefits our customers."
            />
          </Reveal>
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {WHY_WE_RACE.map((item) => (
                <li
                  key={item}
                  className="card flex items-center gap-3 p-5 text-sm text-paper"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Interested in racing + Contact John */}
      <section id="contact" className="section-pad scroll-mt-24">
        <div className="container-x">
          <Reveal>
            <div className="card grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="tt-label tt-label--accent">Interested in racing?</p>
                <h2 className="display mt-3 text-4xl sm:text-5xl">
                  Race with AOA Racing
                </h2>
                <p className="mt-4 max-w-lg text-chrome">
                  If you&apos;re interested in racing with AOA Racing, contact us
                  for additional information regarding race programs,
                  arrive-and-drive opportunities, team support, or future events.
                </p>
                <p className="mt-6 tt-label tt-label--accent">Contact John</p>
                <div className="mt-3 space-y-2">
                  <a
                    href={`mailto:${SITE.racingEmail}?subject=Racing%20Inquiry`}
                    className="flex items-center gap-2 font-mono text-sm text-paper hover:text-accent"
                  >
                    <Mail size={15} className="text-accent" />
                    {SITE.racingEmail}
                  </a>
                  <a
                    href={SITE.phoneTel}
                    className="flex items-center gap-2 font-mono text-sm text-paper hover:text-accent"
                  >
                    <Phone size={15} className="text-accent" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${SITE.racingEmail}?subject=Racing%20Inquiry`}
                  className="btn-primary"
                >
                  <Mail size={16} /> Email John
                </a>
                <a href={SITE.phoneTel} className="btn-ghost">
                  <Phone size={15} /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
