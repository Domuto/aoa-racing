"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Upload } from "lucide-react";
import { SERVICES, INTENDED_USE, BUDGET_RANGES, TIMING_OPTIONS } from "@/data/services";
import { submitForm } from "@/lib/site";

export default function QuoteForm({ initialService = "" }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    mods: "",
    use: "",
    budget: "",
    timing: "",
    notes: "",
  });
  const [services, setServices] = useState(
    initialService && SERVICES.some((s) => s.id === initialService)
      ? [initialService]
      : []
  );
  const [fileName, setFileName] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleService(id) {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const res = await submitForm("Shop quote request", {
      ...form,
      vehicle: `${form.year} ${form.make} ${form.model}`.trim(),
      services:
        services
          .map((id) => SERVICES.find((s) => s.id === id)?.name)
          .filter(Boolean)
          .join(", ") || "Not specified",
      photo_attached: fileName || "No",
    }).catch(() => ({ ok: false }));
    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-flag-green/40 bg-flag-green/10 text-flag-green">
          <Check size={26} />
        </span>
        <h3 className="display mt-6 text-3xl sm:text-4xl">Quote request in</h3>
        <p className="mx-auto mt-4 max-w-md text-chrome">
          The shop has everything it needs to follow up intelligently —
          expect a call or email from AOA Racing to talk through the work and
          schedule.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/track-days" className="btn-primary">
            Book a Track Day
          </Link>
          <Link href="/shop" className="btn-ghost">
            Back to the Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      {/* Contact */}
      <fieldset>
        <legend className="tt-label tt-label--accent mb-4">
          01 — Who to call back
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="field-label" htmlFor="q-name">
              Full name
            </label>
            <input
              id="q-name"
              className="field"
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="q-email">
              Email
            </label>
            <input
              id="q-email"
              type="email"
              className="field"
              required
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="q-phone">
              Phone
            </label>
            <input
              id="q-phone"
              type="tel"
              className="field"
              required
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      {/* Vehicle */}
      <fieldset>
        <legend className="tt-label tt-label--accent mb-4">
          02 — The car
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="field-label" htmlFor="q-year">
              Year
            </label>
            <input
              id="q-year"
              className="field"
              required
              inputMode="numeric"
              placeholder="2019"
              value={form.year}
              onChange={(e) => set("year", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="q-make">
              Make
            </label>
            <input
              id="q-make"
              className="field"
              required
              placeholder="Mercedes-AMG"
              value={form.make}
              onChange={(e) => set("make", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="q-model">
              Model
            </label>
            <input
              id="q-model"
              className="field"
              required
              placeholder="C63 S"
              value={form.model}
              onChange={(e) => set("model", e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <label className="field-label" htmlFor="q-mods">
              Current modifications
            </label>
            <textarea
              id="q-mods"
              rows={3}
              className="field"
              placeholder="Intake, tune, pads/fluid, coilovers… or bone stock."
              value={form.mods}
              onChange={(e) => set("mods", e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <label className="field-label" htmlFor="q-use">
              How the car gets used
            </label>
            <select
              id="q-use"
              className="field"
              required
              value={form.use}
              onChange={(e) => set("use", e.target.value)}
            >
              <option value="" disabled>
                Select intended use…
              </option>
              {INTENDED_USE.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Services */}
      <fieldset>
        <legend className="tt-label tt-label--accent mb-4">
          03 — What you're after
        </legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {SERVICES.map((s) => {
            const active = services.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggleService(s.id)}
                aria-pressed={active}
                className={`card flex items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                  active ? "border-accent bg-panel2" : "hover:border-chrome/60"
                }`}
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-chrome/50"
                  }`}
                >
                  {active && <Check size={11} />}
                </span>
                {s.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Budget / timing / notes / photo */}
      <fieldset>
        <legend className="tt-label tt-label--accent mb-4">
          04 — Scope &amp; timing
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="q-budget">
              Budget range (optional)
            </label>
            <select
              id="q-budget"
              className="field"
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
            >
              <option value="">Prefer to discuss</option>
              {BUDGET_RANGES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="field-label" htmlFor="q-timing">
              When you need it
            </label>
            <select
              id="q-timing"
              className="field"
              required
              value={form.timing}
              onChange={(e) => set("timing", e.target.value)}
            >
              <option value="" disabled>
                Select timing…
              </option>
              {TIMING_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="q-notes">
              Anything else the shop should know
            </label>
            <textarea
              id="q-notes"
              rows={4}
              className="field"
              placeholder="Goals, upcoming events, noises, history…"
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label" htmlFor="q-photo">
              Photo of the car (optional)
            </label>
            <label
              htmlFor="q-photo"
              className="field flex cursor-pointer items-center gap-3 text-chrome"
            >
              <Upload size={16} className="text-accent" />
              {fileName || "Attach a photo — helps with fitment questions"}
            </label>
            <input
              id="q-photo"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            />
          </div>
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-primary w-full sm:w-auto"
        >
          {state === "sending" ? "Sending…" : "Request a Shop Quote"}
        </button>
        {state === "error" && (
          <p className="mt-3 text-sm text-accent">
            That didn&apos;t go through — try again or call the shop.
          </p>
        )}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
          No spam, no pressure — a real person from the shop follows up.
        </p>
      </div>
    </form>
  );
}
