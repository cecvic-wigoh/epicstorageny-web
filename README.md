# Epic Storage NY — website

Next.js 16 + Tailwind CSS v4 rebuild of
[epicstorageny.com](https://www.epicstorageny.com). One codebase, two
first-class locations, full SEO + AI-crawler optimization, and a stable seam
for the upcoming Storable / storEDGE API integration.

Built for Epic Storage Solutions LLC by [AiMT / wigoh.ai](https://wigoh.ai).

## Running locally

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build (Turbopack)
pnpm start          # serve the production build
pnpm lint           # ESLint
pnpm typecheck      # tsc --noEmit
pnpm process-photos # HEIC → WebP pipeline (see below)
```

Requires Node 20+ and pnpm 10+.

## Project layout

```
src/
  app/                         # Next.js App Router — every route is a folder
    layout.tsx                 # Root shell: fonts, header, footer, Organization JSON-LD
    page.tsx                   # Homepage
    locations/[slug]/page.tsx  # Clarence Center / Buffalo Niagara landing pages
    units/                     # /units and /units/[size]
    features/  about/  faq/
    contact/
    rent/                      # Picker + per-location Storable bouncer
    legal/{terms,privacy}/
    llms.txt/route.ts          # Plain-text LLM crawler index
    sitemap.ts  robots.ts      # Generated SEO files
  components/
    layout/                    # Header, Footer, MobileNav
    blocks/                    # Hero, PricingCards, FeatureGrid, Photo, RentCTA, …
    seo/JsonLd.tsx             # Organization, LocalBusiness, Product, FAQ, Breadcrumb
  lib/
    site.ts                    # ⭐ SINGLE SOURCE OF TRUTH — NAP, pricing, units, FAQs
    images.ts                  # Typed image references (alt text enforced)
    utils.ts                   # cn() + formatUsd()
public/
  images/
    clarence-center/           # Real photos (hero/ exterior/ interior/ units/ …)
    buffalo-niagara/           # Placeholder — awaiting client photos
    _unsorted/                 # All 83 converted WebPs, for future curation
scripts/
  process-photos.mjs           # HEIC → WebP pipeline
```

## Single source of truth

Everything NAP-critical (phone, email, addresses, hours, pricing, unit sizes,
FAQ content) lives in **`src/lib/site.ts`**. If you see `(716) 331-2882`
anywhere else in the app code, that's a bug — fix it by importing `contact`
from `@/lib/site` instead.

The same applies to images: semantic references live in `src/lib/images.ts`
and each entry enforces an `alt` string. Don't drop raw file paths in JSX.

## Content editing for non-developers

All copy, pricing, FAQs, and feature lists live in `src/lib/site.ts` — a
plain TypeScript file that reads like a config. To update the phone number,
promo, or any FAQ answer, you edit that one file, commit, and Vercel redeploys.

Long-form prose (the About page, Terms of Service, Privacy Policy) lives
directly in the respective `page.tsx` files under `src/app/`. JSX is strict
about angle brackets — if in doubt, copy an existing paragraph block.

## SEO / AI-crawler features

- Per-page canonical URLs, OpenGraph, Twitter Card metadata
- **JSON-LD**: Organization (root), LocalBusiness + SelfStorage (per location)
  with address, geo, opening hours, amenity features including a deliberate
  `"On-site security cameras": false` flag, FAQPage, Product + Offer (per unit
  size), BreadcrumbList everywhere
- **`/llms.txt`** — concise plain-text index consumed by LLM crawlers
- **`/robots.txt`** explicitly allows GPTBot, ClaudeBot, PerplexityBot, CCBot,
  Applebot-Extended, Google-Extended
- **`/sitemap.xml`** — 17 URLs, auto-generated via `app/sitemap.ts`
- **Legacy redirects** preserved in `next.config.ts` (every `/pages/*` URL
  from the old Storable-templated site maps to its new home)

## Important honesty commitments

The client has no on-site cameras as of launch. The old live site advertised
"Digital Video Surveillance" — that claim is **false** and has been removed
everywhere. Instead, we tell the truth: gated 24/7 access, perimeter fencing,
dusk-to-dawn exterior lighting, motion-triggered interior lighting, and
individual unit access. When the client installs cameras, update:

1. `src/lib/site.ts` → `features.security` (add the camera line)
2. `src/components/seo/JsonLd.tsx` → change the LocationFeatureSpecification
   for "On-site security cameras" from `false` to `true`
3. Remove the "about the cameras" disclosure section in
   `src/app/features/page.tsx`
4. Update the relevant FAQ answer in `site.ts`
5. Update `src/app/llms.txt/route.ts` (the line that says the facility does
   NOT have cameras)

All five of those locations need to change together.

## Photo pipeline

The client supplied ~83 iPhone HEIC photos (shot on-site at the Clarence
Center flagship). Run `pnpm process-photos` to convert them to WebP at
640/1280/1920 widths. Output lands in `public/images/_unsorted/`.

The curated selection already in `public/images/clarence-center/` was picked
by hand from the `_unsorted` folder. To add more:

1. Pick the IMG_NNNN you want from `_unsorted/`.
2. Copy all three widths (`IMG_NNNN-{640,1280,1920}.webp`) to the correct
   `clarence-center/<category>/` subfolder, renamed to something descriptive.
3. Add an entry in `src/lib/images.ts` with a human-readable `alt`.
4. Use `<Photo image={images.newThing} />` in a page.

Buffalo Niagara currently reuses Clarence imagery — see
`public/images/buffalo-niagara/README.md`. When the client ships Buffalo
photos, do the same process and update `locationHero` in `images.ts`.

## Storable / storEDGE integration

All "Rent Now" and "Make a Payment" CTAs go through
`<RentCTA location={…} />`, which renders a link to `/rent/[location]`. That
bouncer page does a meta-refresh to the client's existing Storable tenant
portal URL (found in `locations[slug].rentUrl` in `site.ts`).

When the Storable API arrives:

1. Rewrite `src/components/blocks/RentCTA.tsx` to render whatever inline flow
   you want (modal, embedded iframe, API-driven reservation form).
2. Optionally rewrite `src/app/rent/[location]/page.tsx` to render the
   reservation flow instead of bouncing.
3. Update `rentUrl` and `payUrl` in `site.ts` if the URLs change.

That's it — no other file should need touching.

## Deployment

Deploy to Vercel. No environment variables required for the launch build
(GA4, GSC, call tracking, and email-form endpoints are all deferred — add
them in a phase-2 PR once the client delivers access).

## Open items to confirm with client before launch

These are flagged in the project plan under
`/Users/cecvic/.claude/plans/quirky-strolling-falcon.md`:

1. Exact size → price-tier mapping (live site only has 3 prices; we have 6
   sizes + car bays)
2. Final wording of the "your rate is your rate" promise — needs attorney
   (Fromen Law) review before publish
3. Buffalo Niagara neighborhood list for local SEO copy
4. Whether any of the 82 photos are from Buffalo or all from Clarence
5. Whether "coming soon: on-site cameras" should appear on the Security
   section
6. Promo start/end dates for the 50%-off offer
7. Branded email (info@epicstorageny.com) — replaces the gmail address
   currently in `contact.email`
8. Google Business Profile reclaim
9. GA4 + Google Search Console access
10. Storable API credentials (unlocks the real rental flow)

## Tech stack

- Next.js 16.2 (App Router, Turbopack, RSC)
- React 19.2
- Tailwind CSS v4
- TypeScript strict
- sharp + heic-convert (build-time image pipeline)
- Vercel Analytics + Speed Insights
- lucide-react (icons)
- Inter + Plus Jakarta Sans (next/font)
