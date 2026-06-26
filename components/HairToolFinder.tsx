"use client";

import { useState } from "react";
import Link from "next/link";
import { getProductsByArticle } from "@/data/products";

type HairType = "Straight" | "Wavy" | "Curly" | "Coily";
type Texture = "Fine" | "Medium" | "Thick & Coarse";
type Goal = "Blow-dry Smooth" | "Add Volume" | "Define Curls" | "Straighten" | "Detangle" | "Quick Dry";

interface Result {
  category: string;
  slug: string;
  reason: string;
}

function getResult(hairType: HairType, texture: Texture, goals: Goal[]): Result {
  if (goals.includes("Straighten")) {
    return {
      category: "Hair Straightener",
      slug: "best-hair-straighteners",
      reason: `For ${hairType.toLowerCase()}, ${texture.toLowerCase()} hair aiming to straighten, a flat iron with the right plate material gives you the most reliable, lasting smoothness.`,
    };
  }
  if (goals.includes("Define Curls") || hairType === "Curly") {
    return {
      category: "Hair Dryer with Diffuser",
      slug: "best-hair-dryers",
      reason: `Curly textures hold their shape best when diffused rather than rough-dried — a diffuser attachment cups curls and minimizes frizz while drying.`,
    };
  }
  if (hairType === "Coily" || goals.includes("Detangle")) {
    return {
      category: "Detangling Brush",
      slug: "best-detangling-brushes",
      reason: `Coily and detangle-focused routines need a flexible-bristle brush first — it removes knots gently before any heat tool touches your hair.`,
    };
  }
  if (goals.includes("Quick Dry")) {
    return {
      category: "Hair Dryer",
      slug: "best-hair-dryers",
      reason: `A high-wattage dryer cuts drying time significantly, which matters most when speed is the priority.`,
    };
  }
  if (hairType === "Wavy" || goals.includes("Add Volume")) {
    return {
      category: "Hot Air Brush",
      slug: "best-hot-air-brushes",
      reason: `Wavy hair and volume goals respond well to a hot air brush — it dries, smooths, and lifts roots in a single pass.`,
    };
  }
  if (goals.includes("Blow-dry Smooth")) {
    return {
      category: "Hot Air Brush",
      slug: "best-hot-air-brushes",
      reason: `${texture} ${hairType.toLowerCase()} hair smooths efficiently with a hot air brush, combining drying and styling in one tool.`,
    };
  }
  return {
    category: "Curling Iron",
    slug: "best-curling-irons",
    reason: `Since curls are the goal, a curling iron sized to your preferred curl tightness will give the most predictable results.`,
  };
}

export default function HairToolFinder() {
  const [step, setStep] = useState(0);
  const [hairType, setHairType] = useState<HairType | null>(null);
  const [texture, setTexture] = useState<Texture | null>(null);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const toggleGoal = (goal: Goal) => {
    setGoals((prev) => {
      if (prev.includes(goal)) return prev.filter((g) => g !== goal);
      if (prev.length >= 2) return [prev[1], goal];
      return [...prev, goal];
    });
  };

  const findTool = () => {
    if (!hairType || !texture) return;
    setResult(getResult(hairType, texture, goals));
  };

  const reset = () => {
    setStep(0);
    setHairType(null);
    setTexture(null);
    setGoals([]);
    setResult(null);
  };

  const pillBase = "border border-ink text-ink font-sans text-xs uppercase tracking-[0.08em] px-5 py-3 transition-colors";

  if (result) {
    const recommended = getProductsByArticle(result.slug).slice(0, 2);
    return (
      <div className="max-w-xl mx-auto text-center animate-[fadeIn_400ms_ease]">
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent">Your Recommended Tool</span>
        <h3 className="font-display text-3xl text-heading mt-2 mb-4">{result.category}</h3>
        <p className="font-sans text-sm text-bodytext leading-7 mb-8">{result.reason}</p>
        <div className="grid grid-cols-2 gap-4 mb-8 text-left">
          {recommended.map((p) => (
            <Link key={p.id} href={`/best/${result.slug}#${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="border border-divider p-4">
              <span className="block font-sans text-[10px] uppercase tracking-[0.1em] text-accent mb-1">{p.badge}</span>
              <span className="block font-display text-base text-heading">{p.name}</span>
            </Link>
          ))}
        </div>
        <div className="flex gap-4 justify-center">
          <Link href={`/best/${result.slug}`} className="bg-ink text-bg font-sans text-xs uppercase tracking-[0.08em] px-6 py-3">
            See All Picks →
          </Link>
          <button onClick={reset} className="border border-ink text-ink font-sans text-xs uppercase tracking-[0.08em] px-6 py-3">
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex gap-2 justify-center mb-10">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`w-3 h-3 ${i <= step ? "bg-accent" : "bg-divider"}`} />
        ))}
      </div>

      {step === 0 && (
        <div className="text-center">
          <h3 className="font-display text-2xl text-heading mb-6">What's your hair type?</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {(["Straight", "Wavy", "Curly", "Coily"] as HairType[]).map((t) => (
              <button
                key={t}
                onClick={() => { setHairType(t); setStep(1); }}
                className={pillBase}
                style={hairType === t ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="text-center">
          <h3 className="font-display text-2xl text-heading mb-6">What's your hair texture?</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {(["Fine", "Medium", "Thick & Coarse"] as Texture[]).map((t) => (
              <button
                key={t}
                onClick={() => { setTexture(t); setStep(2); }}
                className={pillBase}
                style={texture === t ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
              >
                {t}
              </button>
            ))}
          </div>
          <button onClick={() => setStep(0)} className="mt-8 font-sans text-xs text-muted underline">← Back</button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center">
          <h3 className="font-display text-2xl text-heading mb-2">What's your styling goal?</h3>
          <p className="font-sans text-xs text-muted mb-6">Choose up to 2</p>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {(["Blow-dry Smooth", "Add Volume", "Define Curls", "Straighten", "Detangle", "Quick Dry"] as Goal[]).map((g) => (
              <button
                key={g}
                onClick={() => toggleGoal(g)}
                className={pillBase}
                style={goals.includes(g) ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
              >
                {g}
              </button>
            ))}
          </div>
          <div className="flex gap-4 justify-center items-center">
            <button onClick={() => setStep(1)} className="font-sans text-xs text-muted underline">← Back</button>
            <button
              onClick={findTool}
              disabled={goals.length === 0}
              className="bg-ink text-bg font-sans text-xs uppercase tracking-[0.08em] px-6 py-3 disabled:opacity-40"
            >
              Find My Tool
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
