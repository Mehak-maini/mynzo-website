# Habitat mapping growth batch

8 October 2026. Draft for review, not published. Prepared on `mlf-seo-changes` from current live `origin/main` at `32d183a`.

## What changes

- One sourced guide at `/blog/habitat-mapping`, focused on commissioning and validating a terrestrial habitat map. It covers data choice, habitat versus land cover, boundaries, seasons, independent reference evidence, accuracy and handover. India planning example and international portfolio guidance are explicitly general, not Mynzo project claims.
- An ungated, editable `/resources/habitat-mapping-brief.txt` for preparing a real project discussion.
- Contextual links from biodiversity monitoring, project developers and the biodiversity metrics guide. Existing layout and navigation are retained.
- Two article enquiry links suggest Biodiversity monitoring and retain `habitat-mapping-guide` as the entry source through form parsing, email and allowlisted analytics context. The focus remains editable. Existing phone and mail settings from main are preserved.
- The shared blog registry automatically adds the guide to the archive and sitemap. No artificial timestamp refresh on older pages for the added links alone.

## Evidence and scope

See `ahrefs-topic-research.json` and `habitat-mapping-research.md` for dated demand, SERP limitations, primary sources and real practitioner questions. One focused guide avoids reproducing existing biodiversity indicator and restoration-record content. The US Ahrefs SERP is from 2023 and is explicitly not current ranking evidence. No accuracy, product capability, lead or AI citation guarantee is made.

Private Search Console comparisons and account measurements remain local and are excluded from the PR. No production form, email, CMS write or IndexNow submission was made.

## Verification completed

- Node 22: all 15 existing tests passed, run as eight enquiry tests and seven SEO tests. Email transport is mocked. Two pre-existing test expectations were updated to reflect main's optional phone property and support sender.
- Production build and standalone TypeScript check passed. Existing build configuration skips lint; no lint pass is claimed.
- `scripts/verify-seo.py` passed against the local production server: 31 sitemap URLs, 20 articles, metadata/canonical/schema, archive parity, dates, contents IDs, enquiry targets, downloads, noindex and 404 behaviour.
- Independent code and editorial review found no actionable issues. See `code-review.md` and `editorial-review.md`.
- Desktop browser at 1280 px: one H1, loaded hero, matching enquiry URLs and no page overflow. Mobile at 390 x 844: page width 390, table contained in a 324 px scroll region with 650 px content; contents target below the fixed navigation.
- Clicking the guide footer opens Get Started with Biodiversity monitoring selected and the guide source in the URL. The visitor can change focus to Restoration monitoring. No form submitted.
- Browser download succeeded and its bytes match the repository brief. Temporary viewport override was reset. Screenshot and detailed local checks remain in the local audit folder.

## After approval

Merge this reviewed branch, verify the resulting production deployment and public origin, then crawl the public sitemap and check the guide, download and enquiry route. Keep the existing sitemap URL. Submit the changed HTML URLs through IndexNow once after they are live. Acceptance is not indexing or growth. If publication occurs after 8 October, align the new article's publication date with the actual release date before final verification.

Changed HTML URLs for that later submission: `/blog/habitat-mapping`, `/blog`, `/platform/biodiversity-monitoring`, `/solutions/project-developers`, `/blog/biodiversity-metrics-for-restoration-projects`. The sitemap and text resource are verified separately.
