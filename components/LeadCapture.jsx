"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { submitForm } from "@/lib/site";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setState("sending");
    const res = await submitForm("Newsletter signup", { email }).catch(
      () => ({ ok: false })
    );
    setState(res.ok ? "done" : "error");
  }

  if (state === "done") {
    return (
      <div className="flex items-center gap-3 border border-flag-green/40 bg-flag-green/10 px-5 py-4 text-sm text-flag-green">
        <Check size={18} />
        You&apos;re on the list — dates, vehicle availability, and race news
        land in your inbox first.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="lead-email" className="sr-only">
        Email address
      </label>
      <input
        id="lead-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@fastcar.com"
        className="field sm:flex-1"
      />
      <button
        type="submit"
        className="btn-primary shrink-0"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Get AOA Racing Updates"}
      </button>
      {state === "error" && (
        <p className="text-sm text-accent sm:self-center">
          That didn&apos;t send — try again or call the shop.
        </p>
      )}
    </form>
  );
}
