import type { ArticleBodyContent } from "../types";

const intro = (
  <div className="font-sans text-[15px] leading-7 text-body">
    <p className="mb-4">
      A hot air brush sits in a strange and useful middle ground between a round
      brush and a blow dryer. Instead of fighting to coordinate a dryer in one
      hand and a brush in the other, you get a single rotating or fixed barrel
      that dries, smooths, and shapes hair at the same time. For anyone who
      grew up watching a stylist effortlessly curl the ends under with one
      tool, the appeal is obvious: less time, fewer steps, and a finish that
      looks closer to a salon blowout than a standard dryer alone can manage.
    </p>
    <p className="mb-4">
      That said, not every hot air brush behaves the same way, and barrel
      size, bristle type, and heat settings all change the outcome
      dramatically. A 2-inch barrel built for long, thick hair will frustrate
      someone with a chin-length bob, and a brush with aggressive, ungentle
      heat can stress strands that are already fragile from color or
      chemical treatments. The{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on minimizing heat damage
      </a>{" "}
      is worth keeping in mind no matter which tool you choose.
    </p>
    <p className="mb-4">
      This guide breaks down barrel sizing, materials, and the realistic
      limits of what a hot air brush can do, so you can match the tool to
      your hair length, texture, and styling goals.
    </p>
  </div>
);

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Barrel Size Guide</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-divider p-4">
        <div className="border-l-[3px] border-accent pl-3 mb-3">
          <p className="font-display text-lg text-ink">1-Inch Barrel</p>
          <p className="font-sans text-xs text-muted">Tightest curl radius</p>
        </div>
        <div className="h-px w-full bg-divider mb-3" />
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Best hair length:</span> chin to
          shoulder-length, bobs, and shorter lobs.
        </p>
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Expected result:</span> noticeable bend
          and lift at the root, defined ends, more curl than wave.
        </p>
        <p className="font-sans text-sm text-body">
          <span className="text-ink">Watch for:</span> over-curling on hair
          finer than medium texture.
        </p>
      </div>
      <div className="border border-divider p-4">
        <div className="border-l-[3px] border-accent pl-3 mb-3">
          <p className="font-display text-lg text-ink">1.5-Inch Barrel</p>
          <p className="font-sans text-xs text-muted">Most versatile size</p>
        </div>
        <div className="h-px w-full bg-divider mb-3" />
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Best hair length:</span> shoulder to
          mid-back length, the most common length range overall.
        </p>
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Expected result:</span> soft,
          salon-style waves with gentle bend rather than tight curl.
        </p>
        <p className="font-sans text-sm text-body">
          <span className="text-ink">Watch for:</span> still tight for hair
          past mid-back if you want a loose, undone finish.
        </p>
      </div>
      <div className="border border-divider p-4">
        <div className="border-l-[3px] border-accent pl-3 mb-3">
          <p className="font-display text-lg text-ink">2-Inch Barrel</p>
          <p className="font-sans text-xs text-muted">Smoothing-forward</p>
        </div>
        <div className="h-px w-full bg-divider mb-3" />
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Best hair length:</span> long, thick, or
          dense hair past mid-back.
        </p>
        <p className="font-sans text-sm text-body mb-2">
          <span className="text-ink">Expected result:</span> smooth, voluminous
          body with minimal curl, closer to a blowout than a curl set.
        </p>
        <p className="font-sans text-sm text-body">
          <span className="text-ink">Watch for:</span> can feel unwieldy on
          shorter lengths and may not reach the scalp on very long hair in one
          pass.
        </p>
      </div>
    </div>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">
      Hot Air Brush Buying Guide
    </h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      How a Hot Air Brush Differs From a Blow Dryer
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A standard blow dryer moves air and heat across hair you shape
      separately with a paddle or round brush. A hot air brush combines both
      functions into one tool, using a heated, bristled barrel to dry the
      hair while simultaneously smoothing the cuticle and creating shape.
      Many models also rotate, which mimics the motion a stylist uses when
      wrapping sections around a round brush. The tradeoff is reach and
      control: a dryer with a separate brush lets you tension and direct each
      section precisely, while a hot air brush is faster but less
      adjustable mid-stroke.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        If your priority is speed on wash days, a hot air brush usually wins.
        If your priority is precision styling for an event, a dryer paired
        with a separate round brush still gives you more control.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Barrel Material: Ceramic vs. Titanium
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Ceramic barrels heat more gradually and distribute heat evenly, which
      tends to be gentler on fine or color-treated hair. Titanium barrels
      heat up faster and hold higher temperatures more consistently, which
      can be useful for coarse or very thick hair that resists styling, but
      that same intensity makes titanium less forgiving on fragile strands.
      Many mid-range and higher-end hot air brushes use a ceramic-coated
      barrel as a middle ground, aiming for faster heat-up without the
      harsher edge of bare titanium.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Choosing Barrel Size by Hair Length
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Barrel diameter determines curl tightness and how much hair you can
      wrap per section. Shorter barrels create more defined curl and work
      best on shorter lengths where there isn't enough hair to wrap loosely.
      Larger barrels stretch hair straighter and add volume with minimal
      curl, which suits longer or thicker hair that would otherwise take
      multiple passes to dry through. If you're unsure, a 1.5-inch barrel is
      the most adaptable choice for shoulder-to-mid-back length hair, and is
      a reasonable default if you only plan to own one.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Who Should Not Rely on a Hot Air Brush Alone
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Hot air brushes are not a substitute for a flat iron if you need
      pin-straight, sleek results, nor are they ideal for very curly or
      coily hair textures that rely on diffusing and minimal tension to
      preserve curl pattern. They also aren't the best fit for chemically
      relaxed, bleached, or otherwise compromised hair that needs the lowest
      possible heat exposure. Repeated high-heat styling, regardless of tool,
      carries real risk to hair's protein structure; the{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        National Institute of Environmental Health Sciences' overview of
        cosmetic and personal care product safety
      </a>{" "}
      is a useful starting point for understanding broader product and
      ingredient considerations alongside heat exposure.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        If your hair is already damaged, prioritize a heat-protectant
        spray and the lowest effective temperature setting before reaching
        for any heated styling tool, hot air brush included.
      </p>
    </div>
  </div>
);

const faqs = [
  {
    question: "Is a hot air brush better than a regular blow dryer?",
    answer:
      "It depends on your goal. A hot air brush is faster because it dries and shapes hair in one step, which makes it convenient for everyday styling. A blow dryer paired with a separate round brush gives you more precise control over tension and direction, which can matter more for special-occasion styling.",
  },
  {
    question: "Can a hot air brush replace a flat iron?",
    answer:
      "Not fully. A hot air brush can smooth and reduce frizz, but it generally can't achieve the same pin-straight, sleek result a flat iron delivers, especially on thick or very textured hair. Think of it as a finishing and styling tool rather than a straightening replacement.",
  },
  {
    question: "How long do hot air brushes typically last?",
    answer:
      "With regular use and proper care, most hot air brushes remain functional for a few years before the heating element or motor begins to wear down. Cleaning the bristles regularly and avoiding tangled hair pulling on the internal motor can extend its working life.",
  },
  {
    question: "Are hot air brushes better for fine or thick hair?",
    answer:
      "Fine hair generally does well with smaller barrels and ceramic heating elements, since it requires less heat and styling time. Thick hair often benefits from larger barrels and titanium or ceramic-titanium hybrid barrels that can hold heat through more hair density.",
  },
  {
    question: "How do you clean the bristles on a hot air brush?",
    answer:
      "Most bristles can be cleaned with a dedicated brush cleaning tool or an old toothbrush to remove product buildup and shed hair, ideally done weekly. Always unplug the device and let it cool completely before cleaning, and avoid submerging the barrel or base in water.",
  },
  {
    question: "Do hot air brushes cause heat damage?",
    answer:
      "Yes, any heated styling tool can contribute to heat damage over time if used at high temperatures without protection. Using a heat protectant, choosing a moderate temperature setting, and limiting use on already-compromised hair can meaningfully reduce that risk.",
  },
];

const furtherReading = [
  {
    href: "/styling-guides/salon-blowout-at-home",
    label: "How to Get a Salon Blowout at Home",
  },
  {
    href: "/styling-guides/straightener-vs-hot-air-brush",
    label: "Hair Straightener vs. Hot Air Brush: Which One Do You Need?",
  },
  {
    href: "/best/best-hair-dryers",
    label: "Best Hair Dryers for Every Hair Type",
  },
];

export const content: ArticleBodyContent = {
  intro,
  diagram,
  buyingGuide,
  faqs,
  furtherReading,
};
