export interface StaticPost {
  slug: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  author: string;
  content: string;
}

export const STATIC_POSTS: StaticPost[] = [
  {
    slug: 'how-ai-is-revolutionising-forest-carbon-accounting',
    tag: 'Carbon Markets',
    tagBg: '#EBF7F0',
    tagColor: '#1A7A4A',
    title: 'How AI is Revolutionising Forest Carbon Accounting',
    excerpt: 'Machine learning and satellite imagery are transforming the way we measure and verify carbon sequestration in forests around the world.',
    date: 'April 12, 2025',
    readTime: '5',
    img: 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/height_tree_jpg.jpeg',
    author: 'Mynzo Team',
    content: `
      <h2>The Problem with Traditional Carbon Measurement</h2>
      <p>For decades, measuring how much carbon a forest absorbs has relied on slow, expensive, and often inaccurate field surveys. Teams of researchers would physically walk through forests, measure tree diameters, estimate heights, and use allometric equations to calculate biomass — and therefore carbon storage. This approach works at small scales, but it simply cannot keep up with the global demand for verified carbon credits.</p>
      <p>With billions of tonnes of CO₂ being offset through forest protection and restoration projects, the margin for error is enormous. A 10% inaccuracy in carbon accounting doesn't just mean a financial discrepancy — it means real emissions going unmitigated while companies claim they've achieved net zero.</p>

      <h2>Enter Satellite Intelligence and Machine Learning</h2>
      <p>Modern Earth observation satellites now capture imagery at resolutions below 50 centimetres per pixel, multiple times per day, across every forest on the planet. This data flood — petabytes per day — is impossible for humans to process. But machine learning models thrive on it.</p>
      <p>At Mynzo, we train deep learning models on multi-spectral satellite bands — including near-infrared and shortwave infrared — that reveal forest density, health, and species composition in ways invisible to the naked eye. Combined with LiDAR data for canopy height estimation, these models can predict above-ground biomass with accuracy comparable to field surveys, but across entire landscapes in minutes rather than months.</p>

      <h2>From Pixels to Verified Credits</h2>
      <p>The real breakthrough isn't just measurement — it's continuous monitoring. Traditional carbon projects are verified every 5 years. A lot can change in 5 years: droughts, fires, illegal logging, pest outbreaks. Satellite-based monitoring means we catch changes within weeks, not years.</p>
      <p>This temporal precision matters enormously for credit integrity. When a forest fire destroys 20% of a project area, that reversal buffer needs to be triggered immediately — not discovered at the next verification audit. AI-powered monitoring makes this possible at scale.</p>

      <h2>The Standards Are Catching Up</h2>
      <p>Verification bodies like Verra and Gold Standard are increasingly incorporating remote sensing methodologies into their approved protocols. The IPCC's 2023 guidelines explicitly endorse satellite-based monitoring as a tier 3 approach — the highest accuracy tier — for national greenhouse gas inventories.</p>
      <p>This is a pivotal moment. The convergence of better satellite data, more powerful AI, and evolving standards is making forest carbon accounting more rigorous, more scalable, and ultimately more credible than it has ever been. For buyers of carbon credits, that's the most important development of the decade.</p>
    `,
  },
  {
    slug: 'agroforestry-the-future-of-sustainable-land-use',
    tag: 'Agroforestry',
    tagBg: '#E8F3FA',
    tagColor: '#1A5A7A',
    title: 'Agroforestry: The Future of Sustainable Land Use',
    excerpt: "Blending native trees with crops isn't just good for the planet — it's transforming farmer livelihoods across India's most vulnerable regions.",
    date: 'March 28, 2025',
    readTime: '7',
    img: 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/leaf_tree_jpg.jpeg',
    author: 'Mynzo Team',
    content: `
      <h2>What is Agroforestry?</h2>
      <p>Agroforestry is the intentional integration of trees and shrubs into crop and livestock farming systems. Far from a new idea — it has been practiced across Asia, Africa, and Latin America for millennia — agroforestry is experiencing a renaissance as a nature-based solution to climate change, food security, and rural poverty simultaneously.</p>
      <p>Unlike monoculture farming, which exhausts soil and requires increasing inputs of fertilisers and pesticides, agroforestry systems mimic natural ecosystems. The diversity of root depths, canopy layers, and species creates resilient landscapes that can withstand drought, flood, and temperature extremes that would devastate a conventional crop field.</p>

      <h2>Why India?</h2>
      <p>India has over 100 million smallholder farmers, most of whom farm degraded land with declining yields. Climate variability is intensifying monsoon uncertainty, and groundwater tables are falling in major agricultural states. For millions of farming families, the status quo is not sustainable.</p>
      <p>Agroforestry offers a proven pathway out. Studies in Madhya Pradesh, Rajasthan, and Uttar Pradesh have shown that integrating native tree species like Melia dubia, Bamboo, and Subabul into farmland can increase total farm income by 30–80% over a 5-year period — from fruit, timber, fodder, and carbon credits — while simultaneously reducing input costs as soil health improves.</p>

      <h2>The Carbon Opportunity</h2>
      <p>Agroforestry systems sequester carbon in both above-ground biomass (the trees) and below-ground through improved soil organic carbon. Soil carbon is particularly valuable because it is stable over long time horizons and also improves water retention and fertility — creating a virtuous cycle for farmers.</p>
      <p>For carbon market participation, the challenge has always been measurement. Trees on farmland are dispersed, varied in age, and difficult to survey at scale. This is where satellite monitoring and AI become transformative — enabling per-tree carbon tracking across millions of hectares of fragmented farmland without ever sending a field team.</p>

      <h2>Building Farmer Trust</h2>
      <p>Technology alone won't drive adoption. The most successful agroforestry programmes combine satellite monitoring with community engagement, farmer training, and fair revenue sharing. When a smallholder farmer in Chhattisgarh understands that the trees on their land are generating carbon credits that translate to additional income — and when they receive that income reliably — the programme sustains itself through word of mouth.</p>
      <p>The future of agroforestry in India is not a top-down government programme. It is a market-driven movement where verified carbon finance makes sustainable land use the most economically rational choice for every farmer.</p>
    `,
  },
  {
    slug: 'understanding-soil-carbon-the-hidden-climate-solution',
    tag: 'Soil Science',
    tagBg: '#F5F0FF',
    tagColor: '#5A1A7A',
    title: 'Understanding Soil Carbon: The Hidden Climate Solution',
    excerpt: "Soil holds more carbon than the atmosphere and all plants combined. Here's why measuring it accurately matters most.",
    date: 'March 10, 2025',
    readTime: '6',
    img: 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/tree_trunk_jpg.jpeg',
    author: 'Mynzo Team',
    content: `
      <h2>The World Beneath Our Feet</h2>
      <p>Soil is the planet's largest terrestrial carbon reservoir. Global soils store an estimated 1,500–2,400 gigatonnes of organic carbon — roughly three times the amount in the atmosphere and four times the amount in all living vegetation combined. Yet soil carbon receives a fraction of the attention given to forests in climate policy discussions.</p>
      <p>This is beginning to change. As the scientific community deepens its understanding of soil carbon dynamics, and as measurement technologies improve, soil organic carbon (SOC) is emerging as one of the most promising — and complex — frontiers in carbon markets.</p>

      <h2>How Soil Stores Carbon</h2>
      <p>Plants draw CO₂ from the atmosphere through photosynthesis and convert it to organic matter. When plant material dies and decomposes, a portion of that carbon is incorporated into the soil by microbial activity, where it can persist for decades to millennia depending on soil type, climate, and land management practices.</p>
      <p>Healthy soils with high organic matter content are darker, more crumbly, and more biologically active. They retain water better, require less fertiliser, and support higher crop yields. The relationship between soil health and agricultural productivity is direct — which is why improving SOC is simultaneously a climate intervention and a farming intervention.</p>

      <h2>The Measurement Challenge</h2>
      <p>Unlike above-ground biomass, which can be estimated from satellite imagery of tree canopies, soil carbon is invisible from space. Traditional measurement requires collecting soil cores at multiple depths, drying and grinding samples, and running laboratory analyses — a process that costs hundreds of dollars per hectare and cannot be done at the landscape scale required for carbon markets.</p>
      <p>Several approaches are emerging to address this. Proximal sensing using near-infrared spectroscopy can analyse dozens of samples per hour in the field. Satellite-derived soil reflectance data, combined with machine learning models trained on laboratory reference datasets, can predict SOC across large areas. And emerging environmental DNA techniques can characterise the microbial communities that mediate carbon storage.</p>

      <h2>Why It Matters for Carbon Markets</h2>
      <p>Soil carbon projects face a fundamental credibility challenge: permanence. Unlike a standing forest, which provides a visible, monitorable carbon store, soil carbon can be released rapidly if land management changes. A farmer who switches from regenerative practices back to tillage can lose years of accumulated SOC in a single season.</p>
      <p>Rigorous monitoring, reporting, and verification protocols are essential to ensure that soil carbon credits represent genuine, durable removals. This requires not just accurate baseline measurement, but ongoing monitoring using the same methods — creating a data infrastructure that must be maintained for decades. Getting this right is one of the most important challenges in building a credible voluntary carbon market for the agricultural sector.</p>
    `,
  },
];
