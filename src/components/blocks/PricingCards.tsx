import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { priceTiers } from "@/lib/content";
import { formatUsd } from "@/lib/utils";
import RentCTA from "./RentCTA";

const tierOrder = ["small", "medium", "large"] as const;

const tierCopy = {
  small: {
    subtitle: "Our most popular starter",
    fits: "1-bedroom apartment contents",
    hrefSlug: "10x10",
  },
  medium: {
    subtitle: "The sweet spot",
    fits: "2-bedroom home or small business",
    hrefSlug: "10x15",
  },
  large: {
    subtitle: "When you need the whole garage",
    fits: "3+ bedroom home or vehicle + boxes",
    hrefSlug: "10x20",
  },
} as const;

export default function PricingCards({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      id="pricing"
      className={compact ? "py-16" : "py-16 md:py-24"}
      aria-labelledby="pricing-heading"
    >
      <div className="container-page">
        {!compact && (
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 id="pricing-heading" className="font-display text-3xl font-bold md:text-4xl">
              Straightforward pricing
            </h2>
            <p className="mt-3 text-ink-700">
              Every unit climate-controlled. Month-to-month. No move-in fees.
              No surprise increases.
            </p>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {tierOrder.map((key) => {
            const tier = priceTiers[key];
            const copy = tierCopy[key];
            const featured = key === "medium";
            return (
              <article
                key={key}
                className={[
                  "relative flex flex-col rounded-2xl p-7 shadow-sm transition",
                  featured
                    ? "bg-gradient-to-b from-brand-600 to-brand-800 text-white ring-2 ring-brand-600"
                    : "border border-ink-300/60 bg-white text-ink-900",
                ].join(" ")}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 shadow-md">
                    Most popular
                  </span>
                )}
                <h3
                  className={`font-display text-2xl font-bold ${
                    featured ? "text-white" : "text-ink-900"
                  }`}
                >
                  {tier.label}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    featured ? "text-brand-100" : "text-ink-500"
                  }`}
                >
                  {copy.subtitle}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={`font-display text-5xl font-extrabold tracking-tight ${
                      featured ? "text-white" : "text-ink-900"
                    }`}
                  >
                    {formatUsd(tier.monthly).replace(".00", "")}
                  </span>
                  <span
                    className={featured ? "text-brand-100" : "text-ink-500"}
                  >
                    /mo
                  </span>
                </div>
                <p
                  className={`mt-1 text-xs ${
                    featured ? "text-brand-100" : "text-ink-500"
                  }`}
                >
                  Sizes: {tier.sizes.join(", ")}
                </p>
                <p
                  className={`mt-5 text-sm ${
                    featured ? "text-brand-50" : "text-ink-700"
                  }`}
                >
                  Fits roughly: <strong>{copy.fits}</strong>
                </p>
                <div className="mt-6 grow" />
                <RentCTA
                  size="md"
                  variant={featured ? "secondary" : "primary"}
                  location="clarence-center"
                />
                <Link
                  href={`/units/${copy.hrefSlug}`}
                  className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${
                    featured ? "text-brand-100 hover:text-white" : "text-brand-700 hover:text-brand-800"
                  }`}
                >
                  See what fits
                  <ArrowRight aria-hidden size={14} />
                </Link>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-ink-500">
          Prices shown are for Clarence Center. Pricing at Buffalo Niagara is
          identical unless otherwise noted. First month 50% off available with
          a 4-month minimum stay.
        </p>
      </div>
    </section>
  );
}
