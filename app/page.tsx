import Link from "next/link";
import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import GuideCard from "@/components/GuideCard";
import SectionHeader from "@/components/SectionHeader";
import ArticleSidebar from "@/components/ArticleSidebar";
import HairToolFinder from "@/components/HairToolFinder";
import NewsletterForm from "@/components/NewsletterForm";
import { site } from "@/data/site";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { getTopRatedProducts, getProductsByArticle } from "@/data/products";

export const metadata: Metadata = {
  title: "Hair Care Tools & Styling Devices Reviewed",
  description: "Independent reviews of hair dryers, straighteners, curling irons, hot air brushes, clippers, and detangling brushes — researched for real at-home routines, updated for 2026.",
};

const editorsChoice = getProductsByArticle("best-hair-dryers")[0];

const editors = [
  {
    name: "Claire Hartwell",
    role: "SENIOR HAIR TOOLS EDITOR",
    quote: "The single most common mistake we see is buying a heat tool by brand recognition alone. Barrel material and temperature range matter far more than the logo on the handle.",
  },
  {
    name: "Jess Monroe",
    role: "STYLING RESEARCH LEAD",
    quote: "We cross-reference Amazon verified purchase data with heat-setting specs before any tool earns a spot on StrandToolKit. A flashy design never overrides performance numbers.",
  },
  {
    name: "Maya Osei",
    role: "HAIR CARE TOOLS SPECIALIST",
    quote: "Diffusers and concentrators are not afterthoughts. If a dryer ships without quality attachments, we note it as a con — because for curly and wavy hair types, attachments are the tool.",
  },
];

const glossaryPreview = [
  { term: "Ionic Technology", def: "Negative ions emitted during drying break down water molecules faster, cutting drying time and reducing frizz caused by positively charged, dehydrated strands." },
  { term: "Ceramic Coating", def: "A plate or barrel coating that heats evenly and distributes heat gently across hair, lowering the risk of hot spots that cause localized heat damage." },
  { term: "Tourmaline", def: "A mineral often ground into ceramic coatings to boost negative ion output, typically marketed for extra shine and smoothness on frizz-prone hair." },
  { term: "Diffuser", def: "A bowl-shaped dryer attachment with prongs that cups curls during drying, distributing airflow so curl pattern holds instead of being blown straight." },
  { term: "Concentrator Nozzle", def: "A narrow dryer attachment that focuses airflow into a tighter stream, useful for precision smoothing and root-lift styling on straight or wavy hair." },
  { term: "Heat Settings", def: "The discrete temperature levels a tool offers; more settings generally mean better control for matching heat to hair thickness and condition." },
];

const hairTypeCards = [
  { name: "Fine Hair", tip: "Stick to lower heat settings and lightweight hot air brushes to avoid overprocessing delicate strands.", href: "/best/best-hot-air-brushes" },
  { name: "Wavy & Curly", tip: "Diffuser attachments and detangling brushes protect curl pattern better than rough drying or flat brushing.", href: "/best/best-hair-dryers" },
  { name: "Thick & Coarse", tip: "Higher wattage dryers and wider straightener plates cut through density without requiring repeated passes.", href: "/best/best-hair-straighteners" },
  { name: "Color-Treated", tip: "Lower, steadier heat and ceramic or tourmaline coatings help preserve color vibrancy and cuticle health.", href: "/best/best-curling-irons" },
];

const processSteps = ["Category Research", "Sales Analysis", "Spec Audit", "Review Verification", "Final Selection"];

const jumpItems = [
  { id: "from-our-editors", label: "From Our Editors" },
  { id: "top-rated", label: "Top-Rated Tools" },
  { id: "browse-by-category", label: "Browse by Category" },
  { id: "styling-guides", label: "Styling Guides" },
  { id: "tool-finder", label: "Tool Finder" },
  { id: "how-we-pick", label: "How We Pick" },
  { id: "glossary", label: "Glossary" },
  { id: "editor-picks", label: "Editor Picks" },
  { id: "by-the-numbers", label: "By the Numbers" },
  { id: "hair-type-guide", label: "Hair Type Guide" },
  { id: "newsletter", label: "Newsletter" },
];

export default function HomePage() {
  const topRated = getTopRatedProducts();

  return (
    <main>
      {/* HERO */}
      <section className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 relative h-[420px] md:h-[500px] overflow-hidden bg-pinkSoft">
          <img
            src={editorsChoice.imageUrl}
            alt={editorsChoice.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white p-6 max-w-[480px]">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">Editor's Choice</span>
            <h1 className="font-display text-heading mt-2" style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, lineHeight: 1.2 }}>
              {editorsChoice.name}
            </h1>
            <p className="font-sans text-[13px] text-bodytext mt-2 leading-5">{editorsChoice.summary}</p>
            <a
              href={editorsChoice.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-block mt-3 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-ink hover:underline"
            >
              Shop Now →
            </a>
          </div>
        </div>

        <div className="bg-pinkSoft flex flex-col items-center justify-center h-[420px] md:h-[500px] text-center px-8">
          <span className="font-display italic text-2xl text-heading leading-snug">
            "Researched for real at-home routines, not press samples."
          </span>
          <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-automuted mt-4">The StrandToolKit Editors</span>
        </div>
      </div>
      </section>

      {/* FROM OUR EDITORS */}
      <section id="from-our-editors" className="bg-cream border-t border-divider">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader title="FROM OUR EDITORS" subtitle="The people behind every recommendation on this site." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {editors.map((ed) => (
              <div key={ed.name} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-accent text-bg font-display text-lg flex items-center justify-center">
                  {ed.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="font-display text-4xl text-accent/40 leading-none mt-5">"</span>
                <p className="font-display italic text-lg text-bodytext leading-7 mt-1">{ed.quote}</p>
                <div className="font-sans text-[11px] uppercase tracking-[0.12em] text-automuted mt-4">{ed.name}</div>
                <div className="font-sans text-[10px] uppercase tracking-[0.1em] text-automuted/70 mt-0.5">{ed.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 flex flex-col lg:flex-row gap-12">
        <ArticleSidebar items={jumpItems} />

        <div className="flex-1 max-w-2xl flex flex-col gap-24 min-w-0">
          {/* TOP-RATED TOOLS */}
          <div id="top-rated">
            <SectionHeader title="TOP-RATED TOOLS" seeAllHref="/best/best-hair-dryers" seeAllLabel="SEE ALL REVIEWS →" />
            <p className="font-sans text-sm text-bodytext leading-7 mb-8">
              Every product below is the highest-ranked pick from one of our six in-depth category reviews, chosen for a balance of heat performance,
              build quality, and everyday value rather than novelty features. Each one has earned its "Best Overall" badge after we weighed verified
              purchase patterns against published specifications for wattage, plate or barrel material, and included attachments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {topRated.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* BROWSE BY CATEGORY */}
          <div id="browse-by-category">
            <SectionHeader title="BROWSE BY CATEGORY" seeAllHref="/best/best-hair-dryers" seeAllLabel="SEE ALL REVIEWS →" />
            <p className="font-sans text-sm text-bodytext leading-7 mb-8">
              Hair tools aren't interchangeable — a dryer solves a different problem than a straightener, and a curling iron solves a different problem
              than a hot air brush. Use the six categories below to jump straight to the review that matches what you're actually trying to fix in
              your routine, from frizz control to faster wash days.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {site.categories.map((cat) => {
                const catProducts = getProductsByArticle(cat.slug);
                const repProduct = catProducts[1] ?? catProducts[0];
                return (
                  <Link
                    key={cat.slug}
                    href={`/best/${cat.slug}`}
                    className="flex flex-col group bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  >
                    <div className="relative w-full bg-white" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={repProduct.imageUrl}
                        alt={cat.name}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "16px" }}
                      />
                    </div>
                    <div className="p-4">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{cat.description}</span>
                      <h3 className="font-display text-[16px] font-semibold text-heading mt-1 group-hover:text-accent transition-colors">{cat.name}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* STYLING GUIDES — asymmetric magazine grid */}
          <div id="styling-guides">
            <SectionHeader title="STYLING GUIDES" seeAllHref="/styling-guides" seeAllLabel="SEE ALL GUIDES →" />
            <p className="font-sans text-sm text-bodytext leading-7 mb-8">
              Buying the right tool is half the equation — technique is the other half. Our styling guides walk through the at-home methods that get
              you closer to a salon result, from heat-safe curling to a full section-by-section blowout routine.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <Link href={`/styling-guides/${guides[0].slug}`} className="md:w-[55%] flex flex-col group bg-card border border-divider">
                <div
                  className="w-full bg-pinkSoft"
                  style={{ aspectRatio: "16/10", backgroundImage: `url(${guides[0].coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div className="p-4">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{guides[0].categoryLabel}</span>
                  <h3 className="font-display text-[22px] font-semibold text-heading leading-[1.3] mt-1 group-hover:underline">{guides[0].title}</h3>
                  <p className="font-sans text-[14px] text-automuted mt-2 leading-6">{guides[0].excerpt}</p>
                  <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-automuted mt-2">{guides[0].readTime} Min Read</span>
                </div>
              </Link>

              <div className="md:w-[45%] flex flex-col gap-6">
                {guides.slice(1, 4).map((g) => (
                  <GuideCard key={g.slug} guide={g} layout="row" />
                ))}
              </div>
            </div>
          </div>

          {/* TOOL FINDER */}
          <div id="tool-finder" className="bg-cream -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl uppercase text-heading">Find Your Perfect Hair Tool</h2>
              <span className="section-divider" />
              <p className="font-sans text-sm text-bodytext mt-4 max-w-md mx-auto leading-6">
                Answer three quick questions and get a personalized tool recommendation matched to your hair type, texture, and styling goal.
              </p>
            </div>
            <HairToolFinder />
          </div>

          {/* HOW WE PICK */}
          <div id="how-we-pick" className="bg-bgDark -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <h2
              className="font-display text-bg text-center"
              style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, letterSpacing: "-0.01em", lineHeight: 1.1 }}
            >
              HOW WE PICK PRODUCTS
            </h2>
            <span className="section-divider" />
            <div className="text-center mb-10">
              <Link href="/our-method" className="inline-block font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-accent hover:underline mt-1">
                SEE ALL →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <h3 className="font-display text-xl text-bg mb-2">Independent Research</h3>
                <p className="font-sans text-sm text-bg/70 leading-6">
                  We start with sales data and verified buyer feedback across every Amazon listing in a category, not press samples or brand pitches.
                  This keeps our starting pool grounded in what real buyers actually experience after purchase.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-bg mb-2">Heat & Safety Standards</h3>
                <p className="font-sans text-sm text-bg/70 leading-6">
                  Every heat tool is checked against published guidance from dermatology and consumer-safety authorities, including the{" "}
                  <a href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                    American Academy of Dermatology's guidance on heat damage
                  </a>{" "}
                  and{" "}
                  <a href="https://www.fda.gov/consumers/consumer-updates/hair-dryers-and-curling-irons-use-caution" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                    FDA recommendations on hair dryer and curling iron safety
                  </a>.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-bg mb-2">Editorial Standards</h3>
                <p className="font-sans text-sm text-bg/70 leading-6">
                  We disclose every affiliate relationship clearly, never copy manufacturer descriptions, and update rankings annually as new models
                  and verified purchase data become available.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              {processSteps.map((step, i) => (
                <div key={step} className="flex items-center md:flex-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-7 h-7 bg-accent text-ink font-sans text-xs font-medium flex items-center justify-center">{i + 1}</div>
                    <span className="font-sans text-xs text-bg/70 mt-2 max-w-[90px]">{step}</span>
                  </div>
                  {i < processSteps.length - 1 && <div className="hidden md:block flex-1 h-px bg-bg/20 mx-2" />}
                </div>
              ))}
            </div>

            <p className="font-sans text-sm text-bg/70 leading-7">
              Ingredient and material safety claims are cross-checked against resources like the{" "}
              <a href="https://www.niehs.nih.gov/health/topics/agents/cosmetics" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                National Institute of Environmental Health Sciences' overview of cosmetics and personal care agents
              </a>{" "}
              before any tool is recommended for daily use.
            </p>
            <p className="font-sans text-[11px] text-bg/50 mt-6">
              StrandToolKit is reader-supported. When you buy through links on this page, we may earn an affiliate commission at no extra cost to you.
            </p>
          </div>

          {/* STRAND GLOSSARY */}
          <div id="glossary">
            <SectionHeader title="STRAND GLOSSARY" seeAllHref="/strand-glossary" seeAllLabel="SEE ALL →" />
            <p className="font-sans text-sm text-bodytext leading-7 mb-8">
              The hair tool terms every buyer should know before they shop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {glossaryPreview.map((g) => (
                <div key={g.term} className="border-l-2 border-accent pl-4">
                  <h3 className="font-display text-lg text-heading mb-2">{g.term}</h3>
                  <p className="font-sans text-sm text-bodytext leading-6">{g.def}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FROM THE EDITORS */}
          <div id="editor-picks">
            <SectionHeader title="FROM THE EDITORS" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {articles.slice(0, 4).map((a) => {
                const repProduct = getProductsByArticle(a.slug)[0];
                return (
                  <Link
                    key={a.slug}
                    href={`/best/${a.slug}`}
                    className="flex flex-col group bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                  >
                    <div className="relative w-full h-48 bg-white overflow-hidden">
                      <img
                        src={repProduct.imageUrl}
                        alt={a.title}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "12px" }}
                      />
                    </div>
                    <div className="p-4">
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{a.categoryLabel}</span>
                      <h3 className="font-display text-[16px] font-semibold text-heading leading-[1.35] mt-1 group-hover:text-accent transition-colors">{a.title}</h3>
                      <p className="font-sans text-[13px] text-automuted mt-1.5 leading-5">{a.excerpt}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* BY THE NUMBERS */}
          <div id="by-the-numbers" className="bg-cream -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <SectionHeader title="BY THE NUMBERS" />
            <div className="border-t border-b border-divider py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "42", label: "Products Reviewed" },
                { num: "6", label: "Categories Covered" },
                { num: "2026", label: "Updated" },
                { num: "100%", label: "Amazon Verified" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-accent" style={{ fontSize: "56px" }}>{s.num}</div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-automuted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-bodytext leading-7 mt-6">
              Our rankings are revisited annually, with each category re-audited against current listings, pricing tiers, and verified buyer feedback
              so recommendations stay current rather than frozen at launch.
            </p>
          </div>

          {/* SHOP BY HAIR TYPE */}
          <div id="hair-type-guide">
            <SectionHeader title="SHOP BY HAIR TYPE" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {hairTypeCards.map((h) => (
                <Link
                  key={h.name}
                  href={h.href}
                  className="block p-5 bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
                >
                  <h3 className="font-display text-xl text-heading mb-2">{h.name}</h3>
                  <p className="font-sans text-sm text-bodytext leading-6">{h.tip}</p>
                </Link>
              ))}
            </div>
            <div className="border-l-[3px] border-accent bg-card p-4">
              <p className="font-sans text-sm text-heading">
                Not sure which tools match your hair type? <a href="#tool-finder" className="underline text-accent">Use our Hair Tool Finder →</a>
              </p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div id="newsletter" className="bg-cream -mx-6 px-6 py-16 md:-mx-12 md:px-12 text-center">
            <p className="font-display italic text-xl text-bodytext">Don't miss the latest —</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-heading mb-4">Sign up for the newsletter!</h2>
            <p className="font-sans text-sm text-bodytext mb-6 max-w-md mx-auto leading-6">
              Weekly tool reviews, styling technique guides, and editor picks — no fluff.
            </p>
            <div className="flex flex-col gap-2 mb-8 font-sans text-sm text-bodytext items-center">
              <span>— New buying guides published every week</span>
              <span>— Editor's top picks refreshed monthly</span>
              <span>— Heat tool tips & technique breakdowns</span>
            </div>
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent mb-4">Buying Guides</div>
            <div className="flex flex-col">
              {articles.map((a) => (
                <Link key={a.slug} href={`/best/${a.slug}`} className="block border-b border-divider py-4">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.12em] text-accent mb-1">{a.categoryLabel}</span>
                  <span className="block font-sans text-sm text-heading leading-5">{a.title}</span>
                </Link>
              ))}
            </div>
            <Link href="/best/best-hair-dryers" className="block mt-6 font-sans text-[11px] uppercase tracking-[0.1em] text-ink hover:underline">
              ALL REVIEWS →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
