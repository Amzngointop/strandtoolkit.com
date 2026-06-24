import type { ArticleBodyContent } from "../types";

const intro = (
  <div className="font-sans text-[15px] leading-7 text-body">
    <p className="mb-4">
      A great flat iron can mean the difference between sleek, glassy strands and a frizzy,
      uneven mess by midday. But not every straightener is built the same way, and the plate
      material, width, and heat range you choose should depend on your hair's texture, thickness,
      and how often you plan to style. Thicker, coarser hair generally needs higher, steadier heat
      and wider plates, while fine or color-treated hair benefits from gentler temperatures and
      smoother glide to avoid unnecessary breakage.
    </p>
    <p className="mb-4">
      Heat styling tools work by temporarily breaking and reforming the hydrogen bonds in each
      strand, which is why repeated high-heat exposure without protection can leave hair brittle
      and prone to split ends. Dermatologists recommend pairing any hot tool with a heat protectant
      and keeping temperatures as low as your hair type allows; the{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing heat damage
      </a>{" "}
      is a useful starting point before you adjust your iron's dial.
    </p>
    <p className="mb-4">
      Below, we break down how plate material affects glide and shine, how plate width changes
      your styling time, and when a steam straightener might be worth considering, so you can
      match a tool to your actual hair needs rather than guessing.
    </p>
  </div>
);

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Plate Material Comparison</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <h3 className="font-display text-lg text-ink mb-2">Ceramic Plates</h3>
        <p className="font-sans text-sm text-body mb-3">
          Heats evenly and distributes temperature gently across the plate surface, making it a
          common choice for everyday styling.
        </p>
        <p className="font-sans text-sm text-accent mb-1">Pros</p>
        <p className="font-sans text-sm text-body mb-3">
          Smooth glide, gentler on fine or damaged hair, widely affordable.
        </p>
        <p className="font-sans text-sm text-muted mb-1">Cons</p>
        <p className="font-sans text-sm text-body">
          Plate coating can wear down over time and may chip on lower-cost models.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <h3 className="font-display text-lg text-ink mb-2">Titanium Plates</h3>
        <p className="font-sans text-sm text-body mb-3">
          Heats up quickly and holds a consistent high temperature, favored for thick or coarse
          textures that resist styling.
        </p>
        <p className="font-sans text-sm text-accent mb-1">Pros</p>
        <p className="font-sans text-sm text-body mb-3">
          Fast heat-up, lightweight build, performs well in humid conditions.
        </p>
        <p className="font-sans text-sm text-muted mb-1">Cons</p>
        <p className="font-sans text-sm text-body">
          Can run hotter than expected, which is riskier for fine or chemically treated hair.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <h3 className="font-display text-lg text-ink mb-2">Tourmaline Plates</h3>
        <p className="font-sans text-sm text-body mb-3">
          Often layered over ceramic or titanium, tourmaline is ground into the plate to boost
          shine and reduce static.
        </p>
        <p className="font-sans text-sm text-accent mb-1">Pros</p>
        <p className="font-sans text-sm text-body mb-3">
          Helps tame frizz, adds noticeable shine, smooths the hair cuticle.
        </p>
        <p className="font-sans text-sm text-muted mb-1">Cons</p>
        <p className="font-sans text-sm text-body">
          Usually adds to the price, and benefits are most visible on dry or frizz-prone hair.
        </p>
      </div>
    </div>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Hair Straightener Buying Guide</h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Plate Material Deep Dive</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Plate material determines how heat transfers to your hair and how smoothly the iron glides
      through each section. Ceramic plates are popular because they heat evenly and are gentle
      enough for daily use on most hair types. Titanium plates heat up faster and stay hotter for
      longer, which makes them appealing for thick, curly, or coarse hair that needs sustained
      heat to fully straighten. Tourmaline is rarely used alone; instead, it's typically infused
      into ceramic or titanium plates to add shine and reduce frizz caused by static.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        If you have fine, fragile, or color-treated hair, a pure ceramic or tourmaline-ceramic
        plate is usually the safer starting point, since it offers more even, gentler heat
        distribution than titanium.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Plate Width and Styling Time</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Plate width has a direct effect on how long a styling session takes and how precise your
      results will be. Narrower plates, generally under an inch, are easier to maneuver around
      shorter layers, bangs, and tight curls, but they require more passes to cover a full head of
      hair. Wider plates, often between one and one and a half inches, can grab more hair per
      pass, which cuts down styling time significantly on long or thick hair, though they can feel
      bulky for detailed work near the hairline or ears.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      If you regularly switch between short face-framing pieces and longer length, a mid-width
      plate around one inch tends to offer the best balance of control and speed.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Temperature Control by Hair Type</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Matching heat setting to hair type is one of the most important factors in preventing
      long-term damage. Fine or color-treated hair typically styles well between 250 and 300
      degrees Fahrenheit, while medium-textured hair often needs 300 to 350 degrees. Thick, coarse,
      or very curly hair may require 350 to 400 degrees to fully smooth the cuticle. A straightener
      with precise, adjustable temperature settings, rather than a single fixed heat, gives you far
      more control over how much thermal stress your hair actually experiences.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-ink text-sm">
        The{" "}
        <a
          href="https://www.fda.gov/consumers/consumer-updates/hair-dryers-and-curling-irons-use-caution"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-accent"
        >
          FDA's guidance on using heated hair tools safely
        </a>{" "}
        recommends starting at the lowest effective temperature and increasing only as needed, a
        habit that helps preserve both hair health and tool longevity.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Are Steam Straighteners Worth It?</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Steam straighteners release a fine vapor, sometimes infused with argan oil or keratin, as the
      plates pass through hair. The idea is that steam helps relax the hair shaft more gently than
      dry heat alone, which can translate to a smoother finish with less perceived dryness. They
      tend to work best on hair that's already in reasonably good condition, since the added
      moisture step doesn't replace the need for proper heat protection. For very fine or already
      damaged hair, a lower, consistent dry-heat setting may still be the more predictable choice.
    </p>
  </div>
);

const faqs = [
  {
    question: "Is titanium or ceramic better for a flat iron?",
    answer:
      "Ceramic is generally gentler and better suited to fine or color-treated hair because it heats evenly at lower temperatures. Titanium heats faster and holds higher heat longer, making it a better match for thick, coarse, or curly hair that resists straightening.",
  },
  {
    question: "How often can I straighten my hair without damaging it?",
    answer:
      "Most hair types can tolerate straightening two to three times a week if a heat protectant is used and the temperature is matched to hair thickness. Daily heat styling without breaks increases the risk of dryness, brittleness, and split ends over time.",
  },
  {
    question: "Are steam straighteners actually worth the extra cost?",
    answer:
      "Steam straighteners can add a smoother, slightly more hydrated finish for hair that's already in decent condition, but they aren't a substitute for heat protectant or proper temperature control. For very fine or damaged hair, a reliable dry-heat iron at a lower setting is often the more practical option.",
  },
  {
    question: "What plate width should I choose for my hair length?",
    answer:
      "Shorter hair, bangs, and tighter curls are easier to manage with narrower plates under an inch wide. Longer or thicker hair styles faster with wider plates, generally one to one and a half inches, since each pass covers more surface area.",
  },
  {
    question: "What temperature should I use for fine versus coarse hair?",
    answer:
      "Fine or color-treated hair typically styles well between 250 and 300 degrees Fahrenheit. Coarse, thick, or very curly hair often needs 350 to 400 degrees to fully smooth the cuticle without requiring excessive repeated passes.",
  },
  {
    question: "How long does a good flat iron typically last?",
    answer:
      "With regular use, a well-made straightener with durable plates and a quality heating element can last several years before performance noticeably declines. Signs it's time to replace one include uneven heating, slower heat-up times, or visible wear on the plate coating.",
  },
];

const furtherReading = [
  {
    href: "/styling-guides/straightener-vs-hot-air-brush",
    label: "Hair Straightener vs. Hot Air Brush: Which One Do You Need?",
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
