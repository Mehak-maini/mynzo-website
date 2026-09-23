import type { ReactNode } from 'react';

export type PlatformPageData = {
  path: string;
  metadataTitle: string;
  description: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  heroImageFit?: 'cover' | 'contain';
  heroAlt: string;
  heroCaption: string;
  updatedAt?: string;
  breadcrumbParent?: { name: string; href: string };
  overview: { title: string; text: string };
  sections: { id: string; title: string; body: ReactNode }[];
  faqs: {
    /** Unique URL slug, without the answer- prefix. Preserve it when editing a published question. */
    id?: string;
    question: string;
    answer: string;
  }[];
  relatedLinks: { href: string; title: string; description: string }[];
  cta: { title: string; text: string; label: string; href?: string };
};
