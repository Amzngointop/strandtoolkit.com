import Link from "next/link";
import type { GuideConfig } from "@/data/guides";

export default function GuideCard({ guide, layout = "grid" }: { guide: GuideConfig; layout?: "grid" | "row" }) {
  if (layout === "row") {
    return (
      <Link
        href={`/styling-guides/${guide.slug}`}
        className="flex gap-4 group bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
      >
        <div
          className="w-[100px] h-[75px] shrink-0 bg-pinkSoft"
          style={{ backgroundImage: `url(${guide.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="flex flex-col min-w-0 py-2 pr-3">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{guide.categoryLabel}</span>
          <h3 className="font-display text-[15px] font-semibold text-heading leading-[1.35] mt-1 group-hover:text-accent transition-colors">{guide.title}</h3>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/styling-guides/${guide.slug}`}
      className="flex flex-col group bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div
        className="w-full bg-pinkSoft"
        style={{ aspectRatio: "16/9", backgroundImage: `url(${guide.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="p-4">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{guide.categoryLabel}</span>
        <h3 className="font-display text-[15px] md:text-[16px] font-semibold text-heading leading-[1.35] mt-1 group-hover:text-accent transition-colors">{guide.title}</h3>
        <p className="font-sans text-[13px] text-automuted mt-1.5 leading-5">{guide.excerpt}</p>
        <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-automuted mt-2">{guide.readTime} Min Read</span>
      </div>
    </Link>
  );
}
