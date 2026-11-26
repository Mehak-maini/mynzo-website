import React from 'react';
import type { PlatformPageData } from '@/components/PlatformPage.types';
import { PUBLIC_PAGE_UPDATED_AT } from '@/lib/seo';

export const corporateNatureMonitoringPage: PlatformPageData = {
  path: '/solutions/corporate-nature-monitoring',
  updatedAt: PUBLIC_PAGE_UPDATED_AT['/solutions/corporate-nature-monitoring'],
  metadataTitle: 'Nature Monitoring for Sustainability and CSR | Mynzo Carbon',
  description: 'Plan forest and restoration monitoring across multiple sites. Agree site boundaries, field checks and evidence for sustainability and CSR reviews.',
  eyebrow: 'For sustainability and CSR teams',
  title: 'Nature monitoring for sustainability and CSR teams',
  summary: 'See which forest and restoration sites have current evidence, where conditions may be changing and which sites need a field visit. Mynzo helps you scope satellite observations and ground checks across your programme.',
  breadcrumbParent: { name: 'Who we serve', href: '/#who-we-serve' },
  heroImage: '/images/education/covers/agroforestry-in-india.webp',
  heroAlt: 'Rows of poplar trees growing alongside a crop in Punjab, India',
  heroCaption: 'Poplar agroforestry in Punjab. Photograph by vikas bishnoi (CC BY 3.0).',
  overview: {
    title: 'What can corporate nature monitoring tell you?',
    text: 'A monitoring programme records conditions at each site, follows changes over time and identifies what needs investigating. Satellite imagery can help track features such as canopy cover at suitable sites. Field records supply evidence for questions such as planting survival and native species recovery. Each finding should point back to a site, a date and a method.',
  },
  sections: [
    {
      id: 'monitoring-scope',
      title: 'Start with the decision your team has to make',
      body: <>
        <p>A sustainability team may need to decide which sites deserve closer assessment before the next reporting cycle. A corporate social responsibility (CSR) team may need to decide where a planting partner should revisit plots or improve maintenance. Set the decision and deadline before choosing what to measure.</p>
        <p>Bring a list of sites with country, approximate area, ownership or management responsibility, and the purpose of the work. Add boundary files, dated field records and previous reports where available. Mynzo can review where its <a href="/platform/forest-monitoring">forest monitoring approach</a> fits and discuss where your team needs more field evidence.</p>
        <p>Agree a simple site register before starting. Give each site an identifier and keep its boundary version, reporting period and record owner together. If a boundary is still provisional, record the gap and who can resolve it. The <a href="/blog/biodiversity-baseline-assessment">biodiversity baseline assessment guide</a> can help your team prepare the starting evidence.</p>
      </>,
    },
    {
      id: 'site-and-portfolio-evidence',
      title: 'Keep the portfolio summary tied to the sites',
      body: <>
        <p>Across a portfolio, use the same fields to show where evidence exists. Let each site’s habitat and management goal determine which indicators are suitable. A restoration site recovering native woodland can need different field observations from a plantation where the immediate question is how many planted trees survived.</p>
        <div className="platform-table-wrap" role="region" aria-label="Site records and portfolio reporting" tabIndex={0}>
          <table>
            <caption>Records to agree before a programme review</caption>
            <thead>
              <tr><th scope="col">Record</th><th scope="col">At each site</th><th scope="col">Across the portfolio</th></tr>
            </thead>
            <tbody>
              <tr><th scope="row">Coverage</th><td>Site ID, boundary version and dates of usable observations.</td><td>Sites with current evidence and sites still awaiting a visit or usable imagery.</td></tr>
              <tr><th scope="row">Habitat observations</th><td>Mapped feature, units, method, dates and limits of comparison.</td><td>Results grouped by comparable habitat, method and period.</td></tr>
              <tr><th scope="row">Field evidence</th><td>Dated survey or plot record, survey method and responsible team.</td><td>Which findings have field support and which questions need specialist input.</td></tr>
              <tr><th scope="row">Action</th><td>Unresolved finding, next check, owner and due date.</td><td>Priority visits and follow-up decisions for the next review.</td></tr>
            </tbody>
          </table>
        </div>
        <p>If two of three sites have usable observations this quarter, report coverage as two of three. Give the third site a reason and a follow-up date. This keeps the denominator visible when someone reads the summary without the site records.</p>
        <p>Choose indicators based on the restoration goal and the resources available for collecting them. Agree what you expect to learn from each measure before including it in a programme summary. <a href="https://www.fao.org/sustainable-forest-management/toolbox/tools/tool-detail/en/c/1255095/">FAO and WRI guidance on restoration indicators</a></p>
      </>,
    },
    {
      id: 'examples',
      title: 'How two programmes might use the evidence',
      body: <>
        <p>These examples use hypothetical programmes to show how the evidence can guide a decision.</p>
        <div className="platform-pair">
          <div>
            <h3>Planting across several districts in India</h3>
            <p>A CSR team has planting records from two partners. It asks each partner for parcel boundaries, planting dates, species and the number planted by cohort. On follow-up visits, the partners record the trees checked, those found alive and any replacements. The CSR team can then review survival within the surveyed cohort and decide where to focus maintenance. It keeps areas awaiting a visit visible in its programme report.</p>
          </div>
          <div>
            <h3>Forest and restoration sites across countries</h3>
            <p>A sustainability team needs to know where local staff should investigate possible habitat change. It asks for comparable image dates, mapped areas and the effect of cloud or missing observations. When a map suggests change at a forest edge, the local team checks the site and records what it found. The portfolio summary carries that finding with the date and any limits on what it can support.</p>
          </div>
        </div>
        <p>Hero photograph <a href="https://commons.wikimedia.org/wiki/File:Poplar_Trees_-_panoramio_(8).jpg">Poplar Trees - panoramio (8)</a> by vikas bishnoi, <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Resized and displayed with responsive cropping.</p>
      </>,
    },
    {
      id: 'reporting-evidence',
      title: 'Agree what the evidence can support',
      body: <>
        <p>For corporate reporting, retain the site records behind any summary. Include the original observation period, its units and the distinction between mapped changes, field findings and questions still open. Agree who can approve the interpretation before it enters an external report.</p>
        <p>Site locations and ecosystem context can inform an assessment using the Taskforce on Nature-related Financial Disclosures (TNFD) LEAP approach. A wider assessment also considers the organisation’s dependencies, impacts, risks and opportunities. Your reporting and assurance teams retain responsibility for the conclusions and disclosures. <a href="https://tnfd.global/publication/additional-guidance-on-assessment-of-nature-related-issues-the-leap-approach/">TNFD LEAP guidance</a></p>
        <p>Ask your ecology team to specify surveys when the decision depends on species or habitat condition. The <a href="/platform/biodiversity-monitoring">biodiversity monitoring approach</a> explains how to pair forest observations with this field evidence. If a CSR programme also needs to assess outcomes for people, plan a separate evaluation suited to those outcomes.</p>
      </>,
    },
    {
      id: 'portfolio-brief',
      title: 'What to bring to a scoping discussion',
      body: <>
        <ul>
          <li><strong>Sites and responsibility.</strong> Countries, approximate number of sites, mapped boundaries and the teams that can access each location.</li>
          <li><strong>Programme objective.</strong> The decision, review or report that needs evidence and its due date.</li>
          <li><strong>Existing observations.</strong> Planting records, earlier maps, surveys and gaps your team already knows about.</li>
          <li><strong>Handover.</strong> Who will use the results, the records they need and any format they must work with.</li>
        </ul>
        <p>Start with representative sites when the evidence or field access varies. Agree the initial deliverables, visits, update frequency and responsibilities before deciding whether to expand. The number and spread of sites, the quality of existing records and the fieldwork needed all affect the scope.</p>
      </>,
    },
  ],
  faqs: [
    {
      question: 'Can we start if site boundaries or earlier surveys are missing?',
      answer: 'Yes. Bring the site list, the location information you do have and the decision you need to make. Start by identifying which boundaries need confirming, which observations can be made now and which sites require a new baseline.',
    },
    {
      question: 'Can we compare biodiversity across all our sites?',
      answer: 'Compare measurements that use compatible definitions, methods and observation periods. Keep different habitats and methods visible in the summary. A shared site register can show evidence coverage across every location even when the ecological indicators differ.',
    },
    {
      question: 'What might a corporate monitoring handover include?',
      answer: 'Agree the outputs when scoping the work. For example, request a site register, dated habitat or canopy observations, a list of locations needing field checks and a note showing which records support each portfolio finding.',
    },
    {
      question: 'Can monitoring evidence inform a TNFD assessment?',
      answer: 'Dated site boundaries, observations and ecosystem context can inform parts of a TNFD assessment where relevant. The company still needs to assess its dependencies, impacts, risks and opportunities and determine what to disclose.',
    },
  ],
  relatedLinks: [
    { href: '/platform/biodiversity-monitoring', title: 'Biodiversity monitoring', description: 'Plan habitat observations and identify which questions require ecological surveys.' },
    { href: '/blog/biodiversity-baseline-assessment', title: 'Commission a biodiversity baseline', description: 'Ask for the dates, methods and outputs your team needs to compare future observations.' },
    { href: '/blog/restoration-monitoring-plan', title: 'Prepare a restoration monitoring plan', description: 'Define field checks, review dates and the person responsible for each action.' },
    { href: '/platform/forest-monitoring', title: 'Satellite forest monitoring', description: 'Understand where canopy observations and field checks fit in a monitoring scope.' },
  ],
  cta: {
    title: 'Discuss monitoring for your sites',
    text: 'Tell us where your sites are, who manages them and what your team needs to decide. We’ll discuss what evidence is available and what to include in the brief.',
    label: 'Discuss your portfolio brief',
    href: '/get-started?interest=biodiversity-monitoring&source=corporate-nature-monitoring',
  },
};
