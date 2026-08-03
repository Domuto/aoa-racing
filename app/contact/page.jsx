import { Phone, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact AOA Racing",
  description:
    "Reach AOA Racing in Kennesaw, GA — bookings, shop quotes, race programs, sponsorships, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="A human answers"
              title="Contact"
              lede="Bookings, quotes, race programs, or just talking cars — pick the channel that suits you."
            />
          </Reveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x grid gap-10 lg:grid-cols-[380px_1fr]">
          <Reveal>
            <div className="space-y-4">
              <a href={SITE.phoneTel} className="card card-hover flex items-start gap-4 p-5">
                <Phone size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <span className="tt-label block">Phone</span>
                  <span className="mt-1 block font-display text-2xl">{SITE.phoneDisplay}</span>
                  <span className="mt-0.5 block text-sm text-chrome">Fastest for bookings and shop questions</span>
                </span>
              </a>
              <div className="card flex items-start gap-4 p-5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <address className="not-italic">
                  <span className="tt-label block">The shop</span>
                  <span className="mt-1 block text-sm text-paper">
                    {SITE.address.line1}, {SITE.address.line2}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </span>
                  <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-accent underline">
                    Open in Maps
                  </a>
                </address>
              </div>
              <div className="card flex items-start gap-4 p-5">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  <span className="tt-label block">Hours</span>
                  <span className="mt-1 block text-sm text-paper">{SITE.hours}</span>
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden border border-line bg-panel">
                <iframe
                  title="Map to the AOA Racing shop"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `${SITE.address.line1} ${SITE.address.line2} ${SITE.address.city} ${SITE.address.state} ${SITE.address.zip}`
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-[1.05]"
                  style={{ border: 0 }}
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
