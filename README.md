# StrandToolKit

Amazon affiliate site for hair care tools & styling devices, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Requirements

- Node.js 18+
- npm

## Install & Run

```bash
npm install
npm run build
npm run start
```

Dev server: `npm run dev`

## Project Structure

```
data/
  site.ts              site config, nav, affiliate tag, categories
  products.ts           all 42 products (id, pricing-free editorial data, affiliate URLs)
  articles.ts            best-pick article configs (title, slug, category)
  guides.ts               styling guide configs (title, slug, cover image)
  content/
    types.ts              shared content type contracts
    articles/<slug>.tsx    per-article intro/diagram/buyingGuide/faqs/furtherReading
    guides/<slug>.tsx      per-guide body/sections
    articleContentMap.ts   slug -> article content lookup
    guideContentMap.ts     slug -> guide content lookup
app/
  page.tsx                          homepage
  best/[slug]/page.tsx              article template (renders data/content/articles/*)
  styling-guides/[slug]/page.tsx    guide template (renders data/content/guides/*)
  strand-glossary, our-method, contact, styling-guides, privacy-policy, terms,
  affiliate-disclosure              static pages
  sitemap.ts, robots.ts, icon.svg   SEO
components/
  Header, Footer, ProductCard, ComparisonTable, FAQ, CTAButton,
  ArticleSidebar, RelatedSidebar, AccordionSection, HairToolFinder, HeatScoreBar
```

## Editing Content

**Add/edit a product:** edit the relevant object in `data/products.ts`. Each product needs `articleSlug`, `rank` (1-7, used for badges/ordering), `affiliateUrl` (already tagged), `imageUrl` (Amazon CDN), pros/cons, `heatScore`/`buildScore`/`valueScore` (0-100, 0 hides that bar in `HeatScoreBar`).

**Add a new article category:**
1. Add an entry to `data/site.ts` categories array and `data/articles.ts`.
2. Add 7 products to `data/products.ts` with the new `articleSlug`.
3. Create `data/content/articles/<new-slug>.tsx` exporting `content: ArticleBodyContent` (see `data/content/types.ts`).
4. Register it in `data/content/articleContentMap.ts`.

**Add a new guide:** same pattern — `data/guides.ts`, `data/content/guides/<slug>.tsx`, register in `data/content/guideContentMap.ts`.

**Change the affiliate tag:** update `affiliateTag` in `data/site.ts` and the `TAG` constant at the top of `data/products.ts`, then re-append `?tag=...` to each `affiliateUrl`.

**Change site email/address:** `data/site.ts`.

## Deployment (VPS + PM2 + Nginx)

```bash
npm install
npm run build
pm2 start npm --name strandtoolkit -- run start
pm2 save
```

Nginx reverse proxy (point to the port Next.js listens on, default 3000):

```nginx
server {
    listen 80;
    server_name strandtoolkit.com www.strandtoolkit.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Add TLS via certbot, then `pm2 startup` to persist across reboots.

## Design System

See [CLAUDE.md](./CLAUDE.md) for the full Byrdie-inspired editorial design system and content rules — read it before making visual changes.
