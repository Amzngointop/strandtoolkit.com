export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="mt-12">
      <h2 className="font-display text-3xl text-ink mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-col">
        {items.map((item) => (
          <div key={item.question} className="border-t border-divider py-5">
            <h3 className="font-sans text-sm font-semibold text-ink mb-2">{item.question}</h3>
            <p className="font-sans text-sm leading-7 text-body">{item.answer}</p>
          </div>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
