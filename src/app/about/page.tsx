import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { contact, about } from "@/lib/content";
import RentCTA from "@/components/blocks/RentCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Epic Storage NY · Family-Owned, Brand New in 2026",
  description: `${site.brand} is a family-owned, brand-new 2026 self-storage operator with two Western NY locations. Built around honest pricing, 24/7 access, and zero gimmicks.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
            About
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            {about.heroHeading}
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            {about.heroSubheading}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl">
          <div className="prose-custom max-w-none">
            <h2>{about.whyHeading}</h2>
            <p>{about.whyParagraph1}</p>
            <p>{about.whyParagraph2}</p>

            <h2>{about.careHeading}</h2>
            <ul>
              {about.values.map(({ title, body }) => (
                <li key={title}>
                  <strong>{title}</strong> {body}
                </li>
              ))}
            </ul>

            <h2>{about.whereHeading}</h2>
            <p>
              {about.whereBody}
            </p>

            <h2>{about.getInTouchHeading}</h2>
            <p>
              Want to meet on site? Our office is{" "}
              <strong>by appointment only</strong>. Call or email —{" "}
              <a href={contact.emailHref}>{contact.email}</a> — and
              we&rsquo;ll pick a time. For the fastest path to a unit, the{" "}
              <Link href="/rent">Rent Now</Link> button will take you through
              Storable&rsquo;s secure rental flow in about five minutes.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <RentCTA location="clarence-center" size="md" label="Rent in Clarence" />
            <RentCTA location="buffalo-niagara" size="md" variant="secondary" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
