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
