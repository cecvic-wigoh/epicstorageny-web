import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allLocations } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Rent a Unit · Epic Storage NY",
  description:
    "Reserve a climate-controlled self storage unit online in about five minutes. Pick your location — Clarence Center or Buffalo.",
  alternates: { canonical: "/rent" },
  robots: { index: false, follow: true },
};

export default function RentPickerPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Rent", url: "/rent" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Pick your Epic Storage location
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            We&rsquo;ll hand you off to our secure rental portal. Climate-
            controlled, month-to-month, no surprise fees.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {allLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/rent/${loc.slug}`}
                className="group rounded-2xl border border-ink-300/60 bg-white p-7 text-left shadow-sm transition hover:border-brand-300 hover:shadow-md"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  {loc.city}, {loc.state}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold">{loc.name}</h2>
                <p className="mt-2 text-sm text-ink-700">
                  {loc.street}, {loc.city}, {loc.state} {loc.zip}
                </p>
                <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
                  Continue
                  <ArrowRight aria-hidden size={14} className="transition group-hover:translate-x-1" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
