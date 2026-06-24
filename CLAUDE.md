# CLAUDE.md — StrandToolKit Maintenance Guide

## Stack (do not change)

Next.js `^16.2.0` (App Router), React `^19.0.0`, TypeScript, Tailwind CSS. No WordPress, no CMS, no database, no auth, no backend API routes, no `localStorage`/`sessionStorage` (there is no dark mode toggle on this site). All product/article/guide content lives in `data/` as static TypeScript — this must stay data-driven, not hardcoded into JSX.

Must always work with:
```bash
npm install
npm run build
npm run start
```

## Design System — Byrdie-Inspired Editorial (do not drift from this)

- **Background is `#EDEAE4` everywhere.** No pure white (`#FFFFFF`) sections, ever. Alternating sections use `#E5E1DB` (`bg-card`).
- **Accent color `#9B2D6F`** (`text-accent` / `bg-accent` / `border-accent`) is used sparingly: category labels, active nav/sidebar states, glossary left-borders, callout box borders. Never as a button background.
- **Typography:** `font-display` (DM Serif Display) for all headings/titles/logo. `font-sans` (DM Sans) for everything else. Both loaded via `next/font/google` in `app/layout.tsx` — do not swap fonts.
- **Buttons are flat/square — `border-radius: 0` always.** Never add pill buttons (`rounded-full`, `rounded-lg`, etc.) anywhere on this site. Three variants only, defined in `components/CTAButton.tsx`: `primary` (black fill), `secondary` (outline), `text` (underline link).
- **No `box-shadow` anywhere.** Depth comes from background contrast (`bg-bg` vs `bg-card`) only.
- **Dividers are solid 1px `#D4CFC9`** (`border-divider`). Never dashed.
- **Product images:** always plain `<img>` tags with `objectFit: contain`, `backgroundColor: #E5E1DB`, no border-radius — never `next/image` for Amazon CDN images (`m.media-amazon.com`). `next/image` is fine for local `/public` assets only, and guide cover images (`images.unsplash.com`) use a plain `<img>` with `objectFit: cover` per the pattern in `app/styling-guides/[slug]/page.tsx`.
- Large section titles on the homepage use `clamp(40px, 6vw, 72px)`, uppercase, `letter-spacing: -0.02em` — see the section headers in `app/page.tsx` for the exact pattern to copy.

When in doubt, open `app/page.tsx` or `app/best/[slug]/page.tsx` and copy the existing className patterns rather than inventing new ones.

## Content Rules (enforced sitewide)

- **No prices anywhere**, including in comparison tables and "investment tier" language in guides (use qualitative terms: "entry-level", "mid-range", "premium").
- **No star ratings or fake numeric scores** — the `HeatScoreBar` component (Heat Performance / Build Quality / Value for Money, 0-100) is the one sanctioned scoring UI, and it's editorial, not a review-aggregator score.
- **No "we tested" / "we tried" / "we used" personal-testing claims.** Frame everything as research/analysis/editorial judgment.
- **No Lorem ipsum, ever.**
- Every article needs 2+ outbound links to authoritative sources (AAD, FDA, NIEHS, other .gov/.edu) with descriptive anchor text, not "click here".
- Every page that shows products needs exactly one affiliate disclosure — check you're not duplicating it if you add product cards to an existing page.
- Keep "2026" in article/guide titles and the footer copyright (`data/site.ts` → `year`).

## Adding Products, Articles, and Guides

See [README.md](./README.md) "Editing Content" section for the mechanical steps. The key invariant: **product review sections, HeatScoreBar, pros/cons, and CTA buttons are rendered by the shared page templates** (`app/best/[slug]/page.tsx`) directly from `data/products.ts` — you should never need to hand-write product markup in a content file. Content files (`data/content/articles/*.tsx`, `data/content/guides/*.tsx`) only hold the editorial prose, diagrams, FAQs, and buying-guide sections that aren't already structured data.

Each article needs exactly 7 products with `rank` 1-7 sharing the same `articleSlug`. Rank 1 is pulled into the homepage "Top-Rated" grid via `getTopRatedProducts()` in `data/products.ts` — don't reuse a badge across products in that grid (badges must stay unique).

## Avoiding Build/Deployment Breakage

- **Next 16 dynamic route params are async.** Both `app/best/[slug]/page.tsx` and `app/styling-guides/[slug]/page.tsx` use `params: Promise<{ slug: string }>` and `await params` — copy this pattern for any new dynamic route. Forgetting `await` causes a silent `notFound()` at runtime even though the page builds and the static HTML exists (this bit us once — see the async params fix in both `[slug]/page.tsx` files).
- **Any component using `onSubmit`, `onClick`, or other event handlers must be `"use client"`** and cannot be passed as a prop straight from a Server Component (`app/page.tsx`, `app/contact/page.tsx`). That's why the newsletter form and contact form are split into `components/NewsletterForm.tsx` and `components/ContactForm.tsx`.
- **Stale `next start` processes will serve cached 404s after a rebuild.** If a route 404s in production that built fine, check for a leftover Node process still bound to the port (`netstat -ano | grep <port>`) before debugging the code — kill it and restart `next start` against the fresh `.next` output.
- Always run `npm run build` after any content or component change before considering the change done. Treat any TypeScript error or build warning as something to fix, not ignore.
- `next.config.ts` `remotePatterns` must keep `m.media-amazon.com`, `images.unsplash.com`, and `plus.unsplash.com` — removing any of these breaks image loading even though Amazon images use plain `<img>` (Unsplash guide covers also use plain `<img>`, but keep the patterns in case `next/image` is reintroduced for local assets later).

## Git / Deployment

- `.gitignore` must always contain `.next`, `node_modules`, `ngrok.exe`, `*.node`.
- Never commit secrets or `.env` files.
- Deploy with PM2 + Nginx reverse proxy — see README.md for the exact commands.
