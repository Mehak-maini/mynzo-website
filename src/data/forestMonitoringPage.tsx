import type { PlatformPageData } from '@/components/PlatformPage.types';

export const forestMonitoringPage: PlatformPageData = {
  path: '/platform/forest-monitoring',
  metadataTitle: 'Satellite Forest Monitoring Software | Mynzo Carbon',
  description: 'Assess forest change, canopy condition and carbon with satellite imagery and field data. Explore Mynzo forest monitoring for forest and agroforestry projects.',
  eyebrow: 'Forest monitoring',
  title: 'Satellite forest monitoring',
  summary: 'Understand what is changing across your forest sites, where field checks are needed, and what the evidence can support.',
  heroImage: '/hero-poster.webp',
  heroAlt: 'Illustration of a satellite observing a forested landscape',
  heroCaption: 'Illustration of satellite observation. Project analysis uses site-specific data.',
  overview: {
    title: 'What is forest monitoring?',
    text: 'Forest monitoring measures how a defined forest area changes over time. Satellite observations help locate changes in tree cover and canopy condition. Field measurements help explain those changes and check estimates. Together, they support decisions about forest management, restoration and carbon measurement.',
  },
  sections: [
    {
      id: 'what-mynzo-monitors',
      title: 'Connect forest observations to a project decision',
      body: (
        <>
          <p>Mynzo combines satellite imagery, machine learning and ground-truth field data to assess forest condition, track change and support carbon analysis. The platform serves project developers, corporate teams and institutions managing nature assets.</p>
          <p>Start with a question your team needs to answer. Which part of a restoration site needs inspection? Has tree cover changed inside a project boundary? Is the evidence sufficient to compare two monitoring periods? Each question requires its own data, time window and checks.</p>
          <p>A forest-monitoring project can include canopy and land-cover assessment, changes through time, and biomass or carbon analysis where the available evidence supports it. Agree the required measurements with Mynzo before choosing a monitoring schedule.</p>
        </>
      ),
    },
    {
      id: 'monitoring-workflow',
      title: 'Build the monitoring workflow around your land',
      body: (
        <ol className="platform-steps">
          <li><h3>Define the area and the starting point</h3><p>Establish the project boundary, plot identifiers, land-use history and period to assess. Planting dates, past disturbances and existing surveys help distinguish a new change from a condition that was already present.</p></li>
          <li><h3>Check what the imagery can resolve</h3><p>Review suitable observations for the location and dates. Image detail, cloud cover and the size of the feature being measured determine which questions are answerable. The satellite acquisition date should be visible beside any comparison.</p></li>
          <li><h3>Compare observations and investigate differences</h3><p>Assess changes against an appropriate reference period. A shift in canopy condition needs interpretation: seasonal growth, harvesting, fire and damage can produce different management responses. Use site records and field observations to investigate the cause.</p></li>
          <li><h3>Check the result and record the next action</h3><p>Compare findings with relevant field measurements, record uncertainty and identify unresolved areas. Decide whether the next step is another observation, a site visit, a management response or a more detailed carbon assessment.</p></li>
        </ol>
      ),
    },
    {
      id: 'useful-outputs',
      title: 'Specify outputs your team can use',
      body: (
        <>
          <p>Agree the contents and delivery format during project scoping. A useful monitoring output should connect a location and a date to a finding your team can review.</p>
          <div className="platform-table-wrap">
            <table>
              <caption>What to request for each monitoring decision</caption>
              <thead><tr><th scope="col">Decision</th><th scope="col">Evidence to include</th></tr></thead>
              <tbody>
                <tr><th scope="row">Where has tree cover changed?</th><td>Boundary, reference and comparison dates, mapped change, and areas with insufficient observations.</td></tr>
                <tr><th scope="row">Where should a field team look?</th><td>Locations requiring review, the observed change, supporting imagery and the question to check on site.</td></tr>
                <tr><th scope="row">Can carbon estimates be compared?</th><td>Measured carbon pool, units, method, time period, field references and uncertainty.</td></tr>
                <tr><th scope="row">Can another analyst check the finding?</th><td>Data sources, processing assumptions, boundary version, quality checks and an agreed way to access the results.</td></tr>
              </tbody>
            </table>
          </div>
          <p>If your team works in GIS or a reporting system, describe the files and fields it needs at the outset. Confirm export and integration requirements as part of the scope.</p>
        </>
      ),
    },
    {
      id: 'measurement-limits',
      title: 'Understand what a forest map can establish',
      body: (
        <>
          <h3>Tree-cover loss needs context</h3>
          <p>A reduction in tree cover can reflect harvesting, natural disturbance or conversion to another land use. It does not establish the cause on its own. <a href="https://www.globalforestwatch.org/blog/data-and-tools/2025-tree-cover-loss-data-explained/">Global Forest Watch explains how tree-cover loss differs from deforestation</a>, including the role of definitions and observation periods.</p>
          <h3>Clouds and small plots change the assessment</h3>
          <p>Clouds can leave gaps in optical observations. Radar offers a different source of information, but still needs suitable analysis. <a href="https://eo4society.esa.int/projects/soft/">ESA&apos;s tropical forest-monitoring research</a> describes this distinction. For small plots, narrow tree rows and young plantations, check whether the imagery can separate the feature of interest from its surroundings.</p>
          <h3>Biomass estimates need a reference</h3>
          <p>Biomass is estimated through models and supporting measurements. The <a href="https://gedi.umd.edu/science/calibration-validation/">GEDI mission&apos;s calibration work</a>, for example, connects field inventories with lidar observations. The relevant question for your project is how the method was checked on comparable forests, at the scale you need. An estimate should state its uncertainty.</p>
        </>
      ),
    },
    {
      id: 'india-and-global-projects',
      title: 'Scope projects in India and other markets',
      body: (
        <>
          <p>The following are project-planning examples. They show the questions to resolve before monitoring begins.</p>
          <div className="platform-pair">
            <div><h3>Dispersed plots in India</h3><p>For an agroforestry or plantation programme, keep each plot linked to its boundary, planting record and field observations. Assess whether young trees can be distinguished from crops and surrounding vegetation. Plan observation windows around local seasons and cloud conditions. A total for the programme should preserve the differences between its plots.</p></div>
            <div><h3>A forest portfolio across countries</h3><p>Set common reporting definitions while checking each location separately. Forest type, season, available imagery and field coverage can differ between sites. Compare like-for-like periods and measurements before combining results. Confirm local data access and the work required on the ground for every proposed location.</p></div>
          </div>
          <p>Share the geography early. Coverage, measurement detail, reporting frequency and field requirements should be established for the actual sites.</p>
        </>
      ),
    },
    {
      id: 'project-brief',
      title: 'Bring a clear brief to the first discussion',
      body: (
        <>
          <p>You can start with a location and an outline of the project. The following information makes the assessment more useful:</p>
          <ul>
            <li>Country, approximate area, number of plots and any boundary files.</li>
            <li>Forest or planting type, planting dates and known land-use changes.</li>
            <li>The decision you need to make and the period you need to assess.</li>
            <li>Available field measurements, site access and the team responsible for follow-up.</li>
            <li>Required reporting dates and how the results will be reviewed.</li>
          </ul>
          <p>If the work will support carbon reporting, also describe the project&apos;s methodology and evidence requirements. See how monitoring connects to <a href="/platform/digital-mrv">Mynzo&apos;s digital MRV workflow</a>.</p>
        </>
      ),
    },
  ],
  faqs: [
    {
      question: 'What is forest tracking?',
      answer: 'Forest tracking usually means following changes in a defined forest area across repeated observations. For a project, specify what is being tracked: tree cover, canopy condition, disturbance or carbon estimates. Each measure needs a clear reference date and a consistent method.',
    },
    {
      question: 'Can satellite monitoring replace field visits?',
      answer: 'Satellite observations can help focus visits on areas that need attention. Field work remains important for checking causes of change, recording measurements that imagery cannot supply and evaluating model estimates. Mynzo includes ground-truth field data in its monitoring approach.',
    },
    {
      question: 'Can small plantations and individual trees be monitored?',
      answer: 'This depends on plot size, tree spacing, canopy development, image detail and the measurement required. Assess a representative area before extending the approach across a programme. Individual-tree counts and species identification require their own evidence of suitability.',
    },
    {
      question: 'How often can a forest monitoring report be updated?',
      answer: 'The useful reporting interval depends on available observations, cloud conditions, processing and field checks. A satellite revisit does not guarantee a usable image or a completed report. Agree a schedule for the project and how gaps will be reported.',
    },
    {
      question: 'How do I check the accuracy of a forest monitoring result?',
      answer: 'Ask which measurement was tested, which reference data were used, how independent the checks were and whether the test represents your forest type and plot size. Ask for uncertainty as well as an explanation of missing observations and known failure conditions.',
    },
  ],
  relatedLinks: [
    { href: '/platform/digital-mrv', title: 'Digital MRV for forest projects', description: 'Follow monitoring evidence through measurement, reporting and independent review.' },
    { href: '/blog/how-ai-is-revolutionising-forest-carbon-accounting', title: 'Forest carbon accounting', description: 'Read about biomass, carbon estimates and the role of satellite analysis.' },
    { href: '/platform/biodiversity-monitoring', title: 'Biodiversity monitoring', description: 'Connect forest habitat observations with ecological evidence.' },
  ],
  cta: {
    title: 'Discuss your forest monitoring project',
    text: 'Tell us where your sites are and what you need to measure. We can discuss the data, field work and reporting needed to assess the project.',
    label: 'Discuss your project',
    href: '/get-started?interest=forest-monitoring&source=forest-monitoring',
  },
};
