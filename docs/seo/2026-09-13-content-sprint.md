# Forest monitoring and digital MRV content sprint

Prepared 13 September 2026. Working branch: `mlf-seo-changes`.
Market priority: equal focus on India and global markets.
Editorial requirement: specific, natural copy; no em dashes or unsupported promises.

## Result

Two new product pages give forest-project buyers a direct path from a search question to Mynzo's enquiry flow:

- `/platform/forest-monitoring`: observations, field checks, reporting decisions, limits and five practical FAQs.
- `/platform/digital-mrv`: evidence collection, checks, reporting, roles in independent verification and three FAQs.

The existing article at `/blog/how-ai-is-revolutionising-forest-carbon-accounting` now explains biomass, carbon stocks, stock change, field validation and uncertainty. Its original publication date and URL are preserved. It carries a visible 13 September 2026 update date. The image remains the existing project asset, served locally after the remote URL failed browser QA.

Desktop platform navigation, mobile navigation, homepage sections, footer and article links expose the new pages. Both enter the sitemap. Shared server-rendered markup includes WebPage, Service, BreadcrumbList and FAQPage, with FAQ content generated from the same data as the visible answers. The existing article keeps BlogPosting markup. No offers, ratings, certification or unverified named reviewer were invented. FAQ markup is not a promise of Google rich-result eligibility.

The homepage no longer states an unsupported 98.5% model accuracy in its capability card, implies that its monitoring pipeline issues verified credits, or says Reni replaces field surveys. The demo is visibly labelled illustrative. The existing visual design and enquiry workflow are retained.

## Search evidence

Ahrefs data retrieved 13 September 2026. Country volumes are estimated monthly searches; global includes those countries. These are not analytics or forecasts.

| Query | India | US | Global | Relevant limitation |
|---|---:|---:|---:|---|
| forest monitoring | 10 | 60 | 250 | US KD now 34, India KD 10. Mixed product/institutional intent. |
| satellite forest monitoring | 20 | 10 | 60 | Difficulty unavailable; keep on the main forest-monitoring page. |
| digital mrv | 30 | 30 | 200 | US KD 2; India SERP rows unavailable. |
| mrv carbon | 40 | 100 | 400 | Global estimate differs from 9 September's 450. |
| forest carbon accounting | 0 | 0 | 10 | Refresh justified by content quality and buyer support, not large keyword volume. |
| biomass estimation | 40 | 20 | 90 | India CPC US$0.70; difficulty unavailable. |

The US forest-monitoring SERP snapshot is dated 10 September, with EOSDA's product page at reported position 8. India uses a 20 August snapshot, with EOSDA at 5. The digital-MRV US snapshot is still 14 August, mixing explainers and a product page. No live Google rank claim is made.

The current Mynzo Site Explorer query returned only the India brand keyword, position 1, estimated monthly volume 0 and traffic 1. The earlier snapshot reported different estimates. Sparse estimates and differing monthly data do not establish a real traffic decline, deployment impact or a Google index count. Search Console and analytics have not been inspected in this sprint.

The exact forest-carbon-accounting SERP lookup returned no India rows and a US snapshot from 2016. That snapshot was explicitly rejected as current ranking evidence.

## Sources and content boundaries

Scientific and product sources were checked during this sprint:

- [Mynzo](https://www.mynzocarbon.com/) and [Mynzo Partner](https://play.google.com/store/apps/details?id=com.mynzogrowers): published product scope and field-record collection.
- [World Bank/PMI digital MRV guidance](https://www.pmiclimate.org/publication/technical-guidance-note-standardizing-digital-mrv-carbon-markets-system-evaluation): accessible official summary of system evaluation.
- [Verra VCS lifecycle](https://verra.org/programs/verified-carbon-standard/develop-a-vcs-project/) and [Verra FAQs](https://verra.org/faq/): monitoring, independent verification and issuance responsibilities.
- [IPCC 2006 generic methods](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_02_Ch2_Generic.pdf), [forest-land guidance](https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/4_Volume4/V4_04_Ch4_Forest_Land.pdf) and [2019 refinement](https://www.ipcc-nggip.iges.or.jp/public/2019rf/pdf/4_Volume4/19R_V4_Ch02_Generic%20Methods.pdf): pools, methods, consistent time series and uncertainty.
- [GEDI calibration](https://gedi.umd.edu/science/calibration-validation/) and [data products](https://gedi.umd.edu/dataproducts/products/): field/lidar reference data, scale and uncertainty.
- [Copernicus mission](https://sentiwiki.copernicus.eu/web/s2-mission) and [products](https://sentiwiki.copernicus.eu/web/s2-products): sensor detail and usable observations.
- [ESA forest-monitoring project](https://eo4society.esa.int/projects/soft/): optical/radar roles and tropical cloud limitations.
- [Global Forest Watch explanation](https://www.globalforestwatch.org/blog/data-and-tools/2025-tree-cover-loss-data-explained/): cover loss and deforestation distinctions.
- [NASA Earthdata discussion](https://forum.earthdata.nasa.gov/viewtopic.php?t=4185): missing quality-screened observations.
- [Oregon forest-carbon accounting](https://www.oregon.gov/odf/forestbenefits/Pages/forest-carbon-accounting.aspx): a real example of changed methods affecting comparability.

Practitioner discussions informed questions. They are not represented as Mynzo testimonials. The product pages have no quote wall, invented customers, prices or delivery guarantees. Geographic examples are planning situations, not customer projects or proof of worldwide coverage. Country, method, outputs and field needs must match the actual engagement.

## Validation and status

- Built with the repository's supported Node 22 runtime. Production build and TypeScript validation passed.
- All seven existing tests passed, with the sitemap expectation extended for the two routes.
- Read-only preview checks covered 26 sitemap URLs and 17 articles, metadata/canonicals, JSON-LD, exact FAQ-answer parity, old publication/new modification dates, robots, noindex and missing-page 404s.
- Desktop and 390px mobile checks covered both new pages, navigation, expanded answers and the refreshed article. No horizontal overflow was observed. The broken article-cover URL found in this pass was repaired before final verification.
- New content and added homepage copy contain no em dashes.
- No production CMS write, form submission, IndexNow submission or production deployment is part of this sprint. The PR is for content review.

Full local research and verification evidence is under `audits/2026-09-13/`; it includes request parameters and snapshot dates. It is not required at runtime.

## Next work

After content approval, publish through the existing GitHub/Vercel production flow, verify live pages and sitemap, then submit the changed URLs through IndexNow. Sitemap acceptance and indexing remain separate outcomes.

The other agroforestry and soil-carbon articles still need their own source-based refresh. Existing homepage impact totals and broader product/integration claims need supporting evidence. The dedicated methodology and project-developer pages remain later content work. No ranking or AI-citation improvement is claimed before measurement.
