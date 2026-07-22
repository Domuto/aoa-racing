"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Car, KeyRound, HelpCircle } from "lucide-react";
import { PACKAGES, ADD_ONS, FLEET, DEPOSIT_RATE, money } from "@/data/packages";
import { formatEventDate } from "@/data/events";
import { submitForm } from "@/lib/site";

const DRIVER_TYPES = [
  {
    id: "own",
    icon: Car,
    name: "Drive my own car",
    note: "Bring your vehicle — it must pass basic tech inspection.",
  },
  {
    id: "rent",
    icon: KeyRound,
    name: "Rent an AOA vehicle",
    note: "Arrive and drive a prepped AOA fleet car.",
  },
  {
    id: "ask",
    icon: HelpCircle,
    name: "Ask about availability",
    note: "Not sure what fits? Send the date and we'll advise.",
  },
];

function StepHeading({ n, title, note }) {
  return (
    <div className="mb-4 flex items-baseline gap-3">
      <span className="font-display text-2xl text-accent">
        {String(n).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-xl uppercase tracking-wide sm:text-2xl">
          {title}
        </h3>
        {note && <p className="mt-1 text-sm text-chrome">{note}</p>}
      </div>
    </div>
  );
}

export default function BookingConfigurator({ event }) {
  const [driverType, setDriverType] = useState("own");
  const [vehicleId, setVehicleId] = useState(FLEET[0]?.id ?? "");
  const [packageId, setPackageId] = useState("performance");
  const [addOns, setAddOns] = useState([]);
  const [payMode, setPayMode] = useState("deposit");
  const [agreed, setAgreed] = useState(false);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [formState, setFormState] = useState("idle"); // idle | sending | done | error

  const isWaitlist = event.availability === "waitlist";
  const isAsk = driverType === "ask";

  const selectedPackage = PACKAGES.find((p) => p.id === packageId);
  const selectedVehicle = FLEET.find((v) => v.id === vehicleId);

  const totals = useMemo(() => {
    if (isAsk || !selectedPackage || selectedPackage.price === null) {
      return { total: null, dueNow: null };
    }
    let total = selectedPackage.price;
    if (driverType === "rent" && selectedVehicle) total += selectedVehicle.price;
    for (const id of addOns) {
      const a = ADD_ONS.find((x) => x.id === id);
      if (a) total += a.price;
    }
    const dueNow = payMode === "deposit" ? Math.round(total * DEPOSIT_RATE) : total;
    return { total, dueNow };
  }, [isAsk, selectedPackage, driverType, selectedVehicle, addOns, payMode]);

  function toggleAddOn(id) {
    setAddOns((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function onReserve(e) {
    e.preventDefault();
    if (!isAsk && !agreed) return;
    setFormState("sending");

    const payload = {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      notes: contact.notes,
      event: `${event.name} — ${formatEventDate(event.date)} — ${event.track}`,
      driver_type: DRIVER_TYPES.find((d) => d.id === driverType)?.name,
      vehicle:
        driverType === "rent" ? selectedVehicle?.name : "Customer vehicle",
      package: isAsk ? "TBD — availability inquiry" : selectedPackage?.name,
      add_ons: isAsk
        ? "—"
        : addOns
            .map((id) => ADD_ONS.find((a) => a.id === id)?.name)
            .filter(Boolean)
            .join(", ") || "None",
      payment: isAsk
        ? "—"
        : payMode === "deposit"
          ? `Deposit ${money(totals.dueNow)} of ${money(totals.total)}`
          : `Pay in full ${money(totals.total)}`,
    };

    const res = await submitForm(
      isWaitlist
        ? `Waitlist request — ${event.name}`
        : `Track day reservation — ${event.name}`,
      payload
    ).catch(() => ({ ok: false }));

    setFormState(res.ok ? "done" : "error");
  }

  /* ---------------- Confirmation state ---------------- */
  if (formState === "done") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-flag-green/40 bg-flag-green/10 text-flag-green">
          <Check size={26} />
        </span>
        <h3 className="display mt-6 text-3xl sm:text-4xl">
          {isWaitlist ? "You're on the list" : "Request received"}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-chrome">
          {isWaitlist
            ? "We'll reach out the moment a slot opens for this event."
            : "AOA Racing will confirm your slot and send a secure payment link for the amount due. Watch your inbox — and check spam the first time."}
        </p>
        <div className="mx-auto mt-6 max-w-sm border border-line bg-panel2 p-4 text-left font-mono text-[12px] leading-relaxed text-chrome">
          <p className="text-paper">{event.name}</p>
          <p>{formatEventDate(event.date)}</p>
          {!isAsk && <p>Package: {selectedPackage?.name}</p>}
          {!isAsk && totals.dueNow !== null && (
            <p>
              Due at confirmation: {money(totals.dueNow)}
              {payMode === "deposit" && ` (balance ${money(totals.total - totals.dueNow)})`}
            </p>
          )}
        </div>
        <Link href="/track-days" className="btn-ghost mt-8">
          View More Track Days
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
      {/* ================= LEFT: steps ================= */}
      <form onSubmit={onReserve} className="space-y-12">
        {/* Step 1 — driver type */}
        <section>
          <StepHeading
            n={1}
            title="Choose how you'll drive"
            note="Every path gets full AOA event support."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {DRIVER_TYPES.map((d) => {
              const Icon = d.icon;
              const active = driverType === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDriverType(d.id)}
                  aria-pressed={active}
                  className={`card flex flex-col gap-2 p-5 text-left transition-colors ${
                    active
                      ? "border-accent bg-panel2"
                      : "hover:border-chrome/60"
                  }`}
                >
                  <Icon
                    size={20}
                    className={active ? "text-accent" : "text-chrome"}
                  />
                  <span className="font-semibold">{d.name}</span>
                  <span className="text-[13px] leading-snug text-chrome">
                    {d.note}
                  </span>
                </button>
              );
            })}
          </div>

          {driverType === "rent" && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {FLEET.map((v) => {
                const active = vehicleId === v.id;
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVehicleId(v.id)}
                    aria-pressed={active}
                    className={`card flex items-start justify-between gap-3 p-4 text-left transition-colors ${
                      active ? "border-accent bg-panel2" : "hover:border-chrome/60"
                    }`}
                  >
                    <span>
                      <span className="block font-semibold">{v.name}</span>
                      <span className="mt-1 block text-[13px] text-chrome">
                        {v.note}
                      </span>
                    </span>
                    <span className="font-mono text-sm text-paper">
                      +{money(v.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {isAsk ? (
          <section className="card border-l-2 border-l-accent p-6">
            <p className="text-sm leading-relaxed text-chrome">
              Tell us who you are and anything useful about your experience or
              car below — we&apos;ll come back with what&apos;s available for{" "}
              <span className="text-paper">{formatEventDate(event.date)}</span>{" "}
              and the best way to run it.
            </p>
          </section>
        ) : (
          <>
            {/* Step 2 — package */}
            <section>
              <StepHeading
                n={2}
                title="Select your package"
                note="Prices shown are placeholders pending final AOA rates."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {PACKAGES.map((p) => {
                  const active = packageId === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPackageId(p.id)}
                      aria-pressed={active}
                      className={`card relative flex flex-col p-5 text-left transition-colors ${
                        active ? "border-accent bg-panel2" : "hover:border-chrome/60"
                      }`}
                    >
                      {p.popular && (
                        <span className="absolute right-4 top-4 bg-accent px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                          Most booked
                        </span>
                      )}
                      <span className="font-display text-xl uppercase">
                        {p.name}
                      </span>
                      <span className="mt-1 font-mono text-lg text-paper">
                        {p.price === null ? "Inquiry" : money(p.price)}
                      </span>
                      <span className="mt-2 text-[13px] text-chrome">
                        {p.blurb}
                      </span>
                      <ul className="mt-3 space-y-1.5">
                        {p.includes.map((inc) => (
                          <li
                            key={inc}
                            className="flex items-start gap-2 text-[13px] text-chrome"
                          >
                            <Check
                              size={13}
                              className="mt-0.5 shrink-0 text-accent"
                            />
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Step 3 — add-ons */}
            <section>
              <StepHeading
                n={3}
                title="Build your day with add-ons"
                note="Optional — add or remove anything before you reserve."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {ADD_ONS.map((a) => {
                  const active = addOns.includes(a.id);
                  return (
                    <button
                      key={a.id}
                      type="button"
                      onClick={() => toggleAddOn(a.id)}
                      aria-pressed={active}
                      className={`card flex items-start justify-between gap-3 p-4 text-left transition-colors ${
                        active ? "border-accent bg-panel2" : "hover:border-chrome/60"
                      }`}
                    >
                      <span>
                        <span className="flex items-center gap-2 font-semibold">
                          <span
                            className={`flex h-4 w-4 items-center justify-center border ${
                              active
                                ? "border-accent bg-accent text-white"
                                : "border-chrome/50"
                            }`}
                          >
                            {active && <Check size={11} />}
                          </span>
                          {a.name}
                        </span>
                        <span className="mt-1.5 block text-[13px] text-chrome">
                          {a.note}
                        </span>
                      </span>
                      <span className="font-mono text-sm text-paper">
                        +{money(a.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Step 4 — policies */}
            <section>
              <StepHeading
                n={4}
                title="Review the requirements"
                note="Safety, waiver, and cancellation terms for this event."
              />
              <div className="card space-y-3 p-5 text-sm text-chrome">
                <p className="flex items-start gap-2">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                  All drivers sign the AOA Racing and venue waivers before
                  going on track.{" "}
                  <Link href="/policies" className="underline hover:text-paper">
                    Read the waiver info
                  </Link>
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                  Vehicles must pass basic tech; helmets must meet the event
                  rating.{" "}
                  <Link href="/faq" className="underline hover:text-paper">
                    See the FAQ
                  </Link>
                </p>
                <p className="flex items-start gap-2">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-accent" />
                  Cancellations and transfers are handled per the{" "}
                  <Link
                    href="/policies#cancellation"
                    className="underline hover:text-paper"
                  >
                    cancellation policy
                  </Link>
                  .
                </p>
                <label className="mt-2 flex cursor-pointer items-start gap-3 border-t border-line pt-4 text-paper">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 accent-[rgb(var(--accent))]"
                    required
                  />
                  <span className="text-sm">
                    I&apos;ve reviewed the requirements and policies for this
                    event.
                  </span>
                </label>
              </div>
            </section>

            {/* Step 5 — payment mode */}
            <section>
              <StepHeading
                n={5}
                title="Choose how to pay"
                note="Reserve with a deposit or settle the full amount."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setPayMode("deposit")}
                  aria-pressed={payMode === "deposit"}
                  className={`card p-5 text-left transition-colors ${
                    payMode === "deposit"
                      ? "border-accent bg-panel2"
                      : "hover:border-chrome/60"
                  }`}
                >
                  <span className="block font-semibold">
                    Reserve with deposit
                  </span>
                  <span className="mt-1 block text-[13px] text-chrome">
                    {Math.round(DEPOSIT_RATE * 100)}% due now, balance before
                    the event. (Placeholder terms.)
                  </span>
                  {totals.dueNow !== null && payMode === "deposit" && (
                    <span className="mt-2 block font-mono text-lg text-paper">
                      {money(totals.dueNow)} now
                    </span>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setPayMode("full")}
                  aria-pressed={payMode === "full"}
                  className={`card p-5 text-left transition-colors ${
                    payMode === "full"
                      ? "border-accent bg-panel2"
                      : "hover:border-chrome/60"
                  }`}
                >
                  <span className="block font-semibold">Pay in full</span>
                  <span className="mt-1 block text-[13px] text-chrome">
                    One payment, done — nothing owed at the gate.
                  </span>
                  {totals.total !== null && payMode === "full" && (
                    <span className="mt-2 block font-mono text-lg text-paper">
                      {money(totals.total)} total
                    </span>
                  )}
                </button>
              </div>
            </section>
          </>
        )}

        {/* Contact + submit */}
        <section>
          <StepHeading
            n={isAsk ? 2 : 6}
            title="Your details"
            note="We confirm every reservation personally before payment."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="bk-name">
                Full name
              </label>
              <input
                id="bk-name"
                className="field"
                required
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="field-label" htmlFor="bk-phone">
                Phone
              </label>
              <input
                id="bk-phone"
                type="tel"
                className="field"
                required
                value={contact.phone}
                onChange={(e) =>
                  setContact({ ...contact, phone: e.target.value })
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="bk-email">
                Email
              </label>
              <input
                id="bk-email"
                type="email"
                className="field"
                required
                value={contact.email}
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
            </div>
            <div className="sm:col-span-2">
              <label className="field-label" htmlFor="bk-notes">
                Notes — car, experience, questions (optional)
              </label>
              <textarea
                id="bk-notes"
                rows={3}
                className="field"
                value={contact.notes}
                onChange={(e) =>
                  setContact({ ...contact, notes: e.target.value })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={formState === "sending" || (!isAsk && !agreed)}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {formState === "sending"
              ? "Sending…"
              : isWaitlist
                ? "Join the Waitlist"
                : isAsk
                  ? "Ask About Availability"
                  : "Reserve Your Spot"}
          </button>
          {formState === "error" && (
            <p className="mt-3 text-sm text-accent">
              That didn&apos;t go through — try again or call the shop.
            </p>
          )}
          {!isAsk && !agreed && (
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
              Check the policy box in step 4 to enable reserving.
            </p>
          )}
        </section>
      </form>

      {/* ================= RIGHT: sticky summary ================= */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card overflow-hidden">
          <div className="border-b border-line bg-panel2 px-5 py-4">
            <p className="tt-label tt-label--accent">Your build</p>
            <p className="mt-1 font-display text-xl uppercase leading-tight">
              {event.name}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome">
              {formatEventDate(event.date)}
            </p>
          </div>
          <dl className="space-y-3 px-5 py-5 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-chrome">Driving</dt>
              <dd className="text-right">
                {DRIVER_TYPES.find((d) => d.id === driverType)?.name}
              </dd>
            </div>
            {driverType === "rent" && selectedVehicle && (
              <div className="flex justify-between gap-4">
                <dt className="text-chrome">Vehicle</dt>
                <dd className="text-right font-mono">
                  {money(selectedVehicle.price)}
                </dd>
              </div>
            )}
            {!isAsk && (
              <>
                <div className="flex justify-between gap-4">
                  <dt className="text-chrome">
                    {selectedPackage?.name} package
                  </dt>
                  <dd className="text-right font-mono">
                    {selectedPackage?.price === null
                      ? "Inquiry"
                      : money(selectedPackage?.price)}
                  </dd>
                </div>
                {addOns.map((id) => {
                  const a = ADD_ONS.find((x) => x.id === id);
                  if (!a) return null;
                  return (
                    <div key={id} className="flex justify-between gap-4">
                      <dt className="text-chrome">{a.name}</dt>
                      <dd className="text-right font-mono">
                        {money(a.price)}
                      </dd>
                    </div>
                  );
                })}
              </>
            )}
          </dl>
          <div className="border-t border-line px-5 py-5">
            {isAsk || totals.total === null ? (
              <p className="text-sm text-chrome">
                Pricing confirmed with your inquiry.
              </p>
            ) : (
              <>
                <div className="flex items-baseline justify-between">
                  <p className="tt-label">Estimated total</p>
                  <p className="font-display text-3xl">{money(totals.total)}</p>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="tt-label">
                    Due at confirmation
                  </p>
                  <p className="font-mono text-lg text-accent">
                    {money(totals.dueNow)}
                  </p>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-chrome/60">
                  Placeholder pricing — final totals confirmed by AOA before
                  payment.
                </p>
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
