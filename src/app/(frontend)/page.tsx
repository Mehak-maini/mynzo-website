import HomePageClient from '@/components/HomePageClient';
import JsonLd from '@/components/JsonLd';
import { getPublishedPosts } from '@/lib/posts';
import { pageMetadata, organization, SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo';

export const revalidate = 300;
export const metadata = pageMetadata('/', 'Forest Monitoring & Carbon Intelligence | Mynzo Carbon', SITE_DESCRIPTION);

export default async function HomePage() {
  const posts = await getPublishedPosts();
  const cards = posts.slice(0, 3).map(({ content, ...card }) => card);
  return <>
    <JsonLd data={{ '@context': 'https://schema.org', '@graph': [organization, {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME,
      publisher: { '@id': `${SITE_URL}/#organization` },
    }] }} />
    <HomePageClient homePosts={cards} />
  </>;
}
