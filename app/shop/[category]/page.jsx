import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, ArrowRight, Check, Wrench, Hammer, Gauge } from "lucide-react";
import { SHOP_CATEGORIES, getShopCategory } from "@/data/services";
import { SITE } from "@/lib/site";
import SectionHead from "@/components/SectionHead";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";

const ICONS = {
  wrench: Wrench,
  hammer: Hammer,
  gauge: Gauge,
};

export function generateStaticParams() {
  return SHOP_CATEGORIES.map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getShopCategory(category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Performance Shop`,
    description: cat.description,
  };
}

export default async function ShopCategoryPage({ params }) {
  const { category } = await params;
  const cat = getShopCategory(category);
  if (!cat) notFound();

  const Icon = ICONS[cat.icon] || Wrench;
  const others = SHOP_CATEGORIES.filter((c) => c.id !== cat.id);

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-panel/40">
        <div className="container-x grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <Reveal>
            <p className="tt-label mb-4 flex items-center gap-2">
              <Link href="/shop" className="hover:text-paper">
                Performance Shop
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-paper">{cat.name}</span>
            </p>
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center border border-line bg-panel2 text-accent">
                <Icon size={26} strokeWidth={1.75} />
              </span>
              <h1 className="display text-4xl sm:text-5xl lg:text-6xl">
                {cat.name}
              </h1>
            </div>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-chrome sm:text-lg">
              {cat.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop/quote" className="btn-primary">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a href={SITE.phoneTel} className="btn-ghost">
                <Phone size={15} /> Call the Shop
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Media
              src={cat.image}
              alt={`AOA Racing ${cat.name.toLowerCase()} services`}
              ratio="aspect-[4/3]"
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>
        </div>
      </section>

      {/* Services offered */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHead
              code={`What ${cat.name.toLowerCase()} covers`}
              title="Services offered"
              lede={cat.tagline}
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {cat.items.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 70}>
                <div className="card flex items-center gap-4 p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-accent/40 bg-accent/10 text-accent">
                    <Check size={16} />
                  </span>
                  <p className="text-paper">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + other categories */}
      <section className="section-pad border-t border-line bg-panel/40">
        <div className="container-x">
          <Reveal>
            <div className="card grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
              <div>
                <p className="tt-label tt-label--accent">Ready when you are</p>
                <h2 className="display mt-3 text-3xl sm:text-4xl">
                  Tell us about the car
                </h2>
                <p className="mt-4 max-w-lg text-chrome">
                  Send the details and the shop follows up with real
                  recommendations, options, and honest pricing. Prefer to talk it
                  through? Call the shop.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/shop/quote" className="btn-primary">
                  Request a Quote
                </Link>
                <Link href="/shop/custom-inquiry" className="btn-ghost">
                  Custom / Specialty Project
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <p className="tt-label mb-4">Other services</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {others.map((o) => {
                const OIcon = ICONS[o.icon] || Wrench;
                return (
                  <Link
                    key={o.id}
                    href={`/shop/${o.id}`}
                    className="card card-hover group flex items-center gap-4 p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel2 text-accent">
                      <OIcon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg uppercase transition-colors group-hover:text-accent">
                        {o.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-chrome">{o.tagline}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
