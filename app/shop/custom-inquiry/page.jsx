import Link from "next/link";
import { Phone, Wrench, Hammer, LifeBuoy, Truck, Sparkles, PenTool } from "lucide-react";
import { SITE } from "@/lib/site";
import CustomInquiryForm from "@/components/CustomInquiryForm";
import SectionHead from "@/components/SectionHead";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Custom Inquiry — Specialty Projects & Custom Quotes",
  description:
    "Request a custom quote from AOA Racing for projects outside our standard services — custom vehicle builds, fabrication, race support, fleet services, and specialty projects.",
};

const EXAMPLES = [
  { icon: Hammer, label: "Custom vehicle builds" },
  { icon: PenTool, label: "Fabrication" },
  { icon: LifeBuoy, label: "Race support" },
  { icon: Truck, label: "Fleet services" },
  { icon: Sparkles, label: "Specialty projects" },
  { icon: Wrench, label: "Unique customer requests" },
];

export default function CustomInquiryPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x py-14 sm:py-20">
          <Reveal>
            <p className="tt-label mb-4 flex items-center gap-2">
              <Link href="/shop" className="hover:text-paper">
                Performance Shop
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-paper">Custom Inquiry</span>
            </p>
            <SectionHead
              code="Outside our standard services"
              title="Custom Inquiry"
              lede="For projects that fall outside our standard services. Tell us what you have in mind and we'll follow up to discuss scope, options, and a custom quote."
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

      {/* Examples */}
      <section className="section-pad border-b border-line">
        <div className="container-x">
          <Reveal>
            <SectionHead code="Examples" title="What we take on" />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLES.map((ex, i) => {
              const Icon = ex.icon;
              return (
                <Reveal key={ex.label} delay={(i % 3) * 70}>
                  <div className="card flex items-center gap-4 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel2 text-accent">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <p className="font-display text-lg uppercase">{ex.label}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-pad">
        <div className="container-x max-w-3xl lg:mx-0">
          <Reveal>
            <SectionHead
              code="Request a custom quote"
              title="Tell us about the project"
            />
            <div className="mt-8">
              <CustomInquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
