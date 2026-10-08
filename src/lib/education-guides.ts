type ReadingLink = { title: string; text: string; label: string; href: string };

const NEXT_READING: Record<string, ReadingLink> = {
  'miyawaki-forest-method': {
    title: 'What should you measure after planting?',
    text: 'Follow survival, vegetation condition and site pressures over time.',
    label: 'Read the restoration monitoring guide', href: '/blog/restoration-monitoring-plan',
  },
  'what-is-biodiversity': {
    title: 'Turn biodiversity concepts into useful measurements',
    text: 'Learn what different indicators can tell you, and where field evidence matters.',
    label: 'Explore biodiversity metrics', href: '/blog/biodiversity-metrics-for-restoration-projects',
  },
  'biodiversity-hotspots-in-india': {
    title: 'Understand the habitats within a landscape',
    text: 'A regional conservation priority is a starting point. A habitat map answers more local questions.',
    label: 'Read the habitat mapping guide', href: '/blog/habitat-mapping',
  },
  'ecosystem-services-types-examples': {
    title: 'Connect ecosystem services with biodiversity',
    text: 'Explore genetic, species and ecosystem diversity through practical examples.',
    label: 'Learn about biodiversity', href: '/blog/what-is-biodiversity',
  },
  'understanding-soil-carbon-the-hidden-climate-solution': {
    title: 'Choose soil practices for your conditions',
    text: 'Compare residue management, cover crops and organic inputs with their practical limits.',
    label: 'Read the soil management guide', href: '/blog/how-to-increase-organic-carbon-in-soil',
  },
  'what-is-regenerative-agriculture': {
    title: 'How do trees fit into a farm?',
    text: 'Explore agroforestry systems, planning decisions and the evidence needed to assess results.',
    label: 'Read the agroforestry guide', href: '/blog/agroforestry-the-future-of-sustainable-land-use',
  },
  'how-to-increase-organic-carbon-in-soil': {
    title: 'Check what a soil-carbon result actually measures',
    text: 'Understand the difference between carbon concentration, stock and change over time.',
    label: 'Read the soil-carbon explainer', href: '/blog/understanding-soil-carbon-the-hidden-climate-solution',
  },
  'urban-rewilding': {
    title: 'Plan how to track restoration',
    text: 'Set a baseline, choose indicators and compare repeat observations before claiming recovery.',
    label: 'Read the restoration monitoring guide', href: '/blog/restoration-monitoring-plan',
  },
  'mangroves-in-india': {
    title: 'Explore the wider wetland landscape',
    text: 'Understand wetland types, water regimes and why restoration depends on the site.',
    label: 'Read the wetlands guide', href: '/blog/what-are-wetlands',
  },
  'carbon-neutral-vs-net-zero': {
    title: 'How is forest carbon measured?',
    text: 'Follow the steps from field measurements to carbon estimates and learn where crediting adds separate requirements.',
    label: 'Read the forest carbon guide', href: '/blog/how-ai-is-revolutionising-forest-carbon-accounting',
  },
  'what-are-wetlands': {
    title: 'Look closer at India’s mangroves',
    text: 'Explore where mangroves grow, what they provide and what their restoration requires.',
    label: 'Read the mangroves guide', href: '/blog/mangroves-in-india',
  },
  'afforestation-vs-reforestation': {
    title: 'Track what happens after a restoration decision',
    text: 'Move beyond planting counts to survival, condition and recovery over time.',
    label: 'Read the restoration monitoring guide', href: '/blog/restoration-monitoring-plan',
  },
};

export function educationReading(slug: string): ReadingLink | undefined {
  return Object.hasOwn(NEXT_READING, slug) ? NEXT_READING[slug] : undefined;
}

export const EDUCATION_TOPICS = [
  { label: 'Forests and planting', href: '/blog/miyawaki-forest-method' },
  { label: 'Biodiversity', href: '/blog/what-is-biodiversity' },
  { label: 'Soil and farming', href: '/blog/understanding-soil-carbon-the-hidden-climate-solution' },
  { label: 'Urban nature', href: '/blog/urban-rewilding' },
  { label: 'Climate terms', href: '/blog/carbon-neutral-vs-net-zero' },
  { label: 'Wetlands and coasts', href: '/blog/what-are-wetlands' },
];
