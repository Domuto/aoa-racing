import Link from "next/link";
import { ShieldCheck, FileText, CalendarX, CloudRain, Lock } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Policies, Waivers & Cancellation",
  description:
    "AOA Racing's event policies — waivers, cancellation and refund terms, weather policy, safety requirements, and privacy.",
};

const SECTIONS = [
  {
    id: "waiver",
    icon: FileText,
    title: "Waiver & release",
    body: "Every participant signs a liability waiver before going on track — no exceptions. The waiver is presented during booking review and again at event check-in.",
    placeholder: "Insert AOA's attorney-approved waiver language or link the signed digital waiver flow (e.g., SpeedWaiver). Do not launch with draft legal text.",
  },
  {
    id: "cancellation",
    icon: CalendarX,
    title: "Cancellation & rescheduling",
    body: "Plans change — here's how cancellations, credits, and refunds work for race car rentals, deposits, and track events.",
    points: [
      {
        title: "Client-initiated cancellation",
        body: (
          <>
            To cancel or reschedule a race car rental, the Renter must submit written notice via email to{" "}
            <a href={`mailto:${SITE.racingEmail}`} className="text-paper underline hover:text-accent">
              {SITE.racingEmail}
            </a>
            .
            <ul className="mt-3 space-y-2 border-l border-line pl-4 text-[13px] sm:text-sm">
              <li>
                <span className="font-semibold text-paper">21 or more days before the event:</span>{" "}
                Full refund of the deposit paid.
              </li>
              <li>
                <span className="font-semibold text-paper">7 to 20 days before the event:</span>{" "}
                Forfeiture of the standard 50% booking deposit.
              </li>
              <li>
                <span className="font-semibold text-paper">Less than 72 hours before the event or no-show:</span>{" "}
                100% of the total rental fee is non-refundable and due immediately.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: "Rescheduling option",
        body: "Subject to car availability, deposits eligible for forfeiture may instead be transferred as a credit toward a rescheduled track event occurring within 30 days of the original booking.",
      },
      {
        title: "Weather / event cancellation",
        body: "If the official track day or race event is canceled by the sanctioning body or track management due to weather or safety, this rental agreement may be rescheduled with zero penalty, at the discretion of the Renter.",
      },
      {
        title: "Provider cancellation",
        body: "AOA Motorsports reserves the right to cancel the rental contract due to unforeseen mechanical failure or force majeure. In such cases, a 100% refund of all monies paid will be returned to the Renter immediately.",
      },
    ],
  },
  {
    id: "weather",
    icon: CloudRain,
    title: "Weather policy",
    body: "Track days run rain or shine unless conditions are unsafe. Rain is genuinely one of the best learning environments for car control.",
    placeholder: "Insert AOA's official rain/lightning/red-flag procedure and how credits are issued if an event is cut short or cancelled by the venue.",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Safety & vehicle requirements",
    body: "Helmets (Snell-rated), tech inspection, secure battery, good brakes and tires, and nothing loose in the cabin. Convertibles and specific classes may have additional roll-over requirements per venue.",
    placeholder: "Insert AOA's full tech-inspection checklist, helmet standard (e.g., Snell SA2020+), and any venue-specific sound limits (AMP has strict dB limits).",
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy",
    body: "Contact details submitted through this site are used to respond to your inquiry and, if you opt in, to send event announcements. We don't sell your information.",
    placeholder: "Insert AOA's full privacy policy (attorney-reviewed) covering data collection, payment processing, photography/media consent at events, and opt-out.",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="The fine print, in plain English"
              title="Policies & waivers"
              lede="Clear terms build trust before checkout. Each section below is drafted for review — final legal language comes from AOA."
            />
          </Reveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x max-w-4xl space-y-6 lg:mx-0">
          {SECTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 50}>
                <article id={s.id} className="card scroll-mt-28 p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-panel2 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </span>
                    <h2 className="font-display text-2xl uppercase sm:text-3xl">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-chrome sm:text-base">{s.body}</p>
                  {s.points ? (
                    <ol className="mt-5 space-y-4">
                      {s.points.map((p, n) => (
                        <li key={p.title} className="flex gap-3">
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-line bg-panel2 text-xs font-semibold text-accent">
                            {n + 1}
                          </span>
                          <p className="text-sm leading-relaxed text-chrome sm:text-base">
                            <span className="font-semibold text-paper">{p.title}:</span> {p.body}
                          </p>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="placeholder-note mt-5">
                      <p className="font-semibold">⚠ Placeholder — official terms required</p>
                      <p className="mt-1">{s.placeholder}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
          <Reveal>
            <p className="text-sm text-chrome">
              Questions about any policy? Call{" "}
              <a href={SITE.phoneTel} className="text-paper underline hover:text-accent">{SITE.phoneDisplay}</a>{" "}
              or see the <Link href="/faq" className="text-paper underline hover:text-accent">FAQ</Link>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
