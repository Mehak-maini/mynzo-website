import type { Metadata } from 'next';

export const SITE_URL = 'https://www.mynzocarbon.com';
export const SITE_NAME = 'Mynzo Carbon';
export const SITE_DESCRIPTION = 'AI-powered satellite forest monitoring for project developers, corporates and institutions. Explore forest health, carbon tracking and ground-truth validation.';

export function pageMetadata(path: string, title: string, description: string, image?: string): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = [{ url: image || `${SITE_URL}/opengraph-image`, alt: title }];
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: 'website', images },
    twitter: { card: 'summary_large_image', title, description, images },
  };
}

export const PUBLIC_PATHS = ['/', '/platform/forest-monitoring', '/platform/digital-mrv', '/blog', '/get-started', '/privacy-policy', '/terms-of-use', '/data-processing', '/cookie-policy'];

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export const organization = {
  '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME, url: SITE_URL,
  logo: `${SITE_URL}/mynzo_logo.png`,
};
