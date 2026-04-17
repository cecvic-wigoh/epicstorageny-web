import { Tag } from "lucide-react";
import { promo } from "@/lib/content";

export default function PromoStrip() {
  return (
    <section className="bg-brand-900 text-white">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-5 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-inset ring-white/20">
            <Tag aria-hidden size={16} />
          </span>
          <p className="text-sm md:text-base">
            <strong className="font-display font-bold text-brand-50">
              {promo.headline}
            </strong>{" "}
            &middot; {promo.terms} &middot; {promo.eyebrow}
          </p>
        </div>
        <p className="text-xs text-brand-100/90">
          {promo.disclaimer}
        </p>
      </div>
    </section>
  );
}
