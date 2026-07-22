"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/data/faq";

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="card divide-y divide-line">
      {FAQ.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.16em] text-chrome/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold sm:text-lg">{item.q}</span>
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-chrome transition-transform ${
                  isOpen ? "rotate-180 text-accent" : ""
                }`}
              />
            </button>
            {isOpen && (
              <p className="px-5 pb-6 pl-[52px] text-sm leading-relaxed text-chrome sm:px-7 sm:pl-[60px] sm:text-base">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
