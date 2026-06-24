import Link from "next/link";

export interface RelatedItem {
  href: string;
  category: string;
  title: string;
}

export default function RelatedSidebar({ heading, items }: { heading: string; items: RelatedItem[] }) {
  return (
    <div className="hidden lg:block w-[220px] shrink-0">
      <div className="sticky top-24">
        <div className="font-sans text-[10px] uppercase tracking-[0.14em] text-accent mb-4">{heading}</div>
        <div className="flex flex-col">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block border-b border-divider py-4">
              <span className="block font-sans text-[10px] uppercase tracking-[0.12em] text-accent mb-1">{item.category}</span>
              <span className="block font-sans text-sm text-ink leading-5">{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
