// ─────────────────────────────────────────────────────────────────────────────
// Emojicraft — Daily Puzzle Definitions
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW DAILY PUZZLE:
//   1. Open editor.html in your browser to build the puzzle visually.
//   2. Copy the generated code block from the editor.
//   3. Paste it inside the PUZZLES object below, before the closing `};`.
//
// Puzzles dated in the FUTURE are hidden from the archive dropdown and only
// become playable on their date (based on Australian Eastern Time), so you can
// safely queue up upcoming puzzles here in advance.
//
// OR add one manually following this format:
//
//   "YYYY-MM-DD": {
//     title: "Your Puzzle Title",
//     startingItems: [
//       { id: "unique_id", emoji: "🔤", name: "Display Name" },
//       // Optional colour tweak — recolour an emoji via CSS filters:
//       //   hue : 0–360  (degrees to rotate the colour wheel; e.g. 60 turns a yellow face green)
//       //   sat : 0–300  (saturation %, default 100; lower = washed out, higher = vivid)
//       { id: "sick_man", emoji: "🧑", name: "Sick Man", hue: 70, sat: 130 },
//     ],
//     recipes: [
//
//       // Single output — combining A + B produces one new item:
//       { ingredients: ["id_a", "id_b"], result: { id: "result_id", emoji: "✨", name: "Result Name" } },
//
//       // Multiple outputs — combining A + B produces several items at once (up to 5).
//       //   panel: true → the item shows in the discoveries panel (a "Discovery")
//       //   find:  true → the item only lands on the board    (a "New Find")
//       //   neither     → the game decides automatically from the path to the win item
//       { ingredients: ["id_a", "id_b"], result: [
//           { id: "result_1", emoji: "⚔️", name: "Main Result",  panel: true },  // ← discoveries panel
//           { id: "result_2", emoji: "🛡️", name: "Bonus Item 1", panel: true },  // ← also in panel
//           { id: "result_3", emoji: "🗺️", name: "Bonus Item 2", find:  true },  // ← board only
//       ]},
//
//     ],
//     winItem: "result_id",   // the id of whichever item triggers the win screen
//   },
//
// The "default" key is the featured puzzle used when today has no dated entry.
// ─────────────────────────────────────────────────────────────────────────────

const PUZZLES = {

  // ── Featured / Default ─────────────────────────────────────────────────────
  // Left empty intentionally. The game falls back to the most recent released
  // daily puzzle, so this slot is only a safety net.
  "default": {},

  // ── Daily Puzzles ──────────────────────────────────────────────────────────
"2026-06-04": {
  title: "A Thespian Tragedy",
  startingItems: [
    { id: "man", emoji: "👱‍♂️", name: "Man" },
    { id: "woman", emoji: "👱‍♀️", name: "Woman" },
    { id: "church", emoji: "⛪️", name: "Church", sat: 145 }
  ],
  recipes: [
    { ingredients: ["man", "woman"], result: { id: "young_couple", emoji: "💏", name: "Young Couple" } },
    { ingredients: ["young_couple", "church"], result: { id: "unaccepting_father", emoji: "🙅‍♂️", name: "Unaccepting Father", sat: 40 } },
    { ingredients: ["young_couple", "unaccepting_father"], result: [
        { id: "foolproof_plan", emoji: "📜", name: "\"Foolproof\" Plan", panel: true },
        { id: "poison", emoji: "⚗️", name: "Poison", find: true },
        { id: "fake_poison", emoji: "⚗️", name: "\"Poison\"", hue: 136, find: true },
    ] },
    { ingredients: ["man", "poison"], result: { id: "dead_man", emoji: "👱‍♂️", name: "Dead man", sat: 0 } },
    { ingredients: ["woman", "fake_poison"], result: { id: "alive_woman", emoji: "👱‍♀️", name: "Alive Woman", sat: 270 } },
    { ingredients: ["alive_woman", "dead_man"], result: { id: "tragedy", emoji: "🎭️", name: "Tragedy" } }
  ],
  winItem: "tragedy",
},


"2026-06-03": {
  title: "To Grow a Tree",
  startingItems: [
    { id: "time", emoji: "🕰️", name: "Time" },
    { id: "winter", emoji: "❄️", name: "Winter" },
    { id: "acorn", emoji: "🔸", name: "Acorn", hue: 27 }
  ],
  recipes: [
    { ingredients: ["time", "winter"], result: { id: "spring", emoji: "🌸", name: "Spring" } },
    { ingredients: ["time", "spring"], result: { id: "summer", emoji: "☀️", name: "Summer" } },
    { ingredients: ["time", "summer"], result: { id: "autumn", emoji: "🍁", name: "Autumn" } },
    { ingredients: ["acorn", "spring"], result: { id: "seedling", emoji: "🌱", name: "Seedling" } },
    { ingredients: ["seedling", "summer"], result: { id: "juvenile_tree", emoji: "🌳", name: "Juvenile Tree", hue: 54, sat: 180 } },
    { ingredients: ["juvenile_tree", "autumn"], result: { id: "tree", emoji: "🌳", name: "Tree", hue: 269, sat: 85 } },
    { ingredients: ["winter", "tree"], result: { id: "dormant_tree", emoji: "🌳", name: "Dormant Tree", hue: 65, sat: 300 } },
    { ingredients: ["spring", "dormant_tree"], result: { id: "tree_2", emoji: "🌳", name: "Tree" } }
  ],
  winItem: "tree_2",
},

"2026-06-02": {
  title: "Nursery Rhyme",
  startingItems: [
    { id: "egg", emoji: "🥚", name: "Egg" },
    { id: "wall", emoji: "🧱", name: "Wall" },
    { id: "horse", emoji: "🐴", name: "Horse" },
    { id: "crown", emoji: "👑", name: "Crown" },
    { id: "man", emoji: "🧔", name: "Man" }
  ],
  recipes: [
    { ingredients: ["egg", "wall"], result: [
        { id: "broken_egg", emoji: "🍳", name: "Broken Egg", panel: true },
        { id: "fall", emoji: "🍁", name: "Fall", find: true },
    ] },
    { ingredients: ["man", "crown"], result: { id: "kings_man", emoji: "💂", name: "King's Man", hue: 30, sat: 50 } },
    { ingredients: ["horse", "crown"], result: { id: "kings_horse", emoji: "🐴", name: "King's Horse", hue: 4, sat: 245 } },
    { ingredients: ["kings_horse", "broken_egg"], result: { id: "broken_egg_still_broken", emoji: "🍳", name: "Broken Egg (Still broken)", sat: 45 } },
    { ingredients: ["kings_man", "broken_egg_still_broken"], result: { id: "broken_egg_unrepairable", emoji: "🍳", name: "Broken Egg (Unrepairable)", hue: 360, sat: 0 } }
  ],
  winItem: "broken_egg_unrepairable",
},


"2026-06-01": {
  title: "Make Some Food",
  startingItems: [
    { id: "knife", emoji: "🔪", name: "Knife" },
    { id: "fishing_rod", emoji: "🎣", name: "Fishing Rod" },
    { id: "ocean", emoji: "🌊", name: "Ocean" },
    { id: "chef", emoji: "👨‍🍳", name: "Chef" },
    { id: "bowl_of_rice", emoji: "🍚", name: "Bowl of Rice" }
  ],
  recipes: [
    { ingredients: ["ocean", "fishing_rod"], result: [
        { id: "salmon", emoji: "🐟️", name: "Salmon", hue: 38, sat: 50, panel: true },
        { id: "seaweed", emoji: "🌿", name: "Seaweed", hue: 63, sat: 40, find: true },
    ] },
    { ingredients: ["knife", "salmon"], result: { id: "salmon_slices", emoji: "🥓", name: "Salmon Slices", hue: 290, sat: 95 } },
    { ingredients: ["chef", "seaweed"], result: { id: "nori_seaweed_sheet", emoji: "🟩", name: "Nori (Seaweed sheet)", sat: 45 } },
    { ingredients: ["nori_seaweed_sheet", "bowl_of_rice"], result: { id: "incomplete_sushi", emoji: "🍣", name: "Incomplete Sushi", sat: 0 } },
    { ingredients: ["salmon_slices", "incomplete_sushi"], result: { id: "sushi", emoji: "🍣", name: "Sushi" } }
  ],
  winItem: "sushi",
},



  "2026-05-30": {
    title: "Golden Years",
    startingItems: [
      { id: "gy_youth",   emoji: "🌱", name: "Youth"   },
      { id: "gy_decades", emoji: "⏰", name: "Decades" },
      { id: "gy_wisdom",  emoji: "📚", name: "Wisdom"  },
      { id: "gy_love",    emoji: "❤️",  name: "Love"    },
    ],
    recipes: [
      // Youth + Decades → Elder Man AND Elder Woman (multi-result)
      { ingredients: ["gy_youth", "gy_decades"], result: [
          { id: "gy_elder_m", emoji: "👴", name: "Elder Man"   },
          { id: "gy_elder_f", emoji: "👵", name: "Elder Woman" },
      ]},
      { ingredients: ["gy_elder_m", "gy_wisdom"], result: { id: "gy_silver_m", emoji: "👨‍🦳", name: "Silver Gent" } },
      { ingredients: ["gy_elder_f", "gy_love"],   result: { id: "gy_silver_f", emoji: "👩‍🦳", name: "Silver Lady" } },
      { ingredients: ["gy_silver_m", "gy_silver_f"], result: { id: "gy_golden", emoji: "🏆", name: "Golden Anniversary" } },
    ],
    winItem: "gy_golden",
  },

  "2026-05-31": {
    title: "The Artist's Palette",
    startingItems: [
      { id: "col_red",    emoji: "🔴", name: "Red"    },
      { id: "col_blue",   emoji: "🔵", name: "Blue"   },
      { id: "col_yellow", emoji: "🟡", name: "Yellow" },
      { id: "col_brush",  emoji: "🖌️",  name: "Brush"  },
    ],
    recipes: [
      { ingredients: ["col_red",     "col_yellow"],  result: { id: "col_orange",      emoji: "🟠", name: "Orange"      } },
      { ingredients: ["col_blue",    "col_yellow"],  result: { id: "col_green",        emoji: "🟢", name: "Green"       } },
      { ingredients: ["col_red",     "col_blue"  ],  result: { id: "col_purple",       emoji: "🟣", name: "Purple"      } },
      { ingredients: ["col_green",   "col_purple"],  result: { id: "col_rainbow",      emoji: "🌈", name: "Rainbow"     } },
      { ingredients: ["col_rainbow", "col_brush" ],  result: { id: "col_masterpiece",  emoji: "🎨", name: "Masterpiece" } },
    ],
    winItem: "col_masterpiece",
  },

  // ── Paste new puzzles below this line ──────────────────────────────────────

};
