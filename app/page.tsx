import Link from "next/link";
import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import ProductCard from "@/components/ProductCard";
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
      {/* ZONE A */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Link href={`/styling-guides/${guides[0].slug}`} className="block">
            <div className="w-full h-64 bg-card mb-4" style={{ backgroundImage: `url(${guides[0].coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">{guides[0].categoryLabel}</span>
            <h2 className="font-display text-2xl text-ink mt-2">{guides[0].title}</h2>
            <p className="font-sans text-sm text-body mt-2 leading-6">{guides[0].excerpt}</p>
            <span className="inline-block mt-4">
              <CTAButton href={`/styling-guides/${guides[0].slug}`} variant="secondary">Read Guide →</CTAButton>
            </span>
          </Link>

          <div className="border-t border-divider" />

          <div className="grid grid-cols-2 gap-6">
            {[guides[1], guides[2]].map((g) => (
              <Link key={g.slug} href={`/styling-guides/${g.slug}`} className="block">
                <div className="w-full aspect-square bg-card mb-3" style={{ backgroundImage: `url(${g.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">{g.categoryLabel}</span>
                <h3 className="font-display text-lg text-ink mt-1">{g.title}</h3>
              </Link>
            ))}
          </div>

          <Link href="/styling-guides" className="font-sans text-[11px] uppercase tracking-[0.1em] text-ink hover:underline w-fit">
            → BROWSE ALL STYLING GUIDES
          </Link>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">Editor's Choice</span>
            <img
              src={editorsChoice.imageUrl}
              alt={editorsChoice.name}
              style={{ width: "100%", height: "220px", objectFit: "contain", backgroundColor: "#E5E1DB", padding: "16px", marginTop: "12px" }}
            />
            <h3 className="font-display text-xl text-ink mt-3">{editorsChoice.name}</h3>
            <p className="font-sans text-sm text-body mt-2 leading-6">{editorsChoice.summary} It remains our top recommendation across hundreds of hours of category research this year.</p>
            <span className="inline-block mt-4">
              <CTAButton href={editorsChoice.affiliateUrl} external>View on Amazon →</CTAButton>
            </span>
            <p className="font-sans text-[11px] text-muted mt-3">We may earn a commission from qualifying purchases.</p>
            <a href="#top-rated" className="block mt-3 font-sans text-[11px] uppercase tracking-[0.1em] text-ink hover:underline">
              SEE MORE TOP PICKS →
            </a>
          </div>

          <div>
            <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">From Our Editors</span>
            <div className="flex flex-col mt-4">
              {editors.map((ed) => (
                <div key={ed.name} className="border-t border-divider pt-4 pb-4">
                  <p className="font-sans text-sm italic text-body leading-6">"{ed.quote}"</p>
                  <div className="font-display text-base text-ink mt-3">{ed.name}</div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted mt-0.5">{ed.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ZONE B */}
      <section className="max-w-7xl mx-auto px-6 pb-24 flex gap-12">
        <ArticleSidebar items={jumpItems} />

        <div className="flex-1 max-w-2xl flex flex-col gap-24 min-w-0">
          {/* SECTION 1 */}
          <div id="top-rated">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Top-Rated Hair Tools
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <p className="font-sans text-sm text-muted mb-8">
              StrandToolKit is reader-supported. When you buy through links on this page, we may earn an affiliate commission at no extra cost to you.
            </p>
            <p className="font-sans text-sm text-body leading-7 mb-8">
              Every product below is the highest-ranked pick from one of our six in-depth category reviews, chosen for a balance of heat performance,
              build quality, and everyday value rather than novelty features. Each one has earned its "Best Overall" badge after we weighed verified
              purchase patterns against published specifications for wattage, plate or barrel material, and included attachments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {topRated.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* SECTION 2 */}
          <div id="browse-by-category">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Browse by Category
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <p className="font-sans text-sm text-body leading-7 mb-8">
              Hair tools aren't interchangeable — a dryer solves a different problem than a straightener, and a curling iron solves a different problem
              than a hot air brush. Use the six categories below to jump straight to the review that matches what you're actually trying to fix in
              your routine, from frizz control to faster wash days.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {site.categories.map((cat) => (
                <div key={cat.slug} className="border border-divider p-6 flex flex-col">
                  <h3 className="font-display text-xl text-ink mb-2">{cat.name}</h3>
                  <p className="font-sans text-sm text-body leading-6 mb-4 flex-1">{cat.description}.</p>
                  <CTAButton href={`/best/${cat.slug}`} variant="secondary" className="w-fit">Explore →</CTAButton>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3 */}
          <div id="styling-guides">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Styling Guides
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <p className="font-sans text-sm text-body leading-7 mb-8">
              Buying the right tool is half the equation — technique is the other half. Our styling guides walk through the at-home methods that get
              you closer to a salon result, from heat-safe curling to a full section-by-section blowout routine.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {guides.map((g) => (
                <div key={g.slug} className="flex flex-col">
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent mb-2">{g.categoryLabel}</span>
                  <h3 className="font-display text-lg text-ink mb-2">{g.title}</h3>
                  <p className="font-sans text-sm text-body leading-6 mb-2 flex-1">{g.excerpt}</p>
                  <span className="font-sans text-xs text-muted mb-4">{g.readTime} min read</span>
                  <CTAButton href={`/styling-guides/${g.slug}`} variant="secondary" className="w-fit">Read Guide →</CTAButton>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 — Tool Finder */}
          <div id="tool-finder" className="bg-ink -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl uppercase text-bg">Find Your Perfect Hair Tool</h2>
              <p className="font-sans text-sm text-bg/70 mt-4 max-w-md mx-auto leading-6">
                Answer three quick questions and get a personalized tool recommendation matched to your hair type, texture, and styling goal.
              </p>
            </div>
            <HairToolFinder />
          </div>

          {/* SECTION 5 */}
          <div id="how-we-pick">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              How We Pick Products
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <h3 className="font-display text-xl text-ink mb-2">Independent Research</h3>
                <p className="font-sans text-sm text-body leading-6">
                  We start with sales data and verified buyer feedback across every Amazon listing in a category, not press samples or brand pitches.
                  This keeps our starting pool grounded in what real buyers actually experience after purchase.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-ink mb-2">Heat & Safety Standards</h3>
                <p className="font-sans text-sm text-body leading-6">
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
                <h3 className="font-display text-xl text-ink mb-2">Editorial Standards</h3>
                <p className="font-sans text-sm text-body leading-6">
                  We disclose every affiliate relationship clearly, never copy manufacturer descriptions, and update rankings annually as new models
                  and verified purchase data become available.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
              {processSteps.map((step, i) => (
                <div key={step} className="flex items-center md:flex-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-7 h-7 bg-accent text-white font-sans text-xs font-medium flex items-center justify-center">{i + 1}</div>
                    <span className="font-sans text-xs text-body mt-2 max-w-[90px]">{step}</span>
                  </div>
                  {i < processSteps.length - 1 && <div className="hidden md:block flex-1 h-px bg-divider mx-2" />}
                </div>
              ))}
            </div>

            <p className="font-sans text-sm text-body leading-7">
              Ingredient and material safety claims are cross-checked against resources like the{" "}
              <a href="https://www.niehs.nih.gov/health/topics/agents/cosmetics" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                National Institute of Environmental Health Sciences' overview of cosmetics and personal care agents
              </a>{" "}
              before any tool is recommended for daily use.
            </p>
            <p className="font-sans text-[11px] text-muted mt-6">
              StrandToolKit is reader-supported. When you buy through links on this page, we may earn an affiliate commission at no extra cost to you.
            </p>
          </div>

          {/* SECTION 6 */}
          <div id="glossary">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Strand Glossary
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <p className="font-sans text-sm text-body leading-7 mb-8">
              The hair tool terms every buyer should know before they shop.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {glossaryPreview.map((g) => (
                <div key={g.term} className="border-l-2 border-accent pl-4">
                  <h3 className="font-display text-lg text-ink mb-2">{g.term}</h3>
                  <p className="font-sans text-sm text-body leading-6">{g.def}</p>
                </div>
              ))}
            </div>
            <CTAButton href="/strand-glossary" variant="secondary">Explore Full Glossary →</CTAButton>
          </div>

          {/* SECTION 7 */}
          <div id="editor-picks">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Latest from Our Editors
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-6" />
            <div className="flex flex-col">
              {articles.slice(0, 3).map((a) => (
                <div key={a.slug} className="border-t border-divider py-6 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <span className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent md:w-40 shrink-0">{a.categoryLabel}</span>
                  <h3 className="font-display text-xl text-ink md:flex-1">{a.title}</h3>
                  <p className="font-sans text-sm text-body md:flex-1">{a.excerpt}</p>
                  <Link href={`/best/${a.slug}`} className="font-sans text-[11px] uppercase tracking-[0.1em] text-ink hover:underline shrink-0">
                    Read Review →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 8 */}
          <div id="by-the-numbers">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              The Numbers Behind Our Picks
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-8" />
            <div className="border-t border-b border-divider py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: "42", label: "Products Reviewed" },
                { num: "6", label: "Categories Covered" },
                { num: "2026", label: "Updated" },
                { num: "100%", label: "Amazon Verified" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-display text-accent" style={{ fontSize: "56px" }}>{s.num}</div>
                  <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="font-sans text-sm text-body leading-7 mt-6">
              Our rankings are revisited annually, with each category re-audited against current listings, pricing tiers, and verified buyer feedback
              so recommendations stay current rather than frozen at launch.
            </p>
          </div>

          {/* SECTION 9 */}
          <div id="hair-type-guide">
            <h2 className="font-display uppercase text-ink" style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Shop by Hair Type
            </h2>
            <div className="w-16 h-px bg-divider mt-4 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {hairTypeCards.map((h) => (
                <Link key={h.name} href={h.href} className="block border border-divider p-5">
                  <h3 className="font-display text-xl text-ink mb-2">{h.name}</h3>
                  <p className="font-sans text-sm text-body leading-6">{h.tip}</p>
                </Link>
              ))}
            </div>
            <div className="border-l-[3px] border-accent bg-card p-4">
              <p className="font-sans text-sm text-ink">
                Not sure which tools match your hair type? <a href="#tool-finder" className="underline text-accent">Use our Hair Tool Finder →</a>
              </p>
            </div>
          </div>

          {/* SECTION 10 — Newsletter */}
          <div id="newsletter" className="bg-ink -mx-6 px-6 py-16 md:-mx-12 md:px-12">
            <h2 className="font-display text-4xl md:text-5xl uppercase text-bg mb-4">Stay Ahead of Your Strands</h2>
            <p className="font-sans text-sm text-bg/70 mb-6 max-w-md leading-6">
              Weekly tool reviews, styling technique guides, and editor picks — no fluff.
            </p>
            <div className="flex flex-col gap-2 mb-8 font-sans text-sm text-bg/80">
              <span>— New buying guides published every week</span>
              <span>— Editor's top picks refreshed monthly</span>
              <span>— Heat tool tips & technique breakdowns</span>
            </div>
            <NewsletterForm />
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
                  <span className="block font-sans text-sm text-ink leading-5">{a.title}</span>
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
