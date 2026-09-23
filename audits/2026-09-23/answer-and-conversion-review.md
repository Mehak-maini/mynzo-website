# Answer structure and organic enquiry review

Checked 23 September 2026 against local commit `01a90ba` and seven public Mynzo URLs. This is a read-only review. No application code, external settings, forms or emails were changed or submitted. The AEO optimization skill was reviewed as editorial guidance and checked against current Google documentation.

## Fix in the next batch

### 1. Refresh the existing agroforestry article before sending it more readers

**Priority: high.** [Live article](https://www.mynzocarbon.com/blog/agroforestry-the-future-of-sustainable-land-use). Source: `src/data/blogPosts.ts:85-117`.

The live article has no external source links or contextual internal links. It claims 30-80% higher income over five years without identifying a study, labels a mixed list of plants as native, generalises the condition of India's smallholdings, and says per-tree carbon tracking can operate without field teams. That last claim conflicts with the current forest-monitoring and digital-MRV pages, which explain field validation and small-plot limitations. The closing paragraph implies carbon finance is the best economic choice for every farmer. Those statements need evidence and qualification, not a shorter AI-friendly sentence.

Keep the established URL and original `datePublished` of `2025-03-28`. Rebuild the article around a useful project question: what records and monitoring evidence does an agroforestry programme need? Cover parcel boundaries, planting cohorts, species records, survival observations, field sampling, carbon pools and uncertainty. Distinguish planting from credit eligibility and income from forecast revenue. Add current primary sources and concrete India/global examples. Set a truthful modification date only after that substantive revision, and remove the legacy em dashes and promotional language.

### 2. Make the existing Q&A answers individually linkable

**Priority: medium.** Source: `src/components/PlatformPage.tsx:99-105` and `PlatformPage.types.ts`.

All 16 FAQ answers across the four checked product/solution pages are present in public HTML and matching structured data. None of their `<details>` elements has an ID. Only the combined `#questions` section can be linked directly.

Add explicit stable IDs to the FAQ data, matching IDs/permalinks in HTML and, if retained, matching `Question.@id` values. A reader following the hash must see the targeted answer, with the fixed navigation not covering its heading. Check direct loads, client navigation, keyboard use and hash changes. This improves sharing and navigation; it is not proof of an AI citation advantage. Preserve the existing native disclosure accessibility.

### 3. Add useful article anchors without splitting articles into thin pages

**Priority: medium.** The live biodiversity guide has eight headings without IDs. The refreshed carbon article has ten, including two direct questions, also without IDs. The agroforestry article has four without IDs. Sources: `src/data/biodiversityMetricsPost.ts`, `src/data/blogPosts.ts`.

Give substantive sections stable IDs and a compact contents list where it helps a long guide. Add direct questions only where they answer a real reader need. Do not create a separate URL for every question or impose a sentence/token quota. Verify anchor targets, uniqueness and mobile heading visibility after the content edits.

### 4. Extend topic-aware CTAs beyond the one hard-coded blog exception

**Priority: medium.** Source: `src/app/(frontend)/blog/[slug]/page.tsx:24-27`, `src/lib/enquiry-context.ts`.

The biodiversity guide correctly carries its interest/source in both its inline link and footer button. The four product/solution pages also have two correct contextual CTAs each. The forest-carbon and agroforestry articles still have no contextual enquiry URL; their footer sends readers to plain `/get-started`.

Use a small explicit slug-to-enquiry mapping for relevant guides, with source values added to the existing allowlist. Match the selected focus and CTA wording to the actual subject. Add relevant product/guide links to the refreshed agroforestry body. Keep a generic fallback for unrelated CMS posts, and preserve visitor changes to the optional selector. `enquiry_source` describes a content CTA, not organic acquisition; GA4 session attribution and the team's lead qualification remain separate evidence.

### 5. Make the existing authorship traceable, and retain honest dates

**Priority: medium.** Sources: `src/components/PlatformPage.tsx:89`, blog template line 70.

The checked pages say “Mynzo Team” without linking to information about that team or how the content was prepared. Link the organisational byline to accurate existing company/team information, and explain source review where useful. Name an individual technical reviewer only after that person has actually reviewed the content. Do not invent credentials or change the Organization author into a fictional Person. [Google's authorship guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) supports accurate bylines and relevant author background.

Current date presentation is consistent: forest/digital-MRV pages show 13 September; biodiversity/developer pages show 18 September; each agrees with its WebPage `dateModified`. The carbon article retains 12 April 2025 publication and shows its 13 September revision. The biodiversity guide shows 18 September publication; equal published/modified dates appropriately avoid a redundant update label. These need no cosmetic date refresh. Make dates explicit for new page data rather than silently inheriting the shared template's 13 September fallback.

## Apply the skills selectively

Keep clear subjects, direct answers, readable sections, source-supported distinctions, useful comparison tables and links between related pages. Existing newer pages already use these well. Their main opportunity is stronger first-hand project evidence when Mynzo can supply it, not more generic definitions.

Do not treat the skills' exact sentence lengths, mandatory triples, fixed citation counts, or the separate `bencium-aeo` “18 token” rule and visibility percentages as ranking requirements. The reviewed files do not establish those claims as universal findings. Google explicitly says tiny content chunks and AI-specific rewriting are unnecessary; there is no special AI schema or useful-for-Google `llms.txt` requirement. Page length and format should serve the reader. [Current Google AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

**FAQ rich-result guidance has changed:** Google's changelog says FAQ rich results stopped appearing from 7 May 2026, and its documentation was removed on 15 June. The old FAQPage documentation URL now redirects to the updates page. Keep useful visible Q&A and accurate schema if desired, but do not sell it as a current Google FAQ rich-result tactic or guaranteed AI inclusion. Service/WebPage remains appropriate for service pages; do not add Article merely because a generic skill template requests it. [Google Search documentation updates](https://developers.google.com/search/updates)

## Measurement follow-up, without changing settings

Current official help documents a Search generative AI control and a Generative AI performance report, with worldwide rollout stated as 31 August 2026. The control defaults to inclusion but can inherit a parent setting. Inspect Mynzo's effective state when account access is available; it was not inspected here. The report measures AI-feature impressions by page, country and device, subject to data availability. Do not keep relying solely on the older guidance that grouped AI activity into general Web reporting. [Inclusion control](https://support.google.com/webmasters/answer/16908024), [AI performance report](https://support.google.com/webmasters/answer/16984139)

Compare India and other markets separately. Use actual GSC/GA4 data and qualified enquiries to assess the new batch. Public HTML checks establish accessibility of the content, not indexing, traffic growth, email delivery, GA4 receipt or AI citations. No such outcome was measured in this audit.

## Live verification sample

All seven URLs returned HTTP 200 in direct public requests on 23 September. Checked: `/platform/forest-monitoring`, `/platform/digital-mrv`, `/platform/biodiversity-monitoring`, `/solutions/project-developers`, and the agroforestry, forest-carbon and biodiversity-metrics articles. FAQ counts were 5 / 3 / 4 / 4; all individual FAQ IDs were absent. The article heading counts above were taken from the served HTML. The newer carbon and biodiversity articles linked 11 and 10 external sources respectively; agroforestry linked none. The existing biodiversity guide also supplies a practical downloadable project brief. Preserve that useful work while fixing the narrower gaps listed above.
