import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ImageRef } from "@/lib/images";

/**
 * Thin wrapper around next/image that enforces `alt` (TypeScript required),
 * applies an aspect-ratio-preserving container to prevent CLS, and defaults
 * to lazy loading with sensible `sizes`. Hero images should pass
 * `priority={true}`.
 */
export default function Photo({
  image,
  className,
  containerClassName,
  priority,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  rounded = true,
}: {
  image: ImageRef;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: boolean;
}) {
  const ratioClass =
    image.ratio === "landscape"
      ? "aspect-[4/3]"
      : image.ratio === "portrait"
        ? "aspect-[3/4]"
        : "aspect-square";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-ink-100",
        ratioClass,
        rounded ? "rounded-2xl" : "",
        containerClassName,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    </div>
  );
}
