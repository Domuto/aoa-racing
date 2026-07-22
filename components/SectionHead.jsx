/**
 * Standard section header: timing-tower label + poster headline.
 * `code` renders like a grid/session tag (e.g., "P1 — HIGHEST PRIORITY").
 */
export default function SectionHead({ code, title, lede, className = "" }) {
  return (
    <div className={className}>
      {code && (
        <p className="tt-label mb-3 flex items-center gap-3">
          <span className="inline-block h-[2px] w-8 bg-accent" aria-hidden="true" />
          {code}
        </p>
      )}
      <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {lede && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-chrome sm:text-lg">
          {lede}
        </p>
      )}
    </div>
  );
}
