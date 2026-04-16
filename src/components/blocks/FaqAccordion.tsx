"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({
  items,
  defaultOpenCount = 2,
}: {
  items: readonly { q: string; a: string }[];
  defaultOpenCount?: number;
}) {
  const [open, setOpen] = useState<number[]>(
    Array.from({ length: Math.min(defaultOpenCount, items.length) }, (_, i) => i),
  );

  function toggle(i: number) {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  return (
    <div className="divide-y divide-ink-300/60 rounded-2xl border border-ink-300/60 bg-white shadow-sm">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-base font-bold text-ink-900 md:text-lg">
                {item.q}
              </span>
              <ChevronDown
                aria-hidden
                size={20}
                className={`mt-0.5 shrink-0 text-brand-700 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-6 pb-5 pt-0 text-sm leading-relaxed text-ink-700">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
