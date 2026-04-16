import {
  site,
  sameAs,
  type Location,
  type UnitSize,
} from "@/lib/site";
import { contact, allLocations, unitSizes, faqs } from "@/lib/content";

/**
 * Safe JSON-LD serializer — prevents `</script>` injection by escaping the
 * closing tag sequence and non-BMP characters.
 */
function stringifyJsonLd(obj: unknown): string {
  return JSON.stringify(obj)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.brand,
    legalName: site.legalName,
    url: site.url,
    telephone: contact.phoneE164,
    email: contact.email,
    foundingDate: `${site.yearFounded}`,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.png`,
      width: 512,
      height: 512,
    },
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: contact.phoneE164,
        contactType: "customer service",
        areaServed: "US-NY",
        availableLanguage: ["English"],
      },
    ],
    location: allLocations.map((loc) => ({
      "@type": "Place",
      name: loc.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.street,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.zip,
        addressCountry: "US",
      },
    })),
  };
  return <JsonLd data={data} />;
}

export function LocalBusinessJsonLd({ location }: { location: Location }) {
  const id = `${site.url}/locations/${location.slug}/#self-storage`;
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SelfStorage"],
    "@id": id,
    name: location.name,
    url: `${site.url}/locations/${location.slug}`,
    image: [`${site.url}/og/${location.slug}.jpg`],
    telephone: contact.phoneE164,
    email: contact.email,
    priceRange: "$141–$292 / month",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.street,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    areaServed: location.areasServed.map((a) => ({
      "@type": "City",
      name: a,
    })),
    parentOrganization: { "@id": `${site.url}/#organization` },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        name: "Office (by appointment)",
        description: `Office visits are by appointment. Call ${contact.phone} to schedule.`,
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Climate controlled", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 gated access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Drive-up access (select units)", value: true },
      { "@type": "LocationFeatureSpecification", name: "Elevator access", value: true },
      { "@type": "LocationFeatureSpecification", name: "Perimeter fencing", value: true },
      { "@type": "LocationFeatureSpecification", name: "Motion lighting", value: true },
      { "@type": "LocationFeatureSpecification", name: "On-site security cameras", value: false },
    ],
  };
  return <JsonLd data={data} />;
}

export function FaqJsonLd({
  items = faqs,
}: {
  items?: readonly { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({
  trail,
}: {
  trail: readonly { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${site.url}${item.url}`,
    })),
  };
  return <JsonLd data={data} />;
}

export function UnitProductJsonLd({ unit }: { unit: UnitSize }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${unit.dims} Self Storage Unit`,
    description: unit.description,
    category: "Self Storage Unit",
    brand: { "@type": "Brand", name: site.brand },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Width (ft)", value: 10 },
      {
        "@type": "PropertyValue",
        name: "Depth (ft)",
        value: unit.area / 10,
      },
      {
        "@type": "PropertyValue",
        name: "Square footage",
        value: unit.area,
      },
      {
        "@type": "PropertyValue",
        name: "Climate controlled",
        value: "true",
      },
    ],
    offers: {
      "@type": "Offer",
      price: unit.monthly.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${site.url}/units/${unit.slug}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: unit.monthly.toFixed(2),
        priceCurrency: "USD",
        unitText: "MONTH",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MON",
        },
      },
    },
  };
  return <JsonLd data={data} />;
}

export function AllUnitsJsonLd() {
  return (
    <>
      {unitSizes.map((u) => (
        <UnitProductJsonLd key={u.slug} unit={u} />
      ))}
    </>
  );
}

export { JsonLd };
