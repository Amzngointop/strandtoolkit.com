"use client";

import { useState } from "react";

export default function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-ink"
      >
        {title}
        <span className="text-accent text-base leading-none">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="pb-4 font-sans text-sm leading-7 text-body">{children}</div>}
    </div>
  );
}
