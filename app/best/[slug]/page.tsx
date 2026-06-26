import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductsByArticle } from "@/data/products";
import HeatScoreBar from "@/components/HeatScoreBar";
import AccordionSection from "@/components/AccordionSection";
import CTAButton from "@/components/CTAButton";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";
import FAQ from "@/components/FAQ";
import { articleContentMap } from "@/data/content/articleContentMap";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

function slugifyName(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  const content = articleContentMap[slug];
  if (!content) return notFound();

  const productList = getProductsByArticle(slug);

  const jumpItems = productList.map((p) => ({ id: slugifyName(p.name), label: `${String(p.rank).padStart(2, "0")} / ${p.badge}` }));

  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 5);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <nav className="font-sans text-xs text-automuted mb-6">
        <Link href="/" className="hover:text-accent">Home</Link> <span className="mx-1">/</span> <Link href="/#reviews" className="hover:text-accent">Reviews</Link> <span className="mx-1">/</span> {article.title}
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 max-w-full overflow-x-hidden">
        <ArticleSidebar items={jumpItems} />

        <div className="flex-1 max-w-[740px] min-w-0 bg-card p-8">
          <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-accent">{article.categoryLabel}</span>
          <h1 className="font-display text-[32px] md:text-[38px] text-heading mt-3 leading-[1.15] font-bold">{article.title}</h1>
          <p className="font-sans text-xs text-automuted mt-4">Updated 2026 · {article.readTime} min read · {productList.length} products reviewed</p>
          <p className="font-sans text-[11px] text-automuted mt-3 mb-8">
            StrandToolKit is reader-supported. When you buy through links on this page, we may earn an affiliate commission at no extra cost to you.
          </p>

          <div className="font-sans text-[15px] leading-7 text-bodytext mb-10">{content.intro}</div>

          <div className="flex flex-col gap-16 mt-12">
            {productList.map((p) => (
              <div key={p.id} id={slugifyName(p.name)} className="flex flex-col">
                <span className="font-sans text-[11px] uppercase tracking-[0.08em] text-automuted mb-3">
                  {String(p.rank).padStart(2, "0")} /{" "}
                  <span className="bg-accent text-white font-sans text-[10px] font-semibold uppercase tracking-[0.08em] px-2 py-0.5">{p.badge}</span>
                </span>
                <div className="relative w-full bg-pinkSoft" style={{ aspectRatio: "3/2", marginBottom: "16px" }}>
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
                <h3 className="font-display text-[28px] text-heading font-semibold">{p.name}</h3>
                <p className="font-sans text-[15px] italic text-bodytext mt-2">{p.summary}</p>
                <HeatScoreBar heatScore={p.heatScore} buildScore={p.buildScore} valueScore={p.valueScore} />
                <div className="mb-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted">Considerations</span>
                  <ul className="mt-2 flex flex-col gap-1">
                    {p.cons.map((c) => (
                      <li key={c} className="font-sans text-sm text-body">– {c}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <AccordionSection title="Why We Picked It">
                    <ul className="flex flex-col gap-1">
                      {p.pros.map((pro) => (
                        <li key={pro}>– {pro}</li>
                      ))}
                    </ul>
                  </AccordionSection>
                  <AccordionSection title="Who It's For">{p.bestFor}</AccordionSection>
                  <AccordionSection title="How to Use It">{p.howToUse}</AccordionSection>
                </div>
                <CTAButton href={p.affiliateUrl} external className="w-fit mt-5">View on Amazon →</CTAButton>
                <div className="border-t border-divider mt-10" />
              </div>
            ))}
          </div>

          <div className="mt-16">{content.buyingGuide}</div>

          <div className="mt-12">{content.diagram}</div>

          <FAQ items={content.faqs} />

          <div className="mt-12 border-t border-divider pt-8">
            <h3 className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted mb-4">Further Reading</h3>
            <div className="flex flex-col gap-2">
              {content.furtherReading.map((f) => (
                <Link key={f.href} href={f.href} className="font-sans text-sm text-ink hover:text-accent underline">
                  {f.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="font-sans text-[11px] text-muted mt-10">
            Affiliate Disclosure: StrandToolKit is a participant in the Amazon Services LLC Associates Program. We may earn a commission from qualifying purchases made through links on this page.
          </p>
        </div>

        <RelatedSidebar
          heading="More Buying Guides"
          items={relatedArticles.map((a) => ({ href: `/best/${a.slug}`, category: a.categoryLabel, title: a.title }))}
        />
      </div>
    </main>
  );
}
