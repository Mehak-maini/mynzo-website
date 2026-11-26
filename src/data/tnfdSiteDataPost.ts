import type { StaticPost } from './blogPosts';

export const tnfdSiteDataPost: StaticPost = {
  slug: 'tnfd-site-data-checklist',
  tag: 'Biodiversity',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'TNFD Site Data Checklist for Sustainability Teams',
  excerpt: 'Prepare site locations, ecosystem context and dated evidence for a nature assessment. Includes a worked example and an editable checklist.',
  date: 'November 26, 2026',
  updatedAt: '2026-11-26',
  readTime: '8',
  img: '/images/education/covers/deforestation-carbon-cycle.webp',
  imgAlt: 'Satellite image of branching clearings in the forest of Rondônia, Brazil, in August 2007',
  imgCredit: {
    title: 'Forest clearings in Rondônia, Brazil, 12 August 2007',
    author: 'Jesse Allen and Robert Simmon, NASA Earth Observatory',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Fires_and_Deforestation_on_the_Amazon_Frontier,_Rondonia,_Brazil_-_August_12,_2007.jpg',
    license: 'Public domain (NASA)',
    licenseUrl: 'https://commons.wikimedia.org/wiki/File:Fires_and_Deforestation_on_the_Amazon_Frontier,_Rondonia,_Brazil_-_August_12,_2007.jpg#Licensing',
  },
  author: 'Mynzo Team',
  content: `
    <p>Start with a list of the places your organisation operates in or sources from, the activity at each place and the best location evidence you have. Give each site a stable identifier. Record the ecosystem context, dated observations and possible dependencies or impacts, then assign someone to resolve the gaps. The <a href="/resources/tnfd-site-data-checklist.txt" download>editable TNFD site data checklist</a> gives site and reporting teams a shared way to capture those records.</p>
    <p>This guide covers evidence preparation for an assessment using the Taskforce on Nature-related Financial Disclosures (TNFD) LEAP approach. Its four phases are Locate, Evaluate, Assess and Prepare. The records here can help the assessment team locate activities and investigate how they interact with nature. The full assessment and disclosure also cover topics such as materiality, strategy, governance, and metrics and targets. <a href="https://tnfd.global/publication/additional-guidance-on-assessment-of-nature-related-issues-the-leap-approach/">TNFD LEAP guidance v2.0, October 2026</a> and <a href="https://tnfd.global/publication/recommendations-of-the-taskforce-on-nature-related-financial-disclosures/">TNFD Recommendations, October 2026</a></p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#tnfd-location">Define the location and activity</a></li>
      <li><a href="#tnfd-fields">Agree the fields each site will use</a></li>
      <li><a href="#tnfd-worked-example">Follow a worked example in India</a></li>
      <li><a href="#tnfd-supply-chain">Record gaps in global supply chains</a></li>
      <li><a href="#tnfd-review">Check the evidence before handover</a></li>
      <li><a href="#tnfd-questions">Common questions</a></li>
    </ul></nav>

    <h2 id="tnfd-location">Define the location and the activity first</h2>
    <p>A head office address rarely answers a question about a farm, forest or processing site. Check what each location represents. Record whether it is a surveyed boundary, a point for a facility, an approximate sourcing area or a place the team has yet to trace. Keep the file reference, version, date, source and coordinate system with any map geometry you share.</p>
    <p>Keep the operational boundary and the area you need to consider separately. A facility boundary can show where equipment sits while a catchment map helps the team investigate the sources of water that the facility uses. Ask the assessment team to record why each area is relevant and update the scope if the evidence points beyond the original boundary. <a href="https://tnfd.global/publication/additional-guidance-on-assessment-of-nature-related-issues-the-leap-approach/">TNFD LEAP guidance, Locate and Evaluate chapters</a></p>

    <h2 id="tnfd-fields">Agree the fields for each site, observation and question</h2>
    <p>Use one record for each site, then link as many observations and questions as you need by site ID. That structure lets you keep an older survey and a newer map with their own dates and methods. Use the following fields as a starting point and adapt them with your assessment team.</p>
    <div class="blog-table-wrap" role="region" aria-label="TNFD site data checklist fields" tabindex="0">
      <table>
        <caption>A practical data dictionary for site evidence</caption>
        <thead><tr><th scope="col">Field</th><th scope="col">What to record</th><th scope="col">Check before using it</th></tr></thead>
        <tbody>
          <tr><th scope="row">Site and activity</th><td>Stable ID, activity, country, local area, direct operation or value-chain relationship, record owner.</td><td>Confirm the location matches the activity being assessed.</td></tr>
          <tr><th scope="row">Boundary and area of interest</th><td>Geometry type, file and version, effective date, coordinate system, source and location precision. Link any separate catchment or assessment area.</td><td>Make clear which areas are surveyed and which are approximate.</td></tr>
          <tr><th scope="row">Ecosystem context</th><td>Habitat or ecosystem classes, classification used, map source and date, nearby features relevant to the activity.</td><td>Flag mapped classes that the site team has not checked.</td></tr>
          <tr><th scope="row">Observation</th><td>Observation ID, metric, value or description, unit, dates, method, coverage and source file.</td><td>Say whether it is a direct measurement, modelled result or proxy. Mark the coverage or accuracy limit and any comparison restriction.</td></tr>
          <tr><th scope="row">Dependency or impact question</th><td>Activity, ecosystem service relied on or possible effect on nature, supporting record, other plausible drivers and evidence still needed.</td><td>Keep potential pathways open for assessment until there is enough evidence to evaluate them.</td></tr>
          <tr><th scope="row">Evidence gap and follow-up</th><td>Missing item, reason, what decision it affects, next action, owner and due date.</td><td>Use a clear status such as unobserved, estimated or awaiting review. Reserve zero for a value supported by the method and evidence.</td></tr>
        </tbody>
      </table>
    </div>
    <p>State where the evidence came from as well as how it was produced. A regional model prepared for a different purpose is secondary evidence. If you use it as a stand-in for a measurement you lack, say what it approximates and why it is suitable for that decision. The assessment team can then decide whether to use it for initial screening or seek more specific evidence. <a href="https://tnfd.global/wp-content/uploads/2026/10/26-30384-LEAP-Guidance-2.0_DIGITAL.pdf#page=155">TNFD LEAP guidance on data availability and quality</a></p>
    <p>The October 2026 Recommendations specify distinct core global disclosure metrics for ecosystem extent (C5.0), ecosystem condition (C5.1) and species extinction risk (C5.2). Ask your assessment team which methods, spatial scales and records it needs for the relevant disclosures. The working fields above help the team trace its inputs and document uncertainty. <a href="https://tnfd.global/wp-content/uploads/2026/10/Recommendations-of-the-TNFD_October-2026_DIGITAL.pdf#page=103">TNFD Recommendations, Table 4</a></p>

    <h2 id="tnfd-worked-example">Worked example for a processing site in India</h2>
    <p>Imagine a food processor in western India preparing for a review of dry-season water supply. Its records include a facility boundary, meter readings in cubic metres and a regional map showing a seasonal stream nearby. The team wants to understand the facility’s dependence on water supply and whether any of its activities may affect the stream.</p>
    <ul>
      <li><strong>Site record.</strong> Assign the facility ID IN-01, link the current boundary with its effective date and record the water source separately. Keep the stream and catchment layer as context for the assessment.</li>
      <li><strong>Observation record.</strong> Attach the meter log with its reading dates, units and missing days. Record which intake or process the meter covers. Keep the map date and scale on the separate stream record.</li>
      <li><strong>Questions for review.</strong> Ask how the process depends on water being available in the dry season. For a possible stream impact, ask whether the site drains to the stream and what evidence would establish a connection. Record rainfall and other local water uses if they could affect the interpretation.</li>
      <li><strong>Follow-up.</strong> Ask the facilities lead to confirm the water source and inspect the drainage plan. Send the assessment lead the two open questions with the meter and map records attached.</li>
    </ul>
    <p>The meter measures water use at the point it covers. The map shows the stream’s recorded location. Together they help the team plan the next checks. A conclusion about a change in stream condition would need evidence from the stream and an assessment of what drove that change.</p>

    <h2 id="tnfd-supply-chain">Show what you know about supply-chain locations</h2>
    <p>In a second hypothetical example, a company buys timber through an overseas supplier and knows the mill location and broad sourcing region. Keep the mill location in the register and link the sourcing region as a separate record with its own precision and evidence. Ask procurement which supplying areas can be confirmed for the period. Any map or estimate used while those origins are unresolved should carry that limitation.</p>
    <p>Report coverage using the scope you agreed. If you track the share of purchasing volume traced to sites, carry the total volume and reporting period with the figure. Sites traced to boundaries and volumes known only by region can be useful at different stages. A listed location may warrant follow-up, while the assessment team determines how it fits TNFD’s criteria for sensitive or material locations. <a href="https://tnfd.global/recommendations/">TNFD Strategy D recommendation</a></p>

    <h2 id="tnfd-review">Check that someone else can follow the evidence</h2>
    <ol>
      <li>Choose one finding in the review and follow it back to the site, original file, observation period and method.</li>
      <li>Check that any comparison uses compatible boundaries, definitions and dates. If a boundary changed, explain how the change affects the comparison.</li>
      <li>Keep assumptions, uncertainty and sites without evidence visible in the summary. Assign a follow-up where the gap could change a decision.</li>
      <li>Agree who can review or share each record. Put confidential site details and sensitive ecological records in a controlled evidence folder.</li>
    </ol>
    <p>When the team needs new ecological fieldwork, use the <a href="/blog/biodiversity-baseline-assessment">biodiversity baseline assessment guide</a> to define the survey question, timing and handover. For a programme spanning multiple sites, see how to connect site evidence to a <a href="/solutions/corporate-nature-monitoring">corporate monitoring review</a>.</p>

    <h2 id="tnfd-questions">Common questions about TNFD site evidence</h2>
    <h3>Do we need a polygon for every site before we can start?</h3>
    <p>Begin with the best available locations and label their precision. If a decision depends on a boundary or an ecosystem overlap, identify who can confirm that geometry and what evidence they need.</p>
    <h3>Can satellite imagery provide all the nature evidence for a site?</h3>
    <p>Imagery can help describe visible habitat features and changes when the dates and scale suit the question. Some questions need site records, ecological surveys or other measurements. The <a href="/platform/biodiversity-monitoring">biodiversity monitoring guide</a> explains how to plan the two kinds of evidence together.</p>
    <h3>Is this checklist a TNFD disclosure template?</h3>
    <p>It is a working register for site evidence. Reporting teams use the wider TNFD recommendations to assess what to disclose and to prepare the organisation’s reporting. <a href="https://tnfd.global/recommendations/">TNFD disclosure recommendations</a></p>

    <p><a href="/resources/tnfd-site-data-checklist.txt" download>Download the editable TNFD site data checklist</a>. When your team needs dated habitat observations or field checks for specific sites, bring the site list, the question under review and the date you need answers. <a href="/get-started?interest=biodiversity-monitoring&amp;source=tnfd-site-data-guide">Discuss your site evidence brief</a></p>
  `,
};
