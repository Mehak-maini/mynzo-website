import type { StaticPost } from './blogPosts';

export const educationClimateImpactsPosts: StaticPost[] = [
  {
    slug: 'deforestation-carbon-cycle',
    tag: 'Carbon and Climate', tagBg: '#EBF7F0', tagColor: '#1A7A4A',
    title: 'How Does Deforestation Affect the Carbon Cycle?',
    excerpt: 'Follow what happens to carbon in trees, wood products and soil after forest conversion, and why regrowth takes time to rebuild what was lost.',
    date: 'October 31, 2026', updatedAt: '2026-10-31', readTime: '8',
    img: "/images/education/covers/deforestation-carbon-cycle.webp",
    imgAlt: "NASA satellite image showing branching clearings in the forest of Rondônia, Brazil, on 12 August 2007",
    imgCredit: {"title": "Forest clearings in Rondônia, Brazil, 12 August 2007", "author": "Jesse Allen and Robert Simmon, NASA Earth Observatory", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Fires_and_Deforestation_on_the_Amazon_Frontier,_Rondonia,_Brazil_-_August_12,_2007.jpg", "license": "Public domain (NASA)", "licenseUrl": "https://commons.wikimedia.org/wiki/File:Fires_and_Deforestation_on_the_Amazon_Frontier,_Rondonia,_Brazil_-_August_12,_2007.jpg#Licensing"}, author: 'Mynzo Team',
    content: `
      <p><strong>Deforestation changes the carbon cycle by releasing some carbon stored in vegetation and soil, while changing the land's future uptake of carbon dioxide.</strong> Burning can release carbon quickly. Decomposition and changes in soil can continue afterwards. The amount and timing depend on what was cleared, what happens to the wood and how the land is used next.</p>
      <p>A photograph of cleared land shows a physical change. To understand its carbon consequences, follow the material: which carbon reaches the atmosphere, which remains in products or soil, and what vegetation replaces the forest? This guide explains those pathways before introducing a simple worked example.</p>
      <nav aria-label="In this guide"><strong>In this guide</strong><ul>
        <li><a href="#forest-carbon-cycle">How forests exchange carbon</a></li>
        <li><a href="#after-forest-clearance">What happens after clearance</a></li>
        <li><a href="#carbon-stock-flow-example">A stock-and-flow example</a></li>
        <li><a href="#regrowth-and-recovery">Why regrowth takes time</a></li>
        <li><a href="#reading-carbon-claims">How to read a carbon claim</a></li>
        <li><a href="#deforestation-questions">Common questions</a></li>
      </ul></nav>

      <h2 id="forest-carbon-cycle">How do forests contribute to the carbon cycle?</h2>
      <p>Plants take in carbon dioxide through photosynthesis and use its carbon to build living tissue. Some of that carbon passes into animals, dead material and soil. Plant and microbial respiration return carbon dioxide to the air. <a href="https://www.noaa.gov/education/resource-collections/climate/carbon-cycle">NOAA's carbon-cycle explanation</a> describes these exchanges between the atmosphere, living organisms, soil and other reservoirs.</p>
      <p>A <strong>carbon stock</strong> is an amount held at a particular time. A <strong>carbon flux</strong> is a transfer over a period. A forest can hold a large stock while both absorbing and releasing carbon each year. Whether it is a net sink or source depends on the balance over the area and period being assessed.</p>
      <p>A <a href="https://www.nasa.gov/science-research/earth-science/nasa-satellites-help-quantify-forests-impacts-on-global-carbon-budget/">NASA-supported study reported in 2021</a> mapped forest emissions and removals separately for 2001 to 2019. That distinction is useful even without using its global totals: losses in one place can coexist with uptake elsewhere. A global net sink does not mean every individual forest is gaining carbon.</p>
      <p>Deforestation also needs a definition. The <a href="https://www.fao.org/4/i8661en/i8661en.pdf">FAO's Forest Resources Assessment 2020 definitions</a> distinguish conversion to another land use from temporary tree removal where forest regeneration is expected. Tree-cover loss is an observation; calling it deforestation requires information about land use and subsequent recovery. Temporary disturbance can still affect carbon.</p>

      <h2 id="after-forest-clearance">What happens to carbon after a forest is cleared?</h2>
      <p><a href="https://science.nasa.gov/earth/earth-observatory/the-carbon-cycle/">NASA's carbon-cycle guide</a> explains two linked effects of clearance: carbon can be released from the existing vegetation, and removing that vegetation changes the uptake that follows. Replacement crops or grasses still photosynthesise. The comparison is with the forest and its likely future, not with land that has no biological activity.</p>
      <div class="blog-table-wrap" role="region" aria-label="Carbon pathways following forest clearance" tabindex="0"><table>
        <caption>Different destinations mean different release times</caption>
        <thead><tr><th scope="col">Material or process</th><th scope="col">Possible pathway</th><th scope="col">What changes the outcome?</th></tr></thead>
        <tbody>
          <tr><th scope="row">Vegetation that burns</th><td>Some carbon enters the atmosphere during combustion.</td><td>How much material burns, combustion conditions and the carbon left behind.</td></tr>
          <tr><th scope="row">Roots and woody remains</th><td>Carbon can be released through decomposition or retained in remaining material and soil.</td><td>Moisture, temperature, material properties and later management.</td></tr>
          <tr><th scope="row">Harvested wood</th><td>Carbon leaves the site in products, residues or fuel.</td><td>The product's use, lifetime and eventual disposal or burning.</td></tr>
          <tr><th scope="row">Soil organic matter</th><td>Stocks may change after altered inputs, disturbance or drainage.</td><td>Soil type, depth, water conditions and the replacement land use.</td></tr>
          <tr><th scope="row">Future vegetation growth</th><td>New growth takes up carbon, with a different pattern from the former forest.</td><td>Land use, species, climate, management and continuing disturbance.</td></tr>
        </tbody>
      </table></div>
      <p>The <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf">IPCC forest-land guidance</a> separates biomass, dead organic matter and soil carbon because they respond differently. A canopy map cannot supply all three measurements. For the soil component, our <a href="/blog/understanding-soil-carbon-the-hidden-climate-solution">soil-carbon guide</a> explains why depth and bulk density matter alongside carbon concentration.</p>
      <h3>Wood leaving a forest is not necessarily an immediate emission</h3>
      <p>A beam in a building and wood burned as fuel have different carbon timelines. The <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_12_Ch12_HWP.pdf">IPCC chapter on harvested wood products</a> accounts for carbon retained in products and subsequently released. Moving carbon beyond a mapped forest boundary is therefore different from proving that all of it entered the atmosphere that year.</p>
      <h3>Peat drainage adds a pathway below the trees</h3>
      <p>Where conversion drains organic soils, the soil itself can become a continuing emissions source. The <a href="https://www.ipcc-tfi.iges.or.jp/public/wetlands/pdf/Wetlands_separate_files/WS_Chp2_Drained_Inland_Organic_Soils.pdf">IPCC's drained-organic-soils guidance</a> treats soil emissions, waterborne carbon losses and fires separately. An assessment of a drained peat forest therefore needs water and soil information as well as a vegetation inventory. Its emissions should not be estimated simply by applying a tree-carbon value to the cleared area.</p>

      <h2 id="carbon-stock-flow-example">An example: where did the missing carbon go?</h2>
      <p>Imagine a deliberately simplified forest inventory containing <strong>100 tonnes of carbon in living vegetation</strong>. After clearance, the record allocates that original carbon as follows. These are invented teaching numbers, not typical values per hectare or a Mynzo project result.</p>
      <div class="blog-table-wrap" role="region" aria-label="Hypothetical carbon allocation after clearance" tabindex="0"><table>
        <caption>Illustrative allocation of the original 100 tonnes of carbon</caption>
        <thead><tr><th scope="col">Destination at the chosen date</th><th scope="col">Tonnes of carbon</th></tr></thead>
        <tbody>
          <tr><th scope="row">Released to the atmosphere</th><td>40</td></tr>
          <tr><th scope="row">Retained in harvested wood products</th><td>25</td></tr>
          <tr><th scope="row">Dead roots and other dead material on site</th><td>20</td></tr>
          <tr><th scope="row">Living vegetation still present</th><td>15</td></tr>
          <tr><th scope="row">Total accounted for</th><td>100</td></tr>
        </tbody>
      </table></div>
      <p>The living-vegetation stock fell by 85 tonnes, but the example records only 40 tonnes reaching the atmosphere by that date. The remaining 45 tonnes moved to products or dead material. Calling the entire 85-tonne decline an immediate atmospheric release would confuse a change in one pool with transfers across several pools.</p>
      <p>The example excludes pre-existing soil carbon, new growth and any later decay. A real assessment must account for those processes over a defined period. If new growth adds an illustrative 2 tonnes of carbon in the following year, that is an annual gain. It is not the same quantity as the original 100-tonne stock, and it cannot be subtracted from several years of emissions without matching the periods.</p>

      <h2 id="regrowth-and-recovery">Can reforestation reverse the carbon impact?</h2>
      <p>Regrowing forest can rebuild carbon stocks, but the pace is variable. <a href="https://pubmed.ncbi.nlm.nih.gov/32968258/?dopt=Abstract">Cook-Patton and colleagues' 2020 study</a> compiled field measurements to map potential above-ground carbon accumulation during the first 30 years of natural forest regrowth. Rates differed substantially among locations. The study addresses a specified pool and period; it does not provide one repayment time for every cleared forest.</p>
      <p>For a proposed site, ask what can regrow, what currently prevents it and whether recovery can persist. Land use, recurring disturbance and access to seed sources need attention. Our <a href="/blog/assisted-natural-regeneration">assisted natural regeneration guide</a> considers when supporting existing recovery may be appropriate. A commitment to plant trees is an activity record; repeat measurements are needed to establish what carbon accumulated.</p>
      <p>Carbon recovery also does not answer every ecological question. A site could gain woody biomass while retaining a different species composition or habitat structure. Read the <a href="/blog/what-is-ecosystem-restoration">ecosystem restoration guide</a> for the wider evidence of recovery.</p>

      <h2 id="reading-carbon-claims">Five details a useful carbon claim should include</h2>
      <ol>
        <li><strong>Area and period:</strong> identify the land and the dates being compared.</li>
        <li><strong>Pools:</strong> state whether the claim includes living vegetation, dead material, products and soil.</li>
        <li><strong>Units:</strong> distinguish tonnes of carbon from tonnes of carbon dioxide, and totals from annual rates.</li>
        <li><strong>Evidence:</strong> separate field measurements, satellite observations and modelled estimates.</li>
        <li><strong>Comparison:</strong> explain the assumed land-use alternative and the uncertainty around it.</li>
      </ol>
      <p>Those questions help a reader identify an incomplete claim before debating its headline number. For the measurement workflow, continue to <a href="/blog/how-ai-is-revolutionising-forest-carbon-accounting">forest carbon accounting</a>.</p>

      <h2 id="deforestation-questions">Questions about deforestation and carbon</h2>
      <h3>Does deforestation stop photosynthesis completely?</h3>
      <p>No. Remaining or replacement vegetation can still photosynthesise. Clearance changes the vegetation and its carbon exchanges; the size of that change depends on the land use that follows.</p>
      <h3>Is all carbon released as soon as a tree is cut?</h3>
      <p>No. Some remains in wood, roots, dead material or products. The timing of atmospheric release depends on burning, decomposition and what happens to harvested material.</p>
      <h3>Can a satellite image show the total carbon emitted?</h3>
      <p>An image can help identify vegetation change. Estimating emissions also requires information about carbon pools, material destinations and changes over time. A change map is one input to that calculation.</p>
      <p><em>References checked on 31 October 2026. The numerical example is original and hypothetical; it is not an emissions factor or a carbon-credit calculation.</em></p>
    `,
  },
  {
    slug: 'how-climate-change-affects-animals',
    tag: 'Biodiversity', tagBg: '#EBF7F0', tagColor: '#1A7A4A',
    title: 'How Does Climate Change Affect Animals? Four Examples',
    excerpt: 'Explore animal responses to warming through Himalayan birds, Dutch flycatchers, Australian flying-foxes and corals, with clear limits on each example.',
    date: 'October 31, 2026', updatedAt: '2026-10-31', readTime: '8',
    img: "/images/education/covers/how-climate-change-affects-animals.webp",
    imgAlt: "A male European pied flycatcher perched on a lichen-covered branch in Scotland",
    imgPosition: "65% 0%",
    imgCredit: {"title": "Pied Flycatcher, Ficedula hypoleuca, male (2021)", "author": "caroline legg", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pied_Flycatcher_-_Ficedula_hypoleuca_-_Male_(51221018671).jpg", "license": "CC BY 2.0", "licenseUrl": "https://creativecommons.org/licenses/by/2.0/"}, author: 'Mynzo Team',
    content: `
      <p><strong>Climate change affects animals by changing the conditions they can tolerate, the habitats they can use and the timing of food and breeding.</strong> Some populations shift their range or seasonal behaviour. Others experience poorer survival or reproduction. The response depends on the species, life stage, location and other pressures already present.</p>
      <p>“Animals are moving because it is warmer” is only part of the explanation. An earlier insect season may leave chicks short of food. A suitable temperature higher on a mountain may offer little help if the forest there has been degraded. The studies below show how researchers connect a change in conditions to a biological response.</p>
      <nav aria-label="In this guide"><strong>In this guide</strong><ul>
        <li><a href="#animal-climate-pathways">Four ways animals are affected</a></li>
        <li><a href="#himalayan-birds">India: Himalayan birds and forest condition</a></li>
        <li><a href="#flycatcher-timing">Food and breeding: Dutch flycatchers</a></li>
        <li><a href="#flying-fox-heat">Extreme heat: Australian flying-foxes</a></li>
        <li><a href="#corals-and-warming">Warming water and corals</a></li>
        <li><a href="#animal-observation-record">What to record at a site</a></li>
        <li><a href="#animal-climate-questions">Common questions</a></li>
      </ul></nav>

      <h2 id="animal-climate-pathways">What changes for an animal as the climate changes?</h2>
      <p>The <a href="https://www.ipcc.ch/report/ar6/wg2/chapter/summary-for-policymakers/">IPCC's 2022 impacts assessment</a> documents changes in species distributions, seasonal timing and ecosystems. Its global findings establish the wider pattern. They do not mean that every local change in animal numbers has the same cause.</p>
      <div class="blog-table-wrap" role="region" aria-label="Climate pathways affecting animals" tabindex="0"><table>
        <caption>Match the proposed mechanism to the evidence</caption>
        <thead><tr><th scope="col">Pathway</th><th scope="col">Question</th><th scope="col">Useful observations</th></tr></thead>
        <tbody>
          <tr><th scope="row">Changing suitable habitat</th><td>Where can the population survive and reproduce?</td><td>Repeated distribution, survival and habitat records across locations.</td></tr>
          <tr><th scope="row">Seasonal mismatch</th><td>Does food remain available when young animals need it?</td><td>Dates of food peaks, breeding and offspring development.</td></tr>
          <tr><th scope="row">Extreme heat</th><td>Can animals cope with the conditions they actually experience?</td><td>Local exposure, behaviour, mortality and differences among life stages.</td></tr>
          <tr><th scope="row">Changes to ecological partners</th><td>What happens when an essential relationship is disrupted?</td><td>The condition of both organisms and what happens during recovery.</td></tr>
        </tbody>
      </table></div>
      <p>A useful study follows the chain from exposure to response. “The summer was warmer” describes conditions. “Nestling survival fell” describes a biological result. Connecting them requires comparable records and attention to alternatives such as habitat change, food supply or different survey effort.</p>

      <h2 id="himalayan-birds">India: moving upslope depends on the forest available</h2>
      <p><a href="https://esajournals.onlinelibrary.wiley.com/doi/10.1002/ecy.3223">Srinivasan and Wilcove's Himalayan bird study</a>, published online in 2020 and in <em>Ecology</em> in 2021, examined survival trends in primary and selectively logged forest. In primary forest, survival improved over time at the colder edge of species' elevational ranges and declined at the warmer edge. The same relationship was absent in logged forest.</p>
      <p>The pattern was consistent with birds tracking favourable climatic conditions, while forest condition affected that opportunity. These estimates combine survival and remaining in the study area, so a decline can also reflect birds leaving. A map of future temperatures cannot be treated as a complete map of future habitat.</p>
      <p>For a landscape team, the practical question is whether suitable habitat remains across the elevational range, including the places between protected areas. Our <a href="/blog/habitat-fragmentation-wildlife-corridors">habitat fragmentation guide</a> explains the separate evidence needed to establish whether animals can use a connection.</p>

      <h2 id="flycatcher-timing">The Netherlands: breeding and food can fall out of step</h2>
      <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/16672969/">2006 study by Both and colleagues</a> compared nine Dutch populations of the pied flycatcher, <em>Ficedula hypoleuca</em>. Declines were strongest where nestling food peaked early and breeding was mistimed relative to it. Where food peaked later, early-breeding birds remained better aligned and population declines were weaker.</p>
      <p>This is a specific food-and-breeding mechanism. Recording an earlier arrival date by itself would miss whether chicks still met the food peak. The relevant comparison is the timing of the interacting organisms, alongside the reproductive result.</p>
      <p>That study's historical populations are not a current estimate for all flycatchers or migratory birds. Its value here is the comparison among sites with different seasonal food patterns. For an introduction to seasonal observations, read <a href="/blog/the-wisdom-of-seasons">The Wisdom of Seasons</a>; this case adds a documented link to population change.</p>

      <h2 id="flying-fox-heat">Australia: a short heat event can have uneven effects</h2>
      <p><a href="https://pubmed.ncbi.nlm.nih.gov/18048286/">Welbergen and colleagues' 2008 study</a> examined flying-fox deaths during extreme heat in New South Wales, including an event on 12 January 2002. Researchers recorded heat-coping behaviours and found differences in mortality between black and grey-headed flying-foxes, and among age and sex groups.</p>
      <p>The observation matters because an annual average temperature cannot describe every damaging exposure. A short extreme can affect survival even when the yearly average seems modest. In this study, being a tropical species did not guarantee greater tolerance of the observed conditions.</p>
      <p>The paper documents biological effects of a heat event and discusses implications under a warming climate. It does not, by itself, calculate how much human-caused warming increased that event's probability. Distinguishing impact evidence from event attribution keeps the conclusion accurate.</p>

      <h2 id="corals-and-warming">Corals: stress can disrupt a living partnership</h2>
      <p><a href="https://oceanservice.noaa.gov/facts/coral.html">Corals are animals</a>. Many reef-building corals live with algae in their tissues, and that association can break down under stress. <a href="https://oceanservice.noaa.gov/facts/coral_bleach.html">NOAA's explanation of coral bleaching</a> describes how unusually warm water can cause corals to expel those algae and lose colour.</p>
      <p>A bleached coral is stressed, but it is not automatically dead. Survival and recovery depend on the severity and persistence of the stress. Temperature is also not the only possible cause of bleaching. A photograph should therefore be paired with water-condition records and repeat observations before it is used to claim a cause or a recovery.</p>
      <p>This example broadens the question beyond movement. Some animals cannot simply relocate to cooler conditions, and an important response may occur within a relationship between organisms. A reef assessment needs observations of coral condition, not just a count of fish seen on one visit.</p>

      <h2 id="animal-observation-record">What would a useful observation record look like?</h2>
      <p>Imagine a school or conservation team following a familiar bird population over several seasons. The following is an illustrative recording framework, not a field protocol or a real dataset. Its purpose is to show the difference between an interesting observation and evidence for a particular mechanism.</p>
      <div class="blog-table-wrap" role="region" aria-label="Illustrative wildlife climate observation record" tabindex="0"><table>
        <caption>Questions to agree with a suitably qualified survey lead</caption>
        <thead><tr><th scope="col">Record</th><th scope="col">Why keep it?</th></tr></thead>
        <tbody>
          <tr><th scope="row">Species identification and life stage</th><td>Adults, young and different species may respond differently.</td></tr>
          <tr><th scope="row">Location, dates, route and observation effort</th><td>Make repeated observations interpretable rather than comparing unequal visits.</td></tr>
          <tr><th scope="row">Relevant conditions</th><td>Record the temperature, rainfall or habitat feature linked to the actual question.</td></tr>
          <tr><th scope="row">Food and breeding observations</th><td>Test timing relationships instead of assuming that an earlier season is better or worse.</td></tr>
          <tr><th scope="row">Habitat work and other disturbances</th><td>Keep alternative explanations visible when conditions change together.</td></tr>
          <tr><th scope="row">Uncertain or missing observations</th><td>Separate an animal not detected from an animal shown to be absent.</td></tr>
        </tbody>
      </table></div>
      <p>Choose a question narrow enough to answer. “Did the food peak and breeding dates become less aligned at these sites?” is more useful than “Did climate change harm all our wildlife?” Review the design before collecting records, especially where sensitive species or nests are involved. Observing wildlife should not require approaching or disturbing breeding animals.</p>
      <p>Satellite observations can help describe land cover or environmental conditions, but they do not establish a bird's breeding success or a bat's survival. Those outcomes need suitable biological evidence. The <a href="/blog/biodiversity-metrics-for-restoration-projects">biodiversity measurement guide</a> explains how the question should determine the survey and indicator.</p>

      <h2 id="animal-climate-questions">Questions about animals and a changing climate</h2>
      <h3>Can animals simply move somewhere cooler?</h3>
      <p>Some populations shift their ranges. A cooler location still needs suitable habitat, food and access, and successful movement does not ensure successful reproduction. The Himalayan study shows why habitat condition belongs in that assessment.</p>
      <h3>Does an earlier spring help wildlife?</h3>
      <p>It depends on which seasonal events change and whether they remain aligned. An earlier food peak can help one population and leave another short of food during breeding. Measure the relationship rather than treating earlier timing as a benefit by itself.</p>
      <h3>Is climate change the only threat to animals?</h3>
      <p>No. Habitat conversion, exploitation, pollution and invasive species can act alongside it. The <a href="/blog/causes-of-biodiversity-loss">biodiversity-loss guide</a> explains these other pressures and why local conservation needs to address the combination present.</p>
      <p><em>Sources checked on 31 October 2026. The named studies are historical evidence of particular mechanisms, not current population estimates for every species or region.</em></p>
    `,
  },
];
