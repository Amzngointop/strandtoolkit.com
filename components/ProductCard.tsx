import { Product } from "@/data/products";
import CTAButton from "./CTAButton";
import { articles } from "@/data/articles";

export default function ProductCard({ product }: { product: Product }) {
  const article = articles.find((a) => a.slug === product.articleSlug);

  return (
    <div className="flex flex-col">
      {article && (
        <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-accent mb-2">{article.categoryLabel}</span>
      )}
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "contain",
          backgroundColor: "#E5E1DB",
          padding: "16px",
          display: "block",
        }}
      />
      <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted mt-3">{product.badge}</span>
      <h3 className="font-display text-lg text-ink mt-1">{product.name}</h3>
      <p className="font-sans text-sm text-body mt-1 mb-4 leading-6">{product.summary}</p>
      <CTAButton href={product.affiliateUrl} variant="primary" external className="mt-auto w-fit">
        View on Amazon →
      </CTAButton>
    </div>
  );
}
