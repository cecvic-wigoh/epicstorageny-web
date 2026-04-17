/**
 * Content adapter — reads from the CMS-managed JSON files in content/.
 * These files are edited through TinaCMS at /admin.
 *
 * This module re-exports the same shapes that site.ts used to export for
 * editable content, so components only need to change their import path.
 * Technical/URL fields (slugs, lat/lng, map URLs, Storable links) stay in site.ts.
 */

import { locations as siteLocations, unitSizes as siteUnitSizes } from "./site";
import type { LocationSlug, Location, UnitSize, UnitTier } from "./site";

// ─── Raw JSON imports ──────────────────────────────────────────────────────

import settingsData from "../../content/settings.json";
import clarenceCenterData from "../../content/locations/clarence-center.json";
import buffaloNiagaraData from "../../content/locations/buffalo-niagara.json";
import faqsData from "../../content/faqs.json";
import featuresData from "../../content/features.json";
import homeData from "../../content/home.json";
import aboutData from "../../content/about.json";
import unit10x10 from "../../content/unit-sizes/10x10.json";
import unit10x15 from "../../content/unit-sizes/10x15.json";
import unit10x175 from "../../content/unit-sizes/10x17-5.json";
import unit10x20 from "../../content/unit-sizes/10x20.json";
import unit10x25 from "../../content/unit-sizes/10x25.json";
import unit10x30 from "../../content/unit-sizes/10x30.json";

// ─── Settings (site brand, contact, hours, promo) ─────────────────────────

export const siteCopy = settingsData.site;

export const contact = {
  phone: settingsData.contact.phone,
  phoneE164: settingsData.contact.phone.replace(/\D/g, "").replace(/^(\d{10})$/, "+1$1"),
  get phoneHref() {
    return `tel:+1${settingsData.contact.phone.replace(/\D/g, "")}`;
  },
  email: settingsData.contact.email,
  get emailHref() {
    return `mailto:${settingsData.contact.email}`;
  },
} as const;

export const hours = settingsData.hours;

export const promo = settingsData.promo;

// ─── FAQs ─────────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

export const faqs: readonly Faq[] = faqsData.items;

// ─── Features ─────────────────────────────────────────────────────────────

export const features = featuresData as {
  pageHeading: string;
  pageSubheading: string;
  securityIntro: string;
  accessIntro: string;
  convenienceIntro: string;
  cameraHeading: string;
  cameraParagraph1: string;
  cameraParagraph2: string;
  cameraParagraph3: string;
  security: readonly string[];
  access: readonly string[];
  convenience: readonly string[];
};

// ─── Home page ────────────────────────────────────────────────────────────

export const home = homeData;

// ─── About page ───────────────────────────────────────────────────────────

export const about = aboutData;

// ─── Locations ────────────────────────────────────────────────────────────

const locationContentMap: Record<LocationSlug, typeof clarenceCenterData> = {
  "clarence-center": clarenceCenterData,
  "buffalo-niagara": buffaloNiagaraData,
};

/**
 * Returns a full Location by merging:
 * - Technical fields from site.ts (slug, lat, lng, mapEmbedUrl, rentUrl, payUrl, state)
 * - Editable fields from content JSON (name, shortName, street, city, zip, blurb, areasServed)
 */
export function getLocation(slug: LocationSlug): Location {
  const technical = siteLocations[slug];
  const editable = locationContentMap[slug];
  return {
    ...technical,
    name: editable.name,
    shortName: editable.shortName,
    street: editable.street,
    city: editable.city,
    zip: editable.zip,
    blurb: editable.blurb,
    areasServed: editable.areasServed as readonly string[],
  };
}

export const allLocations: readonly Location[] = [
  getLocation("clarence-center"),
  getLocation("buffalo-niagara"),
];

// ─── Unit sizes ───────────────────────────────────────────────────────────

const unitSizeJsonMap: Record<string, typeof unit10x10> = {
  "10x10": unit10x10,
  "10x15": unit10x15,
  "10x17-5": unit10x175,
  "10x20": unit10x20,
  "10x25": unit10x25,
  "10x30": unit10x30,
};

/**
 * Merges technical fields (slug, tier) from site.ts with editable fields
 * (label, dims, area, monthly, description, features, idealFor) from content JSON.
 */
export const unitSizes: readonly UnitSize[] = siteUnitSizes.map((base) => {
  const json = unitSizeJsonMap[base.slug];
  if (!json) return base;
  return {
    ...base,
    label: json.label,
    dims: json.dims,
    area: json.area,
    monthly: json.monthly,
    description: json.description,
    features: json.features as readonly string[],
    idealFor: json.idealFor as readonly string[],
  };
}) as unknown as readonly UnitSize[];

/**
 * Price tiers computed from unit size data (same shape as site.ts priceTiers).
 */
export const priceTiers: Record<
  UnitTier,
  { label: string; monthly: number; sizes: readonly string[] }
> = {
  small: {
    label: "Small",
    monthly: unitSizes.find((u) => u.tier === "small")?.monthly ?? 141.67,
    sizes: unitSizes.filter((u) => u.tier === "small").map((u) => u.dims),
  },
  medium: {
    label: "Medium",
    monthly: unitSizes.find((u) => u.tier === "medium")?.monthly ?? 187.5,
    sizes: unitSizes.filter((u) => u.tier === "medium").map((u) => u.dims),
  },
  large: {
    label: "Large",
    monthly: unitSizes.find((u) => u.tier === "large")?.monthly ?? 291.67,
    sizes: unitSizes.filter((u) => u.tier === "large").map((u) => u.dims),
  },
};
