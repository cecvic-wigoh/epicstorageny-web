import type { Metadata } from "next";
import { features, faqs } from "@/lib/content";
import { images } from "@/lib/images";
import FeatureGrid from "@/components/blocks/FeatureGrid";
import SectionHeading from "@/components/blocks/SectionHeading";
import FaqAccordion from "@/components/blocks/FaqAccordion";
import RentCTA from "@/components/blocks/RentCTA";
import Photo from "@/components/blocks/Photo";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Features & Security · Epic Storage NY",
  description:
    "Every feature we offer and — honestly — what we don't. 24/7 gated access, climate control, perimeter fencing, dusk-to-dawn lighting, and no cameras yet.",
  alternates: { canonical: "/features" },
};

const securityFaqs = faqs.filter((f) =>
  /security|camera|24\/7|access/i.test(f.q),
);

export default function FeaturesPage() {
  return (
    <>
      <FaqJsonLd items={securityFaqs} />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Features", url: "/features" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
            Features
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {features.pageHeading}
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            {features.pageSubheading}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureGrid
              title="Security"
              items={features.security}
              intro={features.securityIntro}
            />
            <FeatureGrid
              title="Access"
              items={features.access}
              intro={features.accessIntro}
            />
            <FeatureGrid
              title="Convenience"
              items={features.convenience}
              intro={features.convenienceIntro}
            />
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            <Photo image={images.gate} />
            <Photo image={images.fence} />
            <Photo image={images.driveUpRow} />
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            {features.cameraHeading}
          </h2>
          <p className="mt-4 text-ink-700">
            {features.cameraParagraph1}
          </p>
          <p className="mt-4 text-ink-700">
            {features.cameraParagraph2}
          </p>
          <p className="mt-4 text-ink-700">
            {features.cameraParagraph3}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="FAQs"
            title="Feature & security questions"
          />
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={securityFaqs} />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready when you are.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <RentCTA location="clarence-center" size="lg" variant="secondary" label="Rent in Clarence" />
            <RentCTA location="buffalo-niagara" size="lg" variant="outline" className="text-white ring-white hover:bg-white/10 hover:text-white" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
