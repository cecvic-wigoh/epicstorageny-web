import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { contact } from "@/lib/content";
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
            A brand-new Western NY storage facility built on one idea.
          </h1>
          <p className="mt-4 text-lg text-ink-700">
            Don&rsquo;t lie to renters and don&rsquo;t raise their rate six
            weeks after move-in. That&rsquo;s the whole pitch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl">
          <div className="prose-custom max-w-none">
            <h2>Why we started Epic Storage</h2>
            <p>
              We&rsquo;ve all rented from a national-chain storage facility
              somewhere. We&rsquo;ve all seen the ad that promises $79/mo for
              a 10×10, signed the lease, and opened the first rate-increase
              letter 90 days later. The &ldquo;introductory&rdquo; price was
              never the real price. That&rsquo;s the industry norm.
            </p>
            <p>
              Epic Storage is what happens when you build a facility around
              the opposite assumption. We&rsquo;re a family-owned, Western New
              York operator who opened our flagship Clarence Center building
              in 2026 and followed with a second location on Niagara Street in
              Buffalo. We don&rsquo;t have a corporate rate-hike calendar.
              We&rsquo;re not trying to squeeze revenue out of long-term
              renters who have already put their couch inside the unit and
              can&rsquo;t easily move it.
            </p>

            <h2>What we care about</h2>
            <ul>
              <li>
                <strong>Honest pricing.</strong> The rates on this website are
                the rates you pay. Month after month. For the duration of your
                lease terms — written into the lease, not promised in an ad.
              </li>
              <li>
                <strong>Honest features.</strong> If we have it, we&rsquo;ll
                tell you. If we don&rsquo;t, we&rsquo;ll tell you that too. We
                don&rsquo;t have on-site cameras yet — we built around
                lighting, fencing, and gate control instead. When we install
                cameras, we&rsquo;ll update every page on this site to say so.
              </li>
              <li>
                <strong>Modern amenities.</strong> Every unit we rent is
                climate-controlled. Every tenant gets 24/7 gate access. Upper
                floors are elevator-served. Select units are drive-up. You
                don&rsquo;t have to haggle.
              </li>
              <li>
                <strong>Local help.</strong> You&rsquo;re calling (716)
                331-2882 and a real person answers. No call center.
              </li>
            </ul>

            <h2>Where to find us</h2>
            <p>
              Our flagship is at <strong>8550 Roll Road in Clarence Center, NY</strong>{" "}
              and our second facility is at{" "}
              <strong>1485 Niagara Street in Buffalo, NY</strong>. Both run
              off the same phone line,{" "}
              <a href={contact.phoneHref}>{contact.phone}</a>, and both offer
              exactly the same pricing and the same promise. Pick the one
              easier to drive to.
            </p>

            <h2>Get in touch</h2>
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
