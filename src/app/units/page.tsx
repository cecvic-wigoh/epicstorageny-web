import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { unitSizes, priceTiers } from "@/lib/content";
import { formatUsd } from "@/lib/utils";
import PricingCards from "@/components/blocks/PricingCards";
import SectionHeading from "@/components/blocks/SectionHeading";
import RentCTA from "@/components/blocks/RentCTA";
import {
  AllUnitsJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Unit Sizes & Pricing · Epic Storage NY",
  description:
    "Every size Epic Storage NY offers, what fits, and what it costs. 10×10 to 10×30 climate-controlled units, plus climate-controlled car bays. Published prices — no gimmicks.",
  alternates: { canonical: "/units" },
};

export default function UnitsPage() {
  return (
    <>
      <AllUnitsJsonLd />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Units & Pricing", url: "/units" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
              Units &amp; Pricing
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Every size we offer, what it fits, and what it costs.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-700">
              All units are climate-controlled. Month-to-month. No move-in
              fees. Prices are the same at both Epic Storage locations.
            </p>
          </div>
        </div>
      </section>

      <PricingCards compact />

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="All sizes"
            title="Size-by-size breakdown"
            lead="Not sure which one fits? Call us and we'll walk the building with you."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {unitSizes.map((unit) => (
              <Link
                key={unit.slug}
                href={`/units/${unit.slug}`}
                className="group flex flex-col rounded-2xl border border-ink-300/60 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">
                      {unit.dims}
                    </h3>
                    <p className="text-sm text-ink-500">
                      {unit.area} sq ft · {priceTiers[unit.tier].label} tier
                    </p>
                  </div>
                  <p className="text-right">
                    <span className="block font-display text-2xl font-extrabold text-brand-700">
                      {formatUsd(unit.monthly).replace(".00", "")}
                    </span>
                    <span className="text-xs text-ink-500">per month</span>
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-700">
                  {unit.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-brand-700">
                  View details & photos
                  <ArrowRight
                    aria-hidden
                    size={14}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Ready to reserve a unit?
          </h2>
          <p className="mt-2 text-ink-700">
            Rent online in about five minutes. Climate-controlled, gated,
            month-to-month.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <RentCTA location="clarence-center" size="lg" label="Rent in Clarence Center" />
            <RentCTA location="buffalo-niagara" size="lg" variant="secondary" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
