/**
 * Single source of truth for all Epic Storage NY business information.
 *
 * Every page, component, JSON-LD block, and llms.txt entry reads from here.
 * If something is wrong with the NAP (Name, Address, Phone), it's wrong here
 * and only here. Never hardcode these values elsewhere.
 */

export const site = {
  legalName: "Epic Storage Solutions LLC",
  brand: "Epic Storage NY",
  tagline: "Straightforward storage. No gimmicks. No surprise rate hikes.",
  yearFounded: 2026,
  url: "https://www.epicstorageny.com",
  domain: "epicstorageny.com",
  description:
    "Brand-new climate-controlled self storage with 24/7 gated access in Clarence Center and Buffalo, NY. Published prices that stay published — no surprise rate hikes.",
  locale: "en-US",
  region: "NY",
  country: "US",
} as const;

export const contact = {
  phone: "(716) 331-2882",
  phoneE164: "+17163312882",
  phoneHref: "tel:+17163312882",
  email: "peteselfstorage@gmail.com",
  emailHref: "mailto:peteselfstorage@gmail.com",
} as const;

export type LocationSlug = "clarence-center" | "buffalo-niagara";

export type Location = {
  slug: LocationSlug;
  name: string;
  shortName: string;
  street: string;
  city: string;
  state: "NY";
  zip: string;
  /** Approximate latitude for LocalBusiness geo / map embeds. */
  lat: number;
  /** Approximate longitude for LocalBusiness geo / map embeds. */
  lng: number;
  /** Google Maps embed URL (place-specific). */
  mapEmbedUrl: string;
  /** Public rental flow on Storable (deep-linked until API lands). */
  rentUrl: string;
  /** Public tenant-login / make-a-payment link on Storable. */
  payUrl: string;
  /** Short copy block shown on homepage location card. */
  blurb: string;
  /** Neighborhoods / towns this facility actually serves for local SEO. */
  areasServed: readonly string[];
};

/**
 * NOTE on `rentUrl` / `payUrl`:
 * The existing live site (epicstorageny.com) already deep-links to Storable for
 * rent and payment flows. Until the client delivers storEDGE API credentials,
 * all "Rent Now" / "Make a Payment" CTAs on this site go straight through to
 * those same Storable URLs in a new tab. We route them through our own
 * /rent/[location] bouncer so the public link never changes — when the API
 * lands we swap the implementation in ONE place.
 *
 * The exact Storable URLs need to be confirmed with the client before launch.
 * For now we point at /rent/[slug] locally and the bouncer page renders a link
 * to the epicstorageny.com Rent Storage page (which already handles the hand-off).
 */
export const locations: Record<LocationSlug, Location> = {
  "clarence-center": {
    slug: "clarence-center",
    name: "Epic Storage — Clarence Center",
    shortName: "Clarence Center",
    street: "8550 Roll Road",
    city: "Clarence Center",
    state: "NY",
    zip: "14032",
    lat: 43.024,
    lng: -78.634,
    mapEmbedUrl:
      "https://www.google.com/maps?q=8550+Roll+Road+Clarence+Center+NY+14032&output=embed",
    rentUrl: "https://www.epicstorageny.com/pages/rent",
    payUrl: "https://www.epicstorageny.com/pages/rent",
    blurb:
      "Our flagship Western NY facility on Roll Road. 100% climate-controlled A-building, gated 24/7 access, and elevator-served upper floor. Brand new in 2026.",
    areasServed: [
      "Clarence Center",
      "Clarence",
      "Akron",
      "Williamsville",
      "Amherst",
      "East Amherst",
      "Lancaster",
      "Swormville",
    ],
  },
  "buffalo-niagara": {
    slug: "buffalo-niagara",
    name: "Epic Storage — Buffalo Niagara",
    shortName: "Buffalo Niagara",
    street: "1485 Niagara Street",
    city: "Buffalo",
    state: "NY",
    zip: "14213",
    lat: 42.921,
    lng: -78.895,
    mapEmbedUrl:
      "https://www.google.com/maps?q=1485+Niagara+St+Buffalo+NY+14213&output=embed",
    rentUrl: "https://www.epicstorageny.com/pages/rent",
    payUrl: "https://www.epicstorageny.com/pages/rent",
    blurb:
      "City-side self storage on Niagara Street — easy on/off the I-190 for Elmwood Village, Black Rock, Riverside, and the West Side. Month-to-month, no gimmicks.",
    areasServed: [
      "Buffalo",
      "Elmwood Village",
      "Black Rock",
      "Riverside",
      "Grant-Amherst",
      "West Side",
      "Tonawanda",
      "Kenmore",
    ],
  },
} as const;

export const allLocations = Object.values(locations);

export const hours = {
  /**
   * Office is NOT staffed 9-5 (that's what the legacy live site says and it's
   * wrong — the client explicitly clarified "by appointment only").
   */
  officeLabel: "By appointment — call (716) 331-2882",
  officeDetail:
    "Our office isn't staffed full-time. Call or email ahead and we'll meet you on site.",
  /** Gate access is 24/7 for all current tenants. */
  gateLabel: "24/7 gated access for tenants",
  gateDetail:
    "Once you're a customer, you can reach your unit any hour of any day, including weekends and holidays.",
} as const;

export const unitSizes = [
  {
    slug: "10x10",
    label: '10\u2032 \u00D7 10\u2032',
    dims: "10×10",
    area: 100,
    tier: "small" as const,
    monthly: 141.67,
    features: [
      "Climate controlled",
      "First-floor access",
      "Easy wheel-in loading",
    ],
    idealFor: [
      "One-bedroom apartment contents",
      "Small business overstock",
      "Seasonal gear + holiday decor",
    ],
    description:
      "Our most popular size. Fits the contents of a one-bedroom apartment including a couch, bed, dresser, and boxes. Climate-controlled so your furniture doesn't warp through a Buffalo winter.",
  },
  {
    slug: "10x15",
    label: '10\u2032 \u00D7 15\u2032',
    dims: "10×15",
    area: 150,
    tier: "medium" as const,
    monthly: 187.5,
    features: [
      "Climate controlled",
      "Drive-up available (even-numbered units A102–A136)",
      "First-floor access",
    ],
    idealFor: [
      "Two-bedroom apartment or small house contents",
      "Motorcycle + seasonal storage",
      "Contractor tools and materials",
    ],
    description:
      "A half-step up from 10×10. Holds a two-bedroom apartment comfortably or a one-bedroom plus a motorcycle. Drive-up access is available on even-numbered units in the A102–A136 range.",
  },
  {
    slug: "10x17-5",
    label: '10\u2032 \u00D7 17\u2032 6\u2033',
    dims: "10×17.5",
    area: 175,
    tier: "medium" as const,
    monthly: 187.5,
    features: [
      "Climate controlled",
      "Second floor — elevator access (A201–A239)",
      "Extra depth for long items",
    ],
    idealFor: [
      "Two-bedroom house contents",
      "Long items (kayaks, ladders, mattresses)",
      "Growing business inventory",
    ],
    description:
      "Our second-floor climate-controlled units (A201–A239). Elevator access makes move-in and move-out painless, and the extra 2½ feet of depth fits awkward long items that don't quite work in a 10×15.",
  },
  {
    slug: "10x20",
    label: '10\u2032 \u00D7 20\u2032',
    dims: "10×20",
    area: 200,
    tier: "large" as const,
    monthly: 291.67,
    features: [
      "Climate controlled",
      "Also available as a climate-controlled car bay",
      "Drive-up on select units",
    ],
    idealFor: [
      "Three-bedroom house contents",
      "Classic / project car (climate-controlled bay)",
      "Small business inventory + fixtures",
    ],
    description:
      "A full-size garage. Fits the contents of a three-bedroom house, or one vehicle with room to walk around it. We also offer this size as a climate-controlled indoor car bay — ideal for classic, sport, or project vehicles you want to keep out of Buffalo weather.",
  },
  {
    slug: "10x25",
    label: '10\u2032 \u00D7 25\u2032',
    dims: "10×25",
    area: 250,
    tier: "large" as const,
    monthly: 291.67,
    features: [
      "Climate controlled",
      "Depth for long loads",
      "First-floor access",
    ],
    idealFor: [
      "Four-bedroom house contents",
      "Major renovation overflow",
      "Business pallets + equipment",
    ],
    description:
      "When a 10×20 is close but not quite. Five extra feet of depth handles full-house moves, renovation overflows, or a pallet-deep business inventory without awkward stacking.",
  },
  {
    slug: "10x30",
    label: '10\u2032 \u00D7 30\u2032',
    dims: "10×30",
    area: 300,
    tier: "large" as const,
    monthly: 291.67,
    features: [
      "Climate controlled",
      "Largest size we offer",
      "Drive-up on select units",
    ],
    idealFor: [
      "Five-bedroom house contents",
      "Full business relocation",
      "Trailer or vehicle plus boxes",
    ],
    description:
      "Our largest unit. Thirty feet deep, climate-controlled, big enough for a five-bedroom house or a full small-business relocation. If you're not sure whether you need this size or the 10×25, call us — we'll walk the building with you.",
  },
] as const;

export type UnitSize = (typeof unitSizes)[number];
export type UnitTier = UnitSize["tier"];

export const priceTiers: Record<
  UnitTier,
  { label: string; monthly: number; sizes: readonly string[] }
> = {
  small: { label: "Small", monthly: 141.67, sizes: ["10×10"] },
  medium: {
    label: "Medium",
    monthly: 187.5,
    sizes: ["10×15", "10×17.5"],
  },
  large: {
    label: "Large",
    monthly: 291.67,
    sizes: ["10×20", "10×25", "10×30"],
  },
} as const;

export const promo = {
  headline: "First month 50% off",
  terms: "4-month minimum stay required",
  details:
    "Take half off your first month's rent when you commit to a 4-month minimum stay. One offer per customer. Available at both Epic Storage locations while the promotion lasts — see terms.",
} as const;

export const features = {
  security: [
    "Gated 24/7 access (tenant code required)",
    "Perimeter fencing around the entire facility",
    "Dusk-to-dawn exterior lighting",
    "Motion-triggered interior lighting in climate-controlled units and common areas",
    "Individual unit access (only you have the key)",
  ],
  access: [
    "24/7 gate access, 365 days a year",
    "Contactless online rental — rent a unit without ever picking up the phone",
    "Elevator-served upper-floor units",
    "Drive-up access available on select climate-controlled units",
    "Wide, well-lit interior hallways",
  ],
  convenience: [
    "Month-to-month leases — leave any time with a 10-day notice",
    "No move-in or admin fees",
    "Credit card and ACH payments",
    "5-day grace period on monthly rent",
    "Tenant insurance available (third-party, not required)",
  ],
} as const;

/**
 * Canonical FAQs. This array is the source for both the /faq page and the
 * FAQPage JSON-LD schema. Keep answers under ~350 characters — anything
 * longer belongs in its own page.
 */
export const faqs = [
  {
    q: "How much does a storage unit cost at Epic Storage?",
    a: "Our published rates are $141.67/mo for a 10×10 (small), $187.50/mo for a 10×15 or 10×17.5 (medium), and $291.67/mo for a 10×20, 10×25, or 10×30 (large). Every unit is climate-controlled. First-month 50% off available with a 4-month minimum stay.",
  },
  {
    q: "Do you raise prices after I move in?",
    a: "No. That's the whole reason we built Epic Storage. National chains are famous for raising rates 90 days after move-in — we don't. Your published rate is your rate. Any adjustment is communicated in writing, in advance, and never within the first months of your lease. (Final wording is in your signed lease.)",
  },
  {
    q: "Can I access my unit 24/7?",
    a: "Yes. Every tenant gets a gate code that works 24 hours a day, 365 days a year. Our office is staffed by appointment — call (716) 331-2882 and we'll meet you on site — but once you're moved in, you can come and go any hour you like.",
  },
  {
    q: "What unit sizes do you offer?",
    a: "10×10, 10×15, 10×17.5, 10×20, 10×25, and 10×30, plus climate-controlled car bays at 10×20. All units are inside our A building, and all are climate-controlled. See the Units page for size-by-size detail and what fits.",
  },
  {
    q: "Are the units climate-controlled?",
    a: "Yes — every unit we rent is climate-controlled. That's unusual for a Western NY facility at these prices, and it's why your furniture, electronics, documents, and vinyl records are going to be fine through a Buffalo winter.",
  },
  {
    q: "Do you have drive-up units?",
    a: "Yes, on select units. A102–A136 (even numbers) are climate-controlled drive-up units on the first floor. A101–A135 (odd numbers) are first-floor climate-controlled units that aren't strictly drive-up but have very easy wheel-in access. Second-floor units (A201–A239) are elevator-served.",
  },
  {
    q: "Do you have security cameras?",
    a: "Not yet — and we won't tell you we do. What we do have is 24/7 gated access, full perimeter fencing, dusk-to-dawn exterior lighting, and motion-sensor lighting inside the climate-controlled units and common areas. Cameras are on our roadmap but we'd rather be honest with you today than oversell.",
  },
  {
    q: "Where are you located?",
    a: "Two Western NY locations: 8550 Roll Road in Clarence Center, NY 14032 (our flagship), and 1485 Niagara Street in Buffalo, NY 14213. Both run the same phone number, (716) 331-2882.",
  },
  {
    q: "What are your office hours?",
    a: "By appointment only. Call or email ahead and we'll meet you on site. Gate access for existing tenants is 24/7.",
  },
  {
    q: "Do you offer vehicle, boat, or RV storage?",
    a: "We offer indoor climate-controlled car bays at 10×20. We don't currently offer uncovered / outdoor vehicle, boat, or RV storage.",
  },
  {
    q: "Do you require insurance?",
    a: "We don't require it, but we do offer a third-party tenant insurance option at additional cost. Many homeowners' or renters' policies already extend limited coverage to stored property — check with your agent.",
  },
  {
    q: "Can I pay online?",
    a: "Yes. Use the Make a Payment / Rent Now buttons — you'll be taken to our secure Storable tenant portal where you can rent a unit, pay, or manage your account. Credit card and ACH accepted.",
  },
  {
    q: "What's your late fee / grace period?",
    a: "5-day grace period from the rent due date. Late fees apply after that. Full details are in your lease.",
  },
  {
    q: "Do you sell boxes and moving supplies?",
    a: "Not on site. We kept the focus on clean, secure units rather than a retail store. We'll gladly point you at the best nearby options when you rent.",
  },
] as const;

export const rentUrls = {
  "clarence-center": locations["clarence-center"].rentUrl,
  "buffalo-niagara": locations["buffalo-niagara"].rentUrl,
} as const;

export const payUrls = {
  "clarence-center": locations["clarence-center"].payUrl,
  "buffalo-niagara": locations["buffalo-niagara"].payUrl,
} as const;

/** Social / listing profiles — populate as client provides access. */
export const sameAs: readonly string[] = [
  // "https://www.google.com/maps/place/...",
  // "https://www.yelp.com/biz/...",
  // "https://www.facebook.com/...",
];

export const competitors = [
  "Roll Hill Mini Storage",
  "Public Storage",
  "Extra Space Storage",
  "Lancaster Self Storage",
] as const;
