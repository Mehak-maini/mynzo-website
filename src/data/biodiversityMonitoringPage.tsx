import type { PlatformPageData } from '@/components/PlatformPage.types';
import { PUBLIC_PAGE_UPDATED_AT } from '@/lib/seo';

export const biodiversityMonitoringPage: PlatformPageData = {
  path: '/platform/biodiversity-monitoring',
  updatedAt: PUBLIC_PAGE_UPDATED_AT['/platform/biodiversity-monitoring'],
  metadataTitle: 'Biodiversity Monitoring for Forest Projects | Mynzo Carbon',
  description: 'Plan biodiversity monitoring with forest observations and ecological field evidence. Define habitat baselines, review change and scope your project with Mynzo.',
  eyebrow: 'Biodiversity monitoring',
  title: 'Biodiversity monitoring for forest projects',
  summary: 'Connect changes in forest habitat to the ecological evidence your project needs. Know what the map shows, what needs a survey, and where to act.',
  heroImage: '/remote_ecosytem_mangrooves.png',
  heroImageFit: 'contain',
  heroAlt: 'Mangrove trees with branching roots and a dense green canopy',
  heroCaption: 'A habitat includes more than its canopy. Monitoring should reflect the ecosystem and the question being asked.',
  overview: {
    title: 'What is biodiversity monitoring?',
    text: 'Biodiversity monitoring follows changes in habitats, species or other ecological characteristics through repeated observations. A useful programme defines the area, the measurements, the starting condition and the decisions the evidence will inform. Satellite observations can track aspects of habitat change. Ecological field surveys provide evidence that a forest map cannot supply on its own.',
  },
  sections: [
    {
      id: 'where-mynzo-fits',
      title: 'Start with the decision your team needs to make',
      body: (
        <>
          <p>Is a restoration site developing as intended? Which forest patches need closer inspection? What can your team support in its next biodiversity report? These are different questions, with different evidence requirements.</p>
          <p>Mynzo combines satellite forest observations, machine learning and ground-truth field data. For a biodiversity project, scope the forest-monitoring contribution around canopy condition, forest-cover change and locations that need investigation. Start with the observations needed from Mynzo, the surveys your ecology team will carry out and the records both teams will use at review.</p>
          <p>The <a href="https://geobon.org/ebvs/working-groups/ecosystem-structure/">GEO BON ecosystem structure framework</a> connects observations of physical ecosystem characteristics with biodiversity monitoring. Structure is one part of that work. A complete biodiversity assessment may also need information about species, ecological processes and pressures on the site.</p>
        </>
      ),
    },
    {
      id: 'habitats-and-species',
      title: 'Separate habitat observations from species evidence',
      body: (
        <>
          <p>Specify the question before choosing a dataset. The following distinctions help project teams commission work and interpret the result.</p>
          <div className="platform-table-wrap">
            <table>
              <caption>Evidence to discuss when defining a biodiversity monitoring scope</caption>
              <thead><tr><th scope="col">Project question</th><th scope="col">Useful evidence</th><th scope="col">What still needs checking</th></tr></thead>
              <tbody>
                <tr><th scope="row">Has the habitat area changed?</th><td>Comparable land-cover maps, boundaries, dates and a stated classification method.</td><td>Whether mapped classes correspond to the habitat of interest and how classification errors affect the result.</td></tr>
                <tr><th scope="row">Is the habitat becoming more fragmented?</th><td>Changes in the size and arrangement of mapped patches.</td><td>Whether those changes affect the species or ecological processes your project is concerned with.</td></tr>
                <tr><th scope="row">Are native species recovering?</th><td>Repeat ecological surveys using suitable methods for the target species or groups.</td><td>Survey effort, season, identification quality and the likelihood of detecting the species.</td></tr>
                <tr><th scope="row">Is management improving site condition?</th><td>Habitat observations, field assessments, intervention records and a defined reference.</td><td>Other possible causes of change and evidence gaps before attributing improvement to the intervention.</td></tr>
              </tbody>
            </table>
          </div>
          <p><a href="https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Space_for_Earth/Four_ways_that_space_is_changing_ecosystem_monitoring">ESA&apos;s ecosystem-monitoring projects</a> demonstrate satellite measures such as habitat fragmentation, vegetation seasonality and canopy chlorophyll. These describe particular ecosystem characteristics. They are not interchangeable with a count of species living at a site.</p>
          <p>More tree cover can be useful evidence for a forest project, but it does not by itself show that native species have returned. Assess the ecological outcome against the project&apos;s stated goal.</p>
          <p>Before commissioning a baseline, use our <a href="/blog/habitat-mapping">habitat mapping guide</a> to define the map classes, observation dates and field checks. It includes an editable brief for agreeing what the delivered map needs to show.</p>
        </>
      ),
    },
    {
      id: 'baseline-to-review',
      title: 'Build a record that can be compared over time',
      body: (
        <ol className="platform-steps">
          <li><h3>Describe the site before selecting indicators</h3><p>Record its boundary, habitats, previous land use and known pressures. Identify who uses the land and who holds relevant ecological knowledge. Start from a dated baseline and document which parts of the site or species groups have not been assessed.</p></li>
          <li><h3>Pair each measurement with an evidence source</h3><p>Use suitable imagery for landscape observations and agree field methods with the ecological team. Give every measurement a unit, a location, a collection method and a responsible person. Confirm which parts Mynzo will deliver and which require specialist survey work.</p></li>
          <li><h3>Repeat observations under comparable conditions</h3><p>Plan around local seasons and the characteristics of the organisms being monitored. Preserve records of survey effort, observation dates and data gaps. A change in how thoroughly a site was surveyed can change the species recorded without establishing a change in the underlying population.</p></li>
          <li><h3>Review the finding and decide what follows</h3><p>Investigate changes alongside field evidence and management records. Record the interpretation, its limits and the next action. The response might be a targeted visit, a change in management or more evidence before drawing a conclusion.</p></li>
        </ol>
      ),
    },
    {
      id: 'evidence-for-review',
      title: 'Agree the deliverables before monitoring begins',
      body: (
        <>
          <p>Use these four outputs to discuss the scope with Mynzo and your ecology team. Assign each output to a responsible person, agree its format and record any specialist work needed. The final proposal should state which outputs are included.</p>
          <div className="platform-table-wrap" role="region" aria-label="Biodiversity monitoring deliverables" tabIndex={0}>
            <table>
              <caption>A proposed handover structure for a biodiversity monitoring cycle</caption>
              <thead><tr><th scope="col">Output to agree</th><th scope="col">What the record should contain</th><th scope="col">Question it helps resolve</th></tr></thead>
              <tbody>
                <tr><th scope="row">Baseline record</th><td>Boundary version, habitat classes, observation dates, field references and evidence gaps.</td><td>What starting condition can the project actually support?</td></tr>
                <tr><th scope="row">Change review</th><td>Comparable observations, units, methods, validation and uncertainty for each reported change.</td><td>Which differences need investigation before interpretation?</td></tr>
                <tr><th scope="row">Field follow-up list</th><td>Mapped locations, the unresolved question, required survey and responsible team.</td><td>Where should the next visit focus, and what must it establish?</td></tr>
                <tr><th scope="row">Management review note</th><td>Finding, supporting evidence, limitations, agreed action and next review date.</td><td>Is there enough evidence to act, or is more work needed?</td></tr>
              </tbody>
            </table>
          </div>
          <p>For example, an apparent canopy reduction can become a mapped field-check request. Keep its cause unresolved until the relevant evidence is reviewed; the observation alone does not establish species loss or a management failure. This is an illustrative review step, not a Mynzo project result.</p>
          <p>For restoration programmes, <a href="https://www.fao.org/sustainable-forest-management/toolbox/tools/tool-detail/en/c/1255095/">FAO&apos;s restoration monitoring guide</a> starts with goals and constraints before selecting indicators. Decide what success would mean at your site before choosing a dashboard measure.</p>
          <p>Our <a href="/blog/biodiversity-metrics-for-restoration-projects">guide to biodiversity metrics for restoration projects</a> explains how to select measurements. If the work also supports a carbon project, keep its carbon accounting and biodiversity findings distinct within the <a href="/platform/digital-mrv">measurement and reporting workflow</a>.</p>
        </>
      ),
    },
    {
      id: 'india-and-global-sites',
      title: 'Use a shared approach with local ecological context',
      body: (
        <>
          <div className="platform-pair">
            <div><h3>Forest and restoration sites in India</h3><p>Plan for the actual habitat mosaic, survey season and history of the land. A programme spanning natural forest, planted areas and agricultural edges needs to retain those differences. As a documented example, <a href="https://www.iirs.gov.in/geoweb-services">India&apos;s landscape biodiversity assessment</a> combined satellite vegetation information, mapped disturbance and fragmentation, and georeferenced field plots. Regional mapping can inform a site assessment; current local evidence is still needed.</p></div>
            <div><h3>Portfolios across other markets</h3><p>Use common reporting fields while allowing methods to reflect the habitat and target species. <a href="https://www.nature.scot/professional-advice/protected-areas-and-species/protected-areas/site-condition-monitoring">NatureScot&apos;s monitoring programme</a>, for example, assesses defined habitats and species features alongside pressures and management conditions. For a wider portfolio, record these local differences before comparing or combining site results.</p></div>
          </div>
          <p>These are examples of monitoring practice, not Mynzo case studies. Geography, ecological expertise and data availability should inform the proposed work at each location.</p>
        </>
      ),
    },
    {
      id: 'scope-your-project',
      title: 'Bring the ecological question to the first discussion',
      body: (
        <>
          <p>Share the country, approximate area, habitat type and the change you need to understand. Include any existing surveys, boundary files, restoration plans and reporting dates. Explain whether the work is for site management, a funder&apos;s review, corporate reporting or another purpose.</p>
          <p>Mynzo can then discuss the forest observations that fit the brief and the field evidence needed alongside them. Confirm the deliverables and any specialist input before work begins. For larger programmes, see our approach for <a href="/solutions/project-developers">project developers</a> and the underlying <a href="/platform/forest-monitoring">forest monitoring workflow</a>.</p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'Does an increase in tree cover prove a biodiversity gain?',
      answer: 'No. Tree cover measures one aspect of a landscape. A biodiversity gain needs evidence relevant to the ecological goal, such as changes in native species, habitat condition or ecological function. The baseline, method and comparison period should be clear.',
    },
    {
      question: 'Can historical imagery provide a biodiversity baseline?',
      answer: 'Historical imagery can help reconstruct land cover and some habitat characteristics for an earlier period. It cannot recreate a species survey that was never carried out. State which baseline measurements are observed, modelled or unavailable, and keep those distinctions in later comparisons.',
    },
    {
      question: 'Why do biodiversity surveys need repeated visits?',
      answer: 'What is recorded depends on season, weather, observer effort and whether organisms are detectable. Repeated visits using a suitable survey design help distinguish a change in observations from an ecological change. The appropriate schedule depends on the habitats and species being assessed.',
    },
    {
      question: 'Can Mynzo support a project that already has an ecology team?',
      answer: 'Bring your existing survey methods, site records and monitoring questions to the scoping discussion. Mynzo can assess how its satellite forest observations and field-data approach could complement that work. Agree responsibilities, data formats and any additional validation required before commissioning the project.',
    },
  ],
  relatedLinks: [
    { href: '/blog/habitat-mapping', title: 'Prepare a habitat mapping brief', description: 'Specify map classes, field checks and the evidence needed at handover.' },
    { href: '/blog/restoration-monitoring-plan', title: 'Plan restoration monitoring', description: 'Connect intervention records, field visits and management decisions.' },
    { href: '/blog/biodiversity-metrics-for-restoration-projects', title: 'Choose biodiversity metrics', description: 'Match restoration goals to measurements, baselines and evidence.' },
    { href: '/solutions/project-developers', title: 'Monitoring for project developers', description: 'Plan the site evidence and reporting a project needs.' },
    { href: '/platform/forest-monitoring', title: 'Satellite forest monitoring', description: 'Understand canopy observations, forest change and field validation.' },
  ],
  cta: {
    title: 'Discuss your biodiversity monitoring needs',
    text: 'Tell us about your sites, ecological goals and existing surveys. We will discuss where forest monitoring can contribute and what evidence the project needs.',
    label: 'Discuss your biodiversity project',
    href: '/get-started?interest=biodiversity-monitoring&source=biodiversity-monitoring',
  },
};
