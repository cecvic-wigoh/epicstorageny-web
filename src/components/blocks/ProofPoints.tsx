import { Sparkles, ShieldCheck, BadgeDollarSign } from "lucide-react";
import { home } from "@/lib/content";

const cardIcons = [Sparkles, ShieldCheck, BadgeDollarSign];

export default function ProofPoints() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            {home.proofPoints.heading}
          </h2>
          <p className="mt-3 text-ink-700">
            {home.proofPoints.subheading}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {home.proofPoints.cards.map(({ title, body }, i) => {
            const Icon = cardIcons[i] ?? Sparkles;
            return (
              <div
                key={title}
                className="group relative rounded-2xl border border-ink-300/60 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 ring-1 ring-inset ring-brand-200">
                  <Icon aria-hidden size={22} strokeWidth={2.25} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
