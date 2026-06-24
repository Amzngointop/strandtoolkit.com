import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import RelatedSidebar from "@/components/RelatedSidebar";
import ArticleSidebar from "@/components/ArticleSidebar";
import { guideContentMap } from "@/data/content/guideContentMap";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return notFound();

  const content = guideContentMap[slug];
  if (!content) return notFound();

  const relatedGuides = guides.filter((g) => g.slug !== slug).slice(0, 5);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <nav className="font-sans text-xs text-muted mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/styling-guides" className="hover:text-accent">Styling Guides</Link> / {guide.title}
      </nav>

      <div className="flex gap-12">
        <ArticleSidebar items={content.sections} label="In This Guide" />

        <div className="flex-1 max-w-[740px] min-w-0">
          <img
            src={guide.coverImage}
            alt={guide.title}
            style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
          />
          <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent mt-6 block">{guide.categoryLabel}</span>
          <h1 className="font-display text-4xl md:text-[48px] text-ink mt-3 leading-[1.1]">{guide.title}</h1>
          <p className="font-sans text-xs text-muted mt-4">Updated 2026 · {guide.readTime} min read</p>
          <p className="font-sans text-[15px] text-body mt-4 mb-10">{guide.excerpt}</p>

          <div className="font-sans text-[15px] leading-7 text-body">{content.body}</div>
        </div>

        <RelatedSidebar
          heading="More Guides"
          items={relatedGuides.map((g) => ({ href: `/styling-guides/${g.slug}`, category: g.categoryLabel, title: g.title }))}
        />
      </div>
    </main>
  );
}
