/**
 * Centralized image references.
 *
 * At launch we only have photos from the Clarence Center flagship. Buffalo
 * Niagara uses the same imagery with a client-visible note — swap when the
 * client delivers Buffalo-specific photos.
 *
 * Every image stored as 640/1280/1920 WebPs. next/image picks the right one
 * via the `sizes` attribute on the rendered <img>.
 */

export type ImageRef = {
  src: string;
  alt: string;
  /** Approximate aspect ratio — used to reserve space to prevent CLS. */
  ratio: "portrait" | "landscape" | "square";
};

export const images = {
  hero: {
    src: "/images/clarence-center/hero/hero-1920.webp",
    alt: "Epic Storage Solutions facility exterior at 8550 Roll Road, Clarence Center — bright winter morning with the main building and signage in view.",
    ratio: "landscape" as const,
  },
  heroAlt: {
    src: "/images/clarence-center/hero/hero-alt-1920.webp",
    alt: "Alternate view of Epic Storage Solutions Clarence Center exterior with fresh snow on the ground.",
    ratio: "landscape" as const,
  },
  wordmark: {
    src: "/images/clarence-center/exterior/wordmark-1280.webp",
    alt: "EPIC STORAGE SOLUTIONS signage on the main building at 8550 Roll Road, Clarence Center, NY.",
    ratio: "landscape" as const,
  },
  approach: {
    src: "/images/clarence-center/exterior/approach-1920.webp",
    alt: "Approach road to Epic Storage, Clarence Center — landscaped drive with autumn sky.",
    ratio: "landscape" as const,
  },
  exteriorWide: {
    src: "/images/clarence-center/exterior/wide-1920.webp",
    alt: "Wide exterior view of the Epic Storage Clarence Center facility with the secure gate entrance at right.",
    ratio: "landscape" as const,
  },
  hallway: {
    src: "/images/clarence-center/interior/hallway-1280.webp",
    alt: "Long interior hallway of the climate-controlled A building, brightly lit, doors on both sides.",
    ratio: "portrait" as const,
  },
  hallwayAlt: {
    src: "/images/clarence-center/interior/hallway-alt-1280.webp",
    alt: "Interior corridor with exposed conduit and fluorescent lighting — climate-controlled building A.",
    ratio: "portrait" as const,
  },
  unitEmpty: {
    src: "/images/clarence-center/units/unit-empty-1280.webp",
    alt: "Empty 10×10 storage unit interior — clean drywall, concrete floor, ready for move-in.",
    ratio: "portrait" as const,
  },
  unitClimate: {
    src: "/images/clarence-center/units/unit-climate-1280.webp",
    alt: "Climate-controlled storage unit with roll-up door open, polished interior floor, indoor lighting.",
    ratio: "portrait" as const,
  },
  driveUpOpen: {
    src: "/images/clarence-center/drive-up/drive-up-open-1920.webp",
    alt: "Drive-up unit #114 with the roll-up door raised, showing the clean interior and concrete apron.",
    ratio: "landscape" as const,
  },
  driveUpRow: {
    src: "/images/clarence-center/drive-up/units-row-1920.webp",
    alt: "Row of four drive-up storage units on the F building — steel roll-up doors and blue metal siding.",
    ratio: "landscape" as const,
  },
  driveUpWide: {
    src: "/images/clarence-center/drive-up/drive-up-wide-1280.webp",
    alt: "Wide view of a drive-up storage unit with the door raised — asphalt drive and steel building.",
    ratio: "landscape" as const,
  },
  gate: {
    src: "/images/clarence-center/security/gate-1920.webp",
    alt: "Secure steel entry gate with chain-link fencing, building A visible behind — 24/7 gated access.",
    ratio: "landscape" as const,
  },
  fence: {
    src: "/images/clarence-center/security/fence-1920.webp",
    alt: "Full perimeter chain-link fencing around the storage compound with rows of units in the background.",
    ratio: "landscape" as const,
  },
  buildingA: {
    src: "/images/clarence-center/signage/building-a-1280.webp",
    alt: "Building A entry with 'A' facility signage — pedestrian door and gate access beside drive-up units.",
    ratio: "landscape" as const,
  },
} as const;

export type ImageKey = keyof typeof images;

/**
 * Per-location hero image. Buffalo Niagara currently uses Clarence imagery
 * because no Buffalo photos have been delivered yet — update when they arrive.
 */
export const locationHero = {
  "clarence-center": images.hero,
  "buffalo-niagara": images.heroAlt,
} as const;
