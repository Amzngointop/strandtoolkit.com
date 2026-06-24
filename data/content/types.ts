import type { ReactNode } from "react";
import type { FAQItem } from "@/components/FAQ";

export interface ArticleBodyContent {
  intro: ReactNode;
  diagram: ReactNode;
  buyingGuide: ReactNode;
  faqs: FAQItem[];
  furtherReading: { href: string; label: string }[];
}

export interface GuideBodyContent {
  body: ReactNode;
  sections: { id: string; label: string }[];
}

export type { FAQItem };
