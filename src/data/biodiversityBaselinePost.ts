import type { StaticPost } from './blogPosts';

export const biodiversityBaselinePost: StaticPost = {
  slug: 'biodiversity-baseline-assessment',
  tag: 'Biodiversity',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'Biodiversity Baseline Assessment Guide and Checklist',
  excerpt: 'Set the boundary, choose survey dates and agree what the baseline must show. Compare proposals with an editable biodiversity assessment checklist.',
  date: 'November 26, 2026',
  updatedAt: '2026-11-26',
  readTime: '8',
  img: '/images/education/covers/assisted-natural-regeneration.webp',
  imgAlt: 'Young beech trees growing beneath an older forest canopy in Grumsiner Forst, Germany',
  imgCredit: {
    title: 'Natural beech regeneration, Grumsiner Forst, Germany (2013)',
    author: 'Paul Schulze, Humboldt-Universität zu Berlin',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Beech_forest_(Fagus_sylvatica)_natural_forest_regeneration,_Grumsiner_Forst,_Brandenburg,_Germany,_2013-10-08_132608.jpg',
    license: 'CC BY 2.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/2.0/',
  },
  author: 'Mynzo Team',
  content: `
    <p>A biodiversity baseline assessment records the ecological conditions at a site over a stated period. It describes the habitats and species groups assessed, the area covered, how observations were collected and where evidence is missing. The baseline gives the team a starting point for planning work and interpreting later changes.</p>
    <p>Before asking for a quote, decide what the assessment has to answer. A restoration team choosing where to begin and a consultant documenting the condition of a site before construction will need different evidence. The <a href="/resources/biodiversity-baseline-brief.txt" download>editable biodiversity baseline checklist</a> helps you give both teams a usable brief.</p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#baseline-decision">Define the decision and boundary</a></li>
      <li><a href="#baseline-evidence">Review existing evidence and field needs</a></li>
      <li><a href="#baseline-survey-window">Choose the survey window</a></li>
      <li><a href="#baseline-worked-example">Work through a site example</a></li>
      <li><a href="#baseline-assessment-cost">Compare quotes and deliverables</a></li>
      <li><a href="#baseline-questions">Common questions</a></li>
    </ul></nav>

    <h2 id="baseline-decision">Define the decision and boundary first</h2>
    <p>Write the decision in a sentence. A team considering a stream restoration might ask which reaches still have native streamside vegetation and where to establish repeat survey plots. Give the ecologist the start date of planned work, a dated boundary and any constraints on access.</p>
    <p>Mark the intervention footprint and the area the team needs to study. They can differ when a question involves upstream drainage or a neighbouring patch that provides habitat connectivity. Ask the ecologist to explain why each area is included and keep the boundaries distinguishable in reports. The Wildlife Institute of India used field visits and existing records to inform site alternatives and mitigation in a documented mining assessment. <a href="https://v1.wii.gov.in/eia/casestudies/mining_projects2_baseline_information">Wildlife Institute of India baseline case study</a></p>
    <p>If a lender, funder or assessment process sets requirements, give the adviser those requirements before they design the work. IFC guidance, for example, explains how the scope and seasonal fieldwork depend on the impacts and sensitivities of a project to which its standard applies. <a href="https://www.ifc.org/content/dam/ifc/doc/2010/20190627-ifc-ps-guidance-note-6-en.pdf">IFC Guidance Note 6</a></p>

    <h2 id="baseline-evidence">Review what you have and what still needs fieldwork</h2>
    <p>Gather earlier site plans, dated imagery, management records and survey reports with their underlying data where available. Ask which records can be used for the intended comparison, which are useful context and which have gaps the team needs to fill.</p>
    <div class="blog-table-wrap" role="region" aria-label="Biodiversity baseline evidence" tabindex="0">
      <table>
        <caption>What each evidence source can contribute to a site baseline</caption>
        <thead><tr><th scope="col">Source</th><th scope="col">What it can help answer</th><th scope="col">What to check</th></tr></thead>
        <tbody>
          <tr><th scope="row">Satellite or aerial imagery</th><td>Where larger vegetation and water features are visible, and which areas need a closer look.</td><td>Image dates, cloud or shadow, mapping scale and which classes need local validation.</td></tr>
          <tr><th scope="row">Field habitat assessment</th><td>Which habitats are present in the areas checked and what their condition is under the chosen criteria.</td><td>Classification method, plot locations, visit dates and where survey access was limited.</td></tr>
          <tr><th scope="row">Targeted species survey</th><td>Which organisms the team detected within the chosen group, places and dates.</td><td>Survey season, sampling effort, identification confidence and whether repeat visits are needed.</td></tr>
          <tr><th scope="row">Historical records</th><td>What earlier observers documented and which changes or gaps deserve investigation.</td><td>Location accuracy, original dates, methods, coverage, and whether the records support comparison.</td></tr>
        </tbody>
      </table>
    </div>
    <p>In a forest, a canopy map may help organise a survey while leaving questions about plants beneath the canopy for fieldwork. For a map specification and acceptance checks, see the <a href="/blog/habitat-mapping">habitat mapping guide</a>. <a href="https://geobon.org/a-sourcebook-of-methods-and-procedures-for-monitoring-essential-biodiversity-variables-in-tropical-forests-with-remote-sensing/">GEO BON sourcebook on remote sensing in tropical forests</a></p>
    <p>If work has already started, label the date of the first field survey and document what changed before it. Earlier imagery may help establish what was visible before the work. Any starting condition that has to be inferred should be identified as an estimate and accompanied by its evidence and uncertainty.</p>

    <h2 id="baseline-survey-window">Choose dates that fit the site and the survey</h2>
    <p>Ask the ecology lead which conditions make the target habitats and organisms observable. Agree the visit window, the effort per visit and the rules for rescheduling if weather or access prevents a usable survey. For a site with seasonal water, the brief may need observations in wet and dry conditions. The ecology lead can decide whether that comparison matters for the proposed work.</p>
    <p>Record locations, survey time and effort so the next team can repeat or interpret the work. Use separate entries for a species that was sought and undetected, an area that was inaccessible, and a species group outside the scope. <a href="https://docs.gbif.org/guide-publishing-survey-data/en/">GBIF guide to biological survey and monitoring data</a></p>

    <h2 id="baseline-worked-example">A worked example from western India</h2>
    <p>Imagine a restoration team in western India considering native planting on two parcels. Its immediate decision is where planting can start and where drainage and existing vegetation need a closer look. A dry-season image shows a bare strip across one parcel. The land manager recalls water there during the rains, and an older plant list covers a wider area with few precise locations.</p>
    <p>The team commissions a review of the dated imagery, references the drainage strip on the parcel plan and asks an ecologist to assess the strip and nearby vegetation at a suitable time. The brief treats the older plant list as a source of survey questions. The handover should identify which places were visited, which habitats were confirmed and which unresolved areas need another visit. The team can review the surveyed areas for planting and keep the strip out of the work plan while the drainage question is open.</p>
    <p>A temperate woodland programme might have old bird records collected in different months at different sites. Before comparing those sites, it can commission surveys in the locally relevant season and record the method and effort for each visit.</p>

    <h2 id="baseline-assessment-cost">Compare biodiversity assessment quotes on the same scope</h2>
    <p>Send each team the same boundary, decision, intended use and list of files. Ask for the desk review, field visits, specialist identification, travel, analysis and handover to be itemised. Area affects the work, as do the number of separate parcels, habitat variety, access, target species groups and repeat visits. Confirm which extra visits or tests would change the price and who approves additional work.</p>
    <p>Agree what the team will deliver and how you will review it.</p>
    <ul>
      <li>A dated boundary and map, with the area visited and any gaps clearly marked.</li>
      <li>Field records with location identifiers, dates, method, effort and identification status.</li>
      <li>A report that traces its findings to the records and explains which decisions they can support.</li>
      <li>Editable files in agreed formats, reuse terms and access rules for sensitive records.</li>
    </ul>
    <p>At the first review, choose one map feature and one field finding. Follow each back to its record, location and date. If another team will repeat the assessment, check that it can find the relevant locations and understand the original survey design.</p>

    <h2 id="baseline-questions">Common questions about biodiversity baselines</h2>
    <h3>When should a biodiversity baseline survey take place?</h3>
    <p>Collect starting evidence before the activity you intend to evaluate, and plan surveys around the habitats and species in scope. If part of the site has already changed, record when the work happened and which earlier evidence is available.</p>
    <h3>Can a satellite image provide the whole assessment?</h3>
    <p>Imagery can help map larger features and provide landscape context. Where the decision depends on site-level habitat condition, species identity or field measurements, agree how those observations will be collected and checked.</p>
    <h3>How long does an assessment take?</h3>
    <p>The schedule depends on the decision, existing evidence and suitable survey windows. A desk review can inform early planning. Ask when the field findings will be available, what depends on the season and which decisions can be made in the meantime.</p>
    <h3>What happens after the baseline?</h3>
    <p>Use the baseline to choose the observations worth repeating and the changes that would trigger a management decision. Then agree a <a href="/blog/restoration-monitoring-plan">restoration monitoring plan</a> and choose <a href="/blog/biodiversity-metrics-for-restoration-projects">biodiversity metrics</a> that fit the question and sampling method.</p>

    <h2 id="baseline-brief">Put the brief together</h2>
    <p>For a programme covering several sites, agree the evidence each location needs to contribute to the <a href="/solutions/corporate-nature-monitoring">portfolio review</a>. If you are preparing an assessment for a client, use the <a href="/solutions/environmental-consultants">consultant handover example</a> to decide which records the next team should receive.</p>
    <p><a href="/resources/biodiversity-baseline-brief.txt" download>Download the editable biodiversity baseline checklist</a>. For a discussion with Mynzo, bring your site locations, available survey records and the decision you need to make. We can discuss where our <a href="/platform/biodiversity-monitoring">biodiversity monitoring</a> can support the work and which field observations to plan with an ecologist. <a href="/get-started?interest=biodiversity-monitoring&amp;source=biodiversity-baseline-guide">Discuss your baseline scope</a></p>
  `,
};
