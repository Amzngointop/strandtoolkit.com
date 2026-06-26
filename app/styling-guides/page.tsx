import Link from "next/link";
import type { Metadata } from "next";
import GuideCard from "@/components/GuideCard";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Styling Guides",
  description: "Step-by-step hair styling technique guides and buying advice for every hair type.",
};

export default function StylingGuidesPage() {
  const [featured, ...rest] = guides;

  return (
    <main className="max-w-7xl mx-auto px-6 py-14">
      <h1
        className="font-display text-heading"
        style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.1 }}
      >
        STYLING GUIDES
      </h1>
      <span className="section-divider" />

      <Link href={`/styling-guides/${featured.slug}`} className="relative block w-full h-[400px] mb-16 group overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${featured.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white p-6 max-w-[480px]">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{featured.categoryLabel}</span>
          <h2 className="font-display text-heading mt-2 group-hover:underline" style={{ fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 700, lineHeight: 1.25 }}>
            {featured.title}
          </h2>
          <p className="font-sans text-[13px] text-bodytext mt-2 leading-5">{featured.excerpt}</p>
          <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-automuted mt-2 block">{featured.readTime} Min Read</span>
        </div>
      </Link>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {rest.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </main>
  );
}
