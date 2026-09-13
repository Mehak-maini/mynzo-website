import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { organization, SITE_URL } from '@/lib/seo';
import type { PlatformPageData } from './PlatformPage.types';
import '@/styles/platform.css';

export default function PlatformPage({ data }: { data: PlatformPageData }) {
  const url = `${SITE_URL}${data.path}`;
  const breadcrumbs = [
    { name: 'Home', item: SITE_URL },
    { name: 'Platform', item: `${SITE_URL}/#platform` },
    { name: data.eyebrow, item: url },
  ];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebPage', '@id': `${url}#webpage`, url,
        name: data.title, description: data.description,
        dateModified: '2026-09-13', inLanguage: 'en',
        publisher: { '@id': `${SITE_URL}/#organization` },
        breadcrumb: { '@id': `${url}#breadcrumbs` },
        mainEntity: { '@id': `${url}#service` },
      },
      {
        '@type': 'Service', '@id': `${url}#service`,
        name: data.title, description: data.summary, url,
        provider: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'BreadcrumbList', '@id': `${url}#breadcrumbs`,
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem', position: index + 1, ...item,
        })),
      },
      {
        '@type': 'FAQPage', '@id': `${url}#questions`,
        mainEntity: data.faqs.map(faq => ({
          '@type': 'Question', name: faq.question,
          acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
      },
    ],
  };

  return (
    <article className="platform-page">
      <JsonLd data={schema} />
      <div className="platform-shell">
        <nav className="platform-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span>
          <Link href="/#platform">Platform</Link><span aria-hidden="true">/</span>
          <span aria-current="page">{data.eyebrow}</span>
        </nav>
        <header className="platform-hero">
          <div className="platform-hero-copy">
            <p className="platform-eyebrow">{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <p className="platform-summary">{data.summary}</p>
            <div className="platform-actions">
              <Link href="/get-started" className="platform-button">{data.cta.label}<span aria-hidden="true">↗</span></Link>
              <a href="#overview" className="platform-text-link">Explore the approach <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <figure className={`platform-hero-figure${data.heroImageFit === 'contain' ? ' platform-hero-figure--interface' : ''}`}>
            <Image src={data.heroImage} alt={data.heroAlt} fill priority sizes="(max-width: 760px) 100vw, 48vw" />
            <figcaption>{data.heroCaption}</figcaption>
          </figure>
        </header>
        <section className="platform-overview" id="overview" aria-labelledby="overview-title">
          <p className="platform-eyebrow">The approach</p>
          <div><h2 id="overview-title">{data.overview.title}</h2><p>{data.overview.text}</p></div>
        </section>
        <div className="platform-reading">
          <aside className="platform-toc">
            <nav aria-label="On this page">
              <p>On this page</p>
              {data.sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
              <a href="#questions">Questions and answers</a>
            </nav>
            <p className="platform-byline">By Mynzo Team<br />Updated <time dateTime="2026-09-13">13 September 2026</time></p>
          </aside>
          <div className="platform-body">
            {data.sections.map((section, index) => (
              <section className="platform-section" key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <span className="platform-section-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h2 id={`${section.id}-title`}>{section.title}</h2>
                <div className="platform-prose">{section.body}</div>
              </section>
            ))}
            <section className="platform-section platform-faq" id="questions" aria-labelledby="questions-title">
              <h2 id="questions-title">Questions and answers</h2>
              {data.faqs.map(faq => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </section>
          </div>
        </div>
        <section className="platform-related" aria-labelledby="related-title">
          <h2 id="related-title">Keep exploring</h2>
          <div>
            {data.relatedLinks.map(link => (
              <Link href={link.href} key={link.href}>
                <h3>{link.title}<span aria-hidden="true">↗</span></h3>
                <p>{link.description}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="platform-final-cta">
          <div><h2>{data.cta.title}</h2><p>{data.cta.text}</p></div>
          <Link href="/get-started" className="platform-button">{data.cta.label}<span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </article>
  );
}
