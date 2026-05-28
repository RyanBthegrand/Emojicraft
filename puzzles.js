// ─────────────────────────────────────────────────────────────────────────────
// Alchemix — Daily Puzzle Definitions
// ─────────────────────────────────────────────────────────────────────────────
//
// HOW TO ADD A NEW DAILY PUZZLE:
//   1. Open editor.html in your browser to build the puzzle visually.
//   2. Copy the generated code block from the editor.
//   3. Paste it inside the PUZZLES object below, before the closing `};`.
//
// OR add one manually following this format:
//
//   "YYYY-MM-DD": {
//     title: "Your Puzzle Title",
//     startingItems: [
//       { id: "unique_id", emoji: "🔤", name: "Display Name" },
//     ],
//     recipes: [
//
//       // Single output — combining A + B produces one new item:
//       { ingredients: ["id_a", "id_b"], result: { id: "result_id", emoji: "✨", name: "Result Name" } },
//
//       // Multiple outputs — combining A + B produces several items at once (up to 5).
//       // Add panel: true to any result you want tracked in the discoveries panel.
//       // Items without panel: true appear on the board but are hidden from the panel.
//       // If no item has panel: true, the first item is shown in the panel by default.
//       { ingredients: ["id_a", "id_b"], result: [
//           { id: "result_1", emoji: "⚔️", name: "Main Result",  panel: true },  // ← discoveries panel
//           { id: "result_2", emoji: "🛡️", name: "Bonus Item 1", panel: true },  // ← also in panel
//           { id: "result_3", emoji: "🗺️", name: "Bonus Item 2"              },  // ← board only
//       ]},
//
//     ],
//     winItem: "result_id",   // the id of whichever item triggers the win screen
//   },
//
// The "default" key is the featured puzzle used when no dated entry matches today.
// ─────────────────────────────────────────────────────────────────────────────

const PUZZLES = {

  // ── Featured / Default ─────────────────────────────────────────────────────
"default": {

},
  // ── Past Puzzles ───────────────────────────────────────────────────────────







  "2026-05-27": {
    title: "Forest Brew",
    startingItems: [
      { id: "water",    emoji: "💧", name: "Water"    },
      { id: "mushroom", emoji: "🍄", name: "Mushroom" },
      { id: "fire_f",   emoji: "🔥", name: "Fire"     },
      { id: "herb",     emoji: "🌿", name: "Herb"     },
    ],
    recipes: [
      { ingredients: ["water",     "mushroom"],  result: { id: "mush_soup", emoji: "🍵", name: "Mushroom Soup"  } },
      { ingredients: ["fire_f",    "mush_soup"], result: { id: "hot_soup",  emoji: "♨️",  name: "Hot Soup"       } },
      { ingredients: ["herb",      "hot_soup"],  result: { id: "potion",    emoji: "🧪", name: "Healing Potion" } },
    ],
    winItem: "potion",
  },

  "2026-05-26": {
    title: "Storm Season",
    startingItems: [
      { id: "cloud", emoji: "☁️",  name: "Cloud"     },
      { id: "wind",  emoji: "💨", name: "Wind"      },
      { id: "rain",  emoji: "🌧️",  name: "Rain"      },
      { id: "bolt",  emoji: "⚡", name: "Lightning" },
    ],
    recipes: [
      { ingredients: ["cloud",     "wind"],      result: { id: "storm",      emoji: "🌪️",  name: "Storm"       } },
      { ingredients: ["rain",      "bolt"],      result: { id: "thunder",    emoji: "⛈️",  name: "Thunderstorm" } },
      { ingredients: ["storm",     "thunder"],   result: { id: "hurricane",  emoji: "🌀", name: "Hurricane"   } },
      { ingredients: ["hurricane", "bolt"],      result: { id: "superstorm", emoji: "🏆", name: "Superstorm"  } },
    ],
    winItem: "superstorm",
  },

  // ── Multi-result test puzzle ───────────────────────────────────────────────

  "2026-05-29": {
  title: "People",
  startingItems: [
    { id: "b", emoji: "👩‍🦳", name: "B" },
    { id: "p", emoji: "👴", name: "P" },
    { id: "b_2", emoji: "👴", name: "B" },
    { id: "r", emoji: "👩‍🦳", name: "R" },
    { id: "s", emoji: "👩‍🦳", name: "S" },
    { id: "r_2", emoji: "👨‍🦳", name: "R" },
    { id: "p_2", emoji: "👴", name: "P" },
    { id: "b_3", emoji: "👵", name: "B" }
  ],
  recipes: [
    { ingredients: ["b", "p"], result: [
        { id: "c", emoji: "🧑", name: "C", panel: true },
        { id: "r_3", emoji: "👱‍♀️", name: "R" },
    ] },
    { ingredients: ["b_2", "r"], result: [
        { id: "d", emoji: "👱‍♀️", name: "D" },
        { id: "r_4", emoji: "👩", name: "R", panel: true },
    ] },
    { ingredients: ["b_3", "p_2"], result: [
        { id: "s_2", emoji: "👨", name: "S", panel: true },
        { id: "j", emoji: "👨", name: "J" },
    ] },
    { ingredients: ["s", "r_2"], result: [
        { id: "l", emoji: "👱‍♀️", name: "L", panel: true },
        { id: "s_3", emoji: "🧑", name: "S" },
        { id: "a", emoji: "🧑", name: "A" },
        { id: "a", emoji: "👩", name: "A" },
    ] },
    { ingredients: ["l", "c"], result: [
        { id: "t", emoji: "👩", name: "T" },
        { id: "r_5", emoji: "🧑", name: "R", panel: true },
    ] },
    { ingredients: ["s_3", "r_4"], result: { id: "s_4", emoji: "👱‍♀️", name: "S" } },
    { ingredients: ["s_4", "r_5"], result: { id: "s_5", emoji: "👶", name: "S" } }
  ],
  winItem: "s_5",
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

  // ── Paste new puzzles below this line ──────────────────────────────────────

};
