"use client";

import { useEffect, useState } from "react";

export interface JumpItem {
  id: string;
  label: string;
}

export default function ArticleSidebar({ items, label = "Jump To" }: { items: JumpItem[]; label?: string }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <div className="hidden lg:block w-[200px] shrink-0">
        <div className="sticky top-24">
          <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-muted mb-4">{label}</div>
          <nav className="flex flex-col gap-3">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`font-sans text-[13px] pl-3 border-l-2 ${active === item.id ? "border-accent text-accent" : "border-transparent text-body"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="lg:hidden flex gap-4 overflow-x-auto pb-4 mb-6 border-b border-divider">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="font-sans text-xs uppercase tracking-[0.08em] text-body whitespace-nowrap border border-divider px-3 py-1.5">
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
