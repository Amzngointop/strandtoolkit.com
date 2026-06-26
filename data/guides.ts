export interface GuideConfig {
  slug: string;
  title: string;
  categoryLabel: string;
  excerpt: string;
  coverImage: string;
  readTime: number;
}

export const guides: GuideConfig[] = [
  {
    slug: "how-to-choose-a-hair-dryer",
    title: "How to Choose the Right Hair Dryer for Your Hair Type",
    categoryLabel: "BUYING GUIDES",
    excerpt: "Wattage, ion technology, and attachments — what actually matters when you're shopping for a new dryer, and what's marketing noise.",
    coverImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1170&auto=format&fit=crop",
    readTime: 9,
  },
  {
    slug: "curling-iron-without-heat-damage",
    title: "How to Use a Curling Iron Without Heat Damage",
    categoryLabel: "STYLING TECHNIQUE",
    excerpt: "A step-by-step approach to curling hair that protects the cuticle while still producing curls that hold.",
    coverImage: "https://images.unsplash.com/photo-1712641966879-63f3bc1a47e4?q=80&w=1232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 9,
  },
  {
    slug: "how-to-detangle-every-hair-type",
    title: "The Complete Guide to Detangling Every Hair Type",
    categoryLabel: "HAIR CARE",
    excerpt: "Straight, wavy, curly, and coily hair all knot differently — here's how to detangle each one without unnecessary breakage.",
    coverImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1170&auto=format&fit=crop",
    readTime: 9,
  },
  {
    slug: "salon-blowout-at-home",
    title: "How to Get a Salon Blowout at Home (Step-by-Step)",
    categoryLabel: "STYLING TECHNIQUE",
    excerpt: "The section-by-section method stylists use to get smooth, voluminous results — adapted for your own bathroom mirror.",
    coverImage: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1170&auto=format&fit=crop",
    readTime: 10,
  },
  {
    slug: "straightener-vs-hot-air-brush",
    title: "Hair Straightener vs. Hot Air Brush: Which One Do You Need?",
    categoryLabel: "TOOL COMPARISONS",
    excerpt: "Two different tools that solve overlapping problems — here's how to decide which one actually fits your routine.",
    coverImage: "https://images.unsplash.com/photo-1713180760640-c9ff9eb90b2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 8,
  },
  {
    slug: "build-your-hair-tool-kit",
    title: "How to Build Your At-Home Hair Tool Kit on Any Budget",
    categoryLabel: "BUYING GUIDES",
    excerpt: "A tiered approach to building a hair tool collection, whether you're just starting out or ready for a full upgrade.",
    coverImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    readTime: 9,
  },
];

export function getGuideBySlug(slug: string): GuideConfig | undefined {
  return guides.find((g) => g.slug === slug);
}
