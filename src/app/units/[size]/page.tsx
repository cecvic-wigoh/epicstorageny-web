import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { UnitSize } from "@/lib/site";
import { unitSizes, priceTiers } from "@/lib/content";
import { images, type ImageRef } from "@/lib/images";
import { formatUsd } from "@/lib/utils";
import RentCTA from "@/components/blocks/RentCTA";
import Photo from "@/components/blocks/Photo";
import {
  BreadcrumbJsonLd,
  UnitProductJsonLd,
} from "@/components/seo/JsonLd";

function unitImage(slug: string): ImageRef {
  // Drive-up sizes get the drive-up hero; upper-floor 10×17.5 gets the long
  // interior hallway; everything else gets the clean climate-controlled unit.
  if (slug === "10x15" || slug === "10x20") return images.driveUpOpen;
  if (slug === "10x17-5") return images.hallway;
  return images.unitClimate;
}

export async function generateStaticParams() {
  return unitSizes.map((u) => ({ size: u.slug }));
}

type Props = { params: Promise<{ size: string }> };

function findUnit(slug: string): UnitSize | undefined {
  return unitSizes.find((u) => u.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { size } = await params;
  const unit = findUnit(size);
  if (!unit) return {};
  return {
    title: `${unit.dims} Self Storage Unit · ${formatUsd(unit.monthly).replace(".00", "")}/mo`,
    description: `${unit.dims} climate-controlled self storage at Epic Storage NY. ${unit.description}`,
    alternates: { canonical: `/units/${unit.slug}` },
  };
}

export default async function UnitSizePage({ params }: Props) {
  const { size } = await params;
  const unit = findUnit(size);
  if (!unit) notFound();
  const tier = priceTiers[unit.tier];

  return (
    <>
      <UnitProductJsonLd unit={unit} />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Units", url: "/units" },
          { name: unit.dims, url: `/units/${unit.slug}` },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-14 md:py-20">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-500">
            <Link href="/" className="hover:text-brand-700">Home</Link> /{" "}
            <Link href="/units" className="hover:text-brand-700">Units</Link> /{" "}
            <span aria-current="page" className="text-ink-700">{unit.dims}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <p className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700">
                {tier.label} tier
              </p>
              <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                {unit.dims} storage unit
              </h1>
              <p className="mt-2 text-ink-500">
                {unit.area} sq ft · Climate-controlled · Month-to-month
              </p>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                {unit.description}
              </p>
            </div>
            <aside className="rounded-2xl border border-ink-300/60 bg-white p-7 shadow-sm">
              <p className="text-sm text-ink-500">Monthly rent</p>
              <p className="mt-1 font-display text-5xl font-extrabold text-ink-900">
                {formatUsd(unit.monthly).replace(".00", "")}
              </p>
              <p className="mt-1 text-xs text-ink-500">Plus tax. No move-in fees.</p>
              <div className="mt-5 rounded-lg bg-brand-50 p-4 text-sm text-brand-800">
                <strong>First month 50% off</strong> with a 4-month minimum stay.
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <RentCTA location="clarence-center" size="md" label="Rent in Clarence" />
                <RentCTA location="buffalo-niagara" size="md" variant="secondary" label="Rent in Buffalo" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Photo image={unitImage(unit.slug)} />
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold">What fits</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {unit.idealFor.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                  <Check aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">What you get</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {unit.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                  <Check aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-600" strokeWidth={3} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-14">
        <div className="container-page">
          <h2 className="mb-6 font-display text-xl font-bold">Other sizes</h2>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {unitSizes
              .filter((u) => u.slug !== unit.slug)
              .map((u) => (
                <Link
                  key={u.slug}
                  href={`/units/${u.slug}`}
                  className="rounded-xl bg-white p-4 text-center shadow-sm ring-1 ring-ink-300/60 transition hover:ring-brand-300"
                >
                  <p className="font-display text-lg font-bold">{u.dims}</p>
                  <p className="text-xs text-ink-500">
                    {formatUsd(u.monthly).replace(".00", "")}/mo
                  </p>
                  <p className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-700">
                    Details
                    <ArrowRight aria-hidden size={12} />
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
