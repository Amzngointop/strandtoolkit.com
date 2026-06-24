import Link from "next/link";
import type { GuideBodyContent } from "../types";

const body = (
  <>
    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="why-wattage-matters"
    >
      Why Wattage Matters
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Wattage is the first spec most shoppers see on a hair dryer box, and for
      good reason: it is the clearest indicator of how much heat and airflow
      a motor can generate. A higher-wattage dryer moves more air at a higher
      temperature, which shortens drying time and reduces the amount of
      cumulative heat exposure your strands endure. That matters because heat
      styling damage is cumulative — every pass of hot air weakens the
      hydrogen bonds in the hair shaft a little more, and the longer hair sits
      under heat, the more moisture it loses from the cuticle.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      That said, wattage alone does not tell the whole story. Two dryers with
      identical wattage ratings can feel completely different in hand because
      airflow design, nozzle shape, and heat-distribution technology all
      affect how that power is delivered to your hair. A 1600-watt dryer with
      a well-engineered axial fan can outperform a poorly designed
      1875-watt model. Think of wattage as a baseline capability rather than
      the single deciding factor — it tells you how much energy is available,
      not necessarily how efficiently that energy gets used.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The practical takeaway is that wattage needs to be matched to hair
      density and length, not chased for its own sake. Someone with fine,
      short hair gains little from a high-wattage professional dryer and may
      actually find it harder to control — the airflow can be too aggressive,
      leading to tangling and frizz. Someone with thick, long, or coarse hair,
      on the other hand, will spend considerably more time under the dryer
      with an underpowered unit, which often does more cumulative damage than
      a brief blast from a stronger motor. According to the{" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing hair damage
      </a>
      , minimizing the total duration of heat exposure is one of the most
      effective ways to protect hair health, which is exactly why matching
      dryer power to hair type is worth the extra research before you buy.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Quick gut check: if your current dryer takes more than 10–12 minutes
        to fully dry your hair on a medium heat setting, your wattage is
        likely too low for your hair's density and length, not just your
        technique.
      </p>
    </div>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="ionic-ceramic-tourmaline"
    >
      Ionic, Ceramic &amp; Tourmaline Explained
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Once you move past wattage, the next layer of decision-making involves
      the internal technology that shapes the heat itself. Ceramic dryers use
      a ceramic-coated heating element or barrel that distributes heat more
      evenly than a bare metal coil. Even heat distribution matters because
      hot spots are a major cause of localized damage — a dryer that runs
      75% even and 25% scorching will damage hair faster than one that
      delivers a more moderate, uniform temperature across the entire airflow
      path.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Ionic technology works differently. Ionic dryers emit negative ions
      that, in theory, break down water droplets on the hair shaft into
      smaller particles, allowing them to evaporate faster without forcing
      open the hair cuticle. The practical effect many people notice is
      reduced frizz and a smoother, glossier finish, particularly on hair
      that tends toward static or flyaways. Ionic technology is especially
      useful for fine or color-treated hair, where cuticle disruption shows
      up quickly as dullness or roughness.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Tourmaline is a semi-precious mineral that, when crushed and infused
      into a dryer's internal components, naturally generates negative ions
      when heated — essentially a more efficient, longer-lasting way to
      deliver ionic benefits compared to a separate ion generator chip. Many
      dryers marketed as "ionic ceramic tourmaline" combine all three
      approaches: a ceramic element for even heat, tourmaline infusion for
      sustained ion output, and a dedicated ionic generator for an extra
      boost. None of these technologies replace good wattage — they refine
      how the heat and airflow interact with your hair rather than
      determining how much power is available in the first place.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      For curly, coarse, or chemically treated hair, ceramic and tourmaline
      features tend to matter more than they do for straight, fine hair,
      because textured hair is more porous and prone to frizz from uneven
      heat. If you are shopping in this category, it is worth comparing
      options on a dedicated resource like{" "}
      <Link
        href="/best/best-hair-dryers"
        className="underline hover:text-accent"
      >
        our roundup of the best hair dryers
      </Link>{" "}
      to see how these technologies are implemented across different price
      tiers and brands.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="wattage-vs-hair-type"
    >
      Wattage vs. Hair Type
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The cleanest way to think about wattage is to map it directly against
      hair density, since density (not just length) determines how much
      surface area and water volume the dryer actually has to work through.
      Fine hair has fewer strands per square inch and holds comparatively
      little water, so it dries quickly even at lower wattage. Medium hair
      sits in the middle and tends to be the most forgiving category — most
      mid-range dryers are engineered with this hair type as the default
      target. Thick hair, whether due to high strand density, coarse
      individual strand diameter, or both, retains the most water and
      benefits the most from higher wattage and stronger sustained airflow.
    </p>
    <div className="border border-divider mb-6">
      <div className="grid grid-cols-4">
        <div className="border border-divider p-3 bg-card">
          <p className="font-display text-sm text-ink">Hair Type</p>
        </div>
        <div className="border border-divider p-3 bg-card">
          <p className="font-display text-sm text-ink">1200W</p>
        </div>
        <div className="border border-divider p-3 bg-card">
          <p className="font-display text-sm text-ink">1600W</p>
        </div>
        <div className="border border-divider p-3 bg-card">
          <p className="font-display text-sm text-ink">1875W+</p>
        </div>

        <div className="border border-divider border-l-[3px] border-l-accent p-3">
          <p className="font-display text-sm text-ink">Fine</p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-accent">Ideal fit</p>
          <p className="font-sans text-sm text-muted">
            Gentle, controllable airflow with low frizz risk.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-body">Workable</p>
          <p className="font-sans text-sm text-muted">
            Use a diffuser or lower speed setting to avoid tangling.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-muted">Overkill</p>
          <p className="font-sans text-sm text-muted">
            Risk of over-drying and frizz unless airflow is dialed down.
          </p>
        </div>

        <div className="border border-divider border-l-[3px] border-l-accent p-3">
          <p className="font-display text-sm text-ink">Medium</p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-muted">Slow</p>
          <p className="font-sans text-sm text-muted">
            Drying time runs long; more cumulative heat exposure.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-accent">Ideal fit</p>
          <p className="font-sans text-sm text-muted">
            Balanced speed and control for most everyday routines.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-body">Workable</p>
          <p className="font-sans text-sm text-muted">
            Great for quick blowouts; use a lower heat setting.
          </p>
        </div>

        <div className="border border-divider border-l-[3px] border-l-accent p-3">
          <p className="font-display text-sm text-ink">Thick</p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-muted">Not recommended</p>
          <p className="font-sans text-sm text-muted">
            Extended drying times increase damage risk significantly.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-body">Workable</p>
          <p className="font-sans text-sm text-muted">
            Functional but expect longer sessions than ideal.
          </p>
        </div>
        <div className="border border-divider p-3">
          <p className="font-sans text-sm text-accent">Ideal fit</p>
          <p className="font-sans text-sm text-muted">
            Fast, efficient drying that limits total heat exposure.
          </p>
        </div>
      </div>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Use this grid as a starting point rather than a strict rule. Hair
      porosity, curl pattern, and how often you air-dry partially before
      blow-drying all shift where you land within a tier. Someone with
      medium-density, high-porosity hair may find a 1600-watt dryer dries
      almost as fast as a 1875-watt one, simply because porous hair absorbs
      and releases water more readily. The grid is most useful as a way to
      rule out mismatches — a fine-haired person buying a 1875-watt
      salon-grade dryer, or a thick-haired person relying on a 1200-watt
      travel dryer, are the two combinations most likely to produce a
      frustrating drying experience.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="attachments-you-actually-need"
    >
      Attachments You Actually Need
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Most dryers ship with at least one concentrator nozzle, and that single
      attachment does more for your styling results than almost any other
      feature on the unit. A concentrator narrows and directs airflow into a
      focused stream, which lets you smooth the cuticle in one direction as
      you dry — essential for sleek, frizz-free finishes and for effective
      round-brush blowouts. If you only keep one attachment on hand, it
      should be this one.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A diffuser is the second attachment worth prioritizing, but only if you
      have curly, wavy, or coily hair. Diffusers spread airflow over a wider
      area and slow its velocity, which helps preserve curl clumps and
      texture instead of blowing them apart into frizz. If you have straight
      or fine hair, a diffuser is largely unnecessary and can even work
      against you by distributing too much warm air too broadly, leading to
      flatness rather than volume.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Comb attachments and styling nozzles marketed for volume or root
      lifting can be useful but are far more dependent on technique than the
      concentrator or diffuser. They tend to be the attachments people buy,
      try twice, and then abandon in a drawer. If volume is your main goal,
      a separate hot air styling brush may serve you better than a
      dryer attachment — it is worth comparing the two approaches side by
      side in{" "}
      <Link
        href="/best/best-hot-air-brushes"
        className="underline hover:text-accent"
      >
        our guide to the best hot air brushes
      </Link>{" "}
      before assuming a dryer attachment will get you there.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Cool-shot buttons are a feature rather than a physical attachment, but
      they deserve a mention here because they are frequently underused. A
      blast of cool air at the end of a drying or styling session helps set
      the cuticle in place, locking in shine and shape. The{" "}
      <a
        href="https://www.fda.gov/consumers/consumer-updates/hair-dryers-and-curling-irons-use-caution"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        FDA's consumer guidance on hair dryer and curling iron safety
      </a>{" "}
      is primarily focused on burn and electrical-safety risks, but it is a
      useful reminder that heat-based tools, even when used for styling
      finishing touches like a cool shot, should always be handled according
      to the manufacturer's instructions.
    </p>

    <h2
      className="font-display text-3xl text-ink mt-10 mb-4"
      id="matching-a-dryer-to-your-routine"
    >
      Matching a Dryer to Your Routine
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The right hair dryer is ultimately the one that fits how often, how
      quickly, and under what conditions you actually dry your hair — not
      the one with the most features on the box. If you wash and dry your
      hair daily, prioritize a dryer that minimizes total heat exposure time,
      since the cumulative effect of daily heat styling adds up far faster
      than occasional use. That usually means leaning toward the higher end
      of the wattage range appropriate for your hair type, paired with ionic
      or tourmaline technology to offset some of that heat's drying effect
      on the cuticle.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      If you wash less frequently or rely on second-day styling and
      touch-ups, a more moderate dryer with strong attachment options may
      serve you better than raw power. Travelers and people with limited
      counter or storage space should also weigh portability and dual-voltage
      compatibility, since many high-wattage dryers are heavy and built only
      for a single region's voltage standard — an easy detail to miss until
      you are already on the road.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        If you frequently switch between sleek, smooth styles and looser,
        wavy looks, look for a dryer with at least three heat settings and
        two speed settings rather than just a high/low toggle — the extra
        granularity makes it much easier to adjust drying intensity to the
        style you're going for that day.
      </p>
    </div>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Noise level and weight are two practical factors that rarely show up on
      spec sheets but affect daily satisfaction enormously. A dryer that is
      genuinely powerful but uncomfortably loud or heavy in hand often ends up
      used less carefully than intended, with people rushing through drying
      just to be done with it. Holding a dryer, or at minimum reading
      detailed weight and ergonomics notes from people who have, can save you
      from a purchase that looks great on paper but is unpleasant in
      practice.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, think about longevity. Motors in lower-priced dryers tend to
      wear out faster under frequent daily use, while higher-end motors —
      often AC or brushless DC designs — are built for sustained, repeated
      cycles without the same drop-off in airflow over time. If your routine
      involves daily drying for multiple people in a household, the
      cost-per-use math often favors investing in a more durable motor
      upfront rather than replacing a budget dryer every year or two.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It also helps to think about your routine in terms of seasons rather
      than a single fixed habit. Humidity, indoor heating, and even how much
      time you spend outdoors all change how your hair behaves and how long
      it takes to dry. In drier winter months, hair often dries faster but
      can also become more prone to static and flyaways, which is where
      ionic technology earns its keep. In humid summer months, frizz control
      becomes the priority, and a concentrator nozzle paired with a
      lower, steadier heat setting can do more for your finished look than
      simply cranking up the wattage. Revisiting your settings seasonally,
      rather than defaulting to the same heat and speed combination
      year-round, is a small habit that meaningfully improves results without
      requiring any new equipment.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It is also worth distinguishing between a dryer that is wrong for your
      hair type and a dryer that is simply being used incorrectly. Holding a
      dryer too close to the scalp, using the highest heat setting for the
      entire drying process, or skipping a heat protectant can make even a
      well-matched, appropriately powered dryer feel damaging. Before
      assuming you need to upgrade to a different wattage tier or a different
      technology entirely, it is worth auditing your technique: drying from
      roots to ends in sections, keeping the nozzle a few inches away from
      the hair, and finishing with a cool shot are simple adjustments that
      cost nothing and often solve problems that get blamed on the
      hardware.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Budget is the last practical filter, and it interacts with everything
      above rather than standing apart from it. A higher price tag does not
      automatically mean a better match for your hair — a moderately priced
      dryer with the right wattage and the right attachments for your hair
      type will outperform an expensive model that is mismatched to your
      density or styling habits. Use the wattage-to-hair-type mapping and
      the attachment guidance above as your filter first, and treat price as
      a secondary consideration once you have narrowed down the handful of
      models that actually fit how your hair behaves day to day.
    </p>
  </>
);

const sections = [
  { id: "why-wattage-matters", label: "Why Wattage Matters" },
  { id: "ionic-ceramic-tourmaline", label: "Ionic, Ceramic & Tourmaline Explained" },
  { id: "wattage-vs-hair-type", label: "Wattage vs. Hair Type" },
  { id: "attachments-you-actually-need", label: "Attachments You Actually Need" },
  { id: "matching-a-dryer-to-your-routine", label: "Matching a Dryer to Your Routine" },
];

export const content: GuideBodyContent = { body, sections };
