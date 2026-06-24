import type { ArticleBodyContent } from "../types";

const intro = (
  <>
    <p className="mb-4">
      A hair dryer is the single most-used tool in most styling routines, yet it is often chosen on impulse rather
      than intention. The right dryer can cut drying time in half, tame frizz before it starts, and protect strands
      from the kind of cumulative heat exposure that leaves hair brittle and dull. The wrong one can do the opposite,
      turning a five-minute task into a twenty-minute battle that leaves your ends frayed and your scalp parched.
    </p>
    <p className="mb-4">
      The market is crowded with claims about ionic technology, ceramic plates, and tourmaline coatings, and it is
      not always clear which of these actually matter for your hair type. According to the{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing heat damage
      </a>
      , how a tool manages heat distribution matters more than any single marketing buzzword. This guide breaks down
      the technology, wattage, and attachments that genuinely influence performance, then walks through how to match
      a dryer to fine, thick, curly, or color-treated hair so you can shop with a clear sense of what you actually
      need.
    </p>
  </>
);

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Dryer Selection Decision Tree</h2>
    <div className="font-sans text-sm">
      {/* Step 1 */}
      <div className="border border-divider p-4">
        <p className="font-display text-ink mb-1">Step 1: What is your hair texture?</p>
        <p className="text-body">Start here to narrow down wattage and airflow needs.</p>
      </div>
      <div className="flex justify-center">
        <div className="w-px h-6 bg-divider"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="border-l-[3px] border-accent bg-card p-4">
            <p className="font-display text-ink mb-1">Fine or thin hair</p>
            <p className="text-body">Look toward lower wattage, ionic technology to reduce frizz without overheating strands.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-6 bg-divider"></div>
          </div>
          <div className="border border-divider p-4">
            <p className="font-display text-ink mb-1">Step 2: Wattage guide</p>
            <p className="text-body">1200&ndash;1600W is typically sufficient. Higher wattage risks excess heat on delicate strands.</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="border-l-[3px] border-accent bg-card p-4">
            <p className="font-display text-ink mb-1">Thick, coarse, or curly hair</p>
            <p className="text-body">Prioritize higher wattage and ceramic or tourmaline plates for even, fast heat distribution.</p>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-6 bg-divider"></div>
          </div>
          <div className="border border-divider p-4">
            <p className="font-display text-ink mb-1">Step 2: Wattage guide</p>
            <p className="text-body">1800&ndash;2200W cuts drying time significantly and helps smooth dense or textured strands.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-px h-6 bg-divider"></div>
      </div>
      {/* Step 3 */}
      <div className="border border-divider p-4">
        <p className="font-display text-ink mb-1">Step 3: Which technology matters most?</p>
        <p className="text-body">
          Ionic dryers emit negative ions that break down water droplets faster, easing frizz on fine or
          color-treated hair. Ceramic and tourmaline elements distribute heat more evenly, which benefits thicker or
          coarser textures that need sustained, consistent heat.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-px h-6 bg-divider"></div>
      </div>
      {/* Step 4 */}
      <div className="border border-divider p-4">
        <p className="font-display text-ink mb-1">Step 4: What attachment do you need?</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <div className="flex-1 border-l-[3px] border-accent pl-3">
            <p className="text-ink font-display mb-1">Diffuser</p>
            <p className="text-body">Best for curly, coiled, or wavy hair seeking volume without disrupting natural curl pattern.</p>
          </div>
          <div className="flex-1 border-l-[3px] border-accent pl-3">
            <p className="text-ink font-display mb-1">Concentrator nozzle</p>
            <p className="text-body">Best for smooth, sleek blowouts where directed airflow helps with frizz control and shine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Hair Dryer Buying Guide</h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Wattage and Motor Type</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Wattage is the most reliable indicator of how quickly a dryer can move heated air, and by extension, how
      quickly your hair will dry. Lower-wattage dryers, generally in the 1200 to 1600 watt range, are gentler and
      well suited to fine or thin hair that can become overwhelmed by intense heat. Higher-wattage dryers, often
      1800 watts and above, are built for thicker or denser hair that requires more sustained airflow to dry through
      fully. Motor type matters too: AC motors are typically heavier but more powerful and durable over years of
      use, while DC motors are lighter and quieter, making them popular in travel-sized or lower-cost dryers, though
      they tend to have a shorter functional lifespan under daily use.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: if you dry your hair daily, prioritize motor durability over a few extra watts. A well-built AC motor
        dryer used on a moderate heat setting will often outlast a high-wattage budget dryer pushed to its limit
        every morning.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Ionic, Ceramic, and Tourmaline Technology Explained</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      These three terms are often used interchangeably in marketing, but they describe different mechanisms. Ionic
      technology generates negative ions that break apart water molecules on the hair shaft, speeding up evaporation
      and reducing the static and frizz that come from positively charged, dehydrated strands. Ceramic refers to the
      material lining the dryer's internal barrel or plates, which heats evenly and helps avoid the hot spots that
      can scorch hair. Tourmaline is a semi-precious mineral that, when crushed into a fine powder and embedded in
      ceramic, amplifies negative ion output beyond what ceramic alone provides. In practice, a dryer combining
      ceramic heating elements with ionic output tends to offer the most balanced performance for most hair types,
      while pure tourmaline models are often marketed toward thicker or curlier hair seeking maximum frizz control.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It is worth noting that ionic technology, while generally beneficial, is not universally ideal. Very fine,
      already-smooth hair can sometimes become limp or overly flat with heavy ion output, so those with fine
      strands may prefer a dryer with an adjustable ionic setting rather than one running constantly at full
      intensity.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Attachments: Diffuser vs. Concentrator</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Attachments shape how airflow is delivered, and the right one depends entirely on your desired outcome. A
      diffuser disperses air across a wider surface area and is the standard choice for curly, coily, or wavy hair
      types, since it dries curls without blasting them into frizz or disrupting their natural shape. A concentrator
      nozzle narrows airflow into a focused stream, which is better suited to smoothing, sleek blowouts, and precise
      root lift, since the directed air can be aimed section by section while brushing through. Many higher-end
      dryers ship with both, allowing one tool to serve multiple styling goals depending on the day.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Matching a Dryer to Hair Type and Texture</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Fine hair generally benefits from lower wattage, a diffused ionic setting, and a cooler shot button to set
      styles without overprocessing delicate strands. Thick or coarse hair typically needs higher wattage, ceramic
      or tourmaline plates for even heat, and a concentrator for controlled sectioning. Curly and coily hair tends to
      do best with a diffuser attachment and a dryer offering multiple heat and speed combinations, since lower,
      steadier heat helps preserve curl definition. Color-treated or chemically processed hair, regardless of
      texture, benefits from a model with a true cool-shot function and a lower default heat ceiling, since processed
      hair is generally more porous and prone to heat damage. The{" "}
      <a
        href="https://www.fda.gov/consumers/consumer-updates/hair-dryers-and-curling-irons-use-caution"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        FDA's consumer guidance on safe use of hair dryers and curling irons
      </a>{" "}
      also recommends keeping dryers on moderate settings and maintaining distance from the scalp to avoid burns and
      excess dryness, a principle that applies regardless of hair type.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: if you regularly switch between sleek and textured styles, choose a dryer with at least two heat
        settings and two speed settings, plus interchangeable diffuser and concentrator attachments, rather than
        buying a second specialized tool.
      </p>
    </div>
  </div>
);

const faqs = [
  {
    question: "How many watts do I need in a hair dryer?",
    answer:
      "Most fine or thin hair types do well with 1200 to 1600 watts, which dries efficiently without excess heat exposure. Thicker or coarser hair generally benefits from 1800 watts or more, since the added power shortens drying time and reduces how long heat sits on each section.",
  },
  {
    question: "Is ionic or ceramic technology better for my hair?",
    answer:
      "They serve different purposes rather than one being universally better. Ionic technology reduces frizz and static by speeding up water evaporation, while ceramic ensures even heat distribution across the barrel. Many dryers combine both, and that combination tends to suit the widest range of hair types.",
  },
  {
    question: "Should I use a diffuser attachment?",
    answer:
      "A diffuser is most useful for curly, coily, or wavy hair, since it spreads airflow gently and preserves curl pattern instead of blowing it into frizz. If you have straight hair and want a sleek finish, a concentrator nozzle is generally the more useful attachment.",
  },
  {
    question: "How long does a hair dryer typically last?",
    answer:
      "A well-maintained dryer with an AC motor can often perform reliably for several years of regular use, while lighter DC motor dryers tend to have a shorter lifespan under daily wear. Regularly cleaning the air intake filter of lint and debris helps the motor avoid overheating and extends its functional life.",
  },
  {
    question: "How can I dry my hair faster without damaging it?",
    answer:
      "Towel-drying or air-drying hair to a damp, not soaking, state before using heat reduces overall drying time and heat exposure. Using a higher-wattage dryer with even heat distribution, combined with sectioning hair as you dry, also speeds up the process meaningfully without raising the heat setting.",
  },
  {
    question: "What is the best way to prevent heat damage from a dryer?",
    answer:
      "Keep the dryer moving rather than holding it on one section, maintain a few inches of distance from the scalp and strands, and use a moderate heat setting rather than the highest available. Finishing with a cool-shot burst also helps seal the hair's surface and lock in smoothness once styling is complete.",
  },
];

const furtherReading = [
  { href: "/styling-guides/how-to-choose-a-hair-dryer", label: "How to Choose the Right Hair Dryer for Your Hair Type" },
  { href: "/best/best-hot-air-brushes", label: "Best Hot Air Brushes for Salon-Style Blowouts at Home" },
  { href: "/styling-guides/salon-blowout-at-home", label: "How to Get a Salon Blowout at Home" },
];

export const content: ArticleBodyContent = { intro, diagram, buyingGuide, faqs, furtherReading };
