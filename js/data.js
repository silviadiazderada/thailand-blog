/* =============================================================
   SITE DATA — Edit this file to update team, locations & blog
   ============================================================= */

// ── TEAM ──────────────────────────────────────────────────────
// Set photo to an image path (e.g. "images/team/silvia.jpg") once
// you have the photos. Leave as null to show initials.
const TEAM = [
  {
    name:    "Silvia Díaz de Rada",
    initials:"SD",
    role:    "Team Lead · Strategy Consultant",
    bio:     "Strategy consultant and team lead with a sharp eye for market opportunities — and an equally sharp eye for a good deal at any Bangkok market stall. Always down to try new things: Muay Thai, trail running, walking with elephants. The rest of the team is still recovering.",
    photo:   "images/team/Silvia.jpeg"
  },
  {
    name:    "Briana Yesu",
    initials:"BY",
    role:    "Team Member · Marketing Technology",
    bio:     "Marketing technology specialist who already knew the best local spots, the shortcuts, and the contacts before the plane had even landed. Connected with three Haas alumni across Bangkok within the first 48 hours. She knew all the tricks and exactly where the team should be at any given moment. The trip ran on Briana.",
    photo:   "images/team/briana.jpeg"
  },
  {
    name:    "Zander Chase",
    initials:"ZC",
    role:    "Team Member · Data Science & Go-to-Market",
    bio:     "Data scientist, go-to-market strategist, and the team's resident food and agriculture expert — the one who actually knows what Lion's Mane does and why spirulina needs to be dosed carefully. Also the single greatest threat to Thailand's mango sticky rice supply chain, and the only person who returned from a 'quick morning run' three hours later having covered 20 miles.",
    photo:   "images/team/Zander.jpeg"
  },
  {
    name:    "Mateo Torrico",
    initials:"MT",
    role:    "Team Member · Political Strategy & Public Affairs",
    bio:     "Political strategist and public affairs expert who led an army of designers to bring the Wawee Wellness brand image and packaging to life in record time. Has a deep, unwavering loyalty to the Grab app — he will Grab his way anywhere, any time, under any circumstances. Mornings were not his medium. Evenings, however? Legendary.",
    photo:   "images/team/mateo.jpeg"
  }
];

// ── LOCATIONS ─────────────────────────────────────────────────
const LOC = {
  bangkok:     { name: "Bangkok",      coords: [13.7563, 100.5018] },
  chiangRai:   { name: "Chiang Rai",   coords: [19.9105,  99.8406] },
  waweeValley: { name: "Wawee Valley", coords: [19.6600,  99.7500] },
  chiangMai:   { name: "Chiang Mai",   coords: [18.7883,  98.9853] }
};

// ── DAYS ──────────────────────────────────────────────────────
// travel: null = no movement today
// travel: { from, to, mode: 'plane'|'car' } = animated journey
// photos: array of image paths relative to root, e.g. "images/day1/photo1.jpg"
const DAYS = [
  {
    day:      1,
    date:     "Monday, May 18, 2026",
    shortDate:"May 18",
    title:    "Day 1 — Retail Recon in Bangkok",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>We hit the ground running. After landing, the team kicked off with an alignment meeting with Hilltribe Organics to set priorities for the week. On their recommendation, we spent the afternoon doing retail recon at organic stores around the city before our formal meetings begin.</p>
      <h4>First stop: Lemon Farm</h4>
      <p>Walking the aisles was immediately useful — we spotted HTO's own brands on shelf (Perfect Earth chia seeds and Hilltribe Organics free-range eggs at 98 THB/pack), and found a strong competitive reference in <strong>Organic Seeds' Greens Mix</strong>: a clean 5-ingredient organic powder that maps closely to what Wawee 7 is aiming to do. Pricing, certifications, and format all went into our notes.</p>
      <h4>Second stop: Central World — Bewell</h4>
      <p>We continued building out our pricing benchmarks across retail channels, getting a fuller picture of the competitive landscape before we even sit down with the client.</p>
      <p>We wrapped up with a well-earned <em>Kua Gai</em> at Street Food — a proper Bangkok welcome. A solid Day 1. Getting into stores before sitting with the client means we're already showing up with sharper context.</p>
    `,
    photos: [
      "images/day1/IMG_1305.jpeg",
      "images/day1/IMG_1307.jpeg",
      "images/day1/IMG_1309.jpeg",
      "images/day1/IMG_1312.jpeg",
      "images/day1/IMG_1315.jpeg",
      "images/day1/IMG_1319.jpeg",
      "images/day1/IMG_1320.jpeg",
      "images/day1/33DE7FC8-7EB2-4768-B932-69207E2BF51D.JPG"
    ]
  },
  {
    day:      2,
    date:     "Tuesday, May 19, 2026",
    shortDate:"May 19",
    title:    "Day 2 — Lemon Farm HQ & Ohkajhu",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>We met Nakkarin, General Manager of Hilltribe Organics, in person for the first time. He brought us to the <strong>Lemon Farm headquarters</strong>, where we met with the administrative team to discuss retail opportunities for Mulberry Matcha and present our findings on Wawee 7. During the session, we received valuable feedback on our packaging concepts and product designs.</p>
      <p>We also continued our market research and competitor analysis from Day 1.</p>
      <h4>Ohkajhu & Cafe Amazon</h4>
      <p>Afterward, we visited <strong>Ohkajhu</strong>, an organic farm-to-table restaurant, where we enjoyed fresh local dishes and learned more about Nakkarin's experience with HTO. Then we enjoyed coffee and matcha from <strong>Cafe Amazon</strong>, Thailand's largest coffee chain — and a potential future retail partner for Wawee Wellness products.</p>
      <p>We ended the day by bringing home Mulberry Matcha samples for the team to try so we can better understand how to develop its packaging and design, helping accelerate the product's path to shelves at Lemon Farm and beyond.</p>
    `,
    photos: [
      "images/day2/IMG_1349.jpeg",
      "images/day2/IMG_1350.jpeg",
      "images/day2/IMG_1351.jpeg",
      "images/day2/IMG_1352.jpeg",
      "images/day2/IMG_1355.jpeg",
      "images/day2/IMG_4864.jpeg",
      "images/day2/IMG_4868 2.jpeg"
    ]
  },
  {
    day:      3,
    date:     "Wednesday, May 20, 2026",
    shortDate:"May 20",
    title:    "Day 3 — Chiang Rai: Packing Plant & Mulberry Fields",
    location: LOC.chiangRai,
    travel:   { from: LOC.bangkok, to: LOC.chiangRai, mode: "plane" },
    authors:  "The Team",
    content: `
      <p>An early one. Pickup at 5:30am, straight to the airport to catch the morning flight to Chiang Rai — with Nakkarin alongside us. We used the airport time to align with our designers on next steps in the packaging process.</p>
      <h4>The Egg Packing Plant</h4>
      <p>Once we landed, we went straight to the packing plant where HTO eggs are processed and packed. We also got our first glimpse of where the chickens will live and produce organic eggs on-site — a preview of the farm infrastructure that makes all of this possible.</p>
      <h4>Mulberry Fields & the Processing Plant</h4>
      <p>In the afternoon we visited the <strong>Mulberry plantation</strong> and met the farmers tending the plants before they're sent to the processor. A striking detail: <strong>for every 10kg of fresh Mulberry Leaf, only 1kg of finished Mulberry Matcha powder is produced.</strong> That ratio shapes everything — from pricing to positioning.</p>
      <p>At the processing plant we saw the machines in action and mapped the key bottlenecks. One stood out: the sorting process could be meaningfully optimized with a single additional machine — a finding we'll be reporting back to Richard Blossom, the CEO.</p>
      <h4>Temple Visit</h4>
      <p>We wrapped up the day visiting a local temple with members of the Hilltribe Organics team — a great chance to build the relationship outside of a professional context. The best conversations happen when the workday ends.</p>
    `,
    photos: [
      "images/day3/IMG_1376.jpeg",
      "images/day3/IMG_1380.jpeg",
      "images/day3/IMG_1387.jpeg",
      "images/day3/IMG_1394.jpeg",
      "images/day3/IMG_1401.jpeg",
      "images/day3/IMG_4886.jpeg",
      "images/day3/IMG_4889.jpeg",
      "images/day3/IMG_4893.jpeg",
      "images/day3/IMG_4939.jpeg",
      "images/day3/IMG_7563.jpeg",
      "images/day3/IMG_7571.jpeg"
    ]
  },
  {
    day:      4,
    date:     "Thursday, May 21, 2026",
    shortDate:"May 21",
    title:    "Day 4 — Into Wawee Valley & Meeting the Hens",
    location: LOC.waweeValley,
    travel:   { from: LOC.chiangRai, to: LOC.waweeValley, mode: "car" },
    authors:  "The Team",
    content: `
      <p>Nakkarin picked us up from Chiang Rai and we drove into the Wawee Valley. After hearing about it for so long, it was something else to finally see it from the car window — and then arrive at the HTO headquarters.</p>
      <h4>HTO Headquarters</h4>
      <p>We met a team of around 8 workers who oversee farm operations, quality control, and business logistics from the valley. The HQ serves as a staging point for eggs from all farms before they're trucked to Chiang Rai for packaging. A few numbers that stuck with us: <strong>42 farmers</strong> operate in the valley, <strong>90% of them women</strong>, producing approximately <strong>20,000 eggs per day</strong>. The farms are grouped into 11 regional clusters to enable disease traceability.</p>
      <h4>Meeting the Hens</h4>
      <p>We went up the hill to a chicken coop housing older hens — still laying, just at a slower pace. The space was well-ventilated, with an indoor feeding area and outdoor room to roam. Positioned on a hilltop for natural airflow and sanitation. Seeing the chickens brought the whole operation to life in a way that no brief could.</p>
      <p>One insight that stayed with us: <strong>farmers with hens earn roughly 4× what they would from rice farming.</strong> That number explains a lot about why this model works.</p>
      <h4>Evening in the Valley</h4>
      <p>We said goodbye to the HTO team and checked into a hotel overlooking the valley. The evening called for a trail run through the surrounding hills — the views were worth every step.</p>
    `,
    photos: [
      "images/day4/IMG_4173.jpg",
      "images/day4/IMG_4175.jpeg",
      "images/day4/IMG_4176.jpeg",
      "images/day4/IMG_4177.jpeg",
      "images/day4/IMG_4180.jpeg",
      "images/day4/IMG_4185.jpg",
      "images/day4/IMG_4188.jpg",
      "images/day4/IMG_4194.jpg",
      "images/day4/IMG_4213.jpeg",
      "images/day4/IMG_4957.jpeg",
      "images/day4/IMG_4980.jpeg",
      "images/day4/IMG_7647-preview.jpeg",
      "images/day4/IMG_1408.jpg",
      "images/day4/e6537522-61ad-40bf-a521-56c9d79a48da.JPG"
    ]
  },
  {
    day:      5,
    date:     "Friday, May 22, 2026",
    shortDate:"May 22",
    title:    "Day 5 — Singha Park & On to Chiang Mai",
    location: LOC.chiangMai,
    travel:   { from: LOC.waweeValley, to: LOC.chiangMai, mode: "car" },
    authors:  "The Team",
    content: `
      <p>A fitting way to close out the field week. We started the morning back at Wawee Valley — breakfast with the Hilltribe Organics team, a quiet moment to reflect before the road south.</p>
      <h4>Singha Park, Chiang Rai</h4>
      <p>On the way we stopped at <strong>Singha Park</strong>, a large agricultural park and plantation in Chiang Rai. Walking the grounds gave us a grounded sense of the region's farming culture — the same landscape that shapes the identity of products like Wawee 7.</p>
      <p>We also used the park's on-site retail to do some packaging research — studying how local wellness and tea brands present themselves to consumers. Singha Park's own line, including their signature Thai Tea tin and illustrated gift boxes, offered real inspiration for how <strong>origin storytelling and premium design can coexist at accessible price points</strong>.</p>
      <h4>Arriving in Chiang Mai</h4>
      <p>By afternoon we arrived in Chiang Mai, where we spent the evening exploring the city and unwinding at a lively night market. Pizza included. Chiang Rai delivered more than expected — a productive end to a packed week in the field.</p>
    `,
    photos: [
      "images/day5/IMG_4172.jpeg",
      "images/day5/IMG_4227.jpeg",
      "images/day5/DSCF6028.JPG",
      "images/day5/IMG_1446.jpeg",
      "images/day5/IMG_1472.jpg",
      "images/day5/IMG_1477.jpeg",
      "images/day5/IMG_1479.jpeg",
      "images/day5/IMG_1480.jpeg",
      "images/day5/IMG_1483.jpeg",
      "images/day5/IMG_1485.jpeg",
      "images/day5/IMG_1497.jpeg",
      "images/day5/IMG_1498.jpeg",
      "images/day5/IMG_4943.jpeg"
    ]
  },
  {
    day:      6,
    date:     "Saturday, May 23, 2026",
    shortDate:"May 23",
    title:    "Day 6 — Elephants & Herbal Balm",
    location: LOC.chiangMai,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>After a packed work week, the weekend was a well-deserved chance to recharge — and Chiang Mai delivered.</p>
      <h4>Joy Elephant Sanctuary</h4>
      <p>Saturday took us to <strong>Joy Elephant Sanctuary</strong>, about an hour outside the city. We fed the elephants, walked alongside them through the jungle, and took part in a <strong>traditional Thai herbal balm workshop</strong> — a hands-on introduction to one of the region's most beloved natural remedies. A grounding experience that felt very aligned with the wellness-rooted world we've been immersed in all week.</p>
      <p>Hard to explain how it feels to walk next to an elephant through the forest. You just have to do it.</p>
    `,
    photos: [
      "images/day6/IMG_1583.jpeg",
      "images/day6/IMG_1638.jpg",
      "images/day6/IMG_1645.jpeg",
      "images/day6/IMG_1647.jpeg",
      "images/day6/IMG_1658.jpeg",
      "images/day6/IMG_5069.jpeg",
      "images/day6/IMG_5099.jpeg",
      "images/day6/IMG_5119.jpeg",
      "images/day6/IMG_5122.jpeg"
    ]
  },
  {
    day:      7,
    date:     "Sunday, May 24, 2026",
    shortDate:"May 24",
    title:    "Day 7 — Baan Kang Wat & Back to Bangkok",
    location: LOC.chiangMai,
    travel:   { from: LOC.chiangMai, to: LOC.bangkok, mode: "plane" },
    authors:  "The Team",
    content: `
      <p>A gentle Sunday to close out the Chiang Mai chapter.</p>
      <h4>Baan Kang Wat</h4>
      <p>We explored <strong>Baan Kang Wat</strong>, a charming artisan village tucked into the city — local crafts, handmade goods, and citrus teas. The kind of place where you spend twice as long as you planned. Lunch was a proper bowl of <em>Khao Soi</em> — the Northern Thai curry noodle soup, cooked over open wood fire, as it should be.</p>
      <h4>Back to Bangkok</h4>
      <p>By evening we flew back to Bangkok, full and ready for the final stretch of the project. The mountains gave way to flat plains somewhere below us, and just like that, the field phase was over.</p>
      <p>What we carry back: a much sharper picture of the operation, the people, and what Hilltribe Organics is really building up there.</p>
    `,
    photos: [
      "images/day7/IMG_1662.jpeg",
      "images/day7/IMG_1663.jpeg",
      "images/day7/IMG_1668.jpeg",
      "images/day7/IMG_1673.jpeg",
      "images/day7/IMG_1674.jpeg",
      "images/day7/IMG_4285.jpeg",
      "images/day7/IMG_5142.jpeg"
    ]
  },
  {
    day:      8,
    date:     "Monday, May 25, 2026",
    shortDate:"May 25",
    title:    "Day 8 — Wawee 7 Prototype Testing",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>Back in Bangkok and straight into it. The morning started with a call from the client to debrief on our experience in Wawee Valley and with the HTO team. We also aligned on the remaining plans for the trip to ensure a proper handoff with our final deliverable.</p>
      <h4>Wawee 7 Prototype Testing</h4>
      <p>After the call, the team returned to <strong>Lemon Farm</strong> to source ingredients for Wawee 7 prototype testing. We prepared multiple formulation batches to understand how the ingredients blended and interacted with one another. A few key findings from today's experiments:</p>
      <p>🌿 <strong>Spirulina</strong> — its dark color and strong flavor can easily overpower the mixture when used in excess. Less is more.</p>
      <p>🟡 <strong>Turmeric</strong> — delivers its benefits in small amounts (~⅛ tsp), so we reduced the quantity to prevent it from overwhelming the greens flavor profile.</p>
      <p>🫚 <strong>Ginger</strong> — increased slightly. The team appreciated the subtle spice; it helps differentiate the product from typical greens powders.</p>
      <h4>Lunch at Phed Mark</h4>
      <p>We ended the workday with lunch at <strong>Phed Mark</strong> — which, we quickly learned, means "very spicy." It was. We had no regrets.</p>
    `,
    photos: [
      "images/day8/IMG_1686.jpeg",
      "images/day8/IMG_1690.jpeg",
      "images/day8/IMG_5161.jpeg",
      "images/day8/IMG_5163 2.jpeg",
      "images/day8/IMG_5167.jpeg",
      "images/day8/IMG_5170.jpeg",
      "images/day8/IMG_5172.jpeg",
      "images/day8/IMG_5175.jpeg"
    ]
  },
  {
    day:      9,
    date:     "Tuesday, May 26, 2026",
    shortDate:"May 26",
    title:    "Day 9 — Thaifex: Asia's Biggest Food Fair",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>An early start — we were up and out the door to make it to <strong>Thaifex</strong>, the largest food and beverage convention in Asia. Once we checked in and got our official badges, we walked in and immediately understood why: the scale of the event is hard to overstate. Booth after booth of brands, buyers, and innovators from across the region and beyond.</p>
      <h4>Perfect Earth Booth</h4>
      <p>Our first stop was the <strong>Perfect Earth booth</strong>, where we got to meet members of the team behind our client's other company — focused on rice noodles. We spoke at length with the CEO, which gave us a much clearer picture of where <strong>Mulberry Matcha and Wawee 7</strong> fit within the broader HTO product portfolio and how to differentiate them at retail.</p>
      <h4>Competitor Research on the Floor</h4>
      <p>From there we spread out and got to work — visiting booths across the supplement and wellness space, speaking directly with brands operating in a similar category to Wawee 7 and Mulberry Matcha. The conversations were candid and useful: we came away with a much sharper sense of which products have gained traction in Thailand, which have struggled, and why. Real market intelligence, gathered on the floor.</p>
      <h4>Haas Alumni Dinner</h4>
      <p>To close out the day, we had the chance to meet a <strong>Haas MBA alumnus from the class of 2020</strong>. We shared a meal, swapped notes on our respective treks, and heard about his journey into extreme leadership — and his perspective on the Thailand consumer market, which is now his professional home. A great conversation to have at this stage of the trip, with the final sprint ahead of us.</p>
    `,
    photos: [
      "images/day9/95533017-b4d4-49d8-83ca-d0025714513d.JPG",
      "images/day9/636F99F0-FCFB-4D7D-ACFA-6EB7D42BB2BB.JPG",
      "images/day9/IMG_1710.jpeg",
      "images/day9/IMG_1713.jpeg",
      "images/day9/IMG_5180.jpeg",
      "images/day9/IMG_5184.jpeg"
    ]
  },
  {
    day:      10,
    date:     "Wednesday, May 27, 2026",
    shortDate:"May 27",
    title:    "Day 10 — Coming Soon",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>The recommendations are starting to take shape. We split tasks today: one pair working on the financial model, another on the market analysis and strategic narrative.</p>
      <p><em>✏️ Add your own reflections for Day 10 here.</em></p>
    `,
    photos: [
      "images/day10/IMG_1747.jpeg",
      "images/day10/IMG_1749.jpeg",
      "images/day10/IMG_1755.jpeg",
      "images/day10/IMG_1757.jpeg",
      "images/day10/IMG_1758.jpeg",
      "images/day10/IMG_1759.jpeg",
      "images/day10/IMG_1763.jpg",
      "images/day10/IMG_1769.jpeg",
      "images/day10/IMG_1779.jpg",
      "images/day10/IMG_4340.jpeg",
      "images/day10/IMG_5194.jpeg"
    ]
  },
  {
    day:      11,
    date:     "Thursday, May 28, 2026",
    shortDate:"May 28",
    title:    "Day 11 — Coming Soon",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>We spent the day stress-testing our ideas, challenging each other's assumptions, and polishing our output. Bangkok's café culture proved a perfect backdrop for long, focused work sessions.</p>
      <p><em>✏️ Add your own reflections for Day 11 here.</em></p>
    `,
    photos: [
      "images/day11/7209680D-6FE4-41F2-A321-ACD5A0A3D855.JPG"
    ]
  },
  {
    day:      12,
    date:     "Friday, May 29, 2026",
    shortDate:"May 29",
    title:    "Day 12 — Coming Soon",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>Our last day in Thailand. We delivered our final presentation to Hilltribe Organics and reflected together on everything this experience has given us — knowledge, perspective, and friendships that will last far beyond the MBA.</p>
      <p><em>✏️ Add your own reflections for Day 12 here.</em></p>
      <hr style="margin: 2rem 0; border: none; border-top: 1px solid var(--border);">
      <h4>A Note of Gratitude</h4>
      <p>To <strong>IBD</strong> and <strong>Hilltribe Organics</strong> — thank you for this experience. It has been one of the most meaningful things we have done in our MBA, and we mean that sincerely.</p>
      <p>Meeting the <strong>Wawee families</strong> and the ground team in person, walking the farms, seeing the operations up close — it made everything real in a way that no case study or classroom exercise ever could. We didn't just learn about a company; we lived its mission firsthand and saw with our own eyes the positive impact it brings to these communities. That is something we will carry with us.</p>
      <p>We have also come away with a much deeper understanding of the <strong>food and wellness space in Asia and globally</strong> — the supply chains, the retail dynamics, the consumer trends, and the very human stories behind what ends up on a shelf. And working through the real challenges of launching a new product — from formulation to pricing to brand positioning — has been more instructive than we ever expected.</p>
      <p>There is no substitute for the real thing. That is what IBD gave us, and it made all the difference.</p>
      <p>We leave Thailand with full hearts. Thank you. 🙏</p>
    `,
    photos: [
      "images/closing remarks/Team photos.JPG",
      "images/closing remarks/Hilltribe Organics Logo.jpg",
      "images/closing remarks/IBD logo.png"
    ]
  }
];
