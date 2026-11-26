import type { StaticPost } from './blogPosts';

export const csrPlantationMonitoringPost: StaticPost = {
  slug: 'csr-plantation-monitoring',
  tag: 'Restoration',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'CSR Plantation Monitoring: Survival Counts and Field Records',
  excerpt: 'Track original plantings, replacements and unresolved checks across visits. Use a worked survival example and an editable CSR plantation checklist.',
  date: 'November 26, 2026',
  updatedAt: '2026-11-26',
  readTime: '8',
  img: '/images/education/covers/agroforestry-in-india.webp',
  imgAlt: 'Rows of poplar trees beside a cultivated field in Punjab, India',
  imgCredit: {
    title: 'Poplar Trees - panoramio (8)',
    author: 'vikas bishnoi',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Poplar_Trees_-_panoramio_(8).jpg',
    license: 'CC BY 3.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/3.0/',
  },
  author: 'Mynzo Team',
  content: `
    <p>CSR plantation monitoring follows what was planted, what survived and what care is still needed. For a corporate social responsibility team funding tree planting, the first useful record is a dated count of trees planted at each site. Keep it linked to the field visits that check those same trees.</p>
    <p>Agree with the implementing partner how it will record survival, replacements, missed checks and maintenance. Use the <a href="/resources/csr-plantation-monitoring-checklist.txt" download>editable plantation monitoring checklist</a> at the start of the project and at each reporting handover.</p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#plantation-register">Set up the planting register</a></li>
      <li><a href="#plantation-survival-calculation">Calculate survival with a clear denominator</a></li>
      <li><a href="#plantation-repeat-visits">Plan repeat field checks</a></li>
      <li><a href="#plantation-worked-handover">Work through a reporting example</a></li>
      <li><a href="#plantation-impact-evidence">Define what the report can support</a></li>
    </ul></nav>

    <h2 id="plantation-register">Create the planting register before the first survival check</h2>
    <p>Give each site and plot a stable identifier. Store the mapped boundary, its version and the planting dates next to the count actually put in the ground. Keep nursery deliveries and distribution figures in separate fields so the planting count can be reconciled. If the same parcel is planted in two seasons, give each batch its own identifier and count by species.</p>
    <div class="blog-table-wrap" role="region" aria-label="Plantation field register" tabindex="0">
      <table>
        <caption>Minimum records for a plantation visit and handover</caption>
        <thead><tr><th scope="col">Record</th><th scope="col">What to keep</th><th scope="col">What it helps the next team do</th></tr></thead>
        <tbody>
          <tr><th scope="row">Planting</th><td>Site, plot, batch, species, planting date, original count and source register.</td><td>Identify the original group to assess and reconcile totals.</td></tr>
          <tr><th scope="row">Visit</th><td>Date, observer, plots or rows covered, method, effort, status counts and missed checks.</td><td>Repeat the visit and interpret changes in coverage.</td></tr>
          <tr><th scope="row">Location evidence</th><td>Coordinates or a mapped feature ID, photo reference, capture date and a note on what the image shows.</td><td>Find the location again and connect the image to the observation it supports.</td></tr>
          <tr><th scope="row">Maintenance and replacements</th><td>Action, date, location and responsible team. For replacements, retain the species, count and new planting date against a separate batch ID.</td><td>See which work was done and which trees belong to each planting batch.</td></tr>
        </tbody>
      </table>
    </div>
    <p>Record who can use location data and keep the original files where reviewers can find them. At a fixed photo point, note the direction and the feature in view. A geotagged photo helps someone return to the same place. The field register shows which trees the crew checked and the status it recorded.</p>
    <p>The Forest Survey of India has used plantation polygons under CAMPA to check location, area and planting year, alongside field surveys by state departments. For a CSR site, use maps and imagery to plan visits or flag areas for checking, then use field observations for individual tree status. <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=1796221&amp;lang=2&amp;reg=48">Ministry of Environment, Forest and Climate Change explanation of CAMPA monitoring</a></p>

    <h2 id="plantation-survival-calculation">Calculate survival for the original planting batch</h2>
    <p><strong>Original planting survival is the number of original trees found alive divided by the number originally planted in the group being measured, multiplied by 100.</strong> This gives the observed survival percentage when every original tree in that group has a resolved status. State the planting dates, visit date and whether the group is the whole site or a defined sample.</p>
    <p>Keep separate totals for trees that are alive, confirmed dead or unresolved. Use the agreed field protocol for missing trees. When a crew cannot access a row or identify an original tree from its tag and records, leave it unresolved until there is enough evidence. If you report a percentage for resolved checks only, give that denominator and the coverage beside it.</p>
    <p>Track later plantings separately, even if replacement seedlings occupy the same pits. Keep a count of natural recruits too if they matter to the project. A reader should be able to see both the original batch's survival and how many planted trees are currently recorded alive. WRI's guide for TerraFund programmes in Africa illustrates programme-specific rules for tree survival and verification. Agree the definitions for your own project before fieldwork begins. <a href="https://www.wri.org/research/land-restoration-planting-proof-guide-monitoring-reporting-and-verification">World Resources Institute monitoring guide</a></p>

    <h2 id="plantation-repeat-visits">Plan repeat checks around field conditions</h2>
    <p>Choose between a full count and a sampling design before fieldwork. Where a sample is needed, agree how plots or rows will be chosen across site conditions, species and planting dates. Keep the selection method, the original counts for sampled groups and the locations to revisit. Report the observed sample and its coverage. A site-wide estimate needs a design and calculation that support it.</p>
    <p>An early check can help identify planting or maintenance problems. Arrange a later check after the site has faced the conditions that matter to establishment, such as a first dry period. Compare batches of a similar age and note weather, maintenance and any missed visits. For programmes across regions, use the same reporting fields and set visit windows to suit local conditions. <a href="https://www.fao.org/4/T7838E/T7838E08.htm">FAO survival survey guidance</a></p>
    <p>For an Indian example, the Rajasthan Forest Department describes site cards with plot maps and activities, and evaluation using either a full count or sample plots. These practices can help a funder ask for evidence by plot. <a href="https://forest.rajasthan.gov.in/content/raj/forest/en/aboutus/departmental-wings/forest-devlopment/development-projects/other-projects.html">Rajasthan Forest Department monitoring examples</a></p>

    <h2 id="plantation-worked-handover">A worked handover after a missed row</h2>
    <p>Suppose a Maharashtra project has 240 original seedlings recorded in a July batch. A December visit confirms 182 originals alive and 38 dead. The crew cannot reach one row containing 20 originals. A later replacement batch has 18 seedlings, of which 16 are alive at the visit.</p>
    <div class="blog-table-wrap" role="region" aria-label="Illustrative plantation survival report" tabindex="0">
      <table>
        <caption>Illustrative figures to reconcile at the December handover</caption>
        <thead><tr><th scope="col">Report line</th><th scope="col">Count or calculation</th><th scope="col">How to read it</th></tr></thead>
        <tbody>
          <tr><th scope="row">Original batch</th><td>182 alive, 38 dead, 20 unresolved, out of 240 planted.</td><td>220 original trees have a resolved status.</td></tr>
          <tr><th scope="row">Survival among resolved checks</th><td>182 ÷ 220 = 82.7%.</td><td>This percentage covers the 220 resolved checks. Report the missing row with it.</td></tr>
          <tr><th scope="row">Confirmed alive in the original batch</th><td>182 ÷ 240 = 75.8%.</td><td>This is the minimum confirmed share alive. Close the outstanding checks before reporting a final batch percentage.</td></tr>
          <tr><th scope="row">Replacements alive</th><td>16 of 18 in the later batch.</td><td>Keep these in the replacement record and out of the original survival calculation.</td></tr>
        </tbody>
      </table>
    </div>
    <p>The field lead marks the unvisited row on the map, records why access was limited and sets a new visit window. The funder receives the original total and its status breakdown alongside the replacement record, the register reference and the name of the person following up. The maintenance team can check whether confirmed losses cluster near an irrigation or protection problem before ordering more replacements.</p>

    <h2 id="plantation-impact-evidence">Use the evidence for the decisions it supports</h2>
    <p>Planting registers, survival checks and maintenance records help a team review work completed and tree establishment. To assess ecological recovery, start with a <a href="/blog/biodiversity-baseline-assessment">biodiversity baseline</a> and agree what changes in habitat or species will be measured. For community outcomes such as income or participation, a social impact assessment needs its own questions, evidence from affected people and a way to examine what contributed to the change.</p>
    <p>Download the <a href="/resources/csr-plantation-monitoring-checklist.txt" download>editable CSR plantation monitoring checklist</a> and bring it to your next partner review. Use the <a href="/blog/restoration-monitoring-plan">restoration monitoring guide</a> to plan field visits and follow-up actions. If you have sites and planting records ready to review, <a href="/get-started?interest=restoration-monitoring&amp;source=csr-plantation-guide">discuss your plantation monitoring needs with Mynzo</a>.</p>
  `,
};
