import type { Metadata } from "next";
import { site } from "@/data/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the StrandToolKit editorial team.",
};

const faqs = [
  { q: "Do you accept product submissions from brands?", a: "We don't accept paid placements or guaranteed reviews. We're happy to receive product information for our research process, but it never guarantees inclusion or affects ranking." },
  { q: "How do I report an outdated or broken link?", a: "Email us at the address below with the page URL and product name, and we'll review it as part of our regular update cycle." },
  { q: "Can I suggest a product for review?", a: "Yes — send us the product name and category and we'll consider it the next time we audit that category." },
  { q: "Do you offer personalized recommendations?", a: "Use our Hair Tool Finder on the homepage for a quick personalized suggestion, or reach out with details about your hair type for a more specific pointer." },
];

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-6">Contact</h1>
      <p className="font-sans text-sm text-body leading-7 mb-2">Email: <a href={`mailto:${site.email}`} className="underline hover:text-accent">{site.email}</a></p>
      <p className="font-sans text-sm text-body leading-7 mb-10">{site.address}</p>

      <ContactForm />

      <h2 className="font-display text-2xl text-ink mb-4">Quick Questions</h2>
      <div className="flex flex-col">
        {faqs.map((f) => (
          <div key={f.q} className="border-t border-divider py-5">
            <h3 className="font-sans text-sm font-semibold text-ink mb-2">{f.q}</h3>
            <p className="font-sans text-sm leading-7 text-body">{f.a}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
