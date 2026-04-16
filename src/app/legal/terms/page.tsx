import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service · Epic Storage NY",
  description: `Terms of service and rental agreement overview for ${site.brand}. Month-to-month lease, 5-day grace period, lien policy, and tenant responsibilities.`,
  alternates: { canonical: "/legal/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "2026-04-11";

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal/terms" },
          { name: "Terms of Service", url: "/legal/terms" },
        ]}
      />
      <section className="container-page max-w-3xl py-16 md:py-20">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          <AlertTriangle aria-hidden size={20} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-bold">Draft for review</p>
            <p className="mt-1">
              This is a starter Terms of Service prepared by AiMT for Epic
              Storage NY. Please have your attorney (Fromen Law) review and
              finalize before you rely on it. The controlling document is the
              rental agreement you sign at move-in.
            </p>
          </div>
        </div>

        <h1 className="font-display text-4xl font-extrabold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: {lastUpdated}</p>

        <div className="prose-custom mt-8 max-w-none">
          <h2>1. Parties</h2>
          <p>
            These Terms of Service govern use of the Epic Storage NY website
            and your rental relationship with {site.legalName}{" "}
            (&ldquo;Epic Storage&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
            Tenant (&ldquo;you&rdquo;) means the person or entity renting a
            storage unit at one of our facilities.
          </p>

          <h2>2. Rental agreement</h2>
          <p>
            Your rental of a storage unit is governed by the written rental
            agreement you sign at move-in. In the event of any conflict
            between these Terms and the signed rental agreement, the signed
            rental agreement controls.
          </p>

          <h2>3. Month-to-month lease</h2>
          <p>
            All units are leased on a month-to-month basis. You may terminate
            your tenancy with at least ten (10) days&rsquo; written notice
            before the next rental period begins. No refunds are issued for
            partial-month occupancy unless required by law.
          </p>

          <h2>4. Rent, payment, grace period, and late fees</h2>
          <p>
            Rent is due on the first day of each rental period. We accept
            credit cards and ACH through our secure third-party tenant portal
            (Storable / storEDGE). A five (5) day grace period applies from
            the due date; after the grace period, late fees may be assessed as
            set forth in your rental agreement. Continued non-payment may
            result in restricted facility access and, ultimately, a lien sale
            of your stored property in accordance with New York&rsquo;s
            self-storage lien statute.
          </p>

          <h2>5. Rate changes and rate protection</h2>
          <p>
            Published rates may change for new customers from time to time.
            Existing tenants are protected from rate increases for the
            protected period set forth in their signed rental agreement. We
            will not silently raise your rate within the protected period,
            and any rate increase after that period will be communicated in
            writing with the notice required by New York law.
          </p>

          <h2>6. Access</h2>
          <p>
            Current tenants in good standing have 24/7 gate access via their
            assigned tenant code. Our office is staffed{" "}
            <strong>by appointment only</strong>; call or email ahead to meet
            on site. We reserve the right to suspend access for any tenant
            whose account is in arrears.
          </p>

          <h2>7. Permitted use</h2>
          <p>
            You may use your unit only for the storage of personal property.
            The following are prohibited: storage of perishables, hazardous
            materials, firearms or ammunition, illegal items, stolen property,
            living beings (people, pets, plants), or any item whose storage
            violates federal, state, or local law. No residential or
            commercial occupancy of a unit is permitted.
          </p>

          <h2>8. Insurance</h2>
          <p>
            Epic Storage does <em>not</em> require tenant insurance but we do
            offer an optional third-party tenant insurance policy at
            additional cost. Your homeowners&rsquo; or renters&rsquo;
            insurance policy may already extend limited coverage to stored
            property — check with your agent. Property stored at our
            facilities is stored at your sole risk.
          </p>

          <h2>9. No warranty; limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Epic Storage disclaims any
            implied warranties and is not liable for loss or damage to stored
            property, except where caused by our gross negligence or willful
            misconduct. Our aggregate liability for any claim related to your
            tenancy is limited to the amount set forth in your rental
            agreement.
          </p>

          <h2>10. No-value guarantee</h2>
          <p>
            You represent that no item in your unit has extraordinary value
            (including heirlooms, original art, cash, jewelry, or negotiable
            instruments) and agree not to store any such item without a
            separate written agreement with us.
          </p>

          <h2>11. Promotions</h2>
          <p>
            Our &ldquo;first month 50% off&rdquo; promotion requires a
            four-month minimum stay. If the minimum is not met, the promotional
            discount is recaptured as set forth in your rental agreement. One
            offer per customer. Offer applies to new rentals only at both Epic
            Storage locations while the promotion is active.
          </p>

          <h2>12. Moving supplies</h2>
          <p>
            Epic Storage does not sell moving supplies on site. We&rsquo;ll
            gladly point you at nearby options when you rent.
          </p>

          <h2>13. Security disclosures</h2>
          <p>
            Our facilities feature gated 24/7 access, perimeter fencing,
            dusk-to-dawn exterior lighting, and motion-triggered interior
            lighting in the climate-controlled units and common areas.{" "}
            <strong>We do not currently have on-site surveillance cameras.</strong>{" "}
            We are transparent about this, because we&rsquo;d rather
            you choose Epic Storage with full information.
          </p>

          <h2>14. Governing law and disputes</h2>
          <p>
            These Terms are governed by the laws of the State of New York
            without regard to conflict-of-law provisions. Any dispute arising
            out of your tenancy is subject to the jurisdiction of the courts
            located in Erie County, New York. If any provision of these Terms
            is found unenforceable, the remaining provisions remain in full
            force.
          </p>

          <h2>15. Website use</h2>
          <p>
            This website (epicstorageny.com) is provided for informational
            purposes. Unit pricing, availability, and features may change;
            current information is always controlled by our rental portal.
            We make no representation that this website is error-free at any
            given moment.
          </p>

          <h2>16. Contact</h2>
          <p>
            Questions about these Terms? Call <a href={contact.phoneHref}>{contact.phone}</a>,
            email <a href={contact.emailHref}>{contact.email}</a>,
            or see our{" "}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
