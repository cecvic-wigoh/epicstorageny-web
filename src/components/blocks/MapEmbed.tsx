export default function MapEmbed({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-300/60 shadow-sm">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
