# Agroforestry and restoration growth batch

Prepared on `mlf-seo-changes` from the live release commit `01a90ba`. This batch is a draft for review. Publication, production verification and IndexNow submission remain pending approval.

## Content and intent

- Refresh `/blog/agroforestry-the-future-of-sustainable-land-use` with sourced benefits, tradeoffs and a practical measurement checklist. Retain the URL and publication date of 28 March 2025; the substantial revision is dated 23 September 2026. Remove the unsupported income uplift and claim that field teams are unnecessary.
- Add `/blog/restoration-monitoring-plan` and `/resources/restoration-monitoring-plan.txt`. Focus on intervention records, revisits, planting cohorts and action handovers. The existing biodiversity metrics guide retains ownership of indicator selection and ecological measurement methods.
- Keep India and global use cases on shared English pages. Do not present illustrative scenarios as Mynzo project results.

Ahrefs keyword and dated SERP evidence is in `ahrefs-topic-research.json`; source and practitioner research is in the two topic research notes. Agroforestry benefits shows relevant India, US and UK demand. Restoration monitoring has sparse or missing exact demand and no usable Ahrefs SERP: its inclusion is a buyer-support decision, not a traffic forecast.

## Reading and enquiry improvements

- Contents links and stable section anchors on the new/refreshed guides and the existing biodiversity/carbon guides.
- Individual links to all 16 product/solution answers. A fragment targets content inside native `details`, which lets the browser reveal the relevant answer without extra client JavaScript. Optional explicit IDs allow editors to retain a published fragment when changing a question.
- Link the honest organisational byline to the existing Mynzo team section. No invented individual reviewer or credentials.
- Topic-specific article CTAs carry allowlisted source and interest into the existing form and email content. Context describes the content CTA, not the visitor's acquisition channel.
- Keep original dates for navigation-only changes. No artificial site-wide sitemap modification dates.

## Validation

- Production build completed on Node 22.23.2, including TypeScript checking. The repository build configuration skips linting; no lint pass is claimed.
- Separate TypeScript check passed; all 15 tests passed. Contact transport is mocked in tests, so no real enquiry email was sent.
- Read-only local production crawl passed for all 30 sitemap URLs and 19 articles, plus robots, downloads, missing-page responses, canonical URLs, article dates, visible/schema FAQ agreement and contextual enquiry links.
- Independent source/code review found no blocking issues. Current published CMS content does not override the guide slugs.
- Desktop and 390px mobile checks passed: readable layouts, contained horizontal tables, loaded restoration hero, settled fragment positions below fixed navigation, targeted FAQ opening and both topic-specific form prefills. Desktop FAQ permalink and keyboard checks also passed. Evidence is in `browser-verification.json` and `faq-browser-verification.json`.
- Local verification does not establish production deployment, indexing, AI citations, qualified leads or actual analytics receipt. No cross-page FAQ-fragment link exists in the current UI, so that specific navigation case was not exercised.

## Measurement

Current Google guidance confirms that ordinary technical SEO and useful, distinctive content support AI search visibility. It does not require a special schema, tiny content chunks or `llms.txt`. FAQ rich results are deprecated, so answer links and retained accurate schema are not presented as a Google FAQ rich-result tactic. See the linked official sources in `answer-and-conversion-review.md`.

The task separately inspected the actual Search Console Web and Generative AI reports. Account-derived figures and the operational growth tracker are retained locally and excluded from this public pull request. Future comparison needs completed dates, India/rest-of-world segmentation, relevant non-brand queries and genuine qualified enquiries. No release-attributed uplift is claimed.
