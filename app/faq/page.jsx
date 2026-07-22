import Link from "next/link";
import { FAQ } from "@/data/faq";
import FAQAccordion from "@/components/FAQAccordion";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Track Day FAQ",
  description:
    "Answers to the questions every first-time track day driver asks — safety, cars, licenses, weather, insurance, and what to bring.",
};

export default function FAQPage() {
  return (
    <>
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <SectionHead
              code="Reduce fear, build trust"
              title="Frequently asked questions"
              lede="Everything a first-timer wonders and a veteran double-checks. If your question isn't here, call the shop — a human answers."
            />
          </Reveal>
        </div>
      </section>
      <section className="section-pad">
        <div className="container-x max-w-3xl lg:mx-0">
          <Reveal>
            <FAQAccordion items={FAQ} />
          </Reveal>
          <Reveal className="mt-10">
            <div className="card flex flex-col items-start justify-between gap-4 border-l-2 border-l-accent p-6 sm:flex-row sm:items-center">
              <p className="text-sm text-chrome">
                Still unsure? Call{" "}
                <a href={SITE.phoneTel} className="text-paper underline hover:text-accent">
                  {SITE.phoneDisplay}
                </a>{" "}
                or read the{" "}
                <Link href="/policies" className="text-paper underline hover:text-accent">
                  policies page
                </Link>
                .
              </p>
              <Link href="/track-days" className="btn-primary btn-sm shrink-0">
                Book a Track Day
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
