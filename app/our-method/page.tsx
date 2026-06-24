import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Method",
  description: "How StrandToolKit researches, evaluates, and selects the hair tools we recommend.",
};

export default function OurMethodPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1] mb-10">Our Method</h1>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-ink mb-3">Why We Built StrandToolKit</h2>
        <p className="font-sans text-sm leading-7 text-body mb-4">
          Most hair tool reviews online are written by people who received a free product and a deadline. We started StrandToolKit because we wanted
          a different kind of resource — one built from category research, published specifications, and verified buyer feedback rather than press
          samples and brand relationships. Hair dryers, straighteners, and curling irons are not casual purchases; a poor match for your hair type
          can mean wasted money and, in the case of heat tools, real damage to your hair.
        </p>
        <p className="font-sans text-sm leading-7 text-body">
          Our goal is straightforward: help you find a tool that actually fits your hair type, texture, and styling goals, without wading through
          marketing language designed to make every product sound like the right one.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-ink mb-3">How We Research</h2>
        <p className="font-sans text-sm leading-7 text-body mb-4">
          Every category review starts with a wide pool of products pulled from current Amazon listings. We narrow that pool by cross-referencing
          verified purchase patterns against published technical specifications — wattage, plate or barrel material, ion output, included
          attachments, and heat range. Tools that look impressive in marketing copy but fall short on these fundamentals don't make the final list.
        </p>
        <p className="font-sans text-sm leading-7 text-body">
          We also factor in practical, real-world considerations: how a tool performs across different hair types, how forgiving it is for
          beginners, and whether its included attachments are functional rather than an afterthought.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-display text-2xl text-ink mb-3">Our Editorial Standards</h2>
        <p className="font-sans text-sm leading-7 text-body mb-4">
          StrandToolKit participates in the Amazon Associates program, and we disclose that relationship clearly on every page where it applies.
          Affiliate relationships never determine which products we cover or how we rank them within a category — our rankings are based on the
          research criteria above, not on commission rates.
        </p>
        <p className="font-sans text-sm leading-7 text-body">
          We write original analysis for every product and category. We do not copy manufacturer descriptions, and we revisit our rankings annually
          to account for new product releases and updated buyer feedback.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-ink mb-3">What We Never Do</h2>
        <p className="font-sans text-sm leading-7 text-body mb-4">
          We never list a price on this site, since prices change constantly and we'd rather you check current pricing directly on Amazon. We never
          publish fabricated star ratings or claim hands-on testing we haven't done. We never accept payment in exchange for a higher ranking, and we
          never let an affiliate commission rate influence a recommendation.
        </p>
      </section>
    </main>
  );
}
