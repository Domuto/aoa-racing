import Link from "next/link";
import {
  Gauge,
  Flag,
  CircleDot,
  Octagon,
  Ruler,
  Zap,
  Wrench,
  Hammer,
  ArrowUpRight,
} from "lucide-react";

const ICONS = {
  gauge: Gauge,
  flag: Flag,
  "circle-dot": CircleDot,
  octagon: Octagon,
  ruler: Ruler,
  zap: Zap,
  wrench: Wrench,
  hammer: Hammer,
};

export default function ServiceCard({ service, index }) {
  const Icon = ICONS[service.icon] || Wrench;
  return (
    <Link
      href={`/shop/quote?service=${service.id}`}
      className="card card-hover group flex flex-col gap-4 p-6"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center border border-line bg-panel2 text-accent">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        <span className="font-mono text-[11px] tracking-[0.2em] text-chrome/50">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
          {service.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-chrome">
          {service.message}
        </p>
      </div>
      <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-paper transition-colors group-hover:text-accent">
        Request a Quote
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </p>
    </Link>
  );
}
