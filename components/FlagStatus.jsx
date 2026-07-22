/**
 * Availability rendered in racing vernacular:
 * green flag = open · yellow = limited · waitlist = pit closed.
 */
const STYLES = {
  green: "border-flag-green/40 bg-flag-green/10 text-flag-green",
  yellow: "border-flag-yellow/40 bg-flag-yellow/10 text-flag-yellow",
  waitlist: "border-chrome/40 bg-chrome/10 text-chrome",
};

const DOTS = {
  green: "bg-flag-green",
  yellow: "bg-flag-yellow",
  waitlist: "bg-chrome",
};

export default function FlagStatus({ status = "green", label }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] ${STYLES[status] || STYLES.green}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${DOTS[status] || DOTS.green}`}
        aria-hidden="true"
      />
      {label}
    </span>
  );
}
