import type { Metadata } from "next";
import Hero from "@/components/blocks/Hero";
import ProofPoints from "@/components/blocks/ProofPoints";
import PricingCards from "@/components/blocks/PricingCards";
import LocationCard from "@/components/blocks/LocationCard";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SectionHeading from "@/components/blocks/SectionHeading";
import FaqAccordion from "@/components/blocks/FaqAccordion";
import PromoStrip from "@/components/blocks/PromoStrip";
import RentCTA from "@/components/blocks/RentCTA";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { allLocations, contact, features, faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.brand} · Climate-Controlled Self Storage, Clarence Center & Buffalo`,
  description: site.description,
  alternates: { canonical: "/" },
};

const homepageFaqs = faqs.slice(0, 6);

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={homepageFaqs} />
      <Hero />
      <PromoStrip />
      <ProofPoints />

      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Two locations"
            title="Epic Storage in Clarence Center and Buffalo"
            lead="Both facilities run the same phone line, the same published pricing, and the same promise. Pick the one that's easier to drive to — we'll take care of the rest."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {allLocations.map((loc) => (
              <LocationCard key={loc.slug} location={loc} />
            ))}
          </div>
        </div>
      </section>

      <PricingCards />

      <section className="bg-brand-50 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="The promise"
            title="Your rate is your rate."
            lead="The #1 complaint we hear about the national chains is the bait-and-switch rate hike 90 days after move-in. We built Epic Storage specifically not to do that."
          />
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-lg leading-relaxed text-ink-700">
              Whatever price you see on this page is the price you&rsquo;ll pay,
              month after month. If we ever adjust rates for new customers, your
              existing rate is protected for a minimum period that&rsquo;s written
              into your lease &mdash; not a promise in an ad.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-700">
              We&rsquo;re a family-owned, brand-new Western New York facility. We
              don&rsquo;t have a quarterly revenue target from a corporate parent
              breathing down our neck. We have renters we need to keep, and the
              only way we keep them is by being honest about pricing.
            </p>
            <p className="mt-6 text-sm text-ink-500">
              Final wording and protected period are set forth in your signed
              lease agreement &mdash; see{" "}
              <a href="/legal/terms" className="text-brand-700 underline">
                Terms of Service
              </a>{" "}
              for details.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What you get"
            title="Security, access, and the small stuff"
            lead="We tell you the whole truth about our facility — including what we don't have yet. Transparency is the pitch."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureGrid
              title="Security"
              items={features.security}
              intro="We built the facility around lighting, fencing, and gate control. Cameras are on our roadmap — we'll tell you when they're installed."
            />
            <FeatureGrid title="Access" items={features.access} />
            <FeatureGrid
              title="Convenience"
              items={features.convenience}
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-alt py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Before you call us"
            title="Questions we hear every day"
            lead="The four most common questions renters ask us. For everything else, see the full FAQ or just pick up the phone."
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={homepageFaqs} defaultOpenCount={2} />
            <div className="mt-6 text-center">
              <a
                href="/faq"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                See all FAQs →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 py-16 text-white md:py-20">
        <div className="container-page relative text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready when you are.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-100">
            Rent a climate-controlled unit online in about five minutes. Or call{" "}
            <a href={contact.phoneHref} className="font-semibold text-white underline">
              {contact.phone}
            </a>{" "}
            and talk to a human.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <RentCTA location="clarence-center" size="lg" variant="secondary" label="Rent in Clarence Center" />
            <RentCTA location="buffalo-niagara" size="lg" variant="outline" className="text-white ring-white hover:bg-white/10 hover:text-white" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
