import type { Metadata } from "next";
import { faqs, contact } from "@/lib/content";
import FaqAccordion from "@/components/blocks/FaqAccordion";
import RentCTA from "@/components/blocks/RentCTA";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "FAQ · Epic Storage NY",
  description:
    "Every question renters ask us most — pricing, sizes, 24/7 access, security, payment, lease terms, and more. Plain-spoken answers.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
            Frequently asked
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything renters ask — answered.
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            If your question isn&rsquo;t here, just call us at{" "}
            <a href={contact.phoneHref} className="text-brand-700 underline">
              {contact.phone}
            </a>
            . A real person answers.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-page mx-auto max-w-3xl">
          <FaqAccordion items={faqs} defaultOpenCount={3} />
        </div>
      </section>

      <section className="bg-brand-50 py-14">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Still have questions?
          </h2>
          <p className="mt-2 text-ink-700">
            Call, email, or just reserve your unit online — we&rsquo;ll sort
            the rest out.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <RentCTA location="clarence-center" size="md" label="Rent in Clarence" />
            <RentCTA location="buffalo-niagara" size="md" variant="secondary" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
