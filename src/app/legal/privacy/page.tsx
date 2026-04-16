import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy · Epic Storage NY",
  description: `Privacy policy for ${site.brand}. What we collect, how we use it, and how third parties (like Storable and Google Maps) handle your data.`,
  alternates: { canonical: "/legal/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "2026-04-11";

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        trail={[
          { name: "Home", url: "/" },
          { name: "Legal", url: "/legal/privacy" },
          { name: "Privacy Policy", url: "/legal/privacy" },
        ]}
      />
      <section className="container-page max-w-3xl py-16 md:py-20">
        <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          <AlertTriangle aria-hidden size={20} className="mt-0.5 shrink-0" />
          <div>
            <p className="font-bold">Draft for review</p>
            <p className="mt-1">
              This is a starter Privacy Policy prepared by AiMT for Epic
              Storage NY. Please have your attorney (Fromen Law) review and
              finalize before publishing.
            </p>
          </div>
        </div>

        <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-ink-500">Last updated: {lastUpdated}</p>

        <div className="prose-custom mt-8 max-w-none">
          <h2>1. Scope</h2>
          <p>
            This Privacy Policy describes how {site.legalName}{" "}
            (&ldquo;Epic Storage&rdquo;, &ldquo;we&rdquo;) handles personal
            information collected via <a href={site.url}>{site.domain}</a>{" "}
            and, where applicable, in person at our Western New York storage
            facilities.
          </p>

          <h2>2. What we collect</h2>
          <p>
            <strong>On this website:</strong> basic analytics about your
            visit (page views, referrer, browser, approximate location)
            collected by Vercel Analytics and Vercel Speed Insights. If you
            contact us, we collect the information you choose to provide
            (name, email, phone, message).
          </p>
          <p>
            <strong>During rental:</strong> payment and account information is
            collected and processed by our third-party rental platform,
            Storable / storEDGE, via its secure portal. We do not receive or
            store your credit-card or bank-account numbers on this website.
            The rental agreement itself collects your name, billing address,
            emergency contact, and unit assignment.
          </p>
          <p>
            <strong>At the facility:</strong> gate-code access logs and, once
            installed, any on-site camera footage. (Cameras are not yet
            installed at our facilities as of the last update to this
            policy.)
          </p>

          <h2>3. What we don&rsquo;t collect</h2>
          <p>
            This website does <em>not</em> use third-party advertising
            cookies, cross-site tracking pixels, or session-replay tools. We
            do not sell, rent, or share personal information with advertising
            networks.
          </p>

          <h2>4. How we use information</h2>
          <ul>
            <li>To respond to inquiries you send us.</li>
            <li>
              To improve the website (aggregate analytics about which pages
              are visited and how fast they load).
            </li>
            <li>
              To process rentals and payments through our rental platform.
            </li>
            <li>
              To comply with legal obligations, including New York
              self-storage lien procedures where applicable.
            </li>
          </ul>

          <h2>5. Third-party services</h2>
          <p>
            The following third parties process data on our behalf or as
            independent controllers when you interact with this site:
          </p>
          <ul>
            <li>
              <strong>Storable / storEDGE</strong> — rental and payment
              platform. When you click &ldquo;Rent Now&rdquo; you are
              redirected to Storable&rsquo;s portal; their privacy policy
              governs that interaction.
            </li>
            <li>
              <strong>Google Maps</strong> — embedded maps on our location and
              contact pages. Use is subject to Google&rsquo;s privacy
              policies.
            </li>
            <li>
              <strong>Vercel Analytics &amp; Speed Insights</strong> —
              privacy-friendly performance and traffic analytics provided by
              our hosting provider.
            </li>
          </ul>

          <h2>6. Cookies</h2>
          <p>
            This site uses a minimal set of first-party cookies strictly
            necessary for analytics and basic site functionality. We do not
            use marketing cookies or cross-site trackers.
          </p>

          <h2>7. Data retention</h2>
          <p>
            Inquiry emails are retained for as long as reasonably necessary
            to respond to your question and maintain our business records.
            Analytics data is retained per the default settings of the
            underlying service. Tenant records are retained for the duration
            of your tenancy plus any period required by law.
          </p>

          <h2>8. Your rights</h2>
          <p>
            New York residents may have rights under applicable law, including
            the New York SHIELD Act, to request information about data
            collected and to request its correction or deletion. To exercise
            any such right, email{" "}
            <a href={contact.emailHref}>{contact.email}</a>{" "}
            or call <a href={contact.phoneHref}>{contact.phone}</a> and we will
            respond as promptly as practicable.
          </p>

          <h2>9. Children&rsquo;s privacy</h2>
          <p>
            This website is not directed to children under 13 and we do not
            knowingly collect personal information from children. If we
            become aware of any such collection, we will delete the data
            promptly.
          </p>

          <h2>10. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The
            &ldquo;Last updated&rdquo; date at the top of the page reflects
            the current version.
          </p>

          <h2>11. Contact</h2>
          <p>
            Questions or requests? Call <a href={contact.phoneHref}>{contact.phone}</a>,
            email <a href={contact.emailHref}>{contact.email}</a>,
            or see our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
