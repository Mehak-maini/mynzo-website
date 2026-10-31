import type { StaticPost } from './blogPosts';

export const educationIndiaLandPosts: StaticPost[] = [
  {
    slug: 'agroforestry-in-india',
    tag: 'Farming & Landscapes',
    tagBg: '#E8F3FA',
    tagColor: '#1A5A7A',
    title: 'Agroforestry in India: 4 Systems and Regional Examples',
    excerpt: 'Compare four agroforestry systems in India, from poplar and crops to coconut gardens. Use a practical checklist for water, layout, labour and markets.',
    date: 'October 31, 2026',
    updatedAt: '2026-10-31',
    readTime: '8',
    img: "/images/education/covers/agroforestry-in-india.webp",
    imgAlt: "Rows of poplar trees growing with wheat in Punjab, India",
    imgCredit: {"title": "Poplar Trees - panoramio (8)", "author": "vikas bishnoi", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Poplar_Trees_-_panoramio_(8).jpg", "license": "CC BY 3.0", "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"},
    author: 'Mynzo Team',
    content: `
      <p>Agroforestry in India includes trees grown with field crops, fruit trees with intercrops, managed trees and fodder, and gardens with several layers of crops. A suitable system depends on the farm's water supply, existing production, labour and buyers. The most useful comparison is between systems that could work on the same parcel.</p>
      <p>This guide compares four documented Indian examples and turns them into a planning checklist. For the wider evidence on benefits and tradeoffs, read our <a href="/blog/agroforestry-the-future-of-sustainable-land-use">agroforestry overview</a>.</p>
      <nav aria-label="In this guide"><strong>In this guide</strong><ul>
        <li><a href="#indian-agroforestry-systems">The main types of system</a></li>
        <li><a href="#regional-system-comparison">Four regional examples</a></li>
        <li><a href="#choose-a-system">Choose for the actual farm</a></li>
        <li><a href="#farm-planning-example">An illustrative planning record</a></li>
        <li><a href="#record-agroforestry-change">What to record after establishment</a></li>
        <li><a href="#india-agroforestry-questions">Common questions</a></li>
      </ul></nav>

      <h2 id="indian-agroforestry-systems">What are the major agroforestry systems in India?</h2>
      <p>The names describe the components. <strong>Agrisilviculture</strong> combines woody plants and agricultural crops. <strong>Silvopasture</strong> combines trees, forage and managed grazing. <strong>Agri-horticulture</strong> combines fruit trees and crops. A <strong>multi-storey system</strong> uses plants of different heights, such as palms, fruit plants and ground crops. These categories can overlap.</p>
      <p><a href="https://www.fao.org/sustainable-forest-management-toolbox/modules/agroforestry/2/en">FAO's agroforestry guidance</a> includes trees, shrubs, palms and bamboo deliberately integrated with crops or animals, either together or through a planned sequence. The arrangement matters. A species list alone does not explain how its components will share land, water or work.</p>

      <h2 id="regional-system-comparison">Compare four documented regional examples</h2>
      <p>The combinations below come from government or agricultural research sources. The final column contains planning questions to resolve locally. Rainfall varies within each region, so a regional example is a starting point for discussion with a farmer and local extension team.</p>
      <div class="blog-table-wrap" role="region" aria-label="Agroforestry systems in four Indian regions" tabindex="0"><table>
        <caption>Regional examples, products and decisions before planting</caption>
        <thead><tr><th scope="col">System and region</th><th scope="col">Documented combination</th><th scope="col">Water and site context</th><th scope="col">Products and care to plan</th></tr></thead>
        <tbody>
          <tr><th scope="row">Poplar with crops, Haryana and adjoining northern plains</th><td>Poplar with crops including wheat, mustard or sugarcane.</td><td>Check reliable water availability and soil suitability; the Haryana guidance identifies fertile soil and a high water table as favourable.</td><td>Crop harvests and wood. Plan pruning, machinery access and the eventual tree harvest.</td></tr>
          <tr><th scope="row">Khejri with crops, Rajasthan</th><td><em>Prosopis cineraria</em> with pearl millet, cluster bean or moth bean.</td><td>Western Rajasthan's dryland context requires a seasonal water budget and locally suitable establishment methods.</td><td>Annual crops alongside retained or established trees. Check crop operations and tree management together.</td></tr>
          <tr><th scope="row">Aonla with crops, Bundelkhand</th><td>Aonla with combinations including black gram, green gram, groundnut, wheat or mustard.</td><td>Rainfall-dependent farming in a drought-prone region. Assess moisture conservation and establishment water.</td><td>Fruit and seasonal crops. Plan orchard care, harvest labour and fruit handling.</td></tr>
          <tr><th scope="row">Coconut multi-storey cropping, coastal Odisha</th><td>Coconut with a middle layer such as banana, papaya or guava, and ground crops such as turmeric or cowpea.</td><td>Assess light beneath existing palms, drainage and water available through the dry season.</td><td>Several crop harvests. Budget for the extra crop care, inputs and access between layers.</td></tr>
        </tbody>
      </table></div>

      <h3>Poplar: design around the whole crop calendar</h3>
      <p>The <a href="https://haryanaforest.gov.in/agro-forestry-models/">Haryana Forest Department's account</a> describes poplar becoming leafless in winter and lists a range of intercrops. That seasonal pattern is relevant to a winter crop; it does not mean shade and water competition disappear throughout the year. Ask how the proposed rows affect each crop operation as the trees grow.</p>
      <h3>Khejri: use the regional system, not a generic tree list</h3>
      <p>The <a href="https://bhuvan-app1.nrsc.gov.in/asi_portal/agro_systems.php">NRSC portal's regional table, supplied by ICAR-CAFRI</a>, lists khejri with pearl millet and several dryland crops for Rajasthan. Confirm the botanical identity, <em>Prosopis cineraria</em>, when discussing the example. A common name or genus alone is an inadequate planting specification. Record which existing trees will remain before deciding whether additional planting is needed.</p>
      <h3>Aonla: establishment water still needs an answer</h3>
      <p>A <a href="https://epubs.icar.org.in/index.php/AAZ/article/download/141810/55485/425867">2024 ICAR-CAFRI review of Bundelkhand agroforestry</a> describes aonla-based combinations and the region's dependence on rainfall. A system described as suitable for rainfed conditions still needs an establishment plan. Identify where water would come from during a dry spell, who can supply it and which crop commitments must be protected.</p>
      <h3>Coconut gardens: account for the work between the palms</h3>
      <p><a href="https://icar-ciwa.org.in/gks/index.php/wft/117-coconut-crop-model">ICAR-CIWA documents an Odisha multi-storey model</a> with middle and ground crop layers. Its combinations illustrate how an existing coconut holding can be arranged. Before copying one, check who will manage the additional harvests and whether irrigation, nutrients and access are adequate.</p>

      <h2 id="choose-a-system">A checklist for choosing an agroforestry system</h2>
      <p><a href="https://agritech.tnau.ac.in/forestry/forestry_faq_agro.html">Tamil Nadu Agricultural University's agroforestry FAQ</a> links tree choice to soil, climate, the time horizon, environmental goals and markets. Use those factors to compare actual options:</p>
      <ol>
        <li><strong>Write the farm's priority.</strong> Is the household seeking fodder, fruit, wood, shelter or a combination? Identify the crop or grazing use that must continue.</li>
        <li><strong>Draw the usable parcel.</strong> Include existing trees, paths, irrigation, boundaries and turning space. Mark areas that should remain open and any access shared with neighbours.</li>
        <li><strong>Make a month-by-month water and work calendar.</strong> Put tree care beside sowing, weeding and harvesting. A labour shortage during establishment is part of the design problem.</li>
        <li><strong>Check the sale or use of each product.</strong> Identify likely buyers, collection points, quality requirements and transport. Obtain current local information rather than copying old demonstration prices.</li>
        <li><strong>Agree responsibility for the full tree cycle.</strong> Confirm landholder consent, who maintains and harvests the trees, and which local requirements must be checked before operations begin.</li>
      </ol>
      <p>FAO recommends assessing costs and benefits and testing proposed systems on a small scale. A trial should answer a specific uncertainty, such as whether a crop remains workable beside the proposed rows. Decide in advance what result would make the team revise the layout.</p>

      <h2 id="farm-planning-example">An illustrative planning record for one farm</h2>
      <p>Imagine a farmer comparing boundary planting with rows inside a cropped parcel. The following record is hypothetical. It shows how to keep unresolved decisions visible before ordering seedlings.</p>
      <div class="blog-table-wrap" role="region" aria-label="Illustrative agroforestry option review" tabindex="0"><table>
        <caption>Example decision record, not a measured farm result</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">Boundary option</th><th scope="col">Internal-row option</th><th scope="col">Evidence needed</th></tr></thead>
        <tbody>
          <tr><th scope="row">Can machinery still operate?</th><td>Check gates and turning corners.</td><td>Check row spacing against each operation.</td><td>Walk the proposed layout with the operator.</td></tr>
          <tr><th scope="row">Who provides dry-season care?</th><td>Responsibility not yet assigned.</td><td>Responsibility not yet assigned.</td><td>Name the person, water source and available time.</td></tr>
          <tr><th scope="row">How will crop effects be assessed?</th><td>Record distance from the planted edge.</td><td>Record distance from rows and tree age.</td><td>Agree repeat observations and a suitable comparison area.</td></tr>
          <tr><th scope="row">Is there a workable market?</th><td>Buyer requirements unknown.</td><td>Buyer requirements unknown.</td><td>Confirm product specifications and transport costs.</td></tr>
        </tbody>
      </table></div>
      <p>Neither option wins from this blank record. Its purpose is to identify the few facts that would change the decision. Keep rejected options and the reasons for rejecting them so a later project team can understand the choice.</p>

      <h2 id="record-agroforestry-change">What should the project record after establishment?</h2>
      <p>Keep a parcel map, planting register, replacement history and records of crop operations. Give each planting cohort a date. Recording a replacement separately prevents it from being counted as an original tree that survived.</p>
      <p>Match the record to the question: tree survival needs field observations; crop performance needs crop measurements; costs need accounts. A canopy map cannot supply all three. For projects spanning several farms, use the <a href="/blog/restoration-monitoring-plan">restoration monitoring guide</a> to organise repeat visits and follow-up actions.</p>
      <p>If your team needs to scope repeated tree-cover observations across a farm programme, <a href="/get-started?interest=forest-monitoring&amp;source=agroforestry-in-india-guide">discuss the monitoring requirement with Mynzo</a>. Bring parcel boundaries, planting dates and the field records already available.</p>

      <h2 id="india-agroforestry-questions">Common questions</h2>
      <h3>Which agroforestry system is best in India?</h3>
      <p>There is no national winner. Compare locally suitable combinations against water, farm operations, care and the intended use of the products. A system documented in one region needs a fresh suitability assessment elsewhere.</p>
      <h3>Does agroforestry have to include livestock?</h3>
      <p>No. Trees with field crops are an agrisilvicultural system. Livestock introduces additional questions about grazing, forage and protection of young trees; include it only when those components are deliberately managed.</p>
      <h3>Can a small farm use agroforestry?</h3>
      <p>Boundary arrangements and mixed gardens can be considered alongside internal rows. The available area alone does not decide suitability. Check access, neighbouring uses, mature plant size and the work the household can sustain.</p>
      <p><em>Sources checked on 31 October 2026. Regional systems are documented examples; the option-review record is an original illustrative exercise. Plant selection and management need local agricultural advice.</em></p>
    `,
  },
  {
    slug: 'soil-health-indicators',
    tag: 'Soil & Farming',
    tagBg: '#F4EFE6',
    tagColor: '#765A2F',
    title: 'Soil Health Indicators: Field Checks and Lab Tests',
    excerpt: 'Compare physical, chemical and biological soil health indicators. Learn what India’s Soil Health Card covers and how to keep repeat assessments comparable.',
    date: 'October 31, 2026',
    updatedAt: '2026-10-31',
    readTime: '8',
    img: "/images/education/covers/soil-health-indicators.webp",
    imgAlt: "An earthworm on a clod of soil resting on a spade",
    imgPosition: 'center 60%',
    imgCredit: {"title": "Singaporean Earthworm", "author": "Ronggy", "sourceUrl": "https://commons.wikimedia.org/wiki/File:Singaporean_Earthworm.jpg", "license": "Public domain, released by the photographer", "licenseUrl": "https://commons.wikimedia.org/wiki/File:Singaporean_Earthworm.jpg#Licensing"},
    author: 'Mynzo Team',
    content: `
      <p>Soil health indicators are observations or measurements that help explain how soil functions. Physical indicators concern structure and water movement; chemical indicators concern properties such as acidity, salts and nutrients; biological indicators concern organisms and their activity. A useful assessment combines evidence from these groups around a specific field problem.</p>
      <p>A crop can look healthy while another soil function needs attention. The <a href="https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-assessment">USDA Natural Resources Conservation Service</a> therefore treats indicators as clues to soil function rather than a single direct measurement of health. This guide connects those clues to field checks, laboratory tests and India's Soil Health Card.</p>
      <nav aria-label="In this guide"><strong>In this guide</strong><ul>
        <li><a href="#soil-indicator-matrix">Choose indicators for the question</a></li>
        <li><a href="#soil-health-card-parameters">The 12 Soil Health Card parameters</a></li>
        <li><a href="#comparable-soil-samples">Make repeat samples comparable</a></li>
        <li><a href="#soil-field-record">An illustrative field record</a></li>
        <li><a href="#interpret-soil-results">Interpret results before choosing an action</a></li>
        <li><a href="#soil-indicator-questions">Common questions</a></li>
      </ul></nav>

      <h2 id="soil-indicator-matrix">Which soil health indicators should you use?</h2>
      <p>Start with the decision. Slow water entry, poor rooting and an uncertain nutrient supply call for different observations. The matrix below is a selection aid. It does not replace the sampling and interpretation protocol for a particular test.</p>
      <div class="blog-table-wrap" role="region" aria-label="Physical chemical and biological soil health indicators" tabindex="0"><table>
        <caption>Questions, indicators and limits to record</caption>
        <thead><tr><th scope="col">Question</th><th scope="col">Indicator</th><th scope="col">How it is assessed</th><th scope="col">Comparison limit</th></tr></thead>
        <tbody>
          <tr><th scope="row">Can roots explore the soil?</th><td>Physical: rooting pattern and visible structure.</td><td>Inspect a soil face and record depth, layers and roots.</td><td>A single hole may miss variation elsewhere in the field.</td></tr>
          <tr><th scope="row">Is the soil compacted?</th><td>Physical: bulk density.</td><td>Measure dry soil mass in a known volume.</td><td>Interpret with soil texture, depth and an appropriate reference.</td></tr>
          <tr><th scope="row">How does water enter?</th><td>Physical: infiltration.</td><td>Use a defined field method and record water entry over time.</td><td>Keep method and starting soil conditions comparable.</td></tr>
          <tr><th scope="row">Do soil crumbs resist breakdown?</th><td>Physical: aggregate stability.</td><td>Use a specified wetting or laboratory test.</td><td>A simple demonstration and a calibrated lab result are different records.</td></tr>
          <tr><th scope="row">Are acidity or salts a concern?</th><td>Chemical: pH and electrical conductivity.</td><td>Laboratory analysis using a stated extraction method.</td><td>Keep units, method and the crop's requirements with the result.</td></tr>
          <tr><th scope="row">What nutrients are available?</th><td>Chemical: extractable nutrient measurements.</td><td>Use a locally appropriate soil fertility test.</td><td>A result needs local crop and soil interpretation.</td></tr>
          <tr><th scope="row">What biological activity is detected?</th><td>Biological: soil respiration.</td><td>Measure carbon dioxide released under defined test conditions.</td><td>Incubation, moisture, temperature and reporting units matter.</td></tr>
          <tr><th scope="row">How much organic carbon is present?</th><td>Organic carbon concentration.</td><td>Use a suitable laboratory method.</td><td>Concentration alone does not establish carbon stock or its change.</td></tr>
        </tbody>
      </table></div>
      <p>The physical checks draw on <a href="https://www.css.cornell.edu/extension/soil-health/manual.pdf">Cornell's soil health assessment manual</a>; the <a href="https://nrcspad.sc.egov.usda.gov/DistributionCenter/product.aspx?ProductID=1482">NRCS bulk-density guide</a> explains the mass-to-volume measurement. Keep the field sheet and laboratory report together, since either can reveal a limitation in the other.</p>
      <p>For biological tests, the <a href="https://mosh.umn.edu/indicators">Minnesota Office for Soil Health</a> explains that microbial activity varies with time and conditions. A respiration test measures activity under its test conditions. It does not directly measure the rate of carbon release from the entire field.</p>
      <p>The <a href="https://cropsandsoils.extension.wisc.edu/articles/an-overview-of-common-soil-health-indicators/">University of Wisconsin's indicator review</a> also documents differences between laboratory methods and units. Ask the laboratory to name its method before comparing two numbers from different reports.</p>

      <h2 id="soil-health-card-parameters">What are the 12 parameters in India's Soil Health Card?</h2>
      <p>The government's <a href="https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&amp;NoteId=153741&amp;lang=1&amp;reg=3">Soil Health Card explanation</a> lists twelve parameters:</p>
      <ul>
        <li><strong>Four macronutrients:</strong> nitrogen, phosphorus, potassium and sulphur.</li>
        <li><strong>Five micronutrients:</strong> zinc, iron, copper, manganese and boron.</li>
        <li><strong>Three other properties:</strong> pH, electrical conductivity and organic carbon.</li>
      </ul>
      <p>These are twelve <strong>parameters</strong>, not twelve nutrients. The card connects soil results with crop-related nutrient and amendment recommendations. It provides a useful fertility record, but its listed parameters do not directly measure infiltration, compaction, aggregate stability or microbial activity.</p>
      <p>For example, a team investigating ponding can retain the card's chemical results while adding physical observations. Order extra tests only where they answer the actual question. A larger laboratory package is not automatically a more useful assessment.</p>

      <h2 id="comparable-soil-samples">Make repeat samples comparable</h2>
      <p>A change between reports is easier to interpret when the sampling design remains consistent. Before taking a sample, agree the area it represents, the depth, the timing, the method and the handling required by the receiving laboratory.</p>
      <p><a href="https://agritech.tnau.ac.in/agriculture/agri_soil_sampling.html">Tamil Nadu Agricultural University's sampling guidance</a> separates fields with different drainage, slope or management histories and records the crop and sampling location. Its routine fertility procedure should not be assumed suitable for every biological test. Some tests need different sample preparation or storage.</p>
      <ol>
        <li><strong>Define sampling units.</strong> Draw the boundaries and keep visibly different or differently managed areas separate. Identify unusual problem spots for a specific diagnostic comparison.</li>
        <li><strong>Confirm the laboratory instructions.</strong> Record the required depth, number of subsamples, container, preparation and delivery conditions. Ask before drying, grinding or refrigerating material.</li>
        <li><strong>Record the context.</strong> Include recent rain or irrigation, crop stage, cultivation and amendment history, alongside the sample ID and collection date.</li>
        <li><strong>Keep the comparison consistent.</strong> Use the same defined area and depth, and a similar seasonal window where possible. Record a method change instead of treating it as a soil change.</li>
        <li><strong>Set the next check around a decision.</strong> Repeat a field observation after the relevant event; agree the timing of laboratory retests with the adviser and laboratory.</li>
      </ol>
      <p>India's programme publications and local advice describe different sampling schedules. Use the current instructions for your area and purpose rather than treating one national interval as suitable for every indicator. A quickly changing biological measurement and a slowly changing soil-carbon stock do not need the same timetable.</p>

      <h2 id="soil-field-record">An illustrative record for a field with uneven growth</h2>
      <p>Imagine a team investigating a cropped field with a heavily used access strip and a wet lower corner. This is a hypothetical example, with no measured soil results. The record separates the questions before samples are combined.</p>
      <div class="blog-table-wrap" role="region" aria-label="Illustrative soil assessment record" tabindex="0"><table>
        <caption>Example sample plan to review with a soil adviser</caption>
        <thead><tr><th scope="col">Unit</th><th scope="col">Observation</th><th scope="col">Question for assessment</th><th scope="col">Record before comparing</th></tr></thead>
        <tbody>
          <tr><th scope="row">SH-01: main cropped area</th><td>Growth appears relatively even.</td><td>What is the representative fertility status?</td><td>Boundary, crop, sampling depth and laboratory method.</td></tr>
          <tr><th scope="row">SH-02: access strip</th><td>Repeated vehicle use and shallow-looking roots.</td><td>Is a physical restriction present?</td><td>Separate diagnostic location, soil condition and depth of any restriction.</td></tr>
          <tr><th scope="row">SH-03: lower corner</th><td>Water remains visible after rain.</td><td>Does drainage or another site condition explain poor growth?</td><td>Rain timing, duration of ponding and comparison with the rest of the field.</td></tr>
        </tbody>
      </table></div>
      <p>Mixing all three areas into one bag would make it harder to connect a result to a problem. The next step is to agree which samples and observations can test each explanation. Do not label the access strip compacted or prescribe a treatment solely from the initial walkover.</p>
      <p>Keep a short decision log: observation, possible explanation, evidence required, person responsible and review date. If a management change is made, preserve the earlier record so the team can judge whether the intended condition changed.</p>

      <h2 id="interpret-soil-results">Interpret results before choosing an action</h2>
      <p>There is no universal target for every indicator and soil. Cornell's assessment manual explicitly relates interpretation to its regional framework. A threshold developed for a different soil, climate or test method needs an explanation before it is used to grade an Indian field.</p>
      <p>Higher is not always better. pH needs to suit the crop and soil; a salt measurement is not a score to maximise. Wisconsin's review explains why a carbon concentration cannot establish the amount of carbon stored per unit area. Use our <a href="/blog/understanding-soil-carbon-the-hidden-climate-solution">soil-carbon measurement guide</a> for that separate calculation.</p>
      <p>The <a href="https://www.nrcs.usda.gov/conservation-basics/soil/soil-health/soil-health-testing">NRCS soil health testing guidance</a> connects tests to management questions and changes over time. Discuss the findings with the laboratory or an agricultural adviser, choose an action that addresses the identified constraint, and decide what observation would show whether it helped.</p>
      <p>For a restoration team, add the chosen soil indicators to the wider <a href="/blog/restoration-monitoring-plan">restoration monitoring plan</a>. For a farm considering management changes, our <a href="/blog/how-to-increase-organic-carbon-in-soil">soil management guide</a> compares practices and their limits. Neither a soil photograph nor satellite greenness replaces the measurements above.</p>

      <h2 id="soil-indicator-questions">Common questions</h2>
      <h3>What is the best indicator of healthy soil?</h3>
      <p>No single indicator covers every soil function. Start with the problem being investigated, then combine relevant physical, chemical and biological evidence. Keep the test method and site context with every result.</p>
      <h3>Is a Soil Health Card the same as a complete soil health assessment?</h3>
      <p>The card reports twelve specified parameters and supports fertility advice. A wider assessment may need physical or biological checks, depending on the question. The two records can be used together.</p>
      <h3>Can I compare soil health results from two laboratories?</h3>
      <p>Check methods, extraction or incubation conditions, units, sample depth and interpretation first. Similar test names do not guarantee comparable results. Ask each laboratory to explain differences before drawing a trend.</p>
      <p><em>Sources checked on 31 October 2026. The field record is an original illustrative exercise, not a sampling prescription or a reported Mynzo project. Follow the laboratory's current instructions for the selected tests.</em></p>
    `,
  },
];
