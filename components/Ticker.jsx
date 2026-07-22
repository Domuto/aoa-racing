import Link from "next/link";
import { EVENTS, formatEventDate } from "@/data/events";

/**
 * Live-timing style crawl of upcoming events. Content is
 * duplicated for a seamless loop; animation pauses for
 * reduced-motion users (globals.css).
 */
export default function Ticker() {
  const items = EVENTS.slice(0, 6);
  const row = (keyPrefix) =>
    items.map((e, i) => (
      <Link
        key={`${keyPrefix}-${e.slug}`}
        href={`/track-days/${e.slug}`}
        className="flex shrink-0 items-center gap-3 px-8 font-mono text-[12px] uppercase tracking-[0.14em] text-chrome transition-colors hover:text-paper"
      >
        <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
        <span className="text-paper">{e.name}</span>
        <span aria-hidden="true">·</span>
        <span>{formatEventDate(e.date)}</span>
        <span aria-hidden="true" className="text-line">
          //
        </span>
      </Link>
    ));

  return (
    <div className="ticker-mask overflow-hidden border-y border-line bg-panel py-3.5">
      <div className="flex w-max animate-ticker">
        <div className="flex">{row("a")}</div>
        <div className="flex" aria-hidden="true">
          {row("b")}
        </div>
      </div>
    </div>
  );
}
