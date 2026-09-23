import { biodiversityMetricsPost } from './biodiversityMetricsPost';
import { agroforestryPost } from './agroforestryPost';
import { restorationMonitoringPost } from './restorationMonitoringPost';

export interface StaticPost {
  slug: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  title: string;
  excerpt: string;
  date: string;
  updatedAt?: string;
  readTime: string;
  img: string;
  author: string;
  content: string;
}

export const STATIC_POSTS: StaticPost[] = [
  restorationMonitoringPost,
  biodiversityMetricsPost,
  {
    slug: 'how-ai-is-revolutionising-forest-carbon-accounting',
    tag: 'Carbon Markets',
    tagBg: '#EBF7F0',
    tagColor: '#1A7A4A',
    title: 'Forest Carbon Accounting: From Field Data to Carbon Estimates',
    excerpt: 'How field plots, satellite observations and biomass models support forest carbon accounting, with clear limits on uncertainty and carbon credit claims.',
    date: 'April 12, 2025',
    updatedAt: '2026-09-13',
    readTime: '7',
    img: '/height_tree_jpg.jpeg',
    author: 'Mynzo Team',
    content: `
      <p>Forest carbon accounting estimates how much carbon a forest holds and how that stock changes over a defined period. Field measurements, satellite observations and models contribute different evidence. A biomass map can support the calculation, but it does not establish how many carbon credits a project can issue.</p>
      <p>This guide follows the measurement workflow, from choosing the accounting boundary to preparing evidence for review. Mynzo provides forest monitoring technology; the methods described here are general guidance, not a statement that a particular Mynzo project meets a crediting standard.</p>

      <nav aria-label="In this guide"><strong>In this guide</strong><ul>
        <li><a href="#carbon-quantities">Biomass, stocks and credits</a></li>
        <li><a href="#accounting-boundary">Define the accounting boundary</a></li>
        <li><a href="#field-reference">Build the field reference</a></li>
        <li><a href="#usable-observations">Check usable observations</a></li>
        <li><a href="#biomass-uncertainty">Estimate biomass and uncertainty</a></li>
        <li><a href="#stock-change">Compare stock changes</a></li>
        <li><a href="#independent-review">Prepare for independent review</a></li>
        <li><a href="#carbon-questions">Common questions</a></li>
      </ul></nav>

      <h2 id="carbon-quantities">Start with four different quantities</h2>
      <ul>
        <li><strong>Biomass:</strong> the mass of living material, usually expressed as dry matter. Above-ground biomass excludes roots and soil.</li>
        <li><strong>Carbon stock:</strong> the carbon held in a specified pool at a particular date, reported in tonnes of carbon.</li>
        <li><strong>Stock change:</strong> the difference between comparable stock estimates, or the balance of gains and losses, over a stated interval.</li>
        <li><strong>Credited removals:</strong> removals that satisfy an applicable crediting methodology and issuance process. They are not the forest's entire existing carbon stock.</li>
      </ul>
      <p>The <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_02_Ch2_Generic.pdf">IPCC's accounting framework</a> distinguishes carbon pools and stock-change methods. <a href="https://verra.org/faq/">Verra's explanation of credit calculation</a> adds a separate project-level question: what reductions or removals are eligible under the chosen methodology? Forest protection can involve avoided emissions; that should not be described as new removal by tree growth.</p>

      <h2 id="accounting-boundary">1. Define the area, period and carbon pools</h2>
      <p>Before selecting imagery, write down the project boundary, reporting dates, land-use history and purpose of the estimate. A landowner's inventory, a national greenhouse gas inventory and a carbon-credit project answer different questions.</p>
      <p>Specify whether the calculation covers above-ground biomass, roots, dead wood, litter or soil. Record exclusions and their justification. A canopy-based estimate should not quietly become a claim about all ecosystem carbon. The <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf">IPCC forest-land chapter</a> treats these pools separately and discusses their different data requirements.</p>
      <p>For a hypothetical mixed-age plantation in India, begin by separating planting cohorts and management areas. For a hypothetical temperate woodland overseas, distinguish relevant species groups and harvest histories. These are planning examples, not Mynzo case studies. In either setting, choose subdivisions that the available measurements can support.</p>

      <h2 id="field-reference">2. Build a field reference that matches the map</h2>
      <p>Field teams record tree dimensions and species within known plots. Allometric equations relate those measurements to biomass. Keep the equation source, plot geometry, coordinates, survey date and measurement procedure with the results so another analyst can reconstruct the estimate.</p>
      <p>The <a href="https://gedi.umd.edu/science/calibration-validation/">GEDI mission's calibration requirements</a> show why matching matters: field plots and lidar observations need compatible locations, areas and dates, together with the equations used to derive plot biomass. A plot surveyed before a harvest cannot validate an image taken afterwards without accounting for that change.</p>
      <p>Ask who selected the plots and which forest conditions they represent. Convenient roadside plots may leave inaccessible areas poorly represented. Separate data used to fit the model from data used to evaluate it, and explain what remains untested.</p>

      <h2 id="usable-observations">3. Check usable observations, not just revisit frequency</h2>
      <p>Sensor specifications set limits. <a href="https://sentiwiki.copernicus.eu/web/s2-mission">Sentinel-2</a>, for example, has bands at 10, 20 and 60 metre resolution and a nominal five-day revisit for its two-satellite configuration. That is not daily, sub-metre observation of every forest. Additional acquisitions vary by location and operational configuration.</p>
      <p>Revisit frequency also differs from usable coverage. Inspect acquisition dates and <a href="https://sentiwiki.copernicus.eu/web/s2-products">cloud and quality masks</a> before comparing optical images. For a hypothetical monsoon-season project, record the last usable observation instead of presenting the latest calendar date as a new measurement.</p>
      <p>Missing data deserves an explicit label. In a <a href="https://forum.earthdata.nasa.gov/viewtopic.php?t=4185">NASA Earthdata Forum discussion</a>, a user asked about white patches in GEDI tracks. The specialist response explains that a gridded cell may lack good-quality observations. Filling a gap with a model produces an estimate; it does not create a new observation.</p>

      <h2 id="biomass-uncertainty">4. Estimate biomass and report uncertainty</h2>
      <p>Machine learning can relate satellite measurements to reference biomass and extend estimates across an area. Evaluate whether the training data represents the project's forest types and biomass range. Ask for errors in the units used by the project, plus the area and conditions over which the evaluation applies.</p>
      <p>Convert dry biomass to carbon using an appropriate, documented carbon fraction. Tonnes of dry biomass, tonnes of carbon and tonnes of carbon dioxide are different quantities. Carry the units through every calculation rather than relabelling a map output.</p>
      <p>Uncertainty needs a definition. <a href="https://gedi.umd.edu/dataproducts/products/">GEDI's product overview</a> distinguishes footprint estimates from mean biomass and uncertainty in one-kilometre cells. A regional uncertainty figure is not automatically valid for a small parcel.</p>
      <p>Request a description of which error sources the reported interval includes. Measurement errors, plot locations, allometric equations and model transfer can each matter. The <a href="https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch02_Generic%20Methods.pdf">2019 IPCC guidance on higher-tier methods</a> addresses model evaluation and uncertainty. Using AI or satellite data alone does not make an estimate Tier 3.</p>

      <h2 id="stock-change">5. Compare like with like over time</h2>
      <p>To estimate stock change, keep the area, pools, units and methods comparable. Document changes to model versions or input data. Otherwise, an apparent increase can reflect a revised method rather than forest growth.</p>
      <p>The <a href="https://www.oregon.gov/odf/forestbenefits/Pages/forest-carbon-accounting.aspx">Oregon Department of Forestry</a> gives a practical example: it cautions against comparing its newer estimates directly with its initial report because the newer calculations use a different system for estimating volume and biomass. Preserve method history alongside the numbers.</p>
      <p>In a hypothetical, simplified example, a pool rising from an estimated 1,000 to 1,080 tonnes of carbon over four years has an estimated gain of 80 tonnes, averaging 20 tonnes a year. That arithmetic describes the chosen pool only. Check uncertainty and other pool changes before interpreting it as atmospheric removal or eligible credits.</p>
      <p>Retain disturbance records alongside estimates. A change alert can direct a field visit, but it does not by itself quantify the carbon released or determine a crediting programme's response.</p>

      <h2 id="independent-review">6. Prepare the evidence for independent review</h2>
      <p>A review package should connect the boundary and dates to source observations, field records, model version, calculations, uncertainty and exclusions. Keep a record of corrections and the person responsible for each decision.</p>
      <p>For crediting, the methodology also governs the baseline, additionality, leakage and reversal risk. Under the VCS programme, an independent validation/verification body assesses the relevant project evidence. Monitoring frequency, reporting periods and verification are separate decisions. Check the current programme and methodology requirements rather than assuming all forest projects are verified every five years.</p>

      <h2 id="carbon-questions">Questions to resolve before commissioning an estimate</h2>
      <h3 id="satellite-and-field-data">Can satellite data replace field measurements?</h3>
      <p>It can extend coverage and help target surveys. A biomass estimate still needs a defensible reference and validation strategy for its intended use. Ask what local evidence exists, what is borrowed from other regions and how that affects uncertainty.</p>
      <h3 id="missing-carbon-observations">Does an empty map cell mean there is no carbon?</h3>
      <p>No. It may mean observations were unavailable or failed quality checks. Reports should distinguish observed zero values, missing observations and modelled values so users do not treat them as interchangeable.</p>
      <p>For the operational side, explore Mynzo's <a href="/platform/forest-monitoring">forest monitoring</a> and <a href="/platform/digital-mrv">digital MRV</a> pages. Bring your boundary, project type, available field data and reporting purpose to the discussion.</p>
      <p><em>Editorial update: 13 September 2026. References were checked for this revision. The IPCC source is the <a href="https://www.ipcc-nggip.iges.or.jp/public/2019rf/index.html">2019 Refinement to the 2006 Guidelines</a>, used alongside the original guidelines.</em></p>
    `,
  },
  agroforestryPost,
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
