import type { StaticPost } from './blogPosts';

export const habitatMappingPost: StaticPost = {
  slug: 'habitat-mapping',
  tag: 'Biodiversity',
  tagBg: '#EBF7F0',
  tagColor: '#1A7A4A',
  title: 'Habitat Mapping: A Practical Guide for Project Teams',
  excerpt: 'Commission a useful habitat map. Choose the right data, boundaries and seasons, request field validation, and review the results with an editable project brief.',
  date: 'October 8, 2026',
  updatedAt: '2026-10-08',
  readTime: '10',
  img: '/height_tree_jpg.jpeg',
  author: 'Mynzo Team',
  content: `
    <p>Habitat mapping identifies the types of habitat present within a defined area and records their locations and extent. A useful map includes a classification, observation dates and evidence about its reliability. For a project team, the first question is what decision the map must support: planning a survey, locating restoration work, comparing sites or assessing a change.</p>
    <p>This guide covers terrestrial habitat mapping for site and portfolio planning. It explains what to request from a mapping team and how to review the delivery. For choosing ecological measurements after mapping, use our <a href="/blog/biodiversity-metrics-for-restoration-projects">biodiversity metrics guide</a>.</p>

    <nav aria-label="In this guide"><strong>In this guide</strong><ul>
      <li><a href="#habitat-map-purpose">Define what the map must show</a></li>
      <li><a href="#mapping-data-selection">Choose suitable mapping data</a></li>
      <li><a href="#mapping-boundaries">Set boundaries and map detail</a></li>
      <li><a href="#mapping-seasons">Record seasons and versions</a></li>
      <li><a href="#mapping-validation">Check the validation evidence</a></li>
      <li><a href="#mapping-delivery">Review the delivery</a></li>
      <li><a href="#habitat-mapping-example">Work through a project example</a></li>
      <li><a href="#habitat-mapping-questions">Common questions</a></li>
      <li><a href="#habitat-mapping-brief">Download the project brief</a></li>
    </ul></nav>

    <h2 id="habitat-map-purpose">Define what the map must show</h2>
    <p>The <a href="https://www.eea.europa.eu/en/topics/in-depth/biodiversity/an-introduction-to-habitats">European Environment Agency explains two uses of habitat</a>: the environment used by a particular species, and a community of organisms with its physical environment. A map of habitat types and a model of suitable habitat for one species therefore answer different questions.</p>
    <p>Write the intended decision in one sentence, then agree which evidence it needs:</p>
    <ul>
      <li><strong>Land cover:</strong> broad surface classes such as tree cover, grassland or cropland.</li>
      <li><strong>Habitat type:</strong> an ecological category defined by an agreed classification and supporting observations.</li>
      <li><strong>Habitat condition:</strong> an assessment against stated ecological criteria, recorded separately from its mapped extent.</li>
      <li><strong>Species evidence:</strong> observations or a clearly identified suitability model, with its own methods and limits.</li>
    </ul>
    <p>For example, the <a href="https://esa-worldcover.s3.eu-central-1.amazonaws.com/v200/2021/docs/WorldCover_PUM_V2.0.pdf">ESA WorldCover manual</a> includes plantations within its tree-cover class. A tree-cover polygon alone cannot establish native woodland. Similarly, <a href="https://www.usgs.gov/programs/gap-analysis-project/science/species-data-overview">USGS GAP habitat predictions</a> are intended for landscape use, rather than precise local species presence or absence.</p>
    <p>Specify the classification name, version and level of detail. The <a href="https://www.eea.europa.eu/en/datahub/datahubitem-view/638330ea-90e6-4e41-81ea-e70f25ae7117/">EUNIS system</a> provides codes, descriptions and links between classifications for European habitats. For India or another region, agree a suitable local system with the ecologist. A portfolio can retain local classes alongside broader reporting groups, with the correspondence documented.</p>

    <h2 id="mapping-data-selection">Choose data for the decision and the size of the features</h2>
    <p>Start with available data, then identify what remains unresolved. The following options serve different purposes; the table is a planning comparison, not a list of Mynzo product features.</p>
    <div class="blog-table-wrap" role="region" aria-label="Habitat mapping data selection" tabindex="0">
      <table>
        <caption>Data to consider when commissioning a terrestrial habitat map</caption>
        <thead><tr><th scope="col">Data option</th><th scope="col">Useful starting point</th><th scope="col">Check before relying on it</th></tr></thead>
        <tbody>
          <tr><th scope="row">Global land-cover map</th><td>Broad site context and initial survey planning. <a href="https://esa-worldcover.org/en/about/about">ESA WorldCover</a> provides 10 m products with 11 classes.</td><td>Reference year, class definitions and local errors. These broad classes may not separate the habitats you need.</td></tr>
          <tr><th scope="row">India national land-cover data</th><td>Regional context and historical land-use patterns. <a href="https://www.nrsc.gov.in/nrscnew/resources_atlas_LULC.php">NRSC's annual atlas</a> describes a 56 m dataset.</td><td>Actual map date, scale and whether small site features are represented. National coverage does not establish site-level detail.</td></tr>
          <tr><th scope="row">Regional habitat prediction</th><td>A more ecological starting classification where a suitable product exists.</td><td>Geographic coverage, legend and supporting surveys. <a href="https://www.gov.uk/algorithmic-transparency-records/natural-england-living-england">Living England</a> explicitly calls for additional evidence and local advice.</td></tr>
          <tr><th scope="row">New satellite or aerial imagery</th><td>Reviewing recent boundaries and features at a detail appropriate to the site.</td><td>Acquisition dates, usable coverage, sensor detail, interpretation method and reference labels. A sharper image still needs ecological interpretation.</td></tr>
          <tr><th scope="row">Field habitat observations</th><td>Checking classes, uncertain edges and attributes that imagery does not resolve.</td><td>Survey method, observer, season, location accuracy, access gaps and the area each observation represents.</td></tr>
        </tbody>
      </table>
    </div>
    <p>India's <a href="https://www.iirs.gov.in/geoweb-services/">IIRS Biodiversity Information System description</a> distinguishes satellite vegetation maps, modelled landscape information and georeferenced field plots. This is a useful example of complementary evidence. Check the metadata and availability of a specific layer before adopting it for your site.</p>

    <h2 id="mapping-boundaries">Agree the boundary and smallest features to retain</h2>
    <p>Supply a dated project boundary with a named coordinate reference system. Distinguish the reporting area from any surrounding area needed for ecological context. Keep neighbouring habitat visible where relevant, while making clear which hectares belong in the project totals.</p>
    <p>Ask the mapping team to state both pixel size and minimum mapping unit. Pixel size describes the raster grid; the minimum mapping unit is the smallest patch the mapping rules retain as a separate feature. Neither is a guarantee that every habitat boundary is correct.</p>
    <p>A narrow strip of vegetation may share pixels with the land beside it. Agree how the map will treat narrow features, mixed patches and areas below the chosen minimum size. Options may include a separate line or point layer, more detailed evidence, or an explicit unresolved classification. Enlarging the display does not recover detail the source did not record.</p>
    <p>Retain a boundary version and a record of edits. If a later map covers a larger site, separate the added area from change within the original boundary. Otherwise, a revised project outline can look like an ecological gain.</p>

    <h2 id="mapping-seasons">Record observation dates, seasons and product versions</h2>
    <p>A map's publication date is not necessarily its observation date. Request the imagery window, field dates and treatment of missing or obscured areas. Record which habitat distinctions require observations in a suitable season, rather than setting one survey month for every site.</p>
    <p><a href="https://www.nrsc.gov.in/nrscnew/Apps_LULC.php">NRSC's 1:50,000 land-cover programme</a> describes using imagery from three seasons. For an India project, agree the local wet-season, dry-season or crop-cycle evidence needed for the classes in question. An international portfolio needs equivalent ecological windows, which may fall in different calendar months.</p>
    <p>Also check comparability before subtracting one map from another. <a href="https://esa-worldcover.org/en/data-access">ESA warns that its 2020 and 2021 WorldCover maps use different algorithms</a>, so their differences include processing effects as well as real land-cover change. Keep the legend, processing version and boundary history with each delivery. Investigate apparent change before reporting it as habitat loss or recovery.</p>

    <h2 id="mapping-validation">Request evidence behind the accuracy figure</h2>
    <p>Validation requires time and a budget. In a <a href="https://gis.stackexchange.com/questions/328112/is-there-a-faster-way-to-assess-accuracy-of-image-classification-in-arcgis">public GIS discussion</a>, a user described the effort involved in reviewing hundreds of reference points. Agree that work before the map is produced.</p>
    <p>Ask which observations trained or informed the classification and which independently checked it. <a href="https://developers.google.com/earth-engine/guides/classification">Google Earth Engine's classification guidance</a> distinguishes training results from independent validation. Testing only against the examples used to build a classifier does not answer how well it performs elsewhere.</p>
    <p>Request a validation record with the reference source, dates, sample selection, class labels and geographical coverage. Record inaccessible samples and disputed labels. A site visit or photograph should be traceable to the mapped location and the feature being assessed.</p>
    <p><a href="https://samv.elearning.unipd.it/pluginfile.php/175898/mod_resource/content/0/articolo_oloffson.pdf">Olofsson and colleagues' accuracy-assessment guidance</a> connects probability sampling, reference evidence and analysis. It recommends class-specific accuracy and uncertainty reporting. Ask for an error matrix, with its row and column meanings explained:</p>
    <ul>
      <li><strong>User's accuracy:</strong> how much of the area labelled as a class agrees with that class in the reference evidence.</li>
      <li><strong>Producer's accuracy:</strong> how much of a reference class the map identifies correctly.</li>
    </ul>
    <p>Request estimated values, their uncertainty and the population they describe. An overall score can hide a weak result for a small but important class. Where area estimates matter, distinguish the raw mapped hectares from estimates that account for classification error. The sample design must support the calculation.</p>
    <p>Agree acceptance criteria for the intended decision. A map useful for planning a visit may still need more evidence before a team relies on an exact boundary or a rare habitat class. There is no single accuracy percentage or sample count that resolves every commissioning task.</p>

    <h2 id="mapping-delivery">Accept an evidence package with the map</h2>
    <p>Request editable spatial data alongside a readable map. The handover should let another analyst understand what each feature means and reproduce the reported area totals.</p>
    <ol>
      <li><strong>Map and identifiers:</strong> class codes, stable feature IDs, boundary version, coordinate system and area units.</li>
      <li><strong>Method and inputs:</strong> imagery dates, source licences, classification version, mapping rules and processing notes.</li>
      <li><strong>Evidence and gaps:</strong> validation results, survey references, unclassified areas, uncertain boundaries and unresolved labels.</li>
      <li><strong>Review record:</strong> corrections, acceptance decisions, remaining work and the person responsible for each follow-up.</li>
    </ol>
    <p>Keep proposed, predicted and field-checked classifications distinguishable. If you later monitor interventions within these mapped areas, connect the feature IDs to the <a href="/blog/restoration-monitoring-plan">restoration monitoring record</a>.</p>

    <h2 id="habitat-mapping-example">A hypothetical site briefing in India</h2>
    <p>Suppose a team manages 120 hectares containing wooded patches, planted areas, open vegetation and narrow streamside strips. It needs to decide where a detailed restoration survey should begin. These figures and features are an illustration, not Mynzo project results.</p>
    <p>The first brief requests a broad map to organise fieldwork. It also asks the ecologist to identify which distinctions could change the decision, such as planted trees versus native woodland. The team marks streamside strips for separate review because their width may make them poorly represented in the initial layer.</p>
    <p>Before approving the map, the team checks the source dates, reviews uncertain labels and confirms what area the validation covers. Unvisited patches remain flagged. The accepted output is a survey-planning map with stated limits; habitat condition and restoration priorities still require their relevant assessments.</p>
    <p>For a portfolio spanning India and other countries, use the same commissioning fields while retaining local legends and seasonal windows. Compare reporting groups only after documenting how the local classes correspond.</p>

    <h2 id="habitat-mapping-questions">Questions about commissioning a habitat map</h2>
    <h3 id="is-land-cover-habitat-map">Is a land-cover map a habitat map?</h3>
    <p>A land-cover map can support habitat mapping, but its classes may be too broad for the ecological question. Check the legend and supporting evidence. A category such as tree cover can include ecologically different areas.</p>
    <h3 id="habitat-map-resolution">What resolution should a habitat map use?</h3>
    <p>Choose detail according to the smallest feature that could affect the decision. Specify pixel size, minimum patch size, narrow-feature treatment and boundary uncertainty together. A smaller pixel alone does not establish a better habitat classification.</p>
    <h3 id="habitat-map-fieldwork">Does satellite habitat mapping need field validation?</h3>
    <p>It needs suitable independent reference evidence. Existing surveys or detailed imagery may answer some questions; ecological distinctions unresolved by those sources need appropriate field checks. Document how the evidence supports each class and where gaps remain.</p>
    <h3 id="habitat-map-change">Can two habitat maps measure change?</h3>
    <p>They can support change assessment when their boundaries, dates, classifications and methods are sufficiently comparable and errors are assessed. Review differences caused by season, processing or map revision before interpreting them as ecological change.</p>

    <h2 id="habitat-mapping-brief">Prepare a habitat mapping brief</h2>
    <p><a href="/resources/habitat-mapping-brief.txt" download>Download the editable habitat mapping brief</a>. It covers the decision, boundary, classification, dates, validation and delivery requirements, with no registration required.</p>
    <p>Bring your region, project boundary, purpose, existing maps and surveys, and the mapping decision you need to make. Read about <a href="/platform/biodiversity-monitoring">biodiversity monitoring</a>, <a href="/platform/forest-monitoring">Mynzo's forest monitoring approach</a> and <a href="/solutions/project-developers">support for project developers</a>, or <a href="/get-started?interest=biodiversity-monitoring&amp;source=habitat-mapping-guide">discuss your habitat mapping requirements</a>. Confirm suitable observations and any specialist ecological work during scoping.</p>
    <p><em>Sources checked on 8 October 2026. The commissioning workflow is planning guidance; the hypothetical example is not a delivery or outcome claim.</em></p>
  `,
};
