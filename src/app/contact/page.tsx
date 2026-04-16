import type { Metadata } from "next";
import { allLocations, contact, hours } from "@/lib/content";
import MapEmbed from "@/components/blocks/MapEmbed";
import NapBlock from "@/components/blocks/NapBlock";
import RentCTA from "@/components/blocks/RentCTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Epic Storage NY · Clarence Center & Buffalo",
  description:
    "Call, email, or book an on-site appointment at Epic Storage NY. Two Western New York locations: 8550 Roll Road, Clarence Center, and 1485 Niagara Street, Buffalo.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <section className="bg-gradient-to-b from-brand-50 to-white py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
            Contact
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Talk to a real human.
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            One phone line, one email. The same people answer for both
            locations.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page">
          <div className="mx-auto mb-10 grid max-w-4xl gap-4 md:grid-cols-3">
            <a
              href={contact.phoneHref}
              className="rounded-2xl border border-ink-300/60 bg-white p-6 text-center shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <Phone aria-hidden className="mx-auto text-brand-700" size={24} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink-500">
                Phone
              </p>
              <p className="mt-1 font-display text-lg font-bold">{contact.phone}</p>
            </a>
            <a
              href={contact.emailHref}
              className="rounded-2xl border border-ink-300/60 bg-white p-6 text-center shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <Mail aria-hidden className="mx-auto text-brand-700" size={24} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink-500">
                Email
              </p>
              <p className="mt-1 break-all font-display text-sm font-bold">{contact.email}</p>
            </a>
            <div className="rounded-2xl border border-ink-300/60 bg-white p-6 text-center shadow-sm">
              <Clock aria-hidden className="mx-auto text-brand-700" size={24} />
              <p className="mt-3 text-xs font-bold uppercase tracking-wider text-ink-500">
                Hours
              </p>
              <p className="mt-1 font-display text-sm font-bold">{hours.officeLabel}</p>
              <p className="mt-1 text-xs text-ink-500">{hours.gateLabel}</p>
            </div>
          </div>

          <div id="map" className="grid gap-10 md:grid-cols-2">
            {allLocations.map((loc) => (
              <div key={loc.slug} className="flex flex-col gap-5">
                <NapBlock location={loc} />
                <MapEmbed src={loc.mapEmbedUrl} title={`Map to ${loc.name}`} />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <RentCTA location="clarence-center" size="lg" label="Rent in Clarence" />
            <RentCTA location="buffalo-niagara" size="lg" variant="secondary" label="Rent in Buffalo" />
          </div>
        </div>
      </section>
    </>
  );
}
