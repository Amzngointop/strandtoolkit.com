export interface ArticleConfig {
  slug: string;
  title: string;
  categoryLabel: string;
  excerpt: string;
  readTime: number;
}

export const articles: ArticleConfig[] = [
  {
    slug: "best-hair-dryers",
    title: "Best Hair Dryers for Every Hair Type (2026)",
    categoryLabel: "HAIR DRYERS",
    excerpt: "From ionic travel dryers to high-velocity professional models, here are the seven hair dryers worth your counter space this year.",
    readTime: 11,
  },
  {
    slug: "best-hot-air-brushes",
    title: "Best Hot Air Brushes for Salon-Style Blowouts at Home (2026)",
    categoryLabel: "HOT AIR BRUSHES",
    excerpt: "The one-step tools that turned blow-dry brushing into a single motion — tested against barrel size, heat control, and everyday usability.",
    readTime: 11,
  },
  {
    slug: "best-hair-straighteners",
    title: "Best Hair Straighteners & Flat Irons for Frizz-Free Results (2026)",
    categoryLabel: "HAIR STRAIGHTENERS",
    excerpt: "Ceramic, titanium, and steam flat irons compared on plate quality, heat consistency, and how well they hold up against humidity.",
    readTime: 12,
  },
  {
    slug: "best-curling-irons",
    title: "Best Curling Irons & Wands for Every Curl Type (2026)",
    categoryLabel: "CURLING IRONS",
    excerpt: "From auto-rotating wands to gold-plated barrels, the curling irons that consistently produce curls worth the time investment.",
    readTime: 11,
  },
  {
    slug: "best-hair-clippers",
    title: "Best Hair Clippers for Home Haircuts (2026)",
    categoryLabel: "HAIR CLIPPERS",
    excerpt: "Cordless, corded, and all-in-one trimming kits ranked on motor power, guard systems, and how forgiving they are for beginners.",
    readTime: 10,
  },
  {
    slug: "best-detangling-brushes",
    title: "Best Detangling Brushes for Knot-Free Hair (2026)",
    categoryLabel: "DETANGLING BRUSHES",
    excerpt: "Flexible-bristle detanglers compared across hair thickness, scalp sensitivity, and how gently each one handles real knots.",
    readTime: 10,
  },
];

export function getArticleBySlug(slug: string): ArticleConfig | undefined {
  return articles.find((a) => a.slug === slug);
}
