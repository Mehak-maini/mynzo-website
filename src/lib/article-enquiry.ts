import type { EnquirySource, ProjectFocus } from './enquiry-context';

type ArticleEnquiry = {
  title: string;
  text: string;
  label: string;
  interest: Exclude<ProjectFocus, 'other'>;
  source: EnquirySource;
};

const ARTICLE_ENQUIRIES: Record<string, ArticleEnquiry> = {
  'biodiversity-metrics-for-restoration-projects': {
    title: 'Define your biodiversity monitoring scope',
    text: 'Share your sites, ecological questions and existing field evidence.',
    label: 'Discuss biodiversity monitoring',
    interest: 'biodiversity-monitoring', source: 'biodiversity-guide',
  },
  'restoration-monitoring-plan': {
    title: 'Plan monitoring for your restoration sites',
    text: 'Share your site boundaries, intervention records and the decisions your monitoring needs to support.',
    label: 'Discuss restoration monitoring',
    interest: 'restoration-monitoring', source: 'restoration-guide',
  },
  'agroforestry-the-future-of-sustainable-land-use': {
    title: 'Scope monitoring for your agroforestry project',
    text: 'Tell us about your parcels, planting records, field measurements and reporting needs.',
    label: 'Discuss agroforestry monitoring',
    interest: 'forest-monitoring', source: 'agroforestry-guide',
  },
  'how-ai-is-revolutionising-forest-carbon-accounting': {
    title: 'Define the evidence for your carbon estimate',
    text: 'Share your project boundary, carbon pools, field data and reporting purpose.',
    label: 'Discuss carbon monitoring',
    interest: 'digital-mrv', source: 'forest-carbon-guide',
  },
};

export function articleEnquiry(slug: string) {
  const enquiry = Object.hasOwn(ARTICLE_ENQUIRIES, slug) ? ARTICLE_ENQUIRIES[slug] : undefined;
  if (!enquiry) return {
    title: 'Ready to monitor your forest assets?',
    text: 'Discuss satellite monitoring, field validation and reporting for your project.',
    label: 'Get Started', href: '/get-started',
  };
  return {
    title: enquiry.title, text: enquiry.text, label: enquiry.label,
    href: `/get-started?${new URLSearchParams({ interest: enquiry.interest, source: enquiry.source })}`,
  };
}
