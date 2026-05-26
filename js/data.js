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
    role:    "Team Lead · McKinsey Associate",
    bio:     "Team Lead, McKinsey Associate, and philosopher-in-chief. She'll have you questioning the meaning of existence between slide decks with the most unexpectedly profound questions at 11pm — when everyone just wants to sleep. Her superpower? An almost supernatural ability to sniff out a deal. Bangkok markets, Chiang Mai bazaars, a random roadside stall — no bargain is safe. Said yes to trail running AND Muay Thai. On the same trip. We're not sure she's human, but we're very glad she's our team lead.",
    photo:   null   // ← set to "images/team/silvia.jpg" once exported from PDF
  },
  {
    name:    "Briana Yesu",
    initials:"BY",
    role:    "Team Member · Marketing Technology",
    bio:     "Team member, official team mom, and Bangkok's most suspiciously well-connected newcomer. Within 48 hours of landing, Briana had already found three alumni connections, a food blogger shortcut to the best khao soi in Chiang Rai, and the exact BTS route nobody tells you about. She knows all the tricks, all the contacts, and exactly where the team should be at any given moment. Honestly, the trip runs on Briana. We're just along for the ride.",
    photo:   null   // ← set to "images/team/briana.jpg" once exported from PDF
  },
  {
    name:    "Zander Chase",
    initials:"ZC",
    role:    "Team Member · Data Science & Go-to-Market",
    bio:     "Team member, data scientist, go-to-market strategist, and the single greatest threat to Thailand's mango sticky rice supply chain. Zander casually mentioned 'a quick morning run' one day and returned three hours later, barely sweaty, having covered 20 miles — while the rest of us were still deciding whether to get out of bed. His data models are as precise as his rice consumption is legendary. Brings quiet intensity to everything he does, and somehow always smiling about it. We're watching you, Zander.",
    photo:   null   // ← set to "images/team/zander.jpg" once exported from PDF
  },
  {
    name:    "Mateo Torrico",
    initials:"MT",
    role:    "Team Member · Political Strategy & Public Affairs",
    bio:     "Team member, political strategist, public affairs expert, and Thailand's most passionate Grab app evangelist. Mateo can move mountains — he just prefers to do it after 10am, ideally with a coffee that arrived via Grab. His belief in the app as a superior mode of urban existence borders on the spiritual. Mornings are not his medium. Evenings, however? Legendary. There is a statistically non-trivial probability he does not board the return flight. The Bay Area's loss is Bangkok's gain.",
    photo:   null   // ← set to "images/team/mateo.jpg" once exported from PDF
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
    photos: []
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
    photos: []
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
    photos: []
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
    photos: []
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
    photos: []
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
    photos: []
  },
  {
    day:      7,
    date:     "Sunday, May 24, 2026",
    shortDate:"May 24",
    title:    "Day 7 — Baan Kang Wat & Back to Bangkok",
    location: LOC.bangkok,
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
    photos: []
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
    photos: []
  },
  {
    day:      9,
    date:     "Tuesday, May 26, 2026",
    shortDate:"May 26",
    title:    "Day 9 — Coming Soon",
    location: LOC.bangkok,
    travel:   null,
    authors:  "The Team",
    content: `
      <p>A heads-down day of research, interviews follow-up, and framework building. We're connecting what we saw on the ground with the broader strategy questions we've been tasked to address.</p>
      <p><em>✏️ Add your own reflections for Day 9 here.</em></p>
    `,
    photos: []
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
    photos: []
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
    photos: []
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
      <h4>Thank You, Thailand 🙏</h4>
      <p>To the farmers of Wawee Valley, the Hilltribe Organics team, and everyone who welcomed us — this has been unforgettable. We hope our work can contribute, in some small way, to the important mission you are building.</p>
      <p><em>✏️ Add your own reflections for Day 12 here.</em></p>
    `,
    photos: []
  }
];
