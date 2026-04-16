import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LocationSlug } from "@/lib/site";

/**
 * The ONLY place rent/pay CTAs are rendered. When the Storable API arrives,
 * change the implementation in this file — routes, markup, and public URLs
 * stay the same everywhere else.
 */
export default function RentCTA({
  location,
  intent = "rent",
  size = "md",
  variant = "primary",
  className,
  label,
}: {
  location?: LocationSlug;
  intent?: "rent" | "pay";
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  label?: string;
}) {
  // Route through our own bouncer so the public URL stays stable.
  const href = location
    ? `/rent/${location}${intent === "pay" ? "?intent=pay" : ""}`
    : "/rent";

  const defaultLabel =
    intent === "pay" ? "Make a Payment" : "Rent Now";

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-7 text-base",
  }[size];

  const variantClasses = {
    primary:
      "bg-brand-600 text-white shadow-md shadow-brand-600/20 hover:bg-brand-700 active:bg-brand-800",
    secondary:
      "bg-white text-brand-700 shadow-sm ring-1 ring-inset ring-brand-200 hover:bg-brand-50 hover:text-brand-800",
    outline:
      "bg-transparent text-brand-700 ring-2 ring-inset ring-brand-600 hover:bg-brand-50 hover:text-brand-800",
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition",
        sizeClasses,
        variantClasses,
        className,
      )}
      prefetch={false}
    >
      {label ?? defaultLabel}
      <ArrowRight aria-hidden size={16} />
    </Link>
  );
}
