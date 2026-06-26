"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [reviewsOpen, setReviewsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-bgDark text-bg/80 text-center font-sans text-[10px] uppercase tracking-[0.12em] py-2 px-6">
        StrandToolKit is reader-supported. We may earn an affiliate commission from links on this site.
      </div>
      <div
        className="bg-bg"
        style={{ borderBottom: scrolled ? "1px solid #E5E0D8" : "1px solid transparent" }}
      >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link href="/" className="font-display text-[22px] uppercase tracking-[0.3em] text-ink">
          {site.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {site.nav.map((item) =>
            item.dropdown ? (
              <button
                key={item.label}
                onClick={() => setReviewsOpen(!reviewsOpen)}
                className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link key={item.label} href={item.href} className="font-sans text-[11px] uppercase tracking-[0.16em] text-ink hover:text-accent transition-colors">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button className="md:hidden font-sans text-[11px] uppercase tracking-[0.14em]" onClick={() => setMobileOpen(!mobileOpen)}>
          MENU
        </button>
      </div>

      {reviewsOpen && (
        <div className="border-t border-b border-divider bg-bg">
          <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-3 gap-6">
            {site.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/best/${cat.slug}`}
                onClick={() => setReviewsOpen(false)}
                className="block"
              >
                <div className="font-display text-lg text-ink">{cat.name}</div>
                <div className="font-sans text-xs text-body mt-1">{cat.description}</div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t border-divider bg-bg px-6 py-6 flex flex-col gap-4">
          {site.categories.map((cat) => (
            <Link key={cat.slug} href={`/best/${cat.slug}`} onClick={() => setMobileOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink">
              {cat.name}
            </Link>
          ))}
          <Link href="/styling-guides" onClick={() => setMobileOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink">Styling Guides</Link>
          <Link href="/strand-glossary" onClick={() => setMobileOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink">Strand Glossary</Link>
          <Link href="/our-method" onClick={() => setMobileOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink">Our Method</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className="font-sans text-[12px] uppercase tracking-[0.1em] text-ink">Contact</Link>
        </div>
      )}
      </div>
    </header>
  );
}
