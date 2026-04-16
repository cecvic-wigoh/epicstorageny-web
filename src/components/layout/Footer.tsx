import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { contact, allLocations, hours } from "@/lib/content";

const footerNav = {
  Explore: [
    { href: "/", label: "Home" },
    { href: "/units", label: "Units & Pricing" },
    { href: "/features", label: "Features & Security" },
    { href: "/about", label: "About Us" },
    { href: "/faq", label: "FAQ" },
  ],
  Locations: [
    { href: "/locations/clarence-center", label: "Clarence Center, NY" },
    { href: "/locations/buffalo-niagara", label: "Buffalo, NY" },
    { href: "/contact", label: "Contact / Directions" },
  ],
  Legal: [
    { href: "/legal/terms", label: "Terms of Service" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/sitemap.xml", label: "Sitemap" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-300/60 bg-brand-50">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2 font-display text-lg font-bold">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white"
              >
                <span className="text-sm font-black">E</span>
              </span>
              <span>
                Epic <span className="text-brand-700">Storage</span>
              </span>
            </div>
            <p className="max-w-sm text-sm text-ink-700">{site.description}</p>
            <p className="mt-4 text-sm text-ink-500">
              {site.legalName} &middot; Serving Western NY since {site.yearFounded}.
            </p>
          </div>

          {Object.entries(footerNav).map(([heading, items]) => (
            <div key={heading}>
              <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wider text-ink-900">
                {heading}
              </h3>
              <ul className="flex flex-col gap-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-700 hover:text-brand-800 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-ink-300 pt-8 md:grid-cols-2">
          {allLocations.map((loc) => (
            <div key={loc.slug} className="flex flex-col gap-1 text-sm">
              <h4 className="font-display font-bold text-ink-900">{loc.name}</h4>
              <p className="flex items-start gap-2 text-ink-700">
                <MapPin aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-700" />
                <span>
                  {loc.street}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </span>
              </p>
              <p className="flex items-center gap-2 text-ink-700">
                <Phone aria-hidden size={16} className="shrink-0 text-brand-700" />
                <a href={contact.phoneHref} className="hover:text-brand-800">
                  {contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-ink-700">
                <Mail aria-hidden size={16} className="shrink-0 text-brand-700" />
                <a href={contact.emailHref} className="hover:text-brand-800">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2 text-ink-700">
                <Clock aria-hidden size={16} className="mt-0.5 shrink-0 text-brand-700" />
                <span>
                  {hours.officeLabel}
                  <br />
                  <span className="text-ink-500">{hours.gateLabel}</span>
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-300 pt-6 text-xs text-ink-500 md:flex-row">
          <p>
            &copy; {year} {site.legalName}. All rights reserved.
          </p>
          <p>
            Rental and payment processing powered by Storable / storEDGE.
          </p>
        </div>
      </div>
    </footer>
  );
}
