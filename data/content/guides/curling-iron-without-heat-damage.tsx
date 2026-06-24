import Link from "next/link";
import type { GuideBodyContent } from "../types";

const body = (
  <>
    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="why-curling-irons-cause-damage"
    >
      Why Curling Irons Cause Damage
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Every time a curling iron's barrel makes contact with a strand of hair, it triggers a
      cascade of structural changes inside the hair shaft. Hair is built primarily from
      keratin proteins held together by hydrogen bonds, disulfide bonds, and a moisture
      reservoir trapped within the cortex. Heat above roughly 300°F begins to break down the
      hydrogen bonds that give hair its shape, which is exactly how a curl forms. The problem
      is that the same heat that reshapes those bonds can also scorch the outer cuticle layer,
      the overlapping scale-like structure that protects the inner cortex from moisture loss
      and mechanical stress.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      When the cuticle is repeatedly exposed to high, unprotected heat, the scales lift, crack,
      or shear off entirely. Once that protective barrier is compromised, the cortex
      underneath loses water rapidly, leaving hair porous, dull, and prone to snapping. This is
      the mechanism behind the brittle, straw-like texture many people associate with
      "heat damaged" hair. It is not simply dryness that a conditioner can fix; it is a
      physical alteration of the hair's internal architecture that, in many cases, cannot be
      reversed until the damaged section grows out or is trimmed away.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Damage risk is not distributed evenly across a head of hair. Fine, lightened, or
      chemically treated hair has a thinner cuticle layer and fewer natural lipids, so it
      reaches a damage threshold faster and at lower temperatures than thick, virgin hair.
      Repeated heat exposure also has a cumulative effect: a single pass at a moderate
      temperature might cause negligible harm, but daily styling at the same temperature over
      months can produce the same degradation as a handful of sessions at an extreme setting.
      According to dermatology research summarized by the{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology
      </a>
      , thermal styling tools are one of the most common preventable causes of hair breakage,
      ranking alongside chemical relaxers and aggressive brushing.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Understanding this mechanism reframes the goal of "no heat damage" styling. The aim is
      not to avoid heat altogether but to manage three variables that determine outcome:
      temperature, exposure time, and moisture state of the hair before the tool ever touches
      it. Get those three right and a curling iron can be used regularly without the
      cumulative breakdown described above.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="prep-before-you-curl"
    >
      Prep Before You Curl
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Preparation is where most heat damage is actually prevented or caused, long before the
      iron is switched on. The single most important habit is making sure hair is completely
      dry. Styling damp or even slightly damp hair with a curling iron causes the water trapped
      inside the shaft to heat rapidly and turn to steam, which can blister the cuticle from
      the inside out. This is sometimes called "bubble hair" and it is a form of damage that
      cannot be brushed away or conditioned out. Always finish blow-drying completely, run a
      hand through several sections to check for hidden damp patches near the scalp, and let
      hair cool to room temperature before bringing in a hot tool.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A heat protectant is the second non-negotiable step. These products work through a
      combination of silicones, polymers, and humectants that coat the hair shaft, reduce
      friction against the hot barrel, and slow the rate at which heat transfers into the
      cortex. Look for a lightweight spray or serum formulated specifically for thermal
      styling rather than a generic leave-in conditioner, since true heat protectants are
      tested to a specific temperature threshold, typically up to 450°F. Apply evenly from
      mid-shaft to ends, focusing extra product on the most porous or previously colored
      sections, which absorb and conduct heat differently than virgin hair.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: Comb the heat protectant through with a wide-tooth comb rather than just
        scrunching it in. Even distribution matters more than product quantity — missed
        patches are where breakage tends to start.
      </p>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Section size and tool selection also belong in the prep phase. Thick, hap-hazard
      sections force you to either compensate with higher heat or run the iron over the same
      strands multiple times, both of which increase damage. Take clean, even sections no
      wider than the diameter of the barrel itself. If you are still deciding which iron suits
      your hair type and texture goals, our{" "}
      <Link
        href="/best/best-curling-irons"
        className="underline hover:text-accent"
      >
        guide to the best curling irons
      </Link>{" "}
      breaks down barrel materials, sizes, and how they affect curl longevity and heat
      distribution. Pairing the right iron with a quality blowout also matters: a smooth,
      well-dried base from a good dryer reduces the number of passes needed to set a curl. See
      our{" "}
      <Link href="/best/best-hair-dryers" className="underline hover:text-accent">
        roundup of the best hair dryers
      </Link>{" "}
      if your current dryer is leaving hair only partially dry or overly frizzy before
      styling.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, brush hair thoroughly before curling. Tangles force the iron to grip and pull
      rather than glide, which adds mechanical stress on top of thermal stress. A few extra
      minutes of careful detangling with a wide-tooth comb or boar-bristle brush pays off in
      smoother, more even curls with less friction damage.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="the-5-step-curling-process"
    >
      The 5-Step Curling Process
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Once hair is fully dry, protected, and sectioned, the actual curling motion should
      follow a consistent, low-damage sequence every time. Rushing or skipping steps is what
      typically leads to over-processing a section because the curl did not "take" the first
      time.
    </p>

    <div className="flex flex-col md:flex-row items-center md:items-start justify-between my-8 gap-4">
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-8 h-8 bg-accent text-white font-sans text-sm flex items-center justify-center">
          1
        </div>
        <p className="font-display text-sm text-ink mt-2">Section</p>
      </div>
      <div className="hidden md:block h-px flex-1 bg-divider mt-4" />
      <div className="block md:hidden w-px h-6 bg-divider" />
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-8 h-8 bg-accent text-white font-sans text-sm flex items-center justify-center">
          2
        </div>
        <p className="font-display text-sm text-ink mt-2">Prep</p>
      </div>
      <div className="hidden md:block h-px flex-1 bg-divider mt-4" />
      <div className="block md:hidden w-px h-6 bg-divider" />
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-8 h-8 bg-accent text-white font-sans text-sm flex items-center justify-center">
          3
        </div>
        <p className="font-display text-sm text-ink mt-2">Wrap</p>
      </div>
      <div className="hidden md:block h-px flex-1 bg-divider mt-4" />
      <div className="block md:hidden w-px h-6 bg-divider" />
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-8 h-8 bg-accent text-white font-sans text-sm flex items-center justify-center">
          4
        </div>
        <p className="font-display text-sm text-ink mt-2">Hold</p>
      </div>
      <div className="hidden md:block h-px flex-1 bg-divider mt-4" />
      <div className="block md:hidden w-px h-6 bg-divider" />
      <div className="flex flex-col items-center text-center flex-1">
        <div className="w-8 h-8 bg-accent text-white font-sans text-sm flex items-center justify-center">
          5
        </div>
        <p className="font-display text-sm text-ink mt-2">Release</p>
      </div>
    </div>

    <p className="font-sans text-sm leading-7 text-body mb-4">
      <strong>Section.</strong> Clip away the top two-thirds of hair and work from the
      bottom layer upward. Working in small, even sections — roughly one to one-and-a-half
      inches wide depending on the barrel size — means each piece gets even heat exposure in a
      single pass instead of needing repeated contact to curl unevenly thick chunks.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      <strong>Prep.</strong> Lightly mist or smooth heat protectant over the section
      immediately before clamping it, even if you applied product earlier. Comb the section
      once to remove any tangles or crossed strands, which keeps the heat distribution
      consistent across the whole piece.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      <strong>Wrap.</strong> Open the clamp and place the section between the barrel and clamp
      near the root, leaving an inch or so free at the very top to avoid scalp contact. Wrap
      the hair around the barrel in one smooth, continuous motion rather than feeding it in
      jerky increments, which can create kinks or uneven heat pockets.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      <strong>Hold.</strong> Eight to twelve seconds is sufficient for most hair types at an
      appropriate temperature. Resist the urge to hold longer just because a curl looks loose
      when first released — curls always look looser hot than they will once cooled and set.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      <strong>Release.</strong> Gently slide the barrel out without pulling or pinching the
      curl, then cup it in your palm for a few seconds to let it cool while still coiled. This
      cooling phase is when the hydrogen bonds re-set into the new curved shape — releasing a
      curl too early and letting it dangle while still hot causes it to relax and fall flat
      faster, which tempts people into a second damaging pass.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: If a curl does not hold on the first attempt, do not immediately re-curl the same
        section while it is still warm. Let it cool fully, check your temperature and hold
        time, and adjust before trying again — back-to-back passes on warm hair compound heat
        exposure quickly.
      </p>
    </div>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="choosing-the-right-temperature-for-your-hair"
    >
      Choosing the Right Temperature for Your Hair
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Temperature is the single biggest lever for damage control, and it should be matched to
      hair type rather than set to a tool's maximum out of habit. Fine or thin hair generally
      curls well between 250°F and 300°F. It has a smaller diameter and lower internal density,
      so it accepts and holds a curl shape at lower heat, and pushing it past 300°F sharply
      increases breakage risk without improving hold.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Medium-textured, undamaged hair typically performs well in the 300°F to 350°F range.
      This band offers a reasonable balance between curl longevity and structural safety for
      hair that has not been heavily processed. Thick, coarse, or very curly hair that has been
      chemically straightened or relaxed may need the higher end of that range, up to around
      375°F, simply because the hair shaft is denser and resists reshaping at lower
      temperatures.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Color-treated, bleached, keratin-treated, or otherwise chemically altered hair is the
      exception that should almost always default toward the lower end of whatever range
      applies, regardless of natural thickness. Chemical processing already weakens disulfide
      and hydrogen bonds, so this hair reaches its damage threshold at a lower temperature than
      untreated hair of the same texture. If in doubt, start at 300°F and only increase in
      small increments if the curl genuinely fails to hold after a clean, well-executed
      attempt.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It is worth noting that hold time and pass count matter as much as the number on the
      dial. A lower temperature held for the correct duration, in a single smooth pass, is
      almost always less damaging than a high temperature rushed through multiple passes. The{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        National Institute of Environmental Health Sciences
      </a>{" "}
      notes that cumulative exposure, not just peak intensity, is a meaningful factor in how
      cosmetic tools and products affect hair and skin health over time, which reinforces why
      consistency in technique matters as much as the temperature setting itself.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A practical way to test your setting: curl one section, let it cool fully, then run your
      fingers through it. If it feels brittle, makes an audible crackling sound, or releases a
      faint burnt smell, the temperature is too high for that section regardless of what hair
      type chart says it should be. Hair texture varies even within a single head, so the
      crown might tolerate more heat than fragile, finer hair at the temples or nape.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="aftercare-and-recovery"
    >
      Aftercare and Recovery
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      What happens after the iron is put away matters almost as much as the styling session
      itself. Hair that has just been exposed to heat is temporarily more vulnerable, so
      avoiding additional stress in the hours immediately after styling gives the cuticle a
      chance to settle. This means holding off on tight elastics, aggressive brushing, or
      another round of heat from a flat iron or wand the same day.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A weekly deep conditioning treatment or hair mask focused on replenishing lipids and
      proteins helps offset the gradual moisture loss that comes with regular thermal styling.
      Look for ingredients like hydrolyzed keratin, panthenol, and fatty alcohols, which help
      temporarily smooth the cuticle and reduce the appearance of frizz and split ends between
      treatments. These products will not reverse structural damage that has already occurred,
      but they meaningfully slow further degradation and keep hair looking healthier in the
      interim.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Tip: Sleep on a silk or satin pillowcase after curling. Cotton fibers create friction
        that can cause curls to frizz out faster and gradually roughen the cuticle overnight,
        undoing some of the careful low-heat work from your styling session.
      </p>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Build in regular trims every six to eight weeks if you curl frequently. Split ends do
      not heal and do not stay contained to the very tip of the hair — left untrimmed, a split
      will travel up the shaft over time, especially under additional heat exposure, turning a
      minor cosmetic issue into a more significant breakage problem.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, pay attention to how your hair responds over weeks and months rather than
      judging any single styling session in isolation. Increased shedding, a rough or
      "cottony" texture along the mid-shaft, or curls that no longer hold as well as they used
      to are early signs that cumulative heat exposure is outpacing your hair's recovery
      capacity. When that happens, the right response is usually to lower your styling
      temperature, extend the gap between sessions, or rotate in heatless styling methods for
      a few weeks, rather than reaching for a higher setting to force the same result on hair
      that has already been weakened.
    </p>
  </>
);

const sections = [
  { id: "why-curling-irons-cause-damage", label: "Why Curling Irons Cause Damage" },
  { id: "prep-before-you-curl", label: "Prep Before You Curl" },
  { id: "the-5-step-curling-process", label: "The 5-Step Curling Process" },
  {
    id: "choosing-the-right-temperature-for-your-hair",
    label: "Choosing the Right Temperature for Your Hair",
  },
  { id: "aftercare-and-recovery", label: "Aftercare and Recovery" },
];

export const content: GuideBodyContent = { body, sections };
