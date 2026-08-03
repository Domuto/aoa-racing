"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { submitForm } from "@/lib/site";

const CONTACT_METHODS = ["Email", "Phone call", "Text message"];

export default function CustomInquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    description: "",
    contactMethod: CONTACT_METHODS[0],
  });
  const [state, setState] = useState("idle"); // idle | sending | done | error

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const res = await submitForm("Custom project inquiry", {
      ...form,
      vehicle: `${form.year} ${form.make} ${form.model}`.trim(),
      preferred_contact: form.contactMethod,
    }).catch(() => ({ ok: false }));
    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-flag-green/40 bg-flag-green/10 text-flag-green">
          <Check size={26} />
        </span>
        <h3 className="display mt-6 text-3xl sm:text-4xl">Inquiry received</h3>
        <p className="mx-auto mt-4 max-w-md text-chrome">
          Thanks — the AOA Racing team has your project details and will reach
          out using your preferred method of contact to talk through scope and
          next steps.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/shop" className="btn-primary">
            Back to the Shop
          </Link>
          <Link href="/" className="btn-ghost">
            Home
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
          01 — Who to reach
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="field-label" htmlFor="ci-name">
              Name
            </label>
            <input
              id="ci-name"
              className="field"
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ci-email">
              Email
            </label>
            <input
              id="ci-email"
              type="email"
              className="field"
              required
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ci-phone">
              Phone number
            </label>
            <input
              id="ci-phone"
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
          02 — Vehicle
        </legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="field-label" htmlFor="ci-year">
              Year
            </label>
            <input
              id="ci-year"
              className="field"
              inputMode="numeric"
              placeholder="2019"
              value={form.year}
              onChange={(e) => set("year", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ci-make">
              Make
            </label>
            <input
              id="ci-make"
              className="field"
              placeholder="BMW"
              value={form.make}
              onChange={(e) => set("make", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ci-model">
              Model
            </label>
            <input
              id="ci-model"
              className="field"
              placeholder="M2"
              value={form.model}
              onChange={(e) => set("model", e.target.value)}
            />
          </div>
        </div>
      </fieldset>

      {/* Project */}
      <fieldset>
        <legend className="tt-label tt-label--accent mb-4">
          03 — The project
        </legend>
        <div className="grid gap-4">
          <div>
            <label className="field-label" htmlFor="ci-description">
              Description of the project
            </label>
            <textarea
              id="ci-description"
              rows={5}
              className="field"
              required
              placeholder="Custom build, fabrication, race support, fleet service, specialty project… tell us what you have in mind."
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
            />
          </div>
          <div>
            <label className="field-label" htmlFor="ci-contact">
              Preferred method of contact
            </label>
            <select
              id="ci-contact"
              className="field"
              value={form.contactMethod}
              onChange={(e) => set("contactMethod", e.target.value)}
            >
              {CONTACT_METHODS.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-primary w-full sm:w-auto"
        >
          {state === "sending" ? "Sending…" : "Submit Custom Inquiry"}
        </button>
        {state === "error" && (
          <p className="mt-3 text-sm text-accent">
            That didn&apos;t go through — try again or call the shop.
          </p>
        )}
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-chrome/70">
          No spam, no pressure — a real person from the team follows up.
        </p>
      </div>
    </form>
  );
}
