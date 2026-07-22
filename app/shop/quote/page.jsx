import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Request a Shop Quote",
  description:
    "Tell AOA Racing about your car, your mods, and what you need — the shop follows up with a real plan and honest pricing.",
};

export default async function QuotePage({ searchParams }) {
  const sp = await searchParams;
  const initialService = typeof sp?.service === "string" ? sp.service : "";

  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="Performance shop — quote request"
              title="Tell us about the car"
              lede="The more we know up front, the better the first call goes. Vehicle details, current mods, and intended use let the shop follow up with real answers instead of twenty questions."
            />
            <p className="mt-6 flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-chrome">
              Rather talk it through?
              <a
                href={SITE.phoneTel}
                className="inline-flex items-center gap-1.5 text-paper underline hover:text-accent"
              >
                <Phone size={13} className="text-accent" />
                {SITE.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x max-w-3xl lg:mx-0">
          <Reveal>
            <QuoteForm initialService={initialService} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
