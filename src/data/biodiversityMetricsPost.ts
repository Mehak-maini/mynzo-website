import type { StaticPost } from './blogPosts';

export const biodiversityMetricsPost: StaticPost = {
  slug: 'biodiversity-metrics-for-restoration-projects',
  tag: 'Biodiversity',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'Biodiversity Metrics for Restoration Projects',
  excerpt: 'Choose measurements that explain ecological change. A practical guide to habitat extent, native species, survey effort, baselines and reporting limits.',
  date: 'September 18, 2026',
  updatedAt: '2026-09-18',
  readTime: '8',
  img: '/leaf_tree_jpg.jpeg',
  author: 'Mynzo Team',
  content: `
    <p>Biodiversity metrics are measurements used to describe living systems and how they change. A restoration project usually needs several: habitat area, species composition and selected measures of condition or function. Choose them for the decision they will support, then define the baseline, survey method, unit and comparison period.</p>
    <p>A higher number is not always a better outcome. More recorded species can reflect extra survey effort. More vegetation can include an invasive plant. A useful monitoring plan makes these differences visible before they become claims in a report.</p>
    <p>This guide is for teams planning forest and land restoration. Mynzo provides forest monitoring technology; the examples below are planning guidance, not results from Mynzo projects or a catalogue of services.</p>

    <h2>1. Write the decision before choosing the metric</h2>
    <p>Replace a broad instruction such as “measure biodiversity” with a question that can guide action. For example: is native vegetation establishing after invasive plant removal, or are gaps between forest patches continuing to widen? Write down who will use the result and what they might change in response.</p>
    <p><a href="https://www.fao.org/sustainable-forest-management/toolbox/tools/tool-detail/en/c/1255095/">FAO's restoration monitoring guide</a> starts with goals, land use and constraints before selecting indicators. This matters when budgets are limited. A smaller set of repeatable measurements is often more useful than a long list that cannot be collected again.</p>
    <ul>
      <li><strong>Management question:</strong> What action could this finding trigger?</li>
      <li><strong>Ecological objective:</strong> Which habitat, species group or process should change?</li>
      <li><strong>Evidence standard:</strong> What would the reviewer need to accept the conclusion?</li>
    </ul>

    <h2>2. Keep the baseline and the restoration goal separate</h2>
    <p>The baseline records the site's starting condition. A reference model describes the ecological condition used to guide recovery. Neither should be an unexplained score.</p>
    <p>The <a href="https://doi.org/10.1111/rec.70441">2026 third edition of the Society for Ecological Restoration standards</a> distinguishes the baseline from the reference model and links goals to measurable ecosystem attributes. A reference model draws on relevant ecological information and accounts for environmental change; it is not simply a demand to recreate one historical photograph.</p>
    <p>For each monitoring area, retain the boundary version, survey dates, land-use history and available measurements. If work has already begun, record that limitation. Historical imagery may describe earlier vegetation cover, but it cannot supply a missing historical species inventory.</p>

    <h2>3. Select complementary measurements</h2>
    <p><a href="https://geobon.org/ebvs/working-groups/ecosystem-structure/">GEO BON's ecosystem structure work</a> and its <a href="https://geobon.org/ebvs/working-groups/species-populations/">species population framework</a> address different parts of biodiversity. The examples below help separate those parts. They are a selection aid, not a universal minimum or a statutory calculation.</p>
    <div class="blog-table-wrap" role="region" aria-label="Biodiversity indicator comparison" tabindex="0">
      <table>
        <caption>Example measurements, methods and limits for restoration planning</caption>
        <thead><tr><th scope="col">Measurement</th><th scope="col">Unit or record</th><th scope="col">How to collect it</th><th scope="col">Interpretation limit</th></tr></thead>
        <tbody>
          <tr><th scope="row">Habitat extent</th><td>Hectares by defined habitat class</td><td>Mapped boundaries with field checks and a recorded classification method.</td><td>Area does not describe ecological condition. Classification errors can look like change.</td></tr>
          <tr><th scope="row">Native plant richness</th><td>Number of native species in a defined sample</td><td>Repeat botanical surveys with consistent plot area and survey effort.</td><td>Results depend on season, identification and sampling completeness.</td></tr>
          <tr><th scope="row">Species composition</th><td>Species list and abundance or cover by species</td><td>Record which species occur and their quantities using an appropriate field protocol.</td><td>The same richness can hide replacement of characteristic species.</td></tr>
          <tr><th scope="row">Native or invasive plant cover</th><td>Percent cover within a defined layer and plot</td><td>Repeat a consistent cover-estimation method with species identification.</td><td>Define the denominator and layer. Overlapping vegetation layers need separate treatment.</td></tr>
          <tr><th scope="row">Target-species occupancy</th><td>Estimated proportion of defined sites occupied</td><td>Repeated detection surveys and a model suited to the sampling design.</td><td>Occupancy is not abundance. Imperfect detection affects the estimate.</td></tr>
          <tr><th scope="row">Habitat fragmentation</th><td>For example, patch area in hectares or gap distance in metres</td><td>Compare habitat maps made with compatible rules and resolution.</td><td>A mapped gap does not establish whether a particular animal can cross it.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Condition assessments may combine several ecological attributes. Record the component measurements and scoring method as well as the final rating. Otherwise, two sites with the same score can have quite different problems.</p>

    <h2>4. Record how hard you looked</h2>
    <p>In an <a href="https://forum.inaturalist.org/t/at-what-point-do-you-stop-searching-for-new-species-in-a-defined-area/16904/1">iNaturalist discussion about resurveying a small forest remnant</a>, an observer asked when to stop searching and treat the species list as sufficiently complete. The practical problem is familiar: a longer search can find more species even when the site has not changed.</p>
    <p><a href="https://docs.gbif.org/guide-publishing-survey-data/en/">GBIF's survey and monitoring data guide</a> explains why survey scope, methods and effort belong with the observations. Record plot area or transect length, visit duration, repeat visits, season, observers and relevant equipment. Name the groups being surveyed, including exclusions.</p>
    <p>Do not compare an incidental species list from one short visit with a structured, multi-season survey as if the difference measured recovery. Keep like-for-like observations together and explain any change in method before interpreting the trend.</p>
    <p>A species not recorded is not automatically absent. It might have been outside the survey's scope, inactive during the visit or missed. <a href="https://discourse.gbif.org/t/definitions-for-concepts-or-vocabulary-related-to-absences/4150">GBIF's discussion of absence terminology</a> distinguishes non-detection from true absence. Where occupancy matters, use a design and analysis that address detection probability.</p>

    <h2>5. Use satellite evidence for the questions it can answer</h2>
    <p>Satellite observations help put field findings in their landscape context. Suitable data can describe changes in mapped habitat, vegetation structure or seasonal behaviour. Image resolution, usable dates and validation determine how confidently those observations can be interpreted.</p>
    <p><a href="https://eo4society.esa.int/projects/due-innovator-iii-rs4ebv-remote-sensing-for-essential-biodiversity-variables/">ESA's RS4EBV project</a> tested selected remotely sensed variables and ecological proxies in different ecosystems. A proxy requires a demonstrated relationship with the property of interest. It should not be relabelled as a direct species measurement.</p>
    <p>For example, a vegetation map may help choose where to survey. It cannot establish the complete plant or animal community beneath the canopy. Keep field measurements and model estimates identifiable in the dataset, including uncertainty and missing observations.</p>

    <h2>6. Turn the results into an action</h2>
    <p>Consider a hypothetical restoration site where plant cover increases after management. If much of that cover is an invasive species, the next action may be further control work rather than a claim of native ecosystem recovery. The cover measure is useful because it sits beside species composition and the management record.</p>
    <p>For dispersed sites in India, distinguish habitat types, planting histories and local survey seasons. For a portfolio across countries, keep site-specific ecological objectives while standardising the reporting fields. Neither case benefits from averaging incompatible condition scores into one unexplained total.</p>
    <p>Report the observed change, evidence quality, plausible explanations and proposed response. Weather, disturbance or surrounding land use can affect results. Comparing before and after an intervention is useful, but does not alone establish that the intervention caused the difference.</p>

    <h2>7. Check which reporting framework actually applies</h2>
    <p>Project management measurements, corporate disclosures and regulatory calculations serve different purposes. Match the method to the use case.</p>
    <p>As checked on 18 September 2026, TNFD labels its <a href="https://tnfd.global/publication/discussion-paper-on-state-of-nature-measurement/">state-of-nature measurement paper</a> as a discussion paper containing proposals for consultation and feedback. It discusses integration with TNFD, GRI and SBTN frameworks. Do not present those proposals as final adopted requirements.</p>
    <p><a href="https://www.gov.uk/guidance/calculate-biodiversity-value-with-the-statutory-biodiversity-metric">England's statutory biodiversity metric guidance</a> uses habitat information to calculate biodiversity units for its specified context. It explicitly applies to England. It is not a universal biodiversity scoring system for restoration in India or other markets, and habitat units are not counts of species.</p>

    <h2>A brief your monitoring team can work from</h2>
    <p>For each proposed metric, complete one row with: the decision, ecological objective, definition, unit, baseline, method, timing, responsible person, quality check and action threshold. Mark anything unknown instead of filling the gap with an assumption. Have the ecological team review the design before setting targets.</p>
    <p><a href="/resources/biodiversity-monitoring-brief.txt" download>Download the biodiversity monitoring brief</a>. It is an editable text template with no registration required.</p>
    <p>Explore <a href="/platform/biodiversity-monitoring">biodiversity monitoring with Mynzo</a>, the underlying <a href="/platform/forest-monitoring">forest monitoring approach</a>, or our work with <a href="/solutions/project-developers">project developers</a>. To discuss a site, <a href="/get-started?interest=biodiversity-monitoring&amp;source=biodiversity-guide">share your monitoring question and available evidence</a>.</p>
    <p><em>Sources checked on 18 September 2026. This guide separates general ecological methods from Mynzo's product scope and from framework-specific requirements.</em></p>
  `,
};
