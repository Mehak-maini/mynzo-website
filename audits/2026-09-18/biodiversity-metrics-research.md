# Biodiversity metrics guide research

Prepared 18 September 2026. One educational guide, delivered as source for review. No publication or deployment in this subtask.

## Search evidence and intent

Root supplied fresh Ahrefs figures for `biodiversity metrics`: India 10, US 60, UK 100 and global 300 estimated monthly searches. US difficulty 3, CPC USD 1.70. The retrieved US SERP snapshot is 20 August, not a live September snapshot. Root compared the top ten US metrics and monitoring result URLs and found zero overlap. This supports a distinct educational page for measurement selection rather than another product page.

Root owns raw search API results and cost records. Numbers above are estimates, not Mynzo traffic or predicted leads.

Chosen slug: `biodiversity-metrics-for-restoration-projects`.
Title: `Biodiversity Metrics for Restoration Projects`.
Reader: restoration project teams, developers and reporting teams choosing evidence and commissioning monitoring.
Format: practical guide with six-row measurement comparison, baseline distinctions, sampling effort, satellite limits, reporting context and editable ungated brief.

The buyer page `/platform/biodiversity-monitoring` describes where Mynzo's forest observations fit. This guide helps the reader choose measurements, with a contextual inquiry link when they need support. It does not imply Mynzo performs every ecological method discussed.

## Primary-source verification

All ten external links used by the guide opened successfully in the web tool on 18 September 2026.

| Source | URL | Role in guide |
| --- | --- | --- |
| FAO, The road to restoration, 2019 | https://www.fao.org/sustainable-forest-management/toolbox/tools/tool-detail/en/c/1255095/ | Start with a monitoring decision and project constraints. |
| Gann et al., SER standards, third edition, 2026 | https://doi.org/10.1111/rec.70441 | Baseline/reference distinction and ecological objectives. DOI resolves to full Wiley HTML; this avoids the failed direct SER website fetch. |
| GEO BON, Ecosystem Structure | https://geobon.org/ebvs/working-groups/ecosystem-structure/ | Distinguish structural habitat observations. |
| GEO BON, Species Populations | https://geobon.org/ebvs/working-groups/species-populations/ | Distinguish species distribution and abundance. Older work-programme dates on page are not presented as recent results. |
| iNaturalist, survey completeness discussion | https://forum.inaturalist.org/t/at-what-point-do-you-stop-searching-for-new-species-in-a-defined-area/16904/1 | A real observer's question provides context, not scientific authority or a customer endorsement. |
| GBIF, Survey and Monitoring Data Guide, v1.0.2, 24 September 2025 | https://docs.gbif.org/guide-publishing-survey-data/en/ | Survey scope, protocol, effort and repeated data. |
| GBIF community discussion of absence vocabulary | https://discourse.gbif.org/t/definitions-for-concepts-or-vocabulary-related-to-absences/4150 | Explains why non-detection differs from true absence. The text calls this a discussion, not a new binding standard. |
| ESA, RS4EBV | https://eo4society.esa.int/projects/due-innovator-iii-rs4ebv-remote-sensing-for-essential-biodiversity-variables/ | Remotely sensed variables and ecological proxies need validation. |
| TNFD, discussion paper on state of nature measurement, updated June 2026 | https://tnfd.global/publication/discussion-paper-on-state-of-nature-measurement/ | Explicitly labelled proposals/discussion paper for consultation and feedback. The guide does not say the consultation window is still open or that proposals are final. |
| DEFRA, statutory biodiversity metric guidance, updated 14 July 2026 | https://www.gov.uk/guidance/calculate-biodiversity-value-with-the-statutory-biodiversity-metric | Page explicitly applies to England; the guide distinguishes that calculation from general restoration metrics. |

Further research: GEO BON Community Composition also opened successfully at https://geobon.org/ebvs/working-groups/community-composition/ . USGS occupancy fact sheet search content supports imperfect-detection cautions, but direct opens failed, so its URL was not added to the page. The guide uses the accessible GBIF terminology discussion alongside the formal survey-data guide instead.

## Practitioner shortlist and selected use

Six sources were inspected for the buyer-page evidence task earlier in this same session. The exact short excerpts, handles, dates and verification record are preserved in `biodiversity-evidence.md`, under `Public practitioner questions`. They are not duplicated here to avoid unnecessary quotation. The shortlist for this guide is:

1. raphael1c, data-quality biases, June 2022: https://forum.inaturalist.org/t/improving-data-quality/32567 . Supports a section on planned surveys versus incidental observations.
2. dlevitis, identification and sampling bias, June 2021: https://forum.inaturalist.org/t/biases-in-inat-data/23943 . Supports explaining the species that are harder to record or identify.
3. jasonhernandez74, accessibility bias, September 2020: https://forum.inaturalist.org/t/not-an-unbiased-dataset/16800 . Supports keeping survey coverage visible.
4. annabelc, repeat observations, April 2024: https://forum.inaturalist.org/t/should-i-repost-species-from-the-same-location-visited-again/50214 . Supports repeated visits and consistent effort.
5. thebeachcomber, when a species survey is sufficiently complete, October 2020: https://forum.inaturalist.org/t/at-what-point-do-you-stop-searching-for-new-species-in-a-defined-area/16904/1 . Selected for one linked paraphrase in the guide. No quotation marks or invented testimonial used.
6. Enrique Roa, suitable imagery, May 2013: https://gis.stackexchange.com/questions/61509/how-do-you-scan-quantify-vegetation-using-satellite-images . Supports explaining what imagery can establish. Old implementation advice in replies is not reused.

All six are public question sources, not proof of present buying demand. No quotes appear on the buyer page, so there is no repeated published quote or block of published copy across the two pages.

## Editorial and claim checks

- Page body is 1,292 words, excluding metadata and the downloadable brief.
- Zero em dashes in new guide and brief.
- Examples are labelled hypothetical and no impact result is invented.
- Tree cover, species richness, composition, occupancy and fragmentation are distinct.
- Units, methods, repeatability and limits appear in the comparison table.
- The SER 2026 standard is used instead of describing the 2019 edition as current.
- TNFD consultation proposals are not presented as adopted requirements.
- England's statutory metric is not extended to India or globally.
- No eDNA, acoustic, certification or automatic biodiversity-credit promise.
- Uses existing `/leaf_tree_jpg.jpeg`, visually inspected this session.
- New guide date and updated date are both 18 September 2026.
- Inquiry route: `/get-started?interest=biodiversity-monitoring&source=biodiversity-guide`.
- Resource route: `/resources/biodiversity-monitoring-brief.txt`, real editable text file with `download` link, no form gate.
- Table wrapped in the root-requested accessible `.blog-table-wrap` region for horizontal scrolling.

## Files delivered and integration boundary

- `src/data/biodiversityMetricsPost.ts`: exports `biodiversityMetricsPost` using a type-only `StaticPost` import from `./blogPosts`.
- `public/resources/biodiversity-monitoring-brief.txt`: project, baseline, metric, comparability and delivery fields, with practical cautions against invented baselines and unsupported absence claims.
- This research note.

Root owns the `STATIC_POSTS` import, blog rendering/styles, sitemap integration, schema, complete build and browser checks. No shared source file was edited in this guide task.
