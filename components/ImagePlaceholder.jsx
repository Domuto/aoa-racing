/**
 * Intentional-looking media placeholder (framework: use real
 * photos; placeholders only temporarily). Shows the label plus
 * the file path where the real image should be dropped, so the
 * client handoff is self-documenting. Swap for <Image> once
 * assets exist in /public/images.
 */
export default function ImagePlaceholder({
  label = "Track imagery",
  file = "public/images/…",
  ratio = "aspect-[16/9]",
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden border border-line bg-panel ${ratio} ${className}`}
      role="img"
      aria-label={`${label} (image placeholder)`}
    >
      {/* carbon-weave-ish texture */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "repeating-linear-gradient(45deg, rgb(19 19 22) 0 10px, rgb(24 25 29) 10px 20px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 30% 0%, rgb(var(--accent) / 0.10), transparent 55%)",
        }}
        aria-hidden="true"
      />
      {/* corner brackets */}
      <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-chrome/50" aria-hidden="true" />
      <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-chrome/50" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/80">
          {label}
        </p>
        <p className="mt-1 font-mono text-[9px] tracking-[0.08em] text-chrome/60">
          {file}
        </p>
      </div>
    </div>
  );
}
