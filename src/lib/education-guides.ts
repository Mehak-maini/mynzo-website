type ReadingLink = { title: string; text: string; label: string; href: string };

const NEXT_READING: Record<string, ReadingLink> = {
  'assisted-natural-regeneration': {
    title: 'Turn a recovery decision into a monitoring plan',
    text: 'Record the starting conditions, repeat field observations and the findings that would change your approach.',
    label: 'Use the restoration monitoring plan', href: '/blog/restoration-monitoring-plan',
  },
  'water-conservation-methods': {
    title: 'How does water move through a city?',
    text: 'Explore the connections between rainfall, urban surfaces and blue-green infrastructure.',
    label: 'Read Rethinking Water in Cities', href: '/blog/rethinking-water-in-cities',
  },
  'deforestation-carbon-cycle': {
    title: 'Follow the measurements behind a forest carbon estimate',
    text: 'See how field records, carbon pools and uncertainty shape the calculation.',
    label: 'Read the forest carbon accounting guide', href: '/blog/how-ai-is-revolutionising-forest-carbon-accounting',
  },
  'how-climate-change-affects-animals': {
    title: 'Can animals reach suitable habitat?',
    text: 'Understand how fragmentation affects movement and what evidence a wildlife corridor needs.',
    label: 'Explore habitat fragmentation and corridors', href: '/blog/habitat-fragmentation-wildlife-corridors',
  },
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
    title: 'What connects the habitats within a landscape?',
    text: 'Explore habitat fragmentation, wildlife corridors and the evidence needed to understand movement.',
    label: 'Read the fragmentation guide', href: '/blog/habitat-fragmentation-wildlife-corridors',
  },
  'ecosystem-services-types-examples': {
    title: 'How do restoration projects assess recovery?',
    text: 'Compare real ecosystem restoration examples and the evidence behind their reported changes.',
    label: 'Explore restoration examples', href: '/blog/what-is-ecosystem-restoration',
  },
  'understanding-soil-carbon-the-hidden-climate-solution': {
    title: 'Choose soil practices for your conditions',
    text: 'Compare residue management, cover crops and organic inputs with their practical limits.',
    label: 'Read the soil management guide', href: '/blog/how-to-increase-organic-carbon-in-soil',
  },
  'what-is-regenerative-agriculture': {
    title: 'Compare tree and crop systems in India',
    text: 'Use regional examples to think through water, crop choice, maintenance and monitoring.',
    label: 'Explore agroforestry in India', href: '/blog/agroforestry-in-india',
  },
  'how-to-increase-organic-carbon-in-soil': {
    title: 'What else should a soil assessment include?',
    text: 'Read physical, chemical and biological indicators alongside your carbon result.',
    label: 'Compare soil health indicators', href: '/blog/soil-health-indicators',
  },
  'urban-rewilding': {
    title: 'Identify the pressures on local biodiversity',
    text: 'Connect the causes of biodiversity loss with observations and practical responses.',
    label: 'Read the biodiversity loss guide', href: '/blog/causes-of-biodiversity-loss',
  },
  'mangroves-in-india': {
    title: 'What should happen before mangrove planting?',
    text: 'Check the causes of degradation, tidal conditions and the evidence needed for restoration.',
    label: 'Read the mangrove restoration guide', href: '/blog/mangrove-restoration',
  },
  'carbon-neutral-vs-net-zero': {
    title: 'How is forest carbon measured?',
    text: 'Follow the steps from field measurements to carbon estimates and learn where crediting adds separate requirements.',
    label: 'Read the forest carbon guide', href: '/blog/how-ai-is-revolutionising-forest-carbon-accounting',
  },
  'what-are-wetlands': {
    title: 'Where do coastal ecosystems store carbon?',
    text: 'Compare mangroves, salt marshes and seagrasses, and separate stored carbon from annual uptake.',
    label: 'Read the blue carbon guide', href: '/blog/what-is-blue-carbon',
  },
  'afforestation-vs-reforestation': {
    title: 'Track what happens after a restoration decision',
    text: 'Move beyond planting counts to survival, condition and recovery over time.',
    label: 'Read the restoration monitoring guide', href: '/blog/restoration-monitoring-plan',
  },
  'agroforestry-in-india': {
    title: 'Plan the records for your chosen system',
    text: 'Connect planting, crop and field observations with the outcomes your project needs to track.',
    label: 'Use the agroforestry measurement checklist', href: '/blog/agroforestry-the-future-of-sustainable-land-use#measure-agroforestry-outcomes',
  },
  'soil-health-indicators': {
    title: 'Read a soil-carbon result with its units',
    text: 'Understand concentration, stock and the sampling assumptions behind comparisons.',
    label: 'Read the soil-carbon guide', href: '/blog/understanding-soil-carbon-the-hidden-climate-solution',
  },
  'mangrove-restoration': {
    title: 'Choose evidence for ecological recovery',
    text: 'Compare habitat, species and condition measurements, then adapt the monitoring brief to your site.',
    label: 'Explore biodiversity measurement methods', href: '/blog/biodiversity-metrics-for-restoration-projects',
  },
  'what-is-blue-carbon': {
    title: 'See what mangrove restoration involves',
    text: 'Follow the decisions about site conditions, local priorities and repeat observations.',
    label: 'Read the mangrove restoration guide', href: '/blog/mangrove-restoration',
  },
  'habitat-fragmentation-wildlife-corridors': {
    title: 'Define what a habitat map needs to show',
    text: 'Agree habitat classes, observation dates and field checks before interpreting connectivity.',
    label: 'Use the habitat mapping guide', href: '/blog/habitat-mapping',
  },
  'causes-of-biodiversity-loss': {
    title: 'Turn a biodiversity question into a survey',
    text: 'Choose measurements that can distinguish a pressure, a response and an ecological change.',
    label: 'Explore biodiversity measurement methods', href: '/blog/biodiversity-metrics-for-restoration-projects',
  },
  'what-is-ecosystem-restoration': {
    title: 'Build a record for the next site visit',
    text: 'Keep baseline observations, repeat measurements and follow-up actions together.',
    label: 'Use the restoration monitoring plan', href: '/blog/restoration-monitoring-plan',
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

export const PRACTICAL_GUIDES = [
  {
    title: 'Map the habitats on a site',
    text: 'Choose map classes, check them in the field and agree what a habitat map needs to show.',
    href: '/blog/habitat-mapping',
  },
  {
    title: 'Plan biodiversity monitoring',
    text: 'Connect forest observations with ecological surveys, responsibilities and repeat measurements.',
    href: '/platform/biodiversity-monitoring',
  },
  {
    title: 'Understand a soil carbon result',
    text: 'Read carbon concentration, soil depth and stock estimates before comparing results over time.',
    href: '/blog/understanding-soil-carbon-the-hidden-climate-solution',
  },
];
