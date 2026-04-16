import Image from "next/image";
import { Check } from "lucide-react";
import RentCTA from "./RentCTA";
import { promo } from "@/lib/content";
import { images } from "@/lib/images";

const highlights = [
  "100% climate-controlled",
  "24/7 gated access",
  "Month-to-month",
  "No move-in fees",
  "Published prices",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(600px 300px at 15% 10%, #dbeafe 0%, transparent 60%), radial-gradient(500px 280px at 85% 0%, #eff6ff 0%, transparent 60%)",
        }}
      />
      <div className="container-page relative pb-16 pt-14 md:pb-24 md:pt-20 lg:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <span
              aria-hidden
              className="inline-block h-2 w-2 animate-pulse rounded-full bg-brand-500"
            />
            {promo.headline} &middot; {promo.terms}
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl md:text-6xl">
            Straightforward storage.
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
              No gimmicks. No surprise rate hikes.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-700 md:text-xl">
            Brand-new climate-controlled self storage in{" "}
            <strong className="font-semibold text-ink-900">Clarence Center</strong> and{" "}
            <strong className="font-semibold text-ink-900">Buffalo</strong>. 24/7 gated access,
            month-to-month leases, and published prices that actually stay published.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RentCTA location="clarence-center" size="lg" label="Rent in Clarence Center" />
            <RentCTA location="buffalo-niagara" size="lg" variant="secondary" label="Rent in Buffalo" />
          </div>

          <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-ink-700">
            {highlights.map((h) => (
              <li key={h} className="inline-flex items-center gap-1.5">
                <Check
                  aria-hidden
                  size={16}
                  className="text-brand-600"
                  strokeWidth={3}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mt-14 md:mt-20">
          <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10 ring-1 ring-brand-200">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/40 to-transparent"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold text-ink-700 shadow-md backdrop-blur">
              8550 Roll Road · Clarence Center · 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
