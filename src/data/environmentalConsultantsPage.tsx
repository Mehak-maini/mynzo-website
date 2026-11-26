import React from 'react';
import type { PlatformPageData } from '@/components/PlatformPage.types';
import { PUBLIC_PAGE_UPDATED_AT } from '@/lib/seo';

const enquiryHref = '/get-started?interest=biodiversity-monitoring&source=environmental-consultants';

export const environmentalConsultantsPage: PlatformPageData = {
  path: '/solutions/environmental-consultants',
  metadataTitle: 'Nature Monitoring for Environmental Consultants | Mynzo',
  description: 'Scope forest and biodiversity evidence for client work or research. Agree field responsibilities, data handover, uncertainty and reuse with Mynzo Carbon.',
  eyebrow: 'For consultants and researchers',
  title: 'Forest and biodiversity evidence for environmental consultants',
  summary: 'Bring the question behind your client report or research study. Discuss how Mynzo’s forest observations and field-data approach can fit the work, with clear responsibilities for ecological surveys, interpretation and the final handover.',
  updatedAt: PUBLIC_PAGE_UPDATED_AT['/solutions/environmental-consultants'],
  breadcrumbParent: { name: 'Who we serve', href: '/#who-we-serve' },
  heroImage: '/Asset_analysis.png',
  heroImageFit: 'contain',
  heroAlt: 'Fieldwork photographs of a marked tree, a trunk circumference measurement and leaves',
  heroCaption: 'A useful analysis connects mapped observations with records from the field.',
  overview: {
    title: 'Where can Mynzo contribute to a consultancy project?',
    text: 'Mynzo combines satellite forest analysis with field data to assess condition and change. Consultants can discuss this contribution alongside their own ecological surveys and reporting work. Define the sites, evidence required and intended use together, then agree which outputs Mynzo will supply and which need other specialists. Research enquiries should also state the study question and intended use of the data.',
  },
  sections: [
    {
      id: 'engagement-purpose',
      title: 'Start with the work you need to complete',
      body: <>
        <div className="platform-pair">
          <div>
            <h3>Evidence for a client engagement</h3>
            <p>You may be preparing a habitat baseline, reviewing a restoration programme or explaining changes between monitoring visits. Identify the decision the client will make, who will review the evidence and what your report must establish. Bring the existing survey scope so the mapping and fieldwork address the same question.</p>
            <p><a href="#client-brief">Prepare a client-project brief</a>.</p>
          </div>
          <div>
            <h3>Evidence for a research study</h3>
            <p>Describe the question, study area, comparison and measurements you need. Explain whether you seek new observations, analysis of records you hold, or a discussion about a possible collaboration. Data availability, suitable methods, costs and publication terms need to be agreed for the study.</p>
            <p><a href="#research-brief">Prepare a research enquiry</a>.</p>
          </div>
        </div>
        <p>For work in India or elsewhere, include the site country, habitat and relevant field season. A common set of reporting fields can help organise projects, while the survey design and interpretation need to fit the local ecology.</p>
      </>,
    },
    {
      id: 'fieldwork-responsibilities',
      title: 'Agree who collects, checks and interprets the evidence',
      body: <>
        <p>A mapped habitat change may help direct a survey. Establishing which species are present, what condition they are in and what a change means requires methods suited to those questions. Confirm the ecological expertise, site access and fieldwork needed before commissioning analysis.</p>
        <div className="platform-table-wrap" role="region" aria-label="Consultancy project responsibilities" tabIndex={0}>
          <table>
            <caption>Responsibilities to assign in the project scope</caption>
            <thead><tr><th scope="col">Work</th><th scope="col">What to settle</th></tr></thead>
            <tbody>
              <tr><th scope="row">Forest and habitat observations</th><td>Which analysis Mynzo can supply for the location, dates and scale, and the checks needed before interpretation.</td></tr>
              <tr><th scope="row">Ecological field surveys</th><td>The ecological lead, target habitats or species, survey methods, field team and responsibility for identification and validation.</td></tr>
              <tr><th scope="row">Client assessment</th><td>Who interprets the combined evidence, addresses missing information and signs off the report for its intended use.</td></tr>
              <tr><th scope="row">Data access</th><td>Who can share each source, approve corrections and authorise use in the client report or research output.</td></tr>
            </tbody>
          </table>
        </div>
        <p><a href="https://cieem.net/wp-content/uploads/2018/08/EcIA-Guidelines-v1.3-Sept-2024.pdf">CIEEM’s ecological impact assessment guidance for the UK and Ireland</a> sets out scoping, baseline work and assessment as distinct tasks involving ecological judgment. Use the requirements applicable to your project; commissioning monitoring data does not settle the wider assessment scope.</p>
        <p>For the observations themselves, see <a href="/platform/biodiversity-monitoring">biodiversity monitoring</a> and <a href="/platform/forest-monitoring">forest monitoring</a>. Our <a href="/blog/biodiversity-baseline-assessment">baseline assessment guide</a> helps frame the starting conditions and evidence gaps.</p>
      </>,
    },
    {
      id: 'handover-specification',
      title: 'Specify a handover your analysts can review',
      body: <>
        <p><strong>Illustrative handover specification.</strong> Suppose a consultancy is preparing a woodland restoration review. It has a habitat map and field observations collected by different teams. The specification below shows what it could request to connect those records. It is a planning example, with outputs and formats to confirm for the actual engagement.</p>
        <div className="platform-table-wrap" role="region" aria-label="Illustrative consultancy evidence handover" tabIndex={0}>
          <table>
            <caption>Example specification for a woodland restoration review</caption>
            <thead><tr><th scope="col">Item to agree</th><th scope="col">Information needed by the receiving analyst</th></tr></thead>
            <tbody>
              <tr><th scope="row">Mapped observations</th><td>Boundary and coordinate reference system, habitat-class definitions, observation dates, source information and validation notes.</td></tr>
              <tr><th scope="row">Field records</th><td>Site and record identifiers, survey date, method, recorded measurement or identification, location uncertainty and supporting evidence.</td></tr>
              <tr><th scope="row">Comparison note</th><td>Which records can be compared, which were collected differently and where missing information limits the conclusion.</td></tr>
              <tr><th scope="row">Use and review record</th><td>Named recipients, agreed uses, source acknowledgements, unresolved questions and the person responsible for corrections.</td></tr>
            </tbody>
          </table>
        </div>
        <p>Ask for a data dictionary that explains each field and unit. <a href="https://dwc.tdwg.org/terms/">TDWG’s Darwin Core reference</a> provides definitions for biodiversity records, including sampling protocol and coordinate uncertainty. Those definitions can inform a specification; confirm the actual delivery format and field mapping with Mynzo.</p>
        <p>If the map is the main deliverable, use the <a href="/blog/habitat-mapping">habitat mapping guide and editable brief</a> to agree classification detail and field checks before analysis starts.</p>
      </>,
    },
    {
      id: 'uncertainty-and-comparison',
      title: 'Keep uncertainty visible in the client conclusion',
      body: <>
        <p>A result needs enough context for another analyst to judge its use. Keep a recorded observation, a model estimate and an ecological interpretation identifiable in the handover. Record gaps explicitly, including a missing survey, an uncertain identification or a location that could not be matched to a plot.</p>
        <p>Before comparing visits, check the dates, survey methods and effort, habitat definitions and area assessed. If these changed, explain how that affects the comparison. For a mapped result, ask where it was checked against reference observations and which classes remain difficult to distinguish.</p>
        <p>A research study also needs a record of the data and method versions used. Agree how corrections will be documented and which materials can accompany a publication. Our <a href="/blog/biodiversity-metrics-for-restoration-projects">biodiversity metrics guide</a> can help separate the indicator from the conclusion it is intended to support.</p>
      </>,
    },
    {
      id: 'data-rights-and-reuse',
      title: 'Agree data access and reuse before the handover',
      body: <>
        <p>Explain how the client or research team intends to use the material: an internal review, a public report, a journal paper or a reusable dataset. Confirm what can be shared for each purpose, including source imagery, field photographs, mapped outputs and the underlying records.</p>
        <ul>
          <li>Identify the owner or provider of each source and any conditions attached to its use.</li>
          <li>Agree who may receive detailed site records and whether a public version needs locations or other information withheld.</li>
          <li>Retain the source acknowledgements and references needed by the receiving team.</li>
          <li>Confirm publication and onward-sharing terms before including supplied material in a report or dataset.</li>
        </ul>
        <p>When using GBIF data, its <a href="https://www.gbif.org/terms/data-user">data-user agreement</a> requires users to retain source attribution and follow the licence selected by the data publisher. Check the terms of each source used in your project. An agreement for the client report should also address any later research or public reuse.</p>
      </>,
    },
    {
      id: 'project-enquiry',
      title: 'Send the brief that fits your enquiry',
      body: <>
        <p>You can describe the project before sending detailed site records. State whether the enquiry concerns commissioned client work or research, then outline the information below.</p>
        <div className="platform-pair">
          <div>
            <h3 id="client-brief">For a client project</h3>
            <ul>
              <li>Country, habitat, approximate area and number of sites.</li>
              <li>The client decision, reporting audience and deadline.</li>
              <li>Existing maps and surveys, their dates and known gaps.</li>
              <li>The ecological lead and who will carry out additional fieldwork.</li>
              <li>The outputs your team needs and intended sharing arrangements.</li>
            </ul>
            <p><a href={enquiryHref}>Discuss evidence for a client project</a>.</p>
          </div>
          <div>
            <h3 id="research-brief">For a research study</h3>
            <ul>
              <li>Institution or research team and the study question.</li>
              <li>Study area, comparison period and measurements of interest.</li>
              <li>Data already held and the analysis or observations being sought.</li>
              <li>Planned publication or dataset reuse.</li>
              <li>Funding status, timetable and any access constraints.</li>
            </ul>
            <p><a href={enquiryHref}>Discuss a research question</a>.</p>
          </div>
        </div>
        <p>The discussion should establish whether the work fits, what further information is needed and how it would be scoped. Confirm data availability, outputs, costs and responsibilities before incorporating the proposed work into a client commitment or study plan.</p>
      </>,
    },
  ],
  faqs: [
    {
      id: 'existing-ecology-team',
      question: 'Can Mynzo work alongside our existing ecology team?',
      answer: 'Bring the survey scope and the question your ecologists need to answer. Discuss which forest observations and field records could support their work. Agree the inputs, checks and handover with the people responsible for ecological interpretation and the final report.',
    },
    {
      id: 'field-survey-scope',
      question: 'Are specialist ecological surveys included?',
      answer: 'The proposal needs to state the fieldwork included, the methods required and who will carry it out. Identify species surveys, specialist identification and any laboratory work separately. Confirm these responsibilities with the technical and ecological leads before commissioning the engagement.',
    },
    {
      id: 'research-enquiries',
      question: 'Can researchers discuss a study with Mynzo?',
      answer: 'Use the enquiry form to describe the research question, institution, study area, data needed and funding status. Include the intended publication or reuse. Suitability, access, costs and any collaboration terms need to be confirmed for that study before the data is used or the work is promised.',
    },
    {
      id: 'client-report-reuse',
      question: 'Can we use the outputs in a client report or publication?',
      answer: 'Describe the intended recipients and uses during scoping. Agree which outputs may be shared, the source acknowledgements required and how sensitive information will be handled. Check the conditions attached to third-party data as well as the engagement terms, especially if material will be published or passed to another team.',
    },
  ],
  relatedLinks: [
    { href: '/blog/biodiversity-baseline-assessment', title: 'Scope a biodiversity baseline', description: 'Define the starting condition, survey needs and evidence gaps.' },
    { href: '/blog/habitat-mapping', title: 'Prepare a habitat mapping brief', description: 'Specify map classes, scale, reference checks and the handover.' },
    { href: '/platform/biodiversity-monitoring', title: 'Biodiversity monitoring', description: 'Connect habitat observations to the ecological questions being assessed.' },
    { href: '/blog/biodiversity-metrics-for-restoration-projects', title: 'Choose biodiversity measures', description: 'Match indicators, units and methods to the intended conclusion.' },
  ],
  cta: {
    title: 'Discuss the evidence your team needs',
    text: 'Tell us whether you are preparing a client assessment or a research study. Include the sites, question and records already available so we can discuss a suitable scope.',
    label: 'Discuss your evidence brief',
    href: enquiryHref,
  },
};
