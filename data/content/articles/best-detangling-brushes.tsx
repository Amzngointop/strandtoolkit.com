import type { ArticleBodyContent } from "../types";

const intro = (
  <>
    <p className="mb-4">
      Knots and tangles are not just a styling inconvenience, they are one of the most common ways hair sustains
      mechanical damage. Pulling a standard brush through wet, snarled strands can stretch hair past its elastic
      limit, leading to split ends, breakage, and thinning that looks like loss but is really just hair snapping off
      at the weakest point. A purpose-built detangling brush is engineered to work with hair's natural movement
      instead of against it, using flexible bristles or a specific pin pattern to glide through knots rather than
      rip through them.
    </p>
    <p className="mb-4">
      According to the{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing hair damage
      </a>
      , how hair is brushed matters as much as how often, since repeated tension on the same strands accelerates
      breakage over time. The right detangling brush depends heavily on hair type: straight hair generally tolerates
      firmer bristles, while curly and coily textures need wider spacing and more flexibility to avoid disrupting
      curl pattern. This guide breaks down bristle types, brush shapes, and wet-versus-dry technique so you can match
      a tool to your texture and detangle with far less breakage.
    </p>
  </>
);

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Brush Selection by Hair Type</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-sans text-sm">
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink mb-1">Straight Hair</p>
        <p className="text-body mb-2">
          <span className="text-accent">Bristle type:</span> Firm, closely spaced nylon or boar bristles
        </p>
        <p className="text-body">
          <span className="text-accent">Technique:</span> Brush from root to tip in long, smooth strokes to
          distribute natural oils and maintain shine.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink mb-1">Wavy Hair</p>
        <p className="text-body mb-2">
          <span className="text-accent">Bristle type:</span> Medium-flex bristles with moderate spacing
        </p>
        <p className="text-body">
          <span className="text-accent">Technique:</span> Detangle mid-shaft first, then work down to ends and up
          to roots to avoid flattening wave pattern.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink mb-1">Curly Hair</p>
        <p className="text-body mb-2">
          <span className="text-accent">Bristle type:</span> Wide-set flexible nylon pins or wide-tooth comb
        </p>
        <p className="text-body">
          <span className="text-accent">Technique:</span> Finger-detangle large knots first, then brush gently
          while hair is wet and coated with conditioner.
        </p>
      </div>
      <div className="border border-divider border-l-[3px] border-accent p-4">
        <p className="font-display text-ink mb-1">Coily Hair</p>
        <p className="text-body mb-2">
          <span className="text-accent">Bristle type:</span> Extra-wide flexible loop bristles or seamless comb
        </p>
        <p className="text-body">
          <span className="text-accent">Technique:</span> Section hair into quadrants, detangle ends to roots
          slowly with slip product to minimize tension.
        </p>
      </div>
    </div>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Detangling Brush Buying Guide</h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Bristle Flexibility and Why It Matters</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The single most important feature of a detangling brush is how much its bristles flex under tension. Rigid
      bristles catch on knots and force them tighter as you pull through, which is exactly how breakage happens.
      Flexible bristles, usually made of soft, slightly springy nylon, bend around a tangle instead of locking onto
      it, letting the knot loosen gradually rather than snapping under pressure. This is why most detangling brushes
      look noticeably different from standard paddle brushes: the bristles are often arranged in a flexible base or
      a fanned, cushioned pattern designed to absorb shock as the brush moves through resistance.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Bristle spacing matters just as much as flexibility. Tightly packed bristles work well on fine, straight hair
      that tangles minimally, but they tend to get stuck in denser or curlier textures. Wider spacing allows more
      hair to pass between each bristle at once, which reduces the number of strands caught in any single pass and
      lowers overall tension on the scalp.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: press a few bristles against your palm before buying. If they feel rigid or barely bend, the brush is
        likely better suited to smoothing already-detangled hair than working through knots.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Wet Detangling vs. Dry Detangling</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Hair is generally more elastic when wet, which can make knots easier to loosen, but wet hair is also more
      fragile and prone to stretching past its breaking point if pulled too forcefully. Wet detangling tends to work
      best when paired with a slippery conditioner or detangling spray that helps the brush glide rather than drag.
      Dry detangling, by contrast, is often gentler for very fine or already fragile hair, since there is less risk
      of overstretching, though it can be slower going on textures with significant shrinkage or coil.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Many stylists recommend a hybrid approach: loosening the largest knots with fingers while hair is dry, then
      finishing the process in the shower once conditioner has had time to soften the strands. The{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        National Institute of Environmental Health Sciences' overview of cosmetic and personal care product use
      </a>{" "}
      also notes that how often a product like conditioner is applied can influence both hair manageability and
      scalp condition over time, which is a useful reminder that detangling tools and detangling products work best
      together rather than in isolation.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Brush Shape: Handled vs. Handle-Free</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Handled detangling brushes give more leverage and control, which is useful for longer hair or for anyone
      detangling someone else's hair, such as a parent working through a child's knots. Handle-free, palm-style
      brushes sit flatter against the head and are often preferred for curly and coily textures, since the lower
      profile makes it easier to follow the natural curl pattern without forcing hair into an unnatural direction.
      Some handle-free designs also double as scalp massagers, which can be a pleasant side benefit but should not
      be the deciding factor over bristle quality.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Detangling Thick or Coily Hair Without Breakage</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Thick and coily hair generally has more total knots per section simply because of the density and curl
      pattern involved, which means rushing the process is the most common cause of breakage. Sectioning hair into
      smaller, manageable quadrants before brushing reduces the amount of hair any single stroke has to move
      through, which in turn reduces tension. Starting at the very ends and slowly working upward toward the roots,
      rather than starting at the roots and pulling down, also prevents knots from being pushed into one another and
      compacted into a larger, harder tangle.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: apply a leave-in conditioner or detangling spray directly to knotted sections before brushing. The
        added slip lets bristles pass through coily strands with far less resistance and noticeably less shedding.
      </p>
    </div>
  </div>
);

const faqs = [
  {
    question: "Should I detangle my hair wet or dry?",
    answer:
      "Wet detangling, ideally with conditioner in the hair, generally allows knots to loosen more easily because wet strands have more give. However, wet hair is also more fragile, so a flexible-bristle brush and a gentle hand matter more than ever in the shower. Dry detangling can be a useful first pass for loosening large knots before you add water or product.",
  },
  {
    question: "How often should I detangle my hair?",
    answer:
      "Most hair types benefit from detangling once daily, typically before washing or styling, to prevent small knots from compounding into larger ones. Curly and coily textures may only need detangling on wash days, since daily brushing can disrupt curl definition and create unnecessary frizz.",
  },
  {
    question: "What is the best detangling brush for curly or coily hair?",
    answer:
      "Look for a brush with wide-set, highly flexible bristles or a wide-tooth seamless comb, both of which glide through dense curl patterns without snagging. Avoid tightly packed or rigid bristles, since they tend to catch on coils and pull rather than loosen them.",
  },
  {
    question: "How can I detangle my hair without causing breakage?",
    answer:
      "Work in small sections, start from the ends, and move upward toward the roots rather than brushing straight down from the scalp. Adding a slippery conditioner or detangling spray reduces friction significantly, and choosing a brush with flexible bristles instead of rigid ones lowers the tension placed on each strand.",
  },
  {
    question: "Do I need a detangling product, or is a brush enough?",
    answer:
      "A good brush makes a meaningful difference, but pairing it with a leave-in conditioner, detangling spray, or rinse-out conditioner with slip will reduce friction and breakage far more than a brush alone. This combination matters most for thick, curly, or coily hair, where dry friction between strands is the main cause of stubborn knots.",
  },
  {
    question: "Should kids use a different detangling brush than adults?",
    answer:
      "Children's scalps tend to be more sensitive, so a brush with softer, more flexible bristles and a lighter touch is generally preferable to the firmer designs adults may tolerate well. Handled brushes also give a parent more control when detangling a child's hair from behind, which can make the process faster and less uncomfortable for everyone involved.",
  },
];

const furtherReading = [
  {
    href: "/styling-guides/how-to-detangle-every-hair-type",
    label: "The Complete Guide to Detangling Every Hair Type",
  },
  { href: "/best/best-hair-clippers", label: "Best Hair Clippers for Home Haircuts" },
  { href: "/strand-glossary", label: "Strand Glossary" },
];

export const content: ArticleBodyContent = { intro, diagram, buyingGuide, faqs, furtherReading };
