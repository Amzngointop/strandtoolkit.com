import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-bgDark border-t border-divider mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="font-display text-[20px] uppercase tracking-[0.08em] text-bg mb-3">{site.name}</div>
          <p className="font-sans text-sm text-bg/70 leading-6">Independent reviews of hair tools and styling devices, researched for real at-home routines.</p>
        </div>
        <div>
          <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent mb-3">Reviews</div>
          <div className="flex flex-col gap-2">
            {site.categories.map((cat) => (
              <Link key={cat.slug} href={`/best/${cat.slug}`} className="font-sans text-sm text-bg/80 hover:text-accent">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent mb-3">Site</div>
          <div className="flex flex-col gap-2">
            <Link href="/styling-guides" className="font-sans text-sm text-bg/80 hover:text-accent">Styling Guides</Link>
            <Link href="/strand-glossary" className="font-sans text-sm text-bg/80 hover:text-accent">Strand Glossary</Link>
            <Link href="/our-method" className="font-sans text-sm text-bg/80 hover:text-accent">Our Method</Link>
            <Link href="/contact" className="font-sans text-sm text-bg/80 hover:text-accent">Contact</Link>
          </div>
        </div>
        <div>
          <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent mb-3">Legal</div>
          <div className="flex flex-col gap-2">
            <Link href="/affiliate-disclosure" className="font-sans text-sm text-bg/80 hover:text-accent">Affiliate Disclosure</Link>
            <Link href="/privacy-policy" className="font-sans text-sm text-bg/80 hover:text-accent">Privacy Policy</Link>
            <Link href="/terms" className="font-sans text-sm text-bg/80 hover:text-accent">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-divider/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between gap-2">
          <span className="font-sans text-xs text-bg/60">© {site.year} {site.name}. All rights reserved.</span>
          <span className="font-sans text-xs text-bg/60">As an Amazon Associate, we earn from qualifying purchases.</span>
        </div>
      </div>
    </footer>
  );
}
