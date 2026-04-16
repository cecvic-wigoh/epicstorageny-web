import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { LocationSlug } from "@/lib/site";
import { allLocations, contact, faqs, features, getLocation } from "@/lib/content";
import { images, locationHero } from "@/lib/images";
import PricingCards from "@/components/blocks/PricingCards";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SectionHeading from "@/components/blocks/SectionHeading";
import FaqAccordion from "@/components/blocks/FaqAccordion";
import RentCTA from "@/components/blocks/RentCTA";
import MapEmbed from "@/components/blocks/MapEmbed";
import NapBlock from "@/components/blocks/NapBlock";
import Photo from "@/components/blocks/Photo";
import PromoStrip from "@/components/blocks/PromoStrip";
import Image from "next/image";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  LocalBusinessJsonLd,
} from "@/components/seo/JsonLd";

export async function generateStaticParams() {
  return allLocations.map((loc) => ({ slug: loc.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = allLocations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `Self Storage in ${loc.city}, NY · 24/7 Gated · ${loc.street}`,
    description: `Climate-controlled self storage at ${loc.street}, ${loc.city}, NY. 24/7 gated access, month-to-month leases, and published prices. Serving ${loc.areasServed.slice(0, 4).join(", ")}, and more.`,
    alternates: { canonical: `/locations/${loc.slug}` },
    openGraph: {
      title: `${loc.name} · Epic Storage NY`,
      description: loc.blurb,
      url: `/locations/${loc.slug}`,
    },
  };
}

const locationFaqs = faqs.slice(0, 8);

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = allLocations.find((l) => l.slug === slug);
  if (!loc) notFound();
  const hero = locationHero[loc.slug];

  return (
    <>
      <LocalBusinessJsonLd location={loc} />
      <FaqJsonLd items={locationFaqs} />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/#locations" },
          { name: loc.city, url: `/locations/${loc.slug}` },
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page relative pb-12 pt-12 md:pb-20 md:pt-20">
          <div className="mb-10 md:mb-12">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl shadow-lg ring-1 ring-brand-200">
              <Image
                src={hero.src}
                alt={hero.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-xl bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink-700 shadow-md backdrop-blur">
                {loc.street} · {loc.city}, {loc.state}
              </div>
            </div>
          </div>

          <nav
            aria-label="Breadcrumb"
            className="mb-6 text-sm text-ink-500"
          >
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>{" "}
            /{" "}
            <span aria-current="page" className="text-ink-700">
              {loc.shortName}
            </span>
          </nav>
          <div className="max-w-3xl">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-inset ring-brand-200">
              <MapPin aria-hidden size={12} />
              {loc.city}, {loc.state}
            </p>
            <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Self Storage in {loc.city}, NY
            </h1>
            <p className="mt-4 text-lg text-ink-700">{loc.blurb}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <RentCTA location={loc.slug} size="lg" />
              <a
                href="#directions"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-brand-700 ring-1 ring-inset ring-brand-200 hover:bg-brand-50"
              >
                Directions
                <ArrowRight aria-hidden size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <PromoStrip />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              What we offer at {loc.shortName}
            </h2>
            <p className="prose-custom mt-4 text-base">
              Every unit in our A building is climate-controlled — a real
              comfort factor through a Western NY winter. First-floor drive-up
              access is available on even-numbered units A102 through A136.
              First-floor easy-access (not strictly drive-up) lives on
              odd-numbered units A101 through A135. The second floor
              (A201–A239) is our 10×17.5 tier, elevator-served so move-in is
              never a fight with a couch on a stairwell.
            </p>
            <p className="prose-custom mt-4 text-base">
              Gate access is 24/7 once you&rsquo;re a tenant — weekends,
              holidays, 2 AM. Our office is staffed by appointment only, so
              call {" "}
              <a className="text-brand-700 underline" href={contact.phoneHref}>
                the main line
              </a>
              {" "}
              and we&rsquo;ll meet you on site. No surprises, no sudden rate
              hikes, no gimmicks — just clean, lit, fenced, climate-controlled
              storage at a Western New York price.
            </p>

            <h3 className="mt-10 font-display text-xl font-bold">Neighborhoods we serve</h3>
            <p className="prose-custom mt-2 text-base">
              Our {loc.shortName} facility is the easy choice for renters
              throughout{" "}
              {loc.areasServed.map((a, i) => (
                <span key={a}>
                  <strong className="text-ink-900">{a}</strong>
                  {i === loc.areasServed.length - 1 ? "." : ", "}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <NapBlock location={loc} />
            <div id="directions">
              <MapEmbed src={loc.mapEmbedUrl} title={`Map to ${loc.name}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Inside the facility"
            title="A look around"
            lead="A few real shots of our A building, drive-up units, interior hallways, and the perimeter gate."
          />
          <div className="grid gap-4 md:grid-cols-3">
            <Photo image={images.hallway} />
            <Photo image={images.driveUpOpen} />
            <Photo image={images.unitClimate} />
            <Photo image={images.gate} />
            <Photo image={images.driveUpRow} />
            <Photo image={images.wordmark} />
          </div>
          {loc.slug === "buffalo-niagara" && (
            <p className="mt-6 text-center text-xs text-ink-500">
              Photos shown are of our Clarence Center flagship facility. Buffalo-specific imagery will be added once on-site photography is delivered.
            </p>
          )}
        </div>
      </section>

      <PricingCards compact />

      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Security & access"
            title="What you actually get (and what you don't)"
            lead="We don't have cameras yet and we'd rather tell you than oversell you. Here's what we have instead."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureGrid
              title="Security"
              items={features.security}
              intro="Gate, fence, lighting, and keys you control. Cameras are on the roadmap — we'll update this page when they're installed."
            />
            <FeatureGrid title="Access" items={features.access} />
            <FeatureGrid title="Convenience" items={features.convenience} />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQ"
            title={`Questions about ${loc.shortName}`}
            lead="The eight most common questions renters ask us. Everything else is on the full FAQ page."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={locationFaqs} />
            <div className="mt-6 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                See all FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to rent at {loc.shortName}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Contactless online rental in about five minutes — no phone call
            required unless you want one.
          </p>
          <div className="mt-8 flex justify-center">
            <RentCTA location={loc.slug} size="lg" variant="secondary" />
          </div>
        </div>
      </section>
    </>
  );
}
