import type { ArticleBodyContent } from "../types";

const intro = (
  <div className="font-sans text-[15px] leading-7 text-body">
    <p className="mb-4">
      Curling irons remain one of the most versatile tools in any styling
      arsenal, capable of producing everything from tight, springy ringlets to
      barely-there beach waves depending on barrel size and technique. Unlike
      a one-size-fits-all wand, the right curling iron is matched to your
      hair&apos;s length, density, and the silhouette you&apos;re after, which
      is why a single barrel rarely does it all.
    </p>
    <p className="mb-4">
      Heat styling tools can also take a toll on hair health when used
      incorrectly, so it&apos;s worth understanding{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        how heat tools can damage hair and how to prevent it
      </a>{" "}
      before reaching for a higher temperature setting. Choosing a barrel
      diameter that suits your goals, using a thermal protectant, and giving
      curls time to cool before brushing them out all make a noticeable
      difference in both the longevity of the style and the condition of your
      strands over time.
    </p>
    <p className="mb-4">
      Below, we break down how barrel size maps to curl type, what to
      consider when comparing manual and automatic curlers, and the
      differences between ceramic, titanium, and gold-plated barrels so you
      can find the tool that fits your routine.
    </p>
  </div>
);

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Curl Type Guide</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink text-lg mb-1">3/4&quot; – 1&quot;</p>
        <p className="font-sans text-sm text-accent mb-2">Tight Curls</p>
        <p className="font-sans text-sm text-body">
          Small barrels create dense, springy ringlets. Best for short to
          medium hair and retro or pin-up looks.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink text-lg mb-1">1&quot; – 1.25&quot;</p>
        <p className="font-sans text-sm text-accent mb-2">Classic Curls</p>
        <p className="font-sans text-sm text-body">
          A versatile mid-size barrel produces the rounded, uniform curl most
          people picture when they think &quot;curling iron.&quot;
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink text-lg mb-1">1.25&quot; – 1.5&quot;</p>
        <p className="font-sans text-sm text-accent mb-2">Loose Curls</p>
        <p className="font-sans text-sm text-body">
          Larger barrels relax the curl into looser, bouncier spirals that
          suit longer hair and everyday wear.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink text-lg mb-1">1.5&quot;+</p>
        <p className="font-sans text-sm text-accent mb-2">Soft Waves</p>
        <p className="font-sans text-sm text-body">
          The widest barrels skip tight curl and go straight to soft,
          undone-looking waves with minimal volume at the root.
        </p>
      </div>
    </div>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">
      Curling Iron Buying Guide
    </h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Barrel Size and Curl Type
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Barrel diameter is the single biggest factor in determining what your
      finished curl will look like. Smaller barrels wrap hair into a tighter
      coil, producing more defined, compact curls that tend to hold their
      shape longer because there&apos;s less hair weighing the curl down.
      Larger barrels, on the other hand, create broader loops that read as
      loose waves rather than discrete curls. Hair length matters too: very
      long hair wrapped on a small barrel can end up with curls only in the
      bottom few inches, while short hair on an oversized barrel may barely
      curl at all. Matching barrel size to both your length and desired
      finish is the first decision to get right.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        As a general rule, curls always loosen slightly as they cool and
        settle, so when in doubt, size down rather than up if you want the
        curl to read as defined once you&apos;re done styling.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Manual vs. Automatic Curlers
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Manual curling irons require you to wrap each section of hair around
      the barrel by hand, which gives you full control over curl direction,
      tightness, and placement but takes more practice to master. Automatic
      or rotating curlers draw hair into a rotating chamber and curl it for
      you, which speeds up the process and produces consistent results
      curl-to-curl, especially useful for those newer to styling or working
      with hard-to-reach back sections. The tradeoff is less customization
      per section and, on some models, a learning curve around timing the
      release so hair doesn't tangle.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Barrel Material: Ceramic vs. Titanium vs. Gold-Plated
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Ceramic barrels heat evenly and gently, making them a solid choice for
      fine or color-treated hair that&apos;s prone to heat sensitivity.
      Titanium barrels heat up faster and retain higher temperatures more
      consistently, which appeals to those with thick or coarse hair that
      needs more sustained heat to hold a curl. Gold-plated barrels combine
      strong heat conduction with a smoother glide, often paired with ceramic
      or tourmaline coatings to reduce friction and static. Because any
      heated styling tool involves repeated exposure to high temperatures,
      it&apos;s worth reviewing general guidance on{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        cosmetic and personal care product safety
      </a>{" "}
      when selecting tools and products used close to the scalp.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">
      Curling Technique Basics
    </h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Section hair before you start so each piece curls evenly, and work from
      the back of the head forward. Hold the iron vertically for curls that
      cascade naturally, or horizontally for tighter, more uniform spirals.
      Wrap hair around the barrel away from your face for a face-framing
      effect, and alternate direction section to section for a more
      natural, lived-in finish rather than a uniform helix pattern. Always
      let each curl cool in your hand or pinned to your scalp before brushing
      it out, since curls set as they cool, not while they&apos;re still hot.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Holding the iron for too long on one section is one of the most
        common causes of heat damage. Most styles need only eight to twelve
        seconds of heat per section, even on thicker hair.
      </p>
    </div>
  </div>
);

const faqs = [
  {
    question: "What barrel size should I use for loose curls versus tight curls?",
    answer:
      "Tight, springy curls come from smaller barrels in the 3/4 to 1 inch range, while loose, bouncy curls form on barrels closer to 1.25 to 1.5 inches. If you want soft waves rather than defined curls, look for barrels 1.5 inches or larger.",
  },
  {
    question: "Should I get an auto-rotating curler or a manual curling iron?",
    answer:
      "Auto-rotating curlers are great for speed and consistency, especially for beginners or hard-to-reach sections at the back of the head. Manual irons give you more control over curl direction and tightness, which experienced stylers often prefer for customized looks.",
  },
  {
    question: "How long do curls from a curling iron typically last?",
    answer:
      "With a thermal protectant and a cool-down period before brushing out, curls typically last anywhere from several hours to a full day depending on hair type and humidity. Fine, straight hair tends to lose curl faster than coarse or wavy hair.",
  },
  {
    question: "Is a gold-plated barrel better than ceramic?",
    answer:
      "Neither is strictly better; they suit different needs. Gold-plated barrels conduct heat quickly and glide smoothly, which works well for thicker hair, while ceramic barrels distribute heat more gently, making them a better fit for fine or color-treated strands.",
  },
  {
    question: "How can I curl fine hair without damaging it?",
    answer:
      "Use the lowest effective heat setting, apply a heat protectant beforehand, and avoid holding the iron on any one section for more than a few seconds. Fine hair generally curls quickly, so lingering heat is unnecessary and increases the risk of damage.",
  },
  {
    question: "Which direction should I curl my hair for the most natural look?",
    answer:
      "Alternating curl direction section by section, rather than curling every piece the same way, creates a more natural, undone movement. Curling all sections away from your face is a classic technique for a face-framing finish.",
  },
];

const furtherReading = [
  {
    href: "/styling-guides/curling-iron-without-heat-damage",
    label: "How to Use a Curling Iron Without Heat Damage",
  },
  {
    href: "/best/best-hot-air-brushes",
    label: "Best Hot Air Brushes for Salon-Style Blowouts at Home",
  },
  {
    href: "/styling-guides/build-your-hair-tool-kit",
    label: "How to Build Your At-Home Hair Tool Kit on Any Budget",
  },
];

export const content: ArticleBodyContent = {
  intro,
  diagram,
  buyingGuide,
  faqs,
  furtherReading,
};
