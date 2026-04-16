export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center" ? "mx-auto text-center max-w-2xl" : "max-w-3xl";
  return (
    <div className={`mb-10 md:mb-14 ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-bold md:text-4xl">{title}</h2>
      {lead && <p className="mt-3 text-ink-700 md:text-lg">{lead}</p>}
    </div>
  );
}
