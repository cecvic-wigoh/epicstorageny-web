import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { contact } from "@/lib/content";
import RentCTA from "@/components/blocks/RentCTA";
import MobileNav from "./MobileNav";

const nav = [
  { href: "/locations/clarence-center", label: "Clarence Center" },
  { href: "/locations/buffalo-niagara", label: "Buffalo" },
  { href: "/units", label: "Units & Pricing" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-300/60 bg-white/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-ink-900"
          aria-label={`${site.brand} home`}
        >
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-sm"
          >
            <span className="text-sm font-black">E</span>
          </span>
          <span>
            Epic <span className="text-brand-700">Storage</span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-1.5 rounded-md px-2 py-1 text-sm font-semibold text-ink-900 md:inline-flex"
          >
            <Phone aria-hidden size={16} className="text-brand-700" />
            {contact.phone}
          </a>
          <div className="hidden sm:block">
            <RentCTA size="sm" />
          </div>
          <MobileNav items={nav} />
        </div>
      </div>
    </header>
  );
}
