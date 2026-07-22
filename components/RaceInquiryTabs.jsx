"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { submitForm } from "@/lib/site";

const TABS = [
  {
    id: "sponsorship",
    label: "Sponsorship",
    heading: "Put your brand on a fast car",
    blurb:
      "Trackside exposure, content, and hospitality with a team that actually races. Tell us about your brand and goals.",
    cta: "Request Sponsorship Information",
  },
  {
    id: "driver",
    label: "Driver & Race Programs",
    heading: "Race with AOA",
    blurb:
      "From first competition license to a full season — tell us where you are and where you want to be on the grid.",
    cta: "Explore Race Programs",
  },
  {
    id: "support",
    label: "Race Support",
    heading: "Bring AOA to your race weekend",
    blurb:
      "Trackside prep, spares, setup, and crew for your own program. Give us the event and the car.",
    cta: "Request Race Support",
  },
];

const EXPERIENCE = [
  "New — no competition experience yet",
  "HPDE / track day background",
  "Time trial competitor",
  "Licensed wheel-to-wheel racer",
];

export default function RaceInquiryTabs() {
  const [tab, setTab] = useState("sponsorship");
  const [state, setState] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    experience: "",
    car: "",
    event: "",
    message: "",
  });

  const active = TABS.find((t) => t.id === tab);

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function switchTab(id) {
    setTab(id);
    setState("idle");
  }

  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const res = await submitForm(`Race team inquiry — ${active.label}`, {
      inquiry_type: active.label,
      ...form,
    }).catch(() => ({ ok: false }));
    setState(res.ok ? "done" : "error");
  }

  return (
    <div className="card overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-1 border-b border-line sm:grid-cols-3" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => switchTab(t.id)}
            className={`border-b px-5 py-4 text-left font-mono text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors sm:border-b-0 sm:border-r sm:last:border-r-0 ${
              tab === t.id
                ? "border-accent bg-panel2 text-paper sm:border-line"
                : "border-line text-chrome hover:text-paper"
            }`}
          >
            <span
              className={`mr-2 inline-block h-2 w-2 rounded-full ${
                tab === t.id ? "bg-accent" : "bg-line"
              }`}
              aria-hidden="true"
            />
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-8">
        {state === "done" ? (
          <div className="py-8 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-flag-green/40 bg-flag-green/10 text-flag-green">
              <Check size={26} />
            </span>
            <h3 className="display mt-6 text-3xl">Inquiry received</h3>
            <p className="mx-auto mt-3 max-w-md text-chrome">
              Your inquiry landed tagged as{" "}
              <span className="text-paper">{active.label}</span> — the right
              person at AOA Racing will follow up directly.
            </p>
          </div>
        ) : (
          <>
            <h3 className="display text-2xl sm:text-3xl">{active.heading}</h3>
            <p className="mt-2 max-w-xl text-sm text-chrome">{active.blurb}</p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="rt-name">
                  Full name
                </label>
                <input
                  id="rt-name"
                  className="field"
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="rt-email">
                  Email
                </label>
                <input
                  id="rt-email"
                  type="email"
                  className="field"
                  required
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
              <div>
                <label className="field-label" htmlFor="rt-phone">
                  Phone (optional)
                </label>
                <input
                  id="rt-phone"
                  type="tel"
                  className="field"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </div>

              {tab === "sponsorship" && (
                <div>
                  <label className="field-label" htmlFor="rt-company">
                    Company / brand
                  </label>
                  <input
                    id="rt-company"
                    className="field"
                    required
                    value={form.company}
                    onChange={(e) => set("company", e.target.value)}
                  />
                </div>
              )}

              {tab === "driver" && (
                <div>
                  <label className="field-label" htmlFor="rt-exp">
                    Experience level
                  </label>
                  <select
                    id="rt-exp"
                    className="field"
                    required
                    value={form.experience}
                    onChange={(e) => set("experience", e.target.value)}
                  >
                    <option value="" disabled>
                      Select experience…
                    </option>
                    {EXPERIENCE.map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {tab === "support" && (
                <>
                  <div>
                    <label className="field-label" htmlFor="rt-car">
                      Car / class
                    </label>
                    <input
                      id="rt-car"
                      className="field"
                      required
                      placeholder="e.g., E46 M3 — Time Trial"
                      value={form.car}
                      onChange={(e) => set("car", e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="field-label" htmlFor="rt-event">
                      Event &amp; date
                    </label>
                    <input
                      id="rt-event"
                      className="field"
                      required
                      placeholder="Series, track, and weekend"
                      value={form.event}
                      onChange={(e) => set("event", e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="rt-msg">
                  {tab === "sponsorship"
                    ? "What are you hoping to get out of a partnership?"
                    : tab === "driver"
                      ? "Tell us about your goals"
                      : "What does your program need?"}
                </label>
                <textarea
                  id="rt-msg"
                  rows={4}
                  className="field"
                  required
                  value={form.message}
                  onChange={(e) => set("message", e.target.value)}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="btn-primary w-full sm:w-auto"
                >
                  {state === "sending" ? "Sending…" : active.cta}
                </button>
                {state === "error" && (
                  <p className="mt-3 text-sm text-accent">
                    That didn&apos;t go through — try again or call the shop.
                  </p>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
