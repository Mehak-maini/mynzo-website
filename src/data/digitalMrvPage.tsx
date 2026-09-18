import React from 'react';
import type { PlatformPageData } from '@/components/PlatformPage.types';

export const digitalMrvPage: PlatformPageData = {
  path: '/platform/digital-mrv',
  metadataTitle: 'Digital MRV for Forest Carbon Projects | Mynzo Carbon',
  description: 'Connect satellite observations, field evidence and carbon reporting. Explore Mynzo’s digital MRV approach and prepare your project for a technical discussion.',
  eyebrow: 'Digital MRV',
  title: 'Digital MRV for forest carbon projects',
  summary: 'A carbon estimate needs a record of how it was produced. Mynzo combines satellite analysis with ground-truth validation to help project teams understand their forests and the evidence behind their carbon reporting.',
  heroImage: '/asset_control.png',
  heroImageFit: 'contain',
  heroAlt: 'Mynzo platform illustration with a project map, asset records and reporting panels',
  heroCaption: 'Mynzo platform illustration. Displayed figures are illustrative, not independently verified project results.',
  overview: {
    title: 'What is digital MRV?',
    text: 'Digital MRV uses digital tools to collect, check and report the evidence needed to measure and monitor climate outcomes and support verification. For forest projects, that can connect satellite observations, field measurements and carbon calculations. Independent verification remains a separate assessment of the project and its reported results.',
  },
  sections: [
    {
      id: 'mynzo-role',
      title: 'Where Mynzo fits in the project',
      body: <>
        <p>Mynzo’s platform brings together forest health and growth analysis, carbon tracking, observations over time and field data for ground-truth validation. Project developers can use these capabilities to investigate changes and prepare the monitoring evidence their project needs.</p>
        <p>Start with the reporting purpose. An internal plantation review, an investor update and a carbon programme’s monitoring report may need different measurements and checks. Agree the project boundary, method, deliverables and responsible people before choosing a monitoring schedule.</p>
        <p>The <a href="https://www.pmiclimate.org/publication/technical-guidance-note-standardizing-digital-mrv-carbon-markets-system-evaluation">World Bank’s guidance on digital MRV</a> evaluates systems and the stages where digitisation can help. A digital system still needs suitable methods, data quality controls and clear responsibilities.</p>
      </>,
    },
    {
      id: 'evidence-workflow',
      title: 'From observations to a reviewable record',
      body: <>
        <p>Use these five steps to scope a digital MRV engagement with Mynzo. The measurement method and available evidence determine the work required at each stage.</p>
        <ol className="platform-steps">
          <li><h3>Define the area and the question</h3><p>Provide mapped boundaries, project activity, relevant dates and the intended reporting use. Identify the carbon pools being assessed. Record exclusions so that a later boundary change is not mistaken for a change in carbon.</p></li>
          <li><h3>Connect observations with field records</h3><p>Assess suitable imagery alongside the available plot locations, measurement dates and field protocols. Keep an observed tree measurement distinct from an estimate produced by a model. Identify missing or outdated records before analysis begins.</p></li>
          <li><h3>Check the estimates</h3><p>Review spatial alignment, units, date consistency and the model’s suitability for the forest being assessed. Examine uncertainty and compare estimates with appropriate reference measurements. Document changes to assumptions or models so comparisons between periods remain interpretable.</p></li>
          <li><h3>Prepare the reporting evidence</h3><p>Agree which maps, calculations and supporting records the reporting team needs. Specify the reporting period, data sources, method versions and known limitations. Confirm delivery formats and access requirements with Mynzo during scoping.</p></li>
          <li><h3>Support independent review</h3><p>Make the source evidence and explanations available to the appointed reviewer. Resolve questions about measurements and calculations. A monitoring output does not, by itself, establish project eligibility or authorize the issue of credits.</p></li>
        </ol>
      </>,
    },
    {
      id: 'verification',
      title: 'Who is responsible for verification?',
      body: <>
        <p>For a project using Verra’s Verified Carbon Standard, the project proponent prepares monitoring information. An approved validation/verification body assesses the reported outcomes. Verra reviews the request, and issuance follows the programme’s approval process. These are distinct responsibilities in the <a href="https://verra.org/programs/verified-carbon-standard/develop-a-vcs-project/">VCS project lifecycle</a>.</p>
        <div className="platform-table-wrap"><table>
          <caption>Responsibilities to confirm in a carbon project</caption>
          <thead><tr><th scope="col">Party</th><th scope="col">Responsibility</th></tr></thead>
          <tbody>
            <tr><th scope="row">Project team</th><td>Project design, records, monitoring requirements and the reporting submission.</td></tr>
            <tr><th scope="row">Mynzo</th><td>Agreed forest analysis and monitoring evidence within the contracted scope.</td></tr>
            <tr><th scope="row">Independent verifier</th><td>Assessment against the applicable programme and methodology requirements.</td></tr>
            <tr><th scope="row">Crediting programme</th><td>Project review and credit issuance under its own rules.</td></tr>
          </tbody>
        </table></div>
        <p className="platform-callout">A map of carbon stocks is not a credit balance. Crediting also depends on the project’s baseline, additionality, applicable deductions and other programme requirements.</p>
      </>,
    },
    {
      id: 'field-evidence',
      title: 'Field evidence stays part of the method',
      body: <>
        <p>Satellite data and field measurements answer related questions at different scales. A model can extend estimates across an area, but its usefulness depends on the reference data, forest conditions and intended use. Field records help assess whether the estimates are suitable for the project.</p>
        <p><a href="https://play.google.com/store/apps/details?id=com.mynzogrowers">Mynzo Partner</a> supports plantation data collection and geo-tagged photographs across sites. Agree the sampling protocol and the checks required for the intended use of those records.</p>
        <p>The <a href="https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch02_Generic%20Methods.pdf">IPCC’s 2019 inventory guidance</a> describes uncertainty across field, LiDAR and satellite estimates, and the importance of consistent data when comparing biomass through time. It is scientific inventory guidance, not a certification of a commercial platform.</p>
        <p>Before using a carbon estimate in a report, ask which pools it covers, how it was validated and what uncertainty is reported. Confirm where further field measurements are needed. A biomass estimate alone cannot establish soil carbon or every component of a project’s climate benefit.</p>
      </>,
    },
    {
      id: 'project-context',
      title: 'Scope the work for the land and the reporting use',
      body: <div className="platform-pair">
        <div><h3>Projects in India</h3><p>For an agroforestry programme spanning separate farm plots, begin with plot identifiers, boundaries, planting records and the available field measurements. Agree how different planting dates and species will be represented. Confirm the relevant programme and methodology before deciding which observations belong in a carbon report.</p></div>
        <div><h3>Projects across countries</h3><p>For a forest portfolio spanning regions, agree a common reporting structure while retaining each site’s method, measurement period and data limitations. Ask where the analysis needs local reference data. Confirm country coverage and the relevant project requirements with the technical team before extending a pilot.</p></div>
      </div>,
    },
    {
      id: 'project-brief',
      title: 'Bring a project brief to the first discussion',
      body: <>
        <p>A useful brief lets the team assess data availability and the work needed. Include the following:</p>
        <ul>
          <li><strong>Location and extent:</strong> country, mapped boundaries, approximate area and number of separate sites.</li>
          <li><strong>Project history:</strong> land use, planting or restoration dates, species information and known disturbances.</li>
          <li><strong>Existing evidence:</strong> field protocols, measurement dates, plot records, earlier imagery or monitoring reports.</li>
          <li><strong>Reporting needs:</strong> intended audience, reporting period, programme and methodology if selected.</li>
          <li><strong>Delivery needs:</strong> review dates, reporting formats, access permissions and who will answer technical questions.</li>
        </ul>
        <p>Ask Mynzo to confirm supported measurements, geography, field responsibilities, reporting outputs and costs for that scope. A proposal should make those decisions explicit before work begins.</p>
      </>,
    },
  ],
  faqs: [
    {
      question: 'What does MRV stand for in carbon projects?',
      answer: 'MRV stands for measurement, reporting and verification. Some frameworks use monitoring for the first term. Measurement quantifies an outcome, monitoring follows it over time, reporting documents it, and verification assesses the reported evidence against defined requirements.',
    },
    {
      question: 'Does digital MRV mean credits are issued automatically?',
      answer: 'No. Digital tools can support data collection, calculations and review. Credit issuance depends on the applicable programme’s rules and approval process. A platform estimate or forecast is not an issued carbon credit.',
    },
    {
      question: 'Can the same digital MRV setup be used for every project?',
      answer: 'The required evidence depends on the project activity, geography, carbon pools, methodology and reporting purpose. Reusing a reporting structure can help, but data suitability and validation need to be assessed for each project.',
    },
  ],
  relatedLinks: [
    { href: '/platform/forest-monitoring', title: 'Satellite forest monitoring', description: 'Explore the observations that inform a forest monitoring programme.' },
    { href: '/blog/how-ai-is-revolutionising-forest-carbon-accounting', title: 'Forest carbon accounting', description: 'Read how biomass, carbon stocks and changes over time are connected.' },
    { href: '/solutions/project-developers', title: 'For project developers', description: 'Define monitoring scope, evidence handover and project responsibilities.' },
  ],
  cta: {
    title: 'Define the evidence your project needs',
    text: 'Share your project location, available data and reporting requirements. Discuss the analysis and field evidence needed with Mynzo.',
    label: 'Discuss your MRV requirements',
    href: '/get-started?interest=digital-mrv&source=digital-mrv',
  },
};
