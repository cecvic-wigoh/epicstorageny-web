import { Sparkles, ShieldCheck, BadgeDollarSign } from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "Brand new in 2026",
    body:
      "Clean, bright, and climate-controlled from day one. No decades of wear and tear — just a modern facility built with renters in mind.",
  },
  {
    icon: ShieldCheck,
    title: "24/7 gated access",
    body:
      "Perimeter fencing, dusk-to-dawn exterior lighting, motion-triggered interior lighting, individual unit access, and a gate code that's yours alone — any hour of any day.",
  },
  {
    icon: BadgeDollarSign,
    title: "Pricing you can trust",
    body:
      "Published rates, no move-in fees, no admin fees, and no surprise price hikes three months in. What you see is what you pay — in writing, in your lease.",
  },
];

export default function ProofPoints() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Why renters choose Epic Storage
          </h2>
          <p className="mt-3 text-ink-700">
            Three promises that directly answer the questions renters ask us on
            their first phone call.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, body }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
