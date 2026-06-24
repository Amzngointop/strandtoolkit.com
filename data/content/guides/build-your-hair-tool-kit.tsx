import type { ReactNode } from "react";
import Link from "next/link";
import type { GuideBodyContent } from "../types";

const sections: { id: string; label: string }[] = [
  { id: "why-build-a-kit", label: "Why Build a Kit Instead of Buying Everything at Once" },
  { id: "starter-kit", label: "The Starter Kit" },
  { id: "everyday-kit", label: "The Everyday Kit" },
  { id: "full-kit", label: "The Full Kit" },
  { id: "maintaining-and-upgrading", label: "Maintaining and Upgrading Your Kit Over Time" },
];

const body: ReactNode = (
  <>
    <h2 className="font-display text-3xl text-ink mt-10 mb-4" id="why-build-a-kit">
      Why Build a Kit Instead of Buying Everything at Once
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Walk into any beauty aisle and the sheer number of hair tools on offer can feel like a dare. Dryers,
      straighteners, curling wands, hot air brushes, diffusers, paddle brushes, detangling combs — the
      temptation is to buy a little of everything in one trip and sort out what actually works later. That
      approach almost always backfires. You end up with drawers full of half-used tools, a few impulse buys
      that never matched your hair type, and no real sense of which categories deserve a genuine investment.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Building a hair tool kit in deliberate tiers solves this. Instead of one chaotic purchase, you spread
      acquisitions across a starter phase, an everyday phase, and a full kit phase — each one responding to
      what you have learned about your hair and your routine since the last round. This is the same logic
      photographers use when assembling camera gear or cooks use when building a knife set: buy the
      fundamentals first, use them long enough to understand your real needs, then fill gaps with intention
      rather than guesswork.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      There is also a practical heat-safety argument for staging your purchases. The
      {" "}
      <a
        href="https://www.aad.org/public/everyday-care/hair-scalp-care/hair/stop-damaging-hair"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        American Academy of Dermatology's guidance on preventing heat and styling damage
      </a>
      {" "}
      emphasizes that the tool matters less than how well you understand your hair's tolerance for heat,
      tension, and frequency of styling. A slower build-out gives you time to learn that tolerance before you
      commit to premium equipment, so the upgrades you eventually make are informed rather than impulsive.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Budget is the other obvious factor, but it is not just about spreading cost over time. It is about not
      locking in a mid-range or premium tool in a category you might abandon in three months because your
      hair length, color treatment, or climate changes. Renters move, hair grows out, color services shift
      texture — a kit built in tiers absorbs those changes far more gracefully than an all-at-once haul.
    </p>

    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Before buying anything, spend a week tracking your actual routine: how many days you wash, how many
        days you apply heat, and which step takes the longest. That single week of observation will tell you
        more about which tier you need than any product review.
      </p>
    </div>

    <h2 className="font-display text-3xl text-ink mt-10 mb-4" id="starter-kit">
      The Starter Kit
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The starter kit exists to cover the absolute basics — the tools you need to leave the house with dry,
      detangled, reasonably styled hair, without overcommitting before you understand your own patterns. This
      tier is ideal for first apartments, first dorm rooms, travel-only setups, or anyone testing whether a
      new texture or length actually needs more than the essentials.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      At minimum, a starter kit needs a reliable dryer, a basic detangling brush, and a heat-protectant
      product to use underneath whatever styling you attempt. Skip multi-attachment dryers and specialty
      brushes for now — a simple, lightweight dryer with two heat settings and a cool-shot button will cover
      almost every basic need. For brushes, a wide-tooth detangler or a flexible-bristle paddle brush handles
      both wet and dry hair without snagging.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      If you want a single styling tool at this stage, choose based on your most common finished look rather
      than buying both a straightener and a curling tool. Straight, sleek styles call for a basic flat iron;
      texture or volume calls for a simple curling wand. Our breakdown of {" "}
      <Link href="/best/best-hair-straighteners" className="underline hover:text-accent">
        the best hair straighteners across price points
      </Link>{" "}
      is a useful starting reference even at this entry tier, since plate material and heat consistency matter
      even on budget tools.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Resist the urge to buy a hot air brush or multi-styler as your very first purchase. These hybrid tools
      are wonderful once you know what you want from a finished style, but they are harder to use well as a
      first tool because they ask you to manage drying and styling simultaneously. Master the basics
      separately first.
    </p>

    <h2 className="font-display text-3xl text-ink mt-10 mb-4" id="everyday-kit">
      The Everyday Kit
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Once you understand your routine — how often you wash, how much heat your hair tolerates, and which
      finished look you reach for most mornings — it is time to build the everyday kit. This is the tier most
      people should aim to live in for the majority of their hair-care life: capable, fairly efficient tools
      that hold up to regular use without the premium price tag of professional-grade equipment.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The everyday tier typically adds a dedicated detangling brush built for your specific texture (curl
      patterns and fine, straight hair need very different bristle setups), a mid-range dryer with a diffuser
      or concentrator attachment, and either a higher-quality straightener or curling iron with adjustable
      heat settings. If you switch between straight and curled looks regularly, this is also the point where
      a hot air styling brush starts to make sense, since it can shave significant time off a routine that
      previously required two separate tools.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Our guide to {" "}
      <Link href="/best/best-detangling-brushes" className="underline hover:text-accent">
        detangling brushes suited to different hair textures
      </Link>{" "}
      is especially useful at this stage, since this is usually the first purchase people make specifically
      for their hair type rather than as a generic placeholder. Pairing the right brush with the right dryer
      attachment also reduces overall heat exposure, because well-detangled hair dries faster and needs less
      direct heat to finish.
    </p>

    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        When upgrading a styling tool at the everyday tier, prioritize adjustable heat settings over any other
        feature. Being able to dial heat down for fine or color-treated hair and up for coarse or resistant
        hair extends the usable life of the tool far more than any attachment bundle.
      </p>
    </div>

    <p className="font-sans text-sm leading-7 text-body mb-4">
      This is also a sensible point to consider material safety in the tools themselves, not just their heat
      output. The {" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        National Institute of Environmental Health Sciences overview of cosmetics and personal care product
        safety
      </a>{" "}
      is a helpful reference when you start reading ingredient lists on heat-protectant sprays and styling
      products you are now using more frequently as part of an established routine.
    </p>

    <h2 className="font-display text-3xl text-ink mt-10 mb-4" id="full-kit">
      The Full Kit
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The full kit is for anyone who styles hair often enough — their own or other people's — that
      versatility and durability outweigh cost sensitivity. This tier suits frequent stylers, anyone managing
      multiple textures in a household, or hobbyists doing friends' and family members' hair regularly enough
      that a single all-purpose tool no longer cuts it.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      At this level, the kit typically includes a high-output dryer with multiple attachments, a precision
      flat iron alongside a separate curling iron or wand (rather than relying on one multi-styler), a
      dedicated hot air brush for quick volumizing days, and a small set of specialty brushes and combs for
      sectioning, backcombing, and finishing work. If clippers or trimmers enter the picture — for fringe
      maintenance, neckline cleanup, or a household that does its own basic cuts — our roundup of {" "}
      <Link href="/best/best-hair-clippers" className="underline hover:text-accent">
        clippers worth keeping on hand
      </Link>{" "}
      is a good companion resource, and our look at {" "}
      <Link href="/best/best-hair-dryers" className="underline hover:text-accent">
        higher-output dryers built for frequent use
      </Link>{" "}
      pairs well with the diffuser and concentrator attachments this tier tends to demand.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      The diagram below summarizes how the three tiers build on each other. Notice that the everyday tier is
      genuinely the recommended landing spot for most people — it is marked accordingly — while the starter
      and full tiers exist to serve people at the edges of the routine spectrum: those just establishing
      habits, and those whose styling demands have grown well past casual.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="border border-divider p-5">
        <h3 className="font-display text-xl text-ink mb-3">Starter</h3>
        <p className="font-sans text-sm text-body mb-2">Recommended tool types:</p>
        <ul className="font-sans text-sm text-body mb-4 list-disc pl-5 space-y-1">
          <li>Basic dryer, two heat settings</li>
          <li>Wide-tooth detangling brush</li>
          <li>One styling tool matched to your most common look</li>
        </ul>
        <p className="font-sans text-sm text-ink">
          Estimated investment range: <span className="font-display">Entry-level</span>
        </p>
      </div>

      <div className="border border-divider border-l-[3px] border-l-accent p-5">
        <h3 className="font-display text-xl text-ink mb-3">Everyday</h3>
        <p className="font-sans text-sm text-body mb-2">Recommended tool types:</p>
        <ul className="font-sans text-sm text-body mb-4 list-disc pl-5 space-y-1">
          <li>Mid-range dryer with diffuser or concentrator</li>
          <li>Texture-specific detangling brush</li>
          <li>Adjustable-heat straightener or curling iron</li>
          <li>Hot air styling brush for quick finishing</li>
        </ul>
        <p className="font-sans text-sm text-ink">
          Estimated investment range: <span className="font-display">Mid-range</span>
        </p>
      </div>

      <div className="border border-divider p-5">
        <h3 className="font-display text-xl text-ink mb-3">Full Kit</h3>
        <p className="font-sans text-sm text-body mb-2">Recommended tool types:</p>
        <ul className="font-sans text-sm text-body mb-4 list-disc pl-5 space-y-1">
          <li>High-output dryer with multiple attachments</li>
          <li>Separate precision flat iron and curling wand</li>
          <li>Dedicated hot air brush</li>
          <li>Specialty brushes, combs, and clippers as needed</li>
        </ul>
        <p className="font-sans text-sm text-ink">
          Estimated investment range: <span className="font-display">Premium</span>
        </p>
      </div>
    </div>

    <h2 className="font-display text-3xl text-ink mt-10 mb-4" id="maintaining-and-upgrading">
      Maintaining and Upgrading Your Kit Over Time
    </h2>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      A tool kit is never really finished. Hair changes with seasons, color services, length, and even stress
      or health, so the kit that served you well last year may need quiet adjustments this year. Building in
      tiers makes those adjustments easy, because you are replacing or adding one category at a time instead
      of re-evaluating everything at once.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Maintenance matters as much as upgrading. Clean dryer filters and vents regularly — lint buildup is one
      of the most common reasons a perfectly good dryer suddenly seems underpowered. Wipe down straightener
      and curling iron plates after each use while they are still slightly warm (never hot) to prevent product
      buildup that can scorch hair on future uses. Replace detangling brushes once bristles bend, soften, or
      lose their spacing, since a worn brush pulls hair rather than gliding through it.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      When you do decide to upgrade a single category, treat it the same way you built the original tier: look
      at what is actually limiting your routine right now, not what looks impressive in a product photo. If
      your everyday-tier straightener leaves flyaways on humid days, the fix might simply be plate material or
      width rather than an entirely new device. If your dryer feels slow, check whether the issue is wattage,
      a clogged filter, or simply that your hair has gotten longer since you bought it.
    </p>

    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Keep a simple running note of what is and is not working in your kit. Even three or four lines jotted
        down after a frustrating styling session will save you from repeating the same impulse purchase
        mistakes when you eventually do upgrade.
      </p>
    </div>

    <p className="font-sans text-sm leading-7 text-body mb-4">
      Finally, remember that a full kit is not the universal goal. Plenty of people are perfectly served by an
      everyday kit indefinitely, and plenty of professionals genuinely need the full tier's range. The point of
      building deliberately, in stages, is that you end up with a kit that matches your actual hair and actual
      routine — not one assembled in a single overwhelmed trip down the beauty aisle.
    </p>
  </>
);

export const content: GuideBodyContent = { body, sections };
