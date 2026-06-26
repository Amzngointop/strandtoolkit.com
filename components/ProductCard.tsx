import Link from "next/link";
import { Product } from "@/data/products";
import { articles } from "@/data/articles";

export default function ProductCard({ product }: { product: Product }) {
  const article = articles.find((a) => a.slug === product.articleSlug);

  return (
    <Link
      href={`/best/${product.articleSlug}`}
      className="flex flex-col group bg-card border border-divider transition-transform duration-200 hover:-translate-y-0.5"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
    >
      <div className="relative w-full h-48 bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", padding: "8px" }}
        />
        <span className="absolute top-3 left-3 bg-accent text-white font-sans text-[10px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1">
          {product.badge}
        </span>
      </div>
      <div className="p-4">
        {article && (
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-catlabel">{article.categoryLabel}</span>
        )}
        <h3 className="font-display text-[17px] font-semibold text-heading leading-[1.35] mt-1 group-hover:text-accent transition-colors">{product.name}</h3>
        <p className="font-sans text-[13px] text-automuted mt-1.5 leading-5">{product.summary}</p>
      </div>
    </Link>
  );
}
