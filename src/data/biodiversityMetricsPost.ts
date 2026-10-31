import type { StaticPost } from './blogPosts';

export const biodiversityMetricsPost: StaticPost = {
  slug: 'biodiversity-metrics-for-restoration-projects',
  tag: 'Biodiversity',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'How to Measure Biodiversity: Methods and Examples',
  excerpt: 'Compare biodiversity monitoring methods and work through a species richness and Shannon diversity example. Choose useful field measures and record their limits.',
  date: 'September 18, 2026',
  updatedAt: '2026-10-31',
  readTime: '10',
  img: '/leaf_tree_jpg.jpeg',
  author: 'Mynzo Team',
  content: `
    <p>To measure biodiversity, define the area and organisms you want to study, use repeatable survey methods, and record both the observations and the effort spent collecting them. A restoration project usually needs several measures: habitat area, species composition and selected measures of condition or function. Choose them for the decision they will support, then define the baseline, unit and comparison period.</p>
    <p>A higher number is not always a better outcome. More recorded species can reflect extra survey effort. More vegetation can include an invasive plant. A useful monitoring plan makes these differences visible before they become claims in a report.</p>
    <p>This guide is for teams planning forest and land restoration. Mynzo provides forest monitoring technology; the examples below are planning guidance, not results from Mynzo projects or a catalogue of services.</p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#monitoring-decision">Start with the decision</a></li>
      <li><a href="#baseline-and-goal">Baseline and restoration goal</a></li>
      <li><a href="#measurements">Compare measurements</a></li>
      <li><a href="#richness-diversity-example">Species richness and diversity: a worked example</a></li>
      <li><a href="#survey-effort">Keep survey effort comparable</a></li>
      <li><a href="#satellite-evidence">Use satellite evidence</a></li>
      <li><a href="#management-action">Turn results into action</a></li>
      <li><a href="#reporting-framework">Check the reporting framework</a></li>
      <li><a href="#monitoring-brief">Download the monitoring brief</a></li>
      <li><a href="#measurement-questions">Common measurement questions</a></li>
    </ul></nav>

    <h2 id="monitoring-decision">1. Write the decision before choosing the metric</h2>
    <p>Replace a broad instruction such as “measure biodiversity” with a question that can guide action. For example: is native vegetation establishing after invasive plant removal, or are gaps between forest patches continuing to widen? Write down who will use the result and what they might change in response.</p>
    <p><a href="https://www.fao.org/sustainable-forest-management/toolbox/tools/tool-detail/en/c/1255095/">FAO's restoration monitoring guide</a> starts with goals, land use and constraints before selecting indicators. This matters when budgets are limited. A smaller set of repeatable measurements is often more useful than a long list that cannot be collected again.</p>
    <ul>
      <li><strong>Management question:</strong> What action could this finding trigger?</li>
      <li><strong>Ecological objective:</strong> Which habitat, species group or process should change?</li>
      <li><strong>Evidence standard:</strong> What would the reviewer need to accept the conclusion?</li>
    </ul>

    <h2 id="baseline-and-goal">2. Keep the baseline and the restoration goal separate</h2>
    <p>The baseline records the site's starting condition. A reference model describes the ecological condition used to guide recovery. Neither should be an unexplained score.</p>
    <p>The <a href="https://doi.org/10.1111/rec.70441">2026 third edition of the Society for Ecological Restoration standards</a> distinguishes the baseline from the reference model and links goals to measurable ecosystem attributes. A reference model draws on relevant ecological information and accounts for environmental change; it is not simply a demand to recreate one historical photograph.</p>
    <p>For each monitoring area, retain the boundary version, survey dates, land-use history and available measurements. If work has already begun, record that limitation. Historical imagery may describe earlier vegetation cover, but it cannot supply a missing historical species inventory.</p>

    <h2 id="measurements">3. Select complementary measurements</h2>
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

    <h2 id="richness-diversity-example">Species richness vs species diversity: two plots, different results</h2>
    <p>Species richness counts the species recorded in a sample. Evenness describes how evenly the observations are distributed among them. A species-diversity index can combine those two properties, while composition records which species are present. Keep the species list alongside the index so the calculation does not hide changes in identity.</p>
    <p>The following is a hypothetical teaching example, not a field result. Imagine two 100 m² plots in comparable habitat. The same team surveys each for 30 minutes in the same seasonal window, counting seedling stems under one written protocol. Species A to F are placeholders for identified taxa. Both plots contain 40 recorded stems, but their distribution differs.</p>
    <div class="blog-table-wrap" role="region" aria-label="Illustrative biodiversity counts in two plots" tabindex="0">
      <table>
        <caption>Hypothetical seedling counts with matched area, protocol and survey effort</caption>
        <thead><tr><th scope="col">Recorded taxon or measure</th><th scope="col">Plot A</th><th scope="col">Plot B</th></tr></thead>
        <tbody>
          <tr><th scope="row">Species A</th><td>10 stems</td><td>34 stems</td></tr>
          <tr><th scope="row">Species B</th><td>10 stems</td><td>2 stems</td></tr>
          <tr><th scope="row">Species C</th><td>10 stems</td><td>0 recorded</td></tr>
          <tr><th scope="row">Species D</th><td>10 stems</td><td>0 recorded</td></tr>
          <tr><th scope="row">Species E</th><td>0 recorded</td><td>2 stems</td></tr>
          <tr><th scope="row">Species F</th><td>0 recorded</td><td>2 stems</td></tr>
          <tr><th scope="row">Total recorded stems</th><td>40</td><td>40</td></tr>
          <tr><th scope="row">Observed species richness</th><td>4</td><td>4</td></tr>
          <tr><th scope="row">Shannon diversity H′, natural logarithms</th><td>1.386</td><td>0.588</td></tr>
        </tbody>
      </table>
    </div>
    <p>Richness alone gives the same answer for both plots. Plot A has equal recorded abundance across its four species; Plot B is dominated by Species A. Their composition also differs: C and D were recorded only in Plot A, while E and F were recorded only in Plot B. A zero here means that the survey did not record that taxon, not proof that it is absent from the wider site.</p>

    <h3 id="shannon-diversity-example">Calculate the Shannon diversity index</h3>
    <p>The <a href="https://scikit.bio/docs/latest/generated/skbio.diversity.alpha.shannon.html">scikit-bio documentation</a> defines Shannon diversity as H′ = −Σ pᵢ ln(pᵢ) when using natural logarithms, where pᵢ is each species' share of the sample. State the logarithm base when reporting the result.</p>
    <ol>
      <li><strong>Calculate the proportions.</strong> Plot A has four proportions of 10 ÷ 40 = 0.25. Plot B has 34 ÷ 40 = 0.85 and three proportions of 2 ÷ 40 = 0.05.</li>
      <li><strong>Multiply each positive proportion by its natural logarithm and add.</strong> Plot A gives 4 × 0.25 × ln(0.25). Plot B gives 0.85 × ln(0.85) + 3 × 0.05 × ln(0.05). Zero-count terms contribute zero.</li>
      <li><strong>Change the sign.</strong> The results are approximately 1.386 for Plot A and 0.588 for Plot B.</li>
    </ol>
    <p>Plot A has higher diversity by this measure for this sample. That does not establish which plot is closer to its restoration goal. Neither the index nor the placeholder names tell us which species are native, characteristic of the habitat, threatened or invasive. Both plots would also need an appropriate sampling design before their results could represent a whole site.</p>
    <p>Use this comparison to decide what to inspect next. Identify the dominant taxon in Plot B, check its role in the target ecosystem, and compare repeat surveys under the same protocol. For a forest project in India or elsewhere, the calculation can stay consistent while the locally appropriate species and reference conditions differ.</p>

    <h2 id="survey-effort">4. Record how hard you looked</h2>
    <p>In an <a href="https://forum.inaturalist.org/t/at-what-point-do-you-stop-searching-for-new-species-in-a-defined-area/16904/1">iNaturalist discussion about resurveying a small forest remnant</a>, an observer asked when to stop searching and treat the species list as sufficiently complete. The practical problem is familiar: a longer search can find more species even when the site has not changed.</p>
    <p><a href="https://docs.gbif.org/guide-publishing-survey-data/en/">GBIF's survey and monitoring data guide</a> explains why survey scope, methods and effort belong with the observations. Record plot area or transect length, visit duration, repeat visits, season, observers and relevant equipment. Name the groups being surveyed, including exclusions.</p>
    <p>Do not compare an incidental species list from one short visit with a structured, multi-season survey as if the difference measured recovery. Keep like-for-like observations together and explain any change in method before interpreting the trend.</p>
    <p>A species not recorded is not automatically absent. It might have been outside the survey's scope, inactive during the visit or missed. <a href="https://discourse.gbif.org/t/definitions-for-concepts-or-vocabulary-related-to-absences/4150">GBIF's discussion of absence terminology</a> distinguishes non-detection from true absence. Where occupancy matters, use a design and analysis that address detection probability.</p>

    <h2 id="satellite-evidence">5. Use satellite evidence for the questions it can answer</h2>
    <p>Satellite observations help put field findings in their landscape context. Suitable data can describe changes in mapped habitat, vegetation structure or seasonal behaviour. Image resolution, usable dates and validation determine how confidently those observations can be interpreted.</p>
    <p><a href="https://eo4society.esa.int/projects/due-innovator-iii-rs4ebv-remote-sensing-for-essential-biodiversity-variables/">ESA's RS4EBV project</a> tested selected remotely sensed variables and ecological proxies in different ecosystems. A proxy requires a demonstrated relationship with the property of interest. It should not be relabelled as a direct species measurement.</p>
    <p>For example, a vegetation map may help choose where to survey. It cannot establish the complete plant or animal community beneath the canopy. Keep field measurements and model estimates identifiable in the dataset, including uncertainty and missing observations.</p>

    <h2 id="management-action">6. Turn the results into an action</h2>
    <p>Consider a hypothetical restoration site where plant cover increases after management. If much of that cover is an invasive species, the next action may be further control work rather than a claim of native ecosystem recovery. The cover measure is useful because it sits beside species composition and the management record.</p>
    <p>For dispersed sites in India, distinguish habitat types, planting histories and local survey seasons. For a portfolio across countries, keep site-specific ecological objectives while standardising the reporting fields. Neither case benefits from averaging incompatible condition scores into one unexplained total.</p>
    <p>Report the observed change, evidence quality, plausible explanations and proposed response. Weather, disturbance or surrounding land use can affect results. Comparing before and after an intervention is useful, but does not alone establish that the intervention caused the difference.</p>

    <h2 id="reporting-framework">7. Check which reporting framework actually applies</h2>
    <p>Project management measurements, corporate disclosures and regulatory calculations serve different purposes. Match the method to the use case.</p>
    <p>As checked on 31 October 2026, TNFD labels its <a href="https://tnfd.global/publication/discussion-paper-on-state-of-nature-measurement/">state-of-nature measurement paper</a> as a discussion paper containing proposals for consultation and feedback. It discusses integration with TNFD, GRI and SBTN frameworks. Do not present those proposals as final adopted requirements.</p>
    <p><a href="https://www.gov.uk/guidance/calculate-biodiversity-value-with-the-statutory-biodiversity-metric">England's statutory biodiversity metric guidance</a> uses habitat information to calculate biodiversity units for its specified context. It explicitly applies to England. It is not a universal biodiversity scoring system for restoration in India or other markets, and habitat units are not counts of species.</p>

    <h2 id="monitoring-brief">A brief your monitoring team can work from</h2>
    <p>For each proposed metric, complete one row with: the decision, ecological objective, definition, unit, baseline, method, timing, responsible person, quality check and action threshold. Mark anything unknown instead of filling the gap with an assumption. Have the ecological team review the design before setting targets.</p>
    <p>If a selected metric depends on habitat area, first agree how that habitat will be mapped. Use the <a href="/blog/habitat-mapping">habitat mapping guide</a> to define classes, observation dates and independent checks before interpreting mapped change.</p>
    <p><a href="/resources/biodiversity-monitoring-brief.txt" download>Download the biodiversity monitoring brief</a>. It is an editable text template with no registration required.</p>
    <p>Explore <a href="/platform/biodiversity-monitoring">biodiversity monitoring with Mynzo</a>, the underlying <a href="/platform/forest-monitoring">forest monitoring approach</a>, or our work with <a href="/solutions/project-developers">project developers</a>. To discuss a site, <a href="/get-started?interest=biodiversity-monitoring&amp;source=biodiversity-guide">share your monitoring question and available evidence</a>.</p>
    <h2 id="measurement-questions">Common measurement questions</h2>
    <h3 id="best-biodiversity-measure">What is the best way to measure biodiversity?</h3>
    <p>Start with the ecological question and the organisms involved. Botanical plots can record vegetation composition; repeated target-species surveys can address detection or occupancy; habitat maps can describe extent and pattern. The table above explains their different limits. Combine measures that address the project's goal instead of choosing a single index for every site.</p>
    <h3 id="richness-and-diversity">Can two sites have the same species richness but different diversity?</h3>
    <p>Yes. Both plots in the example record four species, but one has equal counts and the other is dominated by one species. Their Shannon values differ. Even when two samples have the same richness and index value, they can contain different species, so retain the composition record.</p>
    <h3 id="shannon-good-score">What is a good Shannon diversity score?</h3>
    <p>There is no universal pass mark for restoration. Interpret the value using the organisms, habitat, sampling design and reference conditions. Keep the logarithm base and method consistent when comparing results, and check whether a higher value reflects the ecological outcome your project seeks.</p>
    <p>For the broader ecological context, read <a href="/blog/causes-of-biodiversity-loss">the causes of biodiversity loss</a> and <a href="/blog/habitat-fragmentation-wildlife-corridors">how habitat fragmentation affects connectivity</a>.</p>
    <p><em>Worked example and references reviewed on 31 October 2026. Originally published on 18 September 2026. This guide separates general ecological methods from Mynzo's product scope and from framework-specific requirements.</em></p>
  `,
};
