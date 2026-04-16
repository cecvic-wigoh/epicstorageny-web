"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { contact } from "@/lib/content";

export default function MobileNav({
  items,
}: {
  items: readonly { href: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-300 text-ink-900 lg:hidden"
      >
        <Menu aria-hidden size={20} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
          className="fixed inset-0 z-50 flex flex-col bg-white"
        >
          <div className="flex h-16 items-center justify-between border-b border-ink-300 px-5">
            <span className="font-display text-lg font-bold">
              Epic <span className="text-brand-700">Storage</span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-300"
            >
              <X aria-hidden size={20} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="flex flex-col gap-1">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-4 text-lg font-semibold text-ink-900 hover:bg-brand-50 hover:text-brand-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-ink-300 px-5 py-5">
            <a
              href={contact.phoneHref}
              className="flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-base font-semibold text-white"
            >
              <Phone aria-hidden size={18} />
              Call {contact.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
