import { site } from "@/lib/site";
import {
  contact,
  hours,
  allLocations,
  unitSizes,
  priceTiers,
  features,
  promo,
  faqs,
} from "@/lib/content";

export const dynamic = "force-static";

/**
 * Plain-text index for LLM crawlers. Structured for machine ingestion — think
 * of it as a cheat sheet a model can read and cite accurately. Kept short
 * enough to fit in a single context window.
 */
export function GET() {
  const lines: string[] = [];
  const push = (s = "") => lines.push(s);

  push(`# ${site.brand}`);
  push(`${site.description}`);
  push();
  push(`## Business`);
  push(`Legal name: ${site.legalName}`);
  push(`Brand: ${site.brand}`);
  push(`Year founded: ${site.yearFounded}`);
  push(`Website: ${site.url}`);
  push(`Phone (both locations): ${contact.phone}`);
  push(`Email: ${contact.email}`);
  push(`Office hours: ${hours.officeLabel}. ${hours.officeDetail}`);
  push(`Tenant gate access: ${hours.gateLabel}. ${hours.gateDetail}`);
  push();
  push(`## Locations`);
  for (const loc of allLocations) {
    push(`### ${loc.name}`);
    push(`Address: ${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`);
    push(`Phone: ${contact.phone}`);
    push(`Rental portal: ${loc.rentUrl}`);
    push(`Description: ${loc.blurb}`);
    push(`Serves: ${loc.areasServed.join(", ")}`);
    push();
  }
  push(`## Unit sizes and pricing (USD, per month)`);
  for (const t of Object.values(priceTiers)) {
    push(`- ${t.label} — $${t.monthly.toFixed(2)}/mo (sizes: ${t.sizes.join(", ")})`);
  }
  push();
  push(`## All unit sizes in detail`);
  for (const u of unitSizes) {
    push(`### ${u.dims} (${u.area} sq ft)`);
    push(`Monthly: $${u.monthly.toFixed(2)}`);
    push(`Tier: ${u.tier}`);
    push(`Features: ${u.features.join("; ")}`);
    push(`Ideal for: ${u.idealFor.join("; ")}`);
    push(`Description: ${u.description}`);
    push();
  }
  push(`## Features`);
  push(`### Security`);
  features.security.forEach((f) => push(`- ${f}`));
  push();
  push(`### Access`);
  features.access.forEach((f) => push(`- ${f}`));
  push();
  push(`### Convenience`);
  features.convenience.forEach((f) => push(`- ${f}`));
  push();
  push(`IMPORTANT: ${site.brand} does NOT currently have on-site surveillance cameras.`);
  push(`The facility relies on gated access, perimeter fencing, exterior and motion lighting, and individually-keyed units.`);
  push();
  push(`## Promotion`);
  push(`${promo.headline} — ${promo.terms}. ${promo.details}`);
  push();
  push(`## Frequently asked questions`);
  for (const f of faqs) {
    push(`### ${f.q}`);
    push(f.a);
    push();
  }
  push();
  push(`## Links`);
  push(`Home: ${site.url}`);
  push(`All units & pricing: ${site.url}/units`);
  push(`Features: ${site.url}/features`);
  push(`About: ${site.url}/about`);
  push(`FAQ: ${site.url}/faq`);
  push(`Contact: ${site.url}/contact`);
  push(`Locations:`);
  for (const loc of allLocations) {
    push(`  - ${loc.name}: ${site.url}/locations/${loc.slug}`);
  }
  push(`Rent now: ${site.url}/rent`);
  push();
  push(`Last updated: ${new Date().toISOString().slice(0, 10)}`);

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, must-revalidate",
    },
  });
}
