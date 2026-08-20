import Link from "next/link";
import { Flag, Wrench, Users, ShieldCheck, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About AOA Racing",
  description:
    "AOA Racing is a Marietta, Georgia motorsports company — track day operator, performance shop, and working race team under one roof.",
};

const VALUES = [
  {
    icon: Flag,
    title: "Track-first",
    body: "Everything we sell — events, prep, parts, advice — is judged by one question: does it make you better and faster on track?",
  },
  {
    icon: ShieldCheck,
    title: "Safety without the lecture",
    body: "Tech inspections, run groups, and instruction that keep the day fun because everyone goes home with the car on the trailer.",
  },
  {
    icon: Wrench,
    title: "We race what we wrench",
    body: "The same crew that preps customer cars fields the AOA race program. Real competition keeps the standard honest.",
  },
  {
    icon: Users,
    title: "Community over clout",
    body: "Track days are better with people you know. AOA events are built to turn first-timers into regulars and regulars into friends.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <SectionHead
              code="Marietta, Georgia"
              title="Built to get you on track"
              lede="AOA Racing exists to close the gap between loving cars and actually driving them the way they were built to be driven — with real events, real preparation, and a real race program behind it all."
            />
          </Reveal>
          <Reveal delay={100}>
            <Media
              src="/images/events/barber/dsc_0662.jpg"
              alt="AOA Racing at the track on a race weekend"
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_380px]">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl">The story</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-chrome sm:text-lg">
              <p>
                {/* PLACEHOLDER COPY — replace with AOA's real founding story.
                    Written as credible draft for review, per the framework's
                    "all final copy approved by AOA Racing" rule. */}
                AOA Racing started the way most good motorsports stories do:
                with people who couldn&apos;t stay out of the paddock. What
                began as friends chasing lap times across the Southeast grew
                into an operation built around one idea — premium driving
                experiences shouldn&apos;t require knowing a guy.
              </p>
              <p>
                Today AOA runs three connected programs from Marietta: track
                days that welcome first-timers and push veterans, a
                performance shop that preps cars with a racer&apos;s eye, and
                a race team that proves the whole operation under a green
                flag.
              </p>
              <p>
                [PLACEHOLDER — founder names, year established, and one or two
                proof points AOA wants told. Swap this paragraph with approved
                copy before launch.]
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="card p-6">
              <p className="tt-label tt-label--accent">HQ</p>
              <address className="mt-3 space-y-1 not-italic text-paper">
                <p>{SITE.address.line1}</p>
                <p>{SITE.address.line2}</p>
                <p>
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </p>
              </address>
              <p className="mt-4 font-mono text-sm text-chrome">{SITE.hours}</p>
              <a href={SITE.phoneTel} className="btn-primary btn-sm mt-5">
                <Phone size={14} /> Call the Shop
              </a>
            </div>
            <div className="card mt-4 p-6">
              <p className="tt-label">By the numbers</p>
              <dl className="mt-4 grid grid-cols-2 gap-4">
                {[
                  ["[XX]+", "Events run"],
                  ["[XXX]+", "Drivers hosted"],
                  ["[XX]", "Team podiums"],
                  ["5", "Home circuits"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dd className="font-display text-3xl">{value}</dd>
                    <dt className="tt-label mt-1">{label}</dt>
                  </div>
                ))}
              </dl>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-chrome/50">
                Placeholders — publish verified numbers only
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x">
          <Reveal>
            <SectionHead code="How we operate" title="What AOA stands for" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card h-full p-6">
                    <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel2 text-accent">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-xl uppercase">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-chrome">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="card flex flex-col items-start justify-between gap-6 p-8 sm:p-12 lg:flex-row lg:items-center">
              <div>
                <h2 className="display text-4xl sm:text-5xl">
                  Come see it in person
                </h2>
                <p className="mt-3 max-w-lg text-chrome">
                  The fastest way to understand AOA is a track day. The second
                  fastest is calling the shop and talking cars.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/track-days" className="btn-primary">
                  Book a Track Day
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Contact the Team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
