import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "StrandToolKit's affiliate disclosure for the Amazon Associates Program.",
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-8">Affiliate Disclosure</h1>
      <div className="font-sans text-sm leading-7 text-body flex flex-col gap-4">
        <p>{site.name} is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
        <p>When you click a product link on this site and make a qualifying purchase on Amazon, we may earn a commission at no additional cost to you. This commission helps support the research and maintenance of {site.name}.</p>
        <p>Our affiliate relationships never influence which products we cover or how we rank them. Product selections and rankings are based solely on our editorial research criteria, detailed on our <a href="/our-method" className="underline hover:text-accent">Our Method</a> page.</p>
        <p>If you have questions about this disclosure, contact us at <a href={`mailto:${site.email}`} className="underline hover:text-accent">{site.email}</a>.</p>
      </div>
    </main>
  );
}
