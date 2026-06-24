import type { ArticleBodyContent } from "../types";

const intro = (
  <div className="font-sans text-[15px] leading-7 text-body">
    <p className="mb-4">
      A good pair of hair clippers can turn a once-a-month barbershop habit into a five-minute
      task you handle yourself, on your own schedule, in your own bathroom. Whether you're
      maintaining a fade between professional visits, buzzing a child's hair before summer camp,
      or trimming a partner's neckline so it doesn't creep into "overdue haircut" territory,
      the right clipper makes the difference between a clean result and a patchy one.
    </p>
    <p className="mb-4">
      Home clippers generally fall into two camps: corded models built for sustained power, and
      cordless models built for mobility and detail work around ears and hairlines. Motor
      strength, guard quality, and blade sharpness all matter more than flashy marketing, and
      thicker or coarser hair types typically demand a stronger motor to avoid snagging or
      stalling mid-cut.
    </p>
    <p className="mb-4">
      Because clippers involve a motorized blade running close to the scalp, basic care around
      heat and friction is worth keeping in mind, especially for sensitive skin or scalp
      conditions. The{" "}
      <a
        href="https://www.fda.gov/consumers/consumer-updates/hair-dryers-and-curling-irons-use-caution"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        FDA's guidance on safe use of heated and motorized hair tools
      </a>{" "}
      is a useful reference point before introducing any new tool into your routine. Below,
      we break down guard sizing, motor types, and the maintenance habits that keep clippers
      cutting cleanly for years.
    </p>
  </div>
);

const guardData: {
  guard: number;
  mm: number;
  inches: string;
  widthPct: number;
}[] = [
  { guard: 1, mm: 3, inches: "1/8\"", widthPct: 12 },
  { guard: 2, mm: 6, inches: "1/4\"", widthPct: 24 },
  { guard: 3, mm: 10, inches: "3/8\"", widthPct: 36 },
  { guard: 4, mm: 13, inches: "1/2\"", widthPct: 48 },
  { guard: 5, mm: 16, inches: "5/8\"", widthPct: 60 },
  { guard: 6, mm: 19, inches: "3/4\"", widthPct: 72 },
  { guard: 7, mm: 22, inches: "7/8\"", widthPct: 86 },
  { guard: 8, mm: 25, inches: "1\"", widthPct: 100 },
];

const diagram = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Guard Size Reference Chart</h2>
    <table className="w-full border border-divider">
      <thead>
        <tr className="border-b border-divider">
          <th className="font-display text-left p-3 text-ink">Guard</th>
          <th className="font-display text-left p-3 text-ink">Length (mm)</th>
          <th className="font-display text-left p-3 text-ink">Length (in)</th>
          <th className="font-display text-left p-3 text-ink">Visual Length</th>
        </tr>
      </thead>
      <tbody>
        {guardData.map((row) => (
          <tr key={row.guard} className="border-b border-divider border-l-[3px] border-accent">
            <td className="font-sans text-sm p-3 text-ink">Guard {row.guard}</td>
            <td className="font-sans text-sm p-3 text-body">{row.mm}mm</td>
            <td className="font-sans text-sm p-3 text-body">{row.inches}</td>
            <td className="p-3">
              <div className="w-full bg-card h-2">
                <div
                  className="h-2 bg-accent"
                  style={{ width: `${row.widthPct}%` }}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="font-sans text-xs text-muted mt-3">
      Guard lengths can vary slightly by brand, so it's worth checking the specific
      manufacturer's chart before committing to a guard size for a precise style.
    </p>
  </div>
);

const buyingGuide = (
  <div>
    <h2 className="font-display text-3xl text-ink mb-6">Hair Clipper Buying Guide</h2>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Corded vs. Cordless Clippers</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Corded clippers plug directly into an outlet and deliver consistent, uninterrupted power
      for as long as you need them, which makes them a popular choice for full head buzzes,
      thick hair, or longer sessions where battery drain could otherwise slow things down. The
      tradeoff is a cord that can get in the way during detail work, especially around the ears
      and the back of the neck where you're maneuvering with a mirror.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Cordless clippers run on rechargeable batteries and offer far more freedom of movement,
      which is helpful for fades, lineups, and any cut that requires tilting your head or working
      at odd angles. Many cordless models lose some power as the battery depletes, so it's worth
      checking the run time and whether the clipper supports a quick top-up charge if you're
      planning a longer session.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        If you're cutting multiple people's hair in one sitting, or tackling especially thick
        or long hair, a corded clipper (or a cordless one with a corded backup mode) tends to
        hold up better than battery power alone.
      </p>
    </div>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Motor Types and Power for Thick Hair</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Clipper motors generally fall into three categories: pivot motors, magnetic motors, and
      rotary motors. Pivot and magnetic motors are common in budget-friendly home clippers and
      handle fine to medium hair well, but they can struggle and stall when pushed through dense,
      coarse, or curly hair. Rotary motors are the workhorses found in many professional-grade
      clippers, offering more torque and a steadier cutting speed under load.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      If your hair (or the hair you're cutting) is thick, wavy, or prone to bunching up in the
      blades, prioritizing motor torque over sheer blade speed will usually give you a smoother,
      less choppy result. Underpowered clippers on thick hair tend to pull and tug rather than
      cut cleanly, which is uncomfortable and can lead to uneven sections.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Guard Systems and Attachments</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Guards (sometimes called combs or attachments) snap onto the clipper blade and determine
      how much hair is left behind after each pass. Most home clipper kits include a range from
      guard 1 through guard 8, covering everything from a close buzz to a longer, blended trim.
      Tapered or fade-specific guards are also common in higher-end kits, letting you blend
      between lengths without switching attachments mid-cut.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      It's worth checking whether guards are made of sturdy plastic or metal-reinforced plastic,
      since lower-quality guards can flex or pop off mid-cut, particularly on thicker hair that
      puts more resistance against the blade. A snug, secure guard fit makes a visible difference
      in how even the final cut looks.
    </p>

    <h3 className="font-display text-xl text-ink mt-6 mb-2">Clipper Maintenance and Blade Care</h3>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Clipper blades dull and corrode faster when hair clippings and oils are left to build up
      between uses. Brushing out loose hair after every session and applying a few drops of
      clipper oil to the blade keeps the motor running smoothly and prevents the pulling
      sensation that comes with a dull or gummed-up blade.
    </p>
    <p className="font-sans text-sm leading-7 text-body mb-4">
      Beyond the blade itself, it's reasonable to think about the broader ingredients and
      materials in grooming tools you use regularly, particularly anything that touches skin or
      scalp for extended periods. Resources like the{" "}
      <a
        href="https://www.niehs.nih.gov/health/topics/agents/cosmetics"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent"
      >
        NIEHS overview of cosmetics and personal care product ingredients
      </a>{" "}
      offer helpful background if you're trying to make more informed choices about the products
      and tools you bring into your routine.
    </p>
    <div className="border-l-[3px] border-accent bg-card p-4 my-6">
      <p className="font-sans text-sm text-ink">
        Store clippers in a dry case away from humidity, and replace blades once they start
        snagging hair instead of slicing through it cleanly, even after oiling and cleaning.
      </p>
    </div>
  </div>
);

const faqs = [
  {
    question: "Should I buy a corded or cordless clipper?",
    answer:
      "Corded clippers offer steady, uninterrupted power that's well-suited to thick hair or long sessions, while cordless models give you more freedom of movement for detail work around the ears and neckline. Many people end up choosing a cordless clipper with a corded backup mode for the best of both.",
  },
  {
    question: "How often should I oil my clipper blades?",
    answer:
      "A light drop of clipper oil before or after each use helps keep the blades gliding smoothly and prevents premature dulling. If you notice the clipper running louder, hotter, or starting to tug at hair, that's usually a sign it's overdue for oiling.",
  },
  {
    question: "What guard size should I use for a buzz cut?",
    answer:
      "A classic close buzz cut typically uses guard sizes 1 or 2, which leave roughly 1/8 to 1/4 inch of hair. For a slightly longer, less severe buzz, guard 3 or 4 is a common middle ground.",
  },
  {
    question: "How long does a cordless clipper battery last?",
    answer:
      "Most cordless clippers run for somewhere between 60 and 120 minutes on a full charge, though thicker hair and higher speed settings can drain the battery faster. It's a good habit to fully charge cordless clippers after each use so they're ready for the next session.",
  },
  {
    question: "Do I need a different clipper for thick or curly hair?",
    answer:
      "Not necessarily a different clipper, but a more powerful one. Thick, coarse, or curly hair benefits from a higher-torque motor, ideally a rotary motor, since weaker motors tend to stall or pull rather than cut through dense sections cleanly.",
  },
  {
    question: "What's the best way to clean clippers after use?",
    answer:
      "Use the small brush that comes with most clipper kits to remove loose hair from the blade and housing after every use, then wipe the blade with a cloth before applying oil. Periodically removing the blade guard for a deeper clean helps prevent buildup that can dull the blades over time.",
  },
];

const furtherReading = [
  { href: "/best/best-detangling-brushes", label: "Best Detangling Brushes for Knot-Free Hair" },
  {
    href: "/styling-guides/build-your-hair-tool-kit",
    label: "How to Build Your At-Home Hair Tool Kit on Any Budget",
  },
  { href: "/our-method", label: "Our Method" },
];

export const content: ArticleBodyContent = {
  intro,
  diagram,
  buyingGuide,
  faqs,
  furtherReading,
};
