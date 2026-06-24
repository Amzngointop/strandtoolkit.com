import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "StrandToolKit's terms of use.",
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-8">Terms of Use</h1>
      <div className="font-sans text-sm leading-7 text-body flex flex-col gap-4">
        <p>Last updated: 2026. By accessing {site.name}, you agree to these terms of use.</p>
        <h2 className="font-display text-xl text-ink mt-4">Content</h2>
        <p>All editorial content on this site is provided for informational purposes only and reflects our independent research. It is not a substitute for professional advice.</p>
        <h2 className="font-display text-xl text-ink mt-4">Affiliate Links</h2>
        <p>This site contains affiliate links. See our <a href="/affiliate-disclosure" className="underline hover:text-accent">Affiliate Disclosure</a> for details.</p>
        <h2 className="font-display text-xl text-ink mt-4">Limitation of Liability</h2>
        <p>We make reasonable efforts to keep content accurate and current but make no guarantees about product availability, specifications, or outcomes from using any reviewed product.</p>
        <h2 className="font-display text-xl text-ink mt-4">Contact</h2>
        <p>Questions about these terms can be sent to <a href={`mailto:${site.email}`} className="underline hover:text-accent">{site.email}</a>.</p>
      </div>
    </main>
  );
}
