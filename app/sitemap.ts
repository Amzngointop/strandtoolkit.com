import { MetadataRoute } from "next";
import { site } from "@/data/site";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  const staticPages = [
    "",
    "/styling-guides",
    "/strand-glossary",
    "/our-method",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));

  const articlePages = articles.map((a) => ({ url: `${base}/best/${a.slug}`, lastModified: new Date() }));
  const guidePages = guides.map((g) => ({ url: `${base}/styling-guides/${g.slug}`, lastModified: new Date() }));

  return [...staticPages, ...articlePages, ...guidePages];
}
