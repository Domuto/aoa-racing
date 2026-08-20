import { Instagram, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/site";

// Homepage Instagram feed. When `socials.instagramEmbedUrl` is set (a free
// LightWidget / Behold / SnapWidget URL for @aoa_racing_) it renders a live,
// auto-updating feed of the newest posts. Until then it shows a Follow CTA.
export default function InstagramFeed() {
  const { instagram, instagramHandle, instagramEmbedUrl } = SITE.socials;

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-panel2 text-accent">
            <Instagram size={20} strokeWidth={1.75} />
          </span>
          <div>
            <p className="font-display text-xl uppercase leading-none">
              @{instagramHandle}
            </p>
            <p className="mt-1 text-sm text-chrome">
              Latest from the paddock, garage, and grid.
            </p>
          </div>
        </div>
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="btn-primary btn-sm shrink-0"
        >
          Follow on Instagram <ArrowUpRight size={14} />
        </a>
      </div>

      {instagramEmbedUrl ? (
        <div className="bg-panel2">
          <iframe
            src={instagramEmbedUrl}
            title={`Instagram feed for @${instagramHandle}`}
            className="h-[560px] w-full border-0"
            loading="lazy"
            scrolling="no"
          />
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <a
                key={i}
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open @${instagramHandle} on Instagram`}
                className="group flex aspect-square items-center justify-center border border-line bg-panel2 text-chrome transition-colors hover:border-chrome hover:text-paper"
              >
                <Instagram
                  size={22}
                  strokeWidth={1.25}
                  className="opacity-40 transition-opacity group-hover:opacity-80"
                />
              </a>
            ))}
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-chrome/50">
            Live feed placeholder — add a free widget URL for @{instagramHandle}{" "}
            to <code className="text-chrome/70">SITE.socials.instagramEmbedUrl</code>{" "}
            to auto-show newest posts.
          </p>
        </div>
      )}
    </div>
  );
}
