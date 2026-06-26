import Link from "next/link";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  seeAllHref?: string;
  seeAllLabel?: string;
}

export default function SectionHeader({ title, subtitle, seeAllHref, seeAllLabel }: SectionHeaderProps) {
  return (
    <div className="text-center">
      <h2
        className="font-display text-heading"
        style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.1 }}
      >
        {title}
      </h2>
      <span className="section-divider" />
      {subtitle && (
        <p className="font-display italic text-muted text-base -mt-3 mb-2">{subtitle}</p>
      )}
      {seeAllHref && seeAllLabel && (
        <Link
          href={seeAllHref}
          className="inline-block font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-ink hover:underline mt-1"
        >
          {seeAllLabel}
        </Link>
      )}
    </div>
  );
}
