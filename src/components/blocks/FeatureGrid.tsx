import { Check } from "lucide-react";

export default function FeatureGrid({
  title,
  items,
  intro,
}: {
  title: string;
  items: readonly string[];
  intro?: string;
}) {
  return (
    <div className="rounded-2xl border border-ink-300/60 bg-white p-7 shadow-sm">
      <h3 className="font-display text-xl font-bold">{title}</h3>
      {intro && <p className="mt-2 text-sm text-ink-700">{intro}</p>}
      <ul className="mt-5 flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
              <Check aria-hidden size={12} strokeWidth={3.5} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
