import Link from "next/link";
import type { GuideBodyContent } from "../types";

const body = (
  <>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Knots are not a personal failing. They are a predictable outcome of hair
      geometry, and once you understand why your particular strands tangle
      the way they do, detangling stops feeling like damage control and
      starts feeling like routine maintenance. This guide breaks down the
      mechanics of tangling by hair type, walks through wet-versus-dry
      detangling logic, and gives you a tool-by-tool, type-by-type method so
      you can stop ripping through knots and start working with your hair's
      actual structure. By the end, you should be able to look at your own
      hair, identify why it tangles the way it does, and choose a routine
      that fits its texture instead of reaching for whatever happens to be in
      the shower caddy.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="why-hair-types-knot-differently"
    >
      Why Hair Types Knot Differently
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Every strand of hair is covered in a cuticle layer made of overlapping
      scales, similar in concept to roof shingles. On straight hair, those
      scales lie flat and face mostly in one direction, so adjacent strands
      slide past each other with minimal friction. That is why straight hair
      tends to tangle the least and, when it does knot, the knots are usually
      small and isolated near the ends.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Wavy and curly hair introduce bends into the hair shaft. Each bend is a
      point where the cuticle scales angle outward slightly, creating more
      surface area for neighboring strands to catch on. Curl patterns also
      mean that individual strands cross over one another repeatedly along
      their length rather than running parallel, which is why curls can form
      multi-strand knots that look more like small braids than simple snags.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Coily and highly textured hair has the tightest bend radius of any hair
      type, often with multiple changes of direction within a single
      centimeter of strand. This creates the most opportunities for strands
      to interlock, and it also means coily hair is naturally lower in
      density of moisture retention at the cuticle surface, making it more
      prone to friction-based breakage during detangling if the wrong
      technique is used. The{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing hair damage
      </a>{" "}
      notes that mechanical stress from brushing and combing is one of the
      most common preventable causes of breakage across all hair types, not
      just curly or coily textures.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Porosity matters too. High-porosity hair, where the cuticle scales sit
      more open than usual, tends to absorb product quickly but also tangles
      more because the raised scales catch on neighboring strands. Low
      porosity hair, with tightly closed scales, resists product absorption
      but often tangles less for the same reason it resists moisture: there
      is less surface texture for strands to grip onto. Knowing your
      porosity, in addition to your curl pattern, helps explain why two
      people with similar-looking curls can have very different detangling
      experiences.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Density and hair diameter add a final layer to the picture. Someone
      with fine, low-density straight hair can usually run a brush through
      their entire head in under a minute because there are simply fewer
      strands to cross paths. Someone with thick, high-density curly or
      coily hair has exponentially more contact points between strands, so
      even a careful technique takes longer purely because of volume.
      Knowing whether your particular challenge comes from curl pattern,
      porosity, density, or some combination of the three helps you set
      realistic expectations and avoid blaming a technique that is actually
      working fine for your hair type.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="wet-vs-dry-detangling"
    >
      Wet vs. Dry Detangling
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The wet-versus-dry debate is really a question of which hair type you
      have and what state your hair is in when the tangling happens. Wet hair
      is more elastic and the cuticle is typically raised from water exposure,
      which means strands can stretch further before breaking, but they can
      also sustain more damage per pull because the hair shaft is weaker when
      saturated. Dry hair has less stretch but the cuticle lies flatter,
      meaning less inter-strand friction in some cases.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      For straight and wavy hair, dry detangling with a brush before
      shampooing can remove the bulk of loose tangles without the added
      vulnerability of wet hair. A quick pass with a paddle or detangling
      brush prior to a wash day reduces the amount of pulling needed once
      conditioner is in.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Curly and coily hair generally fare better with wet, conditioner-slicked
      detangling. The added slip from a rinse-out or leave-in conditioner
      reduces the friction between strands enough that a wide-tooth comb or
      fingers can work through knots without snapping the hair. Detangling in
      the shower, under running conditioner, is a common technique because
      the water helps float debris and loosened shed hairs out of the strand
      bundle as you work.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: Always detangle before you shampoo, not after. Shampoo strips
        the slip that conditioner provides, so hair tangles more easily right
        after a shampoo rinse. Work out knots first, then cleanse, then apply
        conditioner and do a final, lighter detangling pass.
      </p>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Regardless of hair type, the safest universal rule is to start
      detangling at the ends and work upward toward the scalp in small
      sections. Trying to pull a comb from root to tip in one motion forces
      every knot in the hair's path to compress into a single tangle at the
      bottom, which is exactly how small knots become matted sections.
      Sectioning hair into four to eight parts before you start, and clipping
      the rest out of the way, keeps the job manageable and prevents you from
      losing track of areas you have already cleared.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="detangling-method-by-hair-type"
    >
      Detangling Method by Hair Type
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      There is no single correct detangling tool. The right choice depends on
      how your strands bend, how dense your hair is, and how much slip your
      current product gives you. The breakdown below is a starting point you
      can adjust based on how your hair responds.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-6">
      <div className="border border-divider p-4">
        <h3 className="font-display text-lg text-ink mb-2 border-l-[3px] border-accent pl-2">
          Straight
        </h3>
        <p className="font-sans text-sm leading-6 text-body mb-2">
          Tool: paddle brush or boar-bristle brush.
        </p>
        <p className="font-sans text-sm leading-6 text-body">
          Technique: dry brush from root to tip in long, single strokes once
          loose ends are cleared. Tangles are usually shallow, so minimal
          sectioning is needed. Brush before bed to redistribute scalp oils
          and prevent overnight knotting.
        </p>
      </div>
      <div className="border border-divider p-4">
        <h3 className="font-display text-lg text-ink mb-2 border-l-[3px] border-accent pl-2">
          Wavy
        </h3>
        <p className="font-sans text-sm leading-6 text-body mb-2">
          Tool: wide-tooth comb or flexible detangling brush.
        </p>
        <p className="font-sans text-sm leading-6 text-body">
          Technique: detangle on damp hair with a light leave-in for slip.
          Work in two to four sections, starting at the ends. Avoid dry
          brushing mid-wave, which can disrupt the natural pattern and create
          frizz.
        </p>
      </div>
      <div className="border border-divider p-4">
        <h3 className="font-display text-lg text-ink mb-2 border-l-[3px] border-accent pl-2">
          Curly
        </h3>
        <p className="font-sans text-sm leading-6 text-body mb-2">
          Tool: wide-tooth comb or fingers, used with conditioner.
        </p>
        <p className="font-sans text-sm leading-6 text-body">
          Technique: detangle in the shower under conditioner in four to six
          sections. Finger-detangle first to locate large knots, then follow
          with a comb. Always finish each section before moving to the next
          to avoid re-tangling cleared hair.
        </p>
      </div>
      <div className="border border-divider p-4">
        <h3 className="font-display text-lg text-ink mb-2 border-l-[3px] border-accent pl-2">
          Coily
        </h3>
        <p className="font-sans text-sm leading-6 text-body mb-2">
          Tool: fingers first, then a wide-tooth comb with heavy slip.
        </p>
        <p className="font-sans text-sm leading-6 text-body">
          Technique: saturate sections with conditioner and detangle in six
          to eight small sections, holding hair near the scalp to reduce
          tension. Finger-detangling before combing dramatically reduces
          shed-hair breakage and matting.
        </p>
      </div>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Whatever your hair type, the underlying principle is the same: reduce
      friction, work in manageable sections, and never force a comb or brush
      through resistance. If you feel real resistance, stop, apply more slip
      or conditioner, and try finger-detangling that specific knot before
      reintroducing a tool. For more on how a brush's bristle pattern and
      handle design affect this process, our breakdown of the{" "}
      <Link
        href="/best/best-detangling-brushes"
        className="underline hover:text-accent"
      >
        best detangling brushes
      </Link>{" "}
      compares bristle spacing and flex across hair types.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="tools-that-make-detangling-easier"
    >
      Tools That Make Detangling Easier
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Beyond the comb-versus-brush decision, a handful of supporting tools can
      meaningfully change how much effort detangling takes. A leave-in
      conditioner or detangling spray with slip-enhancing ingredients, such as
      cetrimonium chloride or behentrimonium methosulfate, coats the cuticle
      and lets strands glide past each other instead of catching.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A microfiber towel or cotton t-shirt for drying matters more than people
      expect. Traditional terry cloth towels have a rough, looped texture
      that grabs the cuticle and creates new tangles and frizz while you are
      simply trying to remove water. Switching to a smoother fabric reduces
      the friction introduced before you have even picked up a comb.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Heat tools also play an indirect role. Hair that is dried unevenly or
      with excessive direct heat tends to become more porous and rougher at
      the cuticle over time, which compounds tangling in future wash cycles.
      Choosing a dryer with reliable heat control and a concentrator nozzle
      lets you dry hair smoothly in the direction of the cuticle rather than
      against it. If you are shopping for an upgrade, our guide to the{" "}
      <Link href="/best/best-hair-dryers" className="underline hover:text-accent">
        best hair dryers
      </Link>{" "}
      covers airflow and heat settings relevant to minimizing this kind of
      cumulative damage.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: Keep a travel-size detangling spray in your bag or gym kit. Hair
        that gets tangled mid-day from wind, helmets, or workouts is far
        easier to manage with a quick spritz and finger-comb than waiting
        until it has fully matted by evening.
      </p>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      For anyone managing chemically treated, color-treated, or heat-styled
      hair, it is worth knowing that many detangling and styling products
      contain a range of cosmetic ingredients regulated for safety. The{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        National Institute of Environmental Health Sciences overview of
        cosmetic ingredient safety
      </a>{" "}
      is a useful reference if you want to understand how ingredients in
      leave-ins, detanglers, and styling sprays are evaluated before choosing
      a new product line.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, consider satin or silk pillowcases and hair wraps. Cotton
      pillowcases create friction overnight that can undo an evening's
      careful detangling by morning. A smoother sleep surface preserves
      whatever work you put in the night before, which matters most for
      curly and coily hair types that take the longest to detangle in the
      first place.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="common-detangling-mistakes"
    >
      Common Detangling Mistakes
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The single most common mistake is starting at the scalp. Working from
      root to tip pushes every tangle in front of the comb into a growing
      knot at the ends, which is the opposite of what you want. Always begin
      at the very ends, clear a small section completely, then move
      progressively higher.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A second frequent error is detangling with too little product or water.
      Dragging a comb through dry, product-free curls or coils generates far
      more friction than the hair shaft can comfortably tolerate, leading to
      visible breakage and frizz that looks like damage because it is
      damage. If a comb is not moving smoothly, the answer is almost always
      more slip, not more force.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Rushing is another major contributor to hair loss during detangling.
      Trying to finish a full head of curly or coily hair in five minutes
      encourages yanking through resistant spots rather than working them
      loose patiently. Budgeting realistic time, often fifteen to thirty
      minutes for denser textures, changes the entire experience from
      stressful to manageable.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Using the wrong tool for too long is a subtler mistake. A fine-tooth
      comb might work fine on the bottom two inches of straight hair, but
      using it higher up on wavy or curly sections will catch on every bend
      in the strand. Switching to a wider-tooth comb or fingers as you move
      up the head, rather than forcing one tool through the entire length, is
      almost always faster.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, skipping regular trims lets split ends accumulate, and split
      ends are notorious for snagging on neighboring strands and forming the
      seed of larger tangles. Even a small trim every couple of months
      reduces the raw material available for new knots to form, regardless of
      hair type.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It also helps to think about detangling frequency rather than only
      technique. Hair that is detangled once a week under heavy resistance
      sustains far more cumulative stress than hair that is gently
      finger-combed every day or two. Daily light maintenance, even just a
      thirty-second finger pass through the ends after removing a hat or
      helmet, prevents the kind of dense, compacted knots that take real
      effort to undo later. This is especially true for coily and
      tightly curled textures, where a single missed week can mean the
      difference between a five-minute detangling session and a forty-five
      minute one. Setting a small, recurring reminder for a midweek
      finger-detangle session, even outside of wash day, is a low-effort way
      to keep that gap from growing into a larger chore later.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Detangling does not have to be a dreaded part of your routine. Match
      your tool and timing to your hair's actual structure, be patient with
      denser or more textured sections, and protect the progress you make
      with smoother fabrics overnight. Done consistently, detangling becomes
      a quick maintenance habit rather than a recurring battle.
    </p>
  </>
);

const sections = [
  { id: "why-hair-types-knot-differently", label: "Why Hair Types Knot Differently" },
  { id: "wet-vs-dry-detangling", label: "Wet vs. Dry Detangling" },
  { id: "detangling-method-by-hair-type", label: "Detangling Method by Hair Type" },
  { id: "tools-that-make-detangling-easier", label: "Tools That Make Detangling Easier" },
  { id: "common-detangling-mistakes", label: "Common Detangling Mistakes" },
];

export const content: GuideBodyContent = { body, sections };
