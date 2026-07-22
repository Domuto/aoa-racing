import Link from "next/link";
import { Phone, ArrowRight, ClipboardList, MessageSquare, Wrench, Flag } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE } from "@/lib/site";
import ServiceCard from "@/components/ServiceCard";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Performance Shop — Track Prep, Tires, Brakes & Builds",
  description:
    "AOA Racing's performance shop in Kennesaw, GA. Track-day prep, race prep, tires, brakes, suspension, upgrades, and custom builds — request a quote.",
};

const PROCESS = [
  {
    icon: ClipboardList,
    title: "Send the details",
    body: "Car, mods, intended use, and what you're after — the quote form takes two minutes.",
  },
  {
    icon: MessageSquare,
    title: "Talk it through",
    body: "The shop follows up with real recommendations, options, and honest pricing.",
  },
  {
    icon: Wrench,
    title: "We do the work",
    body: "Scheduled, scoped, and executed with track use in mind — no guesswork.",
  },
  {
    icon: Flag,
    title: "You go drive",
    body: "Pick up a car that's ready for the street, the canyon, or the grid.",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <SectionHead
              code="P2 — The performance shop"
              title="Not a generic repair shop"
              lede="AOA understands track use, performance, reliability, and race-prep expectations — because the same hands that service your car run our race program. Tell us about the car and we'll come back with a real plan."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop/quote" className="btn-primary">
                Request a Shop Quote <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="btn-ghost">
                <Phone size={15} /> Call the Shop
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Media
              src="/images/events/barber/dsc_0256.jpg"
              alt="AOA-prepped race car ready for the track"
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="Eight ways in"
              title="What the shop does"
              lede="Every card below routes to the quote form with your service pre-selected — the fastest way to get a real answer."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service, i) => (
              <Reveal key={service.id} delay={(i % 4) * 70}>
                <ServiceCard service={service} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad border-y border-line bg-panel/40">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code="How a quote works"
              title="Two minutes to a real plan"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => {
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
        </div>
      </section>

      {/* Credibility + CTA */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="card grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="tt-label tt-label--accent">
                  Track-aware by default
                </p>
                <h2 className="display mt-3 text-4xl sm:text-5xl">
                  Booked for a track day? Get the car prepped first.
                </h2>
                <p className="mt-4 max-w-lg text-chrome">
                  Track-Day Prep pairs perfectly with a reservation —
                  inspection, fluids, brakes, and tires checked by the crew
                  that will see you at the circuit.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/shop/quote?service=track-day-prep" className="btn-primary">
                  Request Track-Day Prep
                </Link>
                <Link href="/track-days" className="btn-ghost">
                  Book a Track Day
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
