import React from 'react';
import type { PlatformPageData } from '@/components/PlatformPage.types';

export const projectDevelopersPage: PlatformPageData = {
  path: '/solutions/project-developers',
  metadataTitle: 'Forest Monitoring for Project Developers | Mynzo Carbon',
  description: 'Scope forest monitoring for carbon and restoration projects. Review boundaries, field data, reporting needs and evidence gaps with Mynzo Carbon.',
  eyebrow: 'For project developers',
  title: 'Forest monitoring for project developers',
  summary: 'Know what is happening across your sites and what evidence your next project decision needs. Mynzo supports forest and carbon monitoring with satellite analysis and field data, from an initial site review to monitoring an established project.',
  updatedAt: '2026-09-18',
  breadcrumbParent: { name: 'Who we serve', href: '/#who-we-serve' },
  heroImage: '/Asset_analysis.png',
  heroImageFit: 'contain',
  heroAlt: 'Forest fieldwork photographs showing a marked tree, a trunk measurement and leaves',
  heroCaption: 'Field observations help connect an analysis with conditions at the site.',
  overview: {
    title: 'What monitoring support does a project developer need?',
    text: 'Forest project developers need observations they can connect to defined areas, dates and methods. Mynzo helps teams assess forest condition, change and carbon estimates within an agreed scope. Monitoring supports project decisions and reporting; project design, land rights, financing, validation and credit issuance involve additional responsibilities.',
  },
  sections: [
    {
      id: 'project-stage',
      title: 'Start with the decision in front of you',
      body: <>
        <p>For a new project, the immediate question may be whether the available land records and observations are enough to plan further work. For an established project, it may be where conditions have changed or which measurements need updating before a report.</p>
        <p>Agree the intended use before commissioning analysis. A site screening, an operational update and evidence for a crediting programme have different requirements. Ask Mynzo to confirm which questions the available data can answer, which need fieldwork and which sit outside the engagement.</p>
        <p>One developer in Assam asked, <q>do we need to get some sort of verification first?</q> in a <a href="https://www.reddit.com/r/CarbonCredits/comments/1lk5kj6/how_to_get_started_with_project_development_need/">public project-development discussion</a>. In the <a href="https://verra.org/programs/verified-carbon-standard/project-description-and-monitoring-report/">VCS process</a>, validation assesses the project design; verification assesses monitored outcomes. They are distinct assessments, although a project may combine them in one review.</p>
      </>,
    },
    {
      id: 'boundaries-baselines',
      title: 'Separate the mapped area from the carbon baseline',
      body: <>
        <p>A boundary says where the analysis applies. Record its version, excluded areas and the dates when sites entered or left the project. Otherwise, a changed project footprint can distort a comparison between reporting periods.</p>
        <p>A carbon baseline describes the scenario against which project outcomes are assessed under the selected method. Historical imagery can provide relevant observations, but it does not establish that scenario on its own. Verra’s <a href="https://verra.org/programs/verified-carbon-standard/project-description-and-monitoring-report/">project-description guidance</a> also requires the proponent to address additionality and define monitored parameters.</p>
        <p>Keep these questions separate in your brief: what area should be measured, what happened there, and what method will be used to assess the project’s contribution?</p>
      </>,
    },
    {
      id: 'evidence-handoff',
      title: 'Make the evidence useful to the next person',
      body: <>
        <p>A map is more useful when the field team, analyst and reporting lead can identify the records behind it. Use this checklist to discuss the required handover with Mynzo. Confirm the available formats and outputs in the proposal.</p>
        <div className="platform-table-wrap"><table>
          <caption>Questions to resolve before monitoring begins</caption>
          <thead><tr><th scope="col">Evidence</th><th scope="col">What to agree</th></tr></thead>
          <tbody>
            <tr><th scope="row">Site register</th><td>Stable site identifiers, boundary versions, area units and an owner for corrections.</td></tr>
            <tr><th scope="row">Observation record</th><td>Image dates, field dates, data sources and gaps that affect comparison.</td></tr>
            <tr><th scope="row">Analysis</th><td>Definitions, calculation methods, validation evidence and uncertainty.</td></tr>
            <tr><th scope="row">Change review</th><td>Which changes need investigation and how field findings will be recorded.</td></tr>
            <tr><th scope="row">Reporting handover</th><td>Reporting period, reviewer needs, delivery format and responsibility for resolving questions.</td></tr>
          </tbody>
        </table></div>
        <p>The <a href="/platform/digital-mrv">digital MRV guide</a> explains how observations, calculations and review fit together. This checklist helps specify what your project team needs from that work.</p>
      </>,
    },
    {
      id: 'data-gaps',
      title: 'Test the difficult sites before expanding coverage',
      body: <>
        <p>Include different site conditions in a pilot: a small parcel, an older planting, a recently disturbed area and a site with incomplete records, where these occur in your project. Define what a useful result must show and compare it with appropriate reference observations.</p>
        <p>For biomass work, field locations and dates matter. <a href="https://gedi.umd.edu/science/calibration-validation/">GEDI’s calibration guidance</a>, for example, pairs forest inventory with lidar observations and records plot geometry and geolocation accuracy. It illustrates why a reference dataset needs more than a total tree count; its specifications are not a universal project protocol.</p>
        <p>Ask which estimates can be supported now and what additional measurements would change the assessment. Read about <a href="/platform/forest-monitoring">satellite forest monitoring</a> before deciding the coverage and revisit schedule.</p>
      </>,
    },
    {
      id: 'restoration-biodiversity',
      title: 'Give restoration and biodiversity their own measures',
      body: <>
        <p>If your project reports habitat recovery as well as carbon, define both sets of questions at the start. A growing canopy does not, by itself, demonstrate recovery of native species or habitat quality. Agree which habitat observations can inform the assessment and which species questions require ecological surveys.</p>
        <p>Use the <a href="/blog/biodiversity-metrics-for-restoration-projects">restoration metrics guide</a> to prepare a discussion with your ecological team, then explore <a href="/platform/biodiversity-monitoring">biodiversity monitoring</a> with Mynzo. Confirm the indicators, field responsibilities and geographic suitability before committing to a reporting claim.</p>
        <p><a href="https://globalgoals.goldstandard.org/nature-activities-hub/">Gold Standard’s Nature Activities Hub</a> lists methodology, safeguarding and stakeholder requirements separately. A monitoring contract should identify the evidence it supplies and the wider project obligations that remain with the developer.</p>
      </>,
    },
    {
      id: 'india-global',
      title: 'Plan around the sites you actually manage',
      body: <div className="platform-pair">
        <div><h3>India: distributed farm and plantation sites</h3><p>For a programme across separate holdings, ask how parcels, planting dates and field records will be matched. Identify who can resolve a boundary discrepancy and revisit a plot. Plan measurements around local access and seasonal conditions. These are scoping considerations, not evidence that every planting qualifies for carbon credits.</p></div>
        <div><h3>Global portfolios: comparable, local evidence</h3><p>Use common units and reporting definitions across countries while retaining each site’s method, season and limitations. Check whether reference data represents the local vegetation. Start with representative sites and confirm monitoring coverage before expanding a portfolio engagement.</p></div>
      </div>,
    },
    {
      id: 'scope-discussion',
      title: 'Prepare a brief the technical team can assess',
      body: <>
        <p>For a first discussion, outline the project in a few points:</p>
        <ul>
          <li><strong>Sites:</strong> country, approximate area, number of parcels and whether mapped boundaries exist.</li>
          <li><strong>Stage:</strong> early assessment, active planting, restoration or ongoing monitoring.</li>
          <li><strong>Decision:</strong> what the next report or site review needs to establish, and by when.</li>
          <li><strong>Records:</strong> available field measurements, previous assessments and major data gaps.</li>
          <li><strong>Method:</strong> selected programme or methodology, if any, and the people responsible for reporting and review.</li>
        </ul>
        <p>Request a scope covering assumptions, fieldwork, deliverables, costs and exclusions. Confirm how unresolved data issues will be handled before relying on a result in a project report.</p>
      </>,
    },
  ],
  faqs: [
    {
      question: 'What is a carbon project developer?',
      answer: 'A carbon project developer organizes a project intended to reduce emissions or remove carbon and manages the work needed under its chosen crediting programme. That can include project design, implementation, documentation and monitoring. The developer may commission specialist analysis and independent assessment rather than perform every task internally.',
    },
    {
      question: 'Can Mynzo finance or certify my project?',
      answer: 'This engagement concerns forest analysis and monitoring evidence. It does not promise project finance, certification, credit buyers or credit issuance. Specify any wider support you need in the enquiry so that responsibilities can be confirmed before work is agreed.',
    },
    {
      question: 'Is it worth discussing a project before all field data is available?',
      answer: 'Yes. Describe the records you have and the decision you need to make. An initial discussion can identify what needs checking before analysis is scoped. Estimates may remain limited until suitable field observations are available; incomplete records should be disclosed rather than treated as measured evidence.',
    },
    {
      question: 'Can an existing monitoring programme use Mynzo?',
      answer: 'Bring its monitoring plan, data definitions, reporting timetable and known gaps to the discussion. Confirm whether the proposed analysis fits those requirements and who must approve any method change. Using a new provider does not automatically make old and new measurements comparable.',
    },
  ],
  relatedLinks: [
    { href: '/blog/restoration-monitoring-plan', title: 'Build a restoration monitoring plan', description: 'Prepare visit records and handovers your field team can use.' },
    { href: '/platform/forest-monitoring', title: 'Forest monitoring', description: 'Understand the observations and checks available for your sites.' },
    { href: '/platform/digital-mrv', title: 'Digital MRV', description: 'Follow the evidence from measurement through reporting and independent review.' },
    { href: '/platform/biodiversity-monitoring', title: 'Biodiversity monitoring', description: 'Connect habitat observations with the ecological questions your project asks.' },
  ],
  cta: {
    title: 'Discuss your project’s monitoring needs',
    text: 'Tell us where your sites are, what records you have and the decision or report you are preparing for.',
    label: 'Share your project brief',
    href: '/get-started?interest=forest-monitoring&source=project-developers',
  },
};
