import type { StaticPost } from './blogPosts';

export const restorationMonitoringPost: StaticPost = {
  slug: 'restoration-monitoring-plan',
  tag: 'Restoration',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'Restoration Monitoring Plan: From Visits to Decisions',
  excerpt: 'Keep restoration work connected across field visits. Record treatments, tree cohorts, changes and the next action with a practical monitoring checklist.',
  date: 'September 23, 2026',
  updatedAt: '2026-09-23',
  readTime: '7',
  img: '/tree_trunk_jpg.jpeg',
  author: 'Mynzo Team',
  content: `
    <p>A restoration monitoring plan defines how a team will check its work, assess the site's response and decide what to do next. It connects each intervention to a location, a revisit, evidence and a responsible person. A planting total describes work completed; it does not establish that the ecosystem is recovering.</p>
    <p>This guide focuses on the record between visits. For help choosing ecological measurements, use our <a href="/blog/biodiversity-metrics-for-restoration-projects">biodiversity metrics guide</a>. Mynzo provides forest monitoring technology. The workflow below is planning guidance, not a claim that Mynzo supplies every survey or management function described.</p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#work-establishment-recovery">Work, establishment and recovery</a></li>
      <li><a href="#revisit-record">Build the revisit record</a></li>
      <li><a href="#planting-cohorts">Track planting cohorts</a></li>
      <li><a href="#revisit-timing">Schedule useful visits</a></li>
      <li><a href="#management-response">Review and close actions</a></li>
      <li><a href="#monitoring-plan-questions">Common questions</a></li>
      <li><a href="#monitoring-plan-checklist">Download the checklist</a></li>
    </ul></nav>

    <h2 id="work-establishment-recovery">Separate work completed, establishment and recovery</h2>
    <p><a href="https://www.fao.org/platforms/green-agriculture/areas-of-work/natural-resources-biodiversity-green-production/land-degradation-neutrality/">FAO's guidance on land degradation neutrality</a> cautions against assessing restoration success only through planted trees or hectares under restoration. Those records still matter, but they answer an implementation question.</p>
    <ul>
      <li><strong>Work completed:</strong> What was done, where and when? Retain planting, protection, invasive-control or other intervention records.</li>
      <li><strong>Establishment:</strong> What happened to the planted cohort? Report its condition at a stated age and assessment date.</li>
      <li><strong>Ecological recovery:</strong> Is the site progressing towards its ecological objective? Use the relevant field evidence and comparisons.</li>
    </ul>
    <p>A project supporting natural regeneration may have no planted cohort to assess. It still needs evidence of its interventions and the site's response. <a href="https://www.fao.org/ecosystem-restoration-monitoring/about/gbf-target-2/en">FAO's explanation of Global Biodiversity Framework Target 2</a> also distinguishes effective restoration underway from an area already restored. Keep that distinction in progress reports.</p>

    <h2 id="revisit-record">Build a record the next crew can use</h2>
    <p>In a <a href="https://forum.inaturalist.org/t/best-practices-for-adding-multiple-observations-of-invasive-species-to-a-project/39622">public discussion about creek restoration</a>, a project curator wanted treatment locations and photographs that a later team could use to check results. That handover problem is worth solving before collecting more data.</p>
    <p>Use a stable intervention ID and add a dated record for every revisit. Keep previous entries, including corrections. The following is a suggested working record; adapt it with the people responsible for the ecology and field work.</p>
    <div class="blog-table-wrap" role="region" aria-label="Restoration revisit record" tabindex="0">
      <table>
        <caption>A practical record linking restoration work to its next decision</caption>
        <thead><tr><th scope="col">Record</th><th scope="col">What to enter</th><th scope="col">Why it matters</th></tr></thead>
        <tbody>
          <tr><th scope="row">Location and intervention</th><td>Site, plot or treatment ID; boundary version; method and date.</td><td>The next crew can identify the same work.</td></tr>
          <tr><th scope="row">Expected response</th><td>The question to check and evidence required.</td><td>The visit has a defined purpose.</td></tr>
          <tr><th scope="row">Revisit</th><td>Date, observer, method, coverage and evidence references.</td><td>Another reviewer can trace the finding.</td></tr>
          <tr><th scope="row">Finding and uncertainty</th><td>Observed response, missing checks and possible explanations.</td><td>Observation stays separate from interpretation.</td></tr>
          <tr><th scope="row">Action and review</th><td>Agreed response, owner, due date and follow-up question.</td><td>A finding becomes work someone owns.</td></tr>
        </tbody>
      </table>
    </div>
    <p>The <a href="https://doi.org/10.1111/rec.70441">2026 third edition of the Society for Ecological Restoration standards</a> connects treatment records, monitoring and ongoing management. Its practical implication here is simple: retain the evidence behind a management change so the next team can understand the decision.</p>

    <h2 id="planting-cohorts">Keep plantings, replacements and natural recruits distinguishable</h2>
    <p>Before reporting survival, identify the planting cohort, original count, assessment date and method. State whether the result covers every planted individual or a sample. Record dead, living and unassessed individuals according to the agreed protocol; a missing check must not silently become a confirmed death.</p>
    <p>Consider a hypothetical cohort of 100 seedlings that is fully checked: 70 original seedlings remain alive, and 20 replacements are also alive at the assessment. There are 90 living planted seedlings at the site, but only 70 survivors from the original cohort. Mixing those figures would hide what happened. Report the replacements with their own planting dates and keep natural recruits distinguishable too.</p>
    <p>A <a href="https://forum.inaturalist.org/t/inat-projects-for-restoration-habitats-on-scbg-s-natural-heritage-trail-good-idea/64914">restoration volunteer's question about older plantings</a> shows why provenance matters: after years of work, the team could no longer separate some planted individuals from self-seeded plants. Mark origin as unknown when records cannot resolve it.</p>
    <p><a href="https://www.wri.org/research/land-restoration-planting-proof-guide-monitoring-reporting-and-verification">WRI's 2026 monitoring guide</a> includes survival and replacement rules for TerraFund projects in Africa. Those programme definitions are not universal thresholds. Agree which rules apply to your project and preserve the underlying records.</p>

    <h2 id="revisit-timing">Schedule visits around the response you need to assess</h2>
    <p>Use two kinds of visit: planned comparisons under suitable seasonal conditions, and additional checks when an event or unresolved finding warrants attention. A planting-establishment check, a review after flooding and a repeat habitat survey answer different questions. One fixed calendar interval will not serve every purpose.</p>
    <p>In <a href="https://forum.inaturalist.org/t/how-to-efficiently-revisit-locations-of-numerous-observations/17969">a post-fire research discussion</a>, an observer needed to find earlier observation locations in a changed landscape at the same time of year. Keep plot IDs, location uncertainty, access notes and photo-point directions available to the visiting crew. Record a missed visit and its reason.</p>
    <p>For a hypothetical India programme, organise revisits around each site's planting date and local wet and dry seasons. For a portfolio across countries, keep the same record fields while allowing different ecological windows and access constraints. A reporting deadline should not disguise an unsuitable or incomplete field comparison.</p>

    <h2 id="management-response">Review the finding, then close the action</h2>
    <p>Suppose a hypothetical follow-up finds poor establishment in one treatment area. First check the records and extent of the problem. Ask the field team to investigate plausible causes before ordering more seedlings. Record the chosen response, who approved it and what the next visit must establish.</p>
    <p>If the next crew finds no improvement, retain that result and reconsider the response. A completed action is not automatically a successful outcome. The <a href="https://www.fao.org/forestry/newsroom/news-detail/new-guidance-aims-to-maximize-benefits-of-ecosystem-restoration">FAO, IUCN CEM and SER practice framework</a> treats ongoing management and monitoring as connected activities throughout restoration.</p>
    <p>India's <a href="https://www.ncf-india.org/western-ghats/reviving-the-rainforest">Nature Conservation Foundation rainforest programme</a> describes early planted-sapling survival separately from later ecological resurveys. This external example illustrates different stages of assessment, not Mynzo results or a benchmark every site should match.</p>

    <h2 id="monitoring-plan-questions">Questions about restoration monitoring plans</h2>
    <h3 id="what-should-plan-include">What should a restoration monitoring plan include?</h3>
    <p>Include intervention locations, the response to assess, revisit methods and timing, evidence records, responsibilities and decision rules. Select the ecological measurements separately using the project's objectives and our <a href="/blog/biodiversity-metrics-for-restoration-projects">guide to biodiversity metrics</a>.</p>
    <h3 id="does-survival-prove-recovery">Does tree survival prove restoration success?</h3>
    <p>No. Survival describes the continued presence of a defined planted cohort. Ecological recovery also depends on the project's habitat, species and process objectives. High survival alone cannot establish those outcomes.</p>
    <h3 id="how-often-revisit">How often should a restoration site be revisited?</h3>
    <p>Set the schedule for the intervention, expected response, local season and risks. Add checks when conditions warrant them. State the observation dates and gaps instead of treating every reporting period as a fresh assessment.</p>
    <h3 id="how-handover-records">How should monitoring records be handed to a new team?</h3>
    <p>Provide stable location IDs, intervention history, survey methods, evidence files and unresolved actions. Name the next owner and review date. Preserve earlier versions so the new team can follow how decisions changed.</p>

    <h2 id="monitoring-plan-checklist">Prepare your next monitoring visit</h2>
    <p><a href="/resources/restoration-monitoring-plan.txt" download>Download the editable restoration monitoring checklist</a>. It includes a repeatable visit record and an action handover with no registration required.</p>
    <p>For a monitoring discussion, bring your boundaries, intervention history, existing surveys and the decision you need to make. Explore <a href="/solutions/project-developers">monitoring for project developers</a> and <a href="/platform/forest-monitoring">Mynzo's forest monitoring approach</a>, or <a href="/get-started?interest=restoration-monitoring&amp;source=restoration-guide">discuss your restoration monitoring needs</a>. Confirm the suitable observations and any specialist field work during scoping.</p>
    <p><em>Sources checked on 23 September 2026. Examples labelled hypothetical are planning illustrations, not project results.</em></p>
  `,
};
