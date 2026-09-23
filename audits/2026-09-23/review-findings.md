# Independent review: September growth batch

Reviewed 23 September 2026. Scope: `article-enquiry.ts`, article route, enquiry context and tests, `agroforestryPost.ts`, restoration guide/checklist, registry and the existing CMS merge path. Review only. No application edits, external writes or form submissions made by this reviewer.

## Findings

No blocking correctness, source, copy or SEO regression found in the reviewed changes. Full application build and rendered browser verification remain the root agent's checks. This review does not establish publication, indexing, analytics receipt or enquiry delivery.

## Evidence checked

- The four article CTA mappings use existing project-focus values and allowlisted source values. The fallback uses a generic `/get-started` link. `Object.hasOwn` prevents inherited names such as `constructor` from selecting an unintended mapping. The new test covers mapped links through form parsing, validation and email labels, plus unknown-slug fallback.
- The restoration guide's inline CTA, footer mapping and downloadable checklist all use `interest=restoration-monitoring&source=restoration-guide`. Agroforestry's inline and footer links both use `interest=forest-monitoring&source=agroforestry-guide`. No unrecognised checklist source remains.
- The article route retains canonical/BlogPosting handling and uses the normalized post dates. The organisational byline target `/#team` exists in `HomePageClient.tsx`; no fictional reviewer or credentials were added.
- A focused import check found one registry entry per guide, existing local image files, unique heading IDs, no missing local fragment targets and no broken links to bundled blog slugs. Both new/rewritten bodies contain zero em dashes. Restoration's added contents links resolve to its sections.
- Agroforestry retains `datePublished=2025-03-28` and sets its substantive revision to `2026-09-23`. Restoration normalizes to publication and modification on `2026-09-23`, so the existing renderer will not display a redundant update date.
- The restoration example now explicitly says all 20 replacement seedlings are alive at assessment. It does not confuse replacement counts with surviving original individuals. The guide and checklist retain missing/unassessed records and distinguish hypothetical examples from project outcomes.

## CMS override check

`mergePosts` gives published CMS records precedence over bundled records sharing a slug. A source-file refresh could therefore be masked if a matching published CMS record exists. Draft CMS records do not override the static data.

The configured fallback CMS origin, `https://mynzo-website-khaki.vercel.app`, was checked through its public published-post API on 23 September: HTTP 200, 14 documents and `hasNextPage=false`. None matched the restoration, agroforestry, biodiversity-metrics or forest-carbon guide slug. Both restoration and agroforestry are now registered in `STATIC_POSTS` exactly once. There is no observed CMS collision in that dataset.

This check does not establish the value of environment overrides on every deployment. Root should confirm the rendered draft routes against the deployment under review. The underlying merge policy is pre-existing and was not changed by this batch.

## Agroforestry source review

All ten external article links opened as readable public pages. The linked claims are appropriately qualified and do not promise a Mynzo product capability, farm return or issued credit.

- [Permies grower question](https://permies.com/t/67828/Shade-food-forest): the short quotation matches Laurel Finch's post. It is presented as a question, not measured evidence or a customer endorsement.
- USDA [alley cropping](https://research.fs.usda.gov/centers/nac/alleycropping), [silvopasture](https://research.fs.usda.gov/centers/nac/silvopasture) and [riparian buffers](https://research.fs.usda.gov/centers/nac/riparianforestbuffers): support the changing interactions, management needs and conditional benefits described.
- [Plant procurement](https://research.fs.usda.gov/treesearch/69986): publication year is 2025 and the abstract identifies suitable planting-material access as a barrier.
- [Black walnut study](https://research.fs.usda.gov/treesearch/61221): year is 2020; the abstract describes biomass measurements and separate soil sampling. The article avoids generalising its numerical results.
- [TNAU FAQ](https://agritech.tnau.ac.in/forestry/forestry_faq_agro.html): supports local species-selection factors, market variability and business planning.
- FAO [agroforestry module](https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/2/en) and [crops-and-trees explanation](https://www.fao.org/one-health/highlights/crops-and-trees): support competition, baseline monitoring, nutrient cycling and habitat distinctions.
- [Verra VCS](https://verra.org/programs/verified-carbon-standard/): supports the distinction between planting, monitoring and the assessment/verification steps preceding issuance.

The article removes the old unsubstantiated income percentage, general native-species list and assertion that per-tree monitoring removes the need for field teams. It keeps the existing URL and separates agronomic advice from Mynzo's monitoring scope. No repeated generic biodiversity-metrics table or restoration handover workflow was introduced.

## Verification limits

The reviewer ran a narrow import/normalization/link check, not the full test suite again. No need for an additional unit test was found beyond the root agent's existing enquiry-context coverage. Browser interaction, fixed-navigation anchor visibility, table overflow and production environment configuration still require the planned root verification.
