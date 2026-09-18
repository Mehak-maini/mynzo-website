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
  faqs: { question: string; answer: string }[];
  relatedLinks: { href: string; title: string; description: string }[];
  cta: { title: string; text: string; label: string; href?: string };
};
