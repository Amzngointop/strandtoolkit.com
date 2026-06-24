import Link from "next/link";
import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Styling Guides",
  description: "Step-by-step hair styling technique guides and buying advice for every hair type.",
};

export default function StylingGuidesPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-12">Styling Guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {guides.map((g) => (
          <div key={g.slug} className="flex flex-col">
            <Link href={`/styling-guides/${g.slug}`}>
              <div className="w-full h-44 bg-card mb-3" style={{ backgroundImage: `url(${g.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </Link>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent mb-2">{g.categoryLabel}</span>
            <h2 className="font-display text-lg text-ink mb-2">{g.title}</h2>
            <p className="font-sans text-sm text-body leading-6 mb-2 flex-1">{g.excerpt}</p>
            <span className="font-sans text-xs text-muted mb-4">{g.readTime} min read</span>
            <CTAButton href={`/styling-guides/${g.slug}`} variant="secondary" className="w-fit">Read Guide →</CTAButton>
          </div>
        ))}
      </div>
    </main>
  );
}
