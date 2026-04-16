import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import type { Location } from "@/lib/site";
import { contact } from "@/lib/content";
import RentCTA from "./RentCTA";

export default function LocationCard({
  location,
  accent,
}: {
  location: Location;
  accent?: "blue" | "sky";
}) {
  const ring =
    accent === "sky" ? "ring-brand-300" : "ring-brand-200";

  return (
    <article
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-brand-50 p-7 shadow-md ring-1 ring-inset ${ring}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div className="relative">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
          Location
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold text-ink-900">
          {location.name}
        </h3>
        <p className="mt-3 flex items-start gap-2 text-sm text-ink-700">
          <MapPin aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-700" />
          <span>
            {location.street}
            <br />
            {location.city}, {location.state} {location.zip}
          </span>
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm text-ink-700">
          <Phone aria-hidden size={16} className="shrink-0 text-brand-700" />
          <a href={contact.phoneHref} className="hover:text-brand-800">
            {contact.phone}
          </a>
        </p>
        <p className="mt-5 text-sm leading-relaxed text-ink-700">{location.blurb}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <RentCTA location={location.slug} size="md" />
          <Link
            href={`/locations/${location.slug}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Location details
            <ArrowRight aria-hidden size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
