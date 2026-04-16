import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { allLocations } from "@/lib/content";

export async function generateStaticParams() {
  return allLocations.map((loc) => ({ location: loc.slug }));
}

type Props = { params: Promise<{ location: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location } = await params;
  const loc = allLocations.find((l) => l.slug === location);
  if (!loc) return {};
  return {
    title: `Rent at ${loc.name}`,
    description: `Continue to our Storable rental portal to reserve a unit at ${loc.name}.`,
    alternates: { canonical: `/rent/${loc.slug}` },
    robots: { index: false, follow: false },
  };
}

export default async function RentLocationPage({ params }: Props) {
  const { location } = await params;
  const loc = allLocations.find((l) => l.slug === location);
  if (!loc) notFound();

  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-20">
      <div className="container-page mx-auto max-w-2xl text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Opening the {loc.shortName} rental portal
        </h1>
        <p className="mt-4 text-ink-700">
          You&rsquo;re being handed off to our secure Storable portal to
          reserve your unit at {loc.name}. If the page doesn&rsquo;t open
          automatically, use the button below.
        </p>
        <div className="mt-8">
          <a
            href={loc.rentUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-md shadow-brand-600/20 hover:bg-brand-700"
          >
            Continue to rental portal
            <ExternalLink aria-hidden size={16} />
          </a>
        </div>
        <p className="mt-6 text-xs text-ink-500">
          Rental and payment processing handled by Storable / storEDGE.
        </p>

        {/* Auto-redirect after 1.5s for users without JS, via meta refresh */}
        <meta httpEquiv="refresh" content={`2; url=${loc.rentUrl}`} />
      </div>
    </section>
  );
}
