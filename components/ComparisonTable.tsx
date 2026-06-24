import { Product } from "@/data/products";
import CTAButton from "./CTAButton";

export default function ComparisonTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto my-8 border border-divider">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-divider">
            {["Product", "Best For", "Key Feature", "Top Con", "Link"].map((h) => (
              <th key={h} className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted px-4 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b border-divider last:border-b-0">
              <td className="px-4 py-3 font-display text-base text-ink">{p.name}</td>
              <td className="px-4 py-3 font-sans text-sm text-body">{p.bestFor.split(".")[0]}</td>
              <td className="px-4 py-3 font-sans text-sm text-body">{p.pros[0]}</td>
              <td className="px-4 py-3 font-sans text-sm text-body">{p.cons[0]}</td>
              <td className="px-4 py-3">
                <CTAButton href={p.affiliateUrl} variant="primary" external>
                  View →
                </CTAButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
