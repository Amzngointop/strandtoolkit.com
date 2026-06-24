import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strand Glossary — Hair Tool Terms Explained",
  description: "Every hair tool term explained in plain language, from ionic technology to infrared heat.",
};

const terms = [
  { term: "Ionic Technology", def: "Negative ions emitted during drying break down water molecules faster, cutting drying time and reducing the static and frizz caused by positively charged, dehydrated strands.", href: "/best/best-hair-dryers" },
  { term: "Ceramic Coating", def: "A plate or barrel coating that heats evenly and distributes heat gently across hair, lowering the risk of hot spots that cause localized heat damage during styling.", href: "/best/best-hair-straighteners" },
  { term: "Tourmaline", def: "A semi-precious mineral ground into ceramic coatings to boost negative ion output, typically marketed for extra shine and smoothness on frizz-prone or coarse hair.", href: "/best/best-hair-dryers" },
  { term: "Diffuser", def: "A bowl-shaped dryer attachment with prongs that cups curls during drying, distributing airflow so the natural curl pattern holds instead of being blown straight or frizzy.", href: "/best/best-hair-dryers" },
  { term: "Concentrator Nozzle", def: "A narrow dryer attachment that focuses airflow into a tighter stream, useful for precision smoothing, root-lift styling, and directing heat exactly where it's needed.", href: "/best/best-hair-dryers" },
  { term: "Heat Settings", def: "The discrete temperature levels a tool offers; more settings generally mean better control for matching heat output to hair thickness, texture, and condition.", href: "/best/best-hair-straighteners" },
  { term: "Dual Voltage", def: "A feature that allows a tool to operate safely on both 110V and 220-240V electrical systems, essential for international travel without a voltage converter.", href: "/best/best-hair-straighteners" },
  { term: "Cold Shot", def: "A button that switches a dryer to cool airflow without heat, used to set a curl or smooth section in place after styling by closing the hair cuticle.", href: "/best/best-hair-dryers" },
  { term: "Negative Ion", def: "A charged particle released by ionic tools that neutralizes the positive charge in dry, frizzy hair, helping strands lie smoother and absorb less static electricity.", href: "/best/best-hot-air-brushes" },
  { term: "Barrel Size", def: "The diameter of a curling iron or hot air brush barrel, which directly determines curl tightness or the amount of volume and bend a styling tool can create.", href: "/best/best-curling-irons" },
  { term: "Keratin-Infused", def: "A plate or barrel coating treated with keratin protein, intended to add a light protective and smoothing layer to hair as it passes through the heated surface.", href: "/best/best-hair-straighteners" },
  { term: "Infrared Heat", def: "A heating method that penetrates the hair shaft from within rather than only heating the surface, often associated with gentler, more even heat distribution.", href: "/best/best-curling-irons" },
];

export default function GlossaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="font-display text-4xl md:text-[48px] text-ink leading-[1.1]">Strand Glossary</h1>
      <p className="font-sans text-base text-body mt-4 mb-12">Every hair tool term explained in plain language.</p>

      <div className="flex flex-col">
        {terms.map((t) => (
          <div key={t.term} className="border-t border-divider py-6">
            <h2 className="font-display text-xl text-ink mb-2">{t.term}</h2>
            <p className="font-sans text-sm text-body leading-7 mb-3">{t.def}</p>
            <Link href={t.href} className="font-sans text-[11px] uppercase tracking-[0.1em] text-ink hover:underline">
              Related Reviews →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
