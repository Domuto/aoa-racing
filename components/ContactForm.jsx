"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { submitForm } from "@/lib/site";

const TOPICS = [
  "Track days & booking",
  "Performance shop / service",
  "Race team, sponsorship, or support",
  "Something else",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: TOPICS[0],
    message: "",
  });
  const [state, setState] = useState("idle");

  function set(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setState("sending");
    const res = await submitForm(`Contact — ${form.topic}`, form).catch(
      () => ({ ok: false })
    );
    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="card flex h-full flex-col items-center justify-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-flag-green/40 bg-flag-green/10 text-flag-green">
          <Check size={26} />
        </span>
        <h3 className="display mt-6 text-3xl">Message sent</h3>
        <p className="mt-3 max-w-sm text-chrome">
          It's routed to the right person at the shop — you'll hear back
          soon. Need an answer now? Call during shop hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="c-name">
            Full name
          </label>
          <input
            id="c-name"
            className="field"
            required
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="c-phone">
            Phone (optional)
          </label>
          <input
            id="c-phone"
            type="tel"
            className="field"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
      </div>
      <div>
        <label className="field-label" htmlFor="c-email">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          className="field"
          required
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>
      <div>
        <label className="field-label" htmlFor="c-topic">
          What's this about?
        </label>
        <select
          id="c-topic"
          className="field"
          value={form.topic}
          onChange={(e) => set("topic", e.target.value)}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="field-label" htmlFor="c-msg">
          Message
        </label>
        <textarea
          id="c-msg"
          rows={5}
          className="field"
          required
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="btn-primary w-full sm:w-auto"
        >
          {state === "sending" ? "Sending…" : "Send Inquiry"}
        </button>
        {state === "error" && (
          <p className="mt-3 text-sm text-accent">
            That didn't go through — try again or call the shop.
          </p>
        )}
      </div>
    </form>
  );
}
