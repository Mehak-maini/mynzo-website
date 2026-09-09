import type { MetadataRoute } from 'next';
import { getPublishedPosts } from '@/lib/posts';
import { PUBLIC_PATHS, SITE_URL } from '@/lib/seo';

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Do not publish a partial sitemap on a CMS outage: let regeneration fail
  // so Next can retain the previously generated successful response.
  const posts = await getPublishedPosts();
  return [
    ...PUBLIC_PATHS.map(path => ({ url: `${SITE_URL}${path}` })),
    ...posts.map(post => ({ url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`, ...(post.updatedAt || post.publishedAt ? { lastModified: post.updatedAt || post.publishedAt } : {}) })),
  ];
}
