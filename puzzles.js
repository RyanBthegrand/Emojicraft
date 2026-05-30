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

  "2026-06-01": {
    title: "Jack's Beanstalk",
    startingItems: [
      { id: "jb_beans", emoji: "🫘", name: "Magic Beans" },
      { id: "jb_rain",  emoji: "🌧️",  name: "Rain"        },
      { id: "jb_cloud", emoji: "☁️",  name: "Cloud"       },
      { id: "jb_axe",   emoji: "🪓", name: "Axe"         },
    ],
    recipes: [
      // Plant the beans
      { ingredients: ["jb_beans",  "jb_rain"  ], result: [
          { id: "jb_sprout", emoji: "🌱", name: "Sprout",          panel: true },
          { id: "jb_ground", emoji: "🌍", name: "Fertile Ground"               },
      ]},
      // Beanstalk grows to the clouds — castle appears
      { ingredients: ["jb_sprout", "jb_cloud" ], result: [
          { id: "jb_stalk",  emoji: "🌳", name: "Giant Beanstalk", panel: true },
          { id: "jb_castle", emoji: "🏰", name: "Sky Castle",       panel: true },
      ]},
      // Climb up and find the treasure — but wake the giant
      { ingredients: ["jb_stalk",  "jb_castle"], result: [
          { id: "jb_egg",   emoji: "🥚", name: "Golden Egg",       panel: true },
          { id: "jb_giant", emoji: "👹", name: "Giant"                         },
      ]},
      // Escape! Chop the beanstalk with the golden egg in hand
      { ingredients: ["jb_egg", "jb_axe"], result: { id: "jb_victory", emoji: "🏆", name: "Jack Victorious" } },
    ],
    winItem: "jb_victory",
  },

  "2026-06-02": {
    title: "King of Monsters",
    startingItems: [
      { id: "gz_bomb",   emoji: "💣", name: "Nuclear Bomb" },
      { id: "gz_ocean",  emoji: "🌊", name: "Ocean"        },
      { id: "gz_lizard", emoji: "🦎", name: "Lizard"       },
      { id: "gz_city",   emoji: "🏙️",  name: "City"         },
    ],
    recipes: [
      // Nuclear test irradiates the ocean
      { ingredients: ["gz_bomb",     "gz_ocean"    ], result: [
          { id: "gz_rad_sea",  emoji: "☢️", name: "Radioactive Sea", panel: true },
          { id: "gz_fallout",  emoji: "☣️", name: "Fallout"                       },
      ]},
      // Ancient lizard mutates in the radioactive ocean
      { ingredients: ["gz_lizard",   "gz_rad_sea"  ], result: { id: "gz_godzilla", emoji: "🦖", name: "Godzilla"        } },
      // Godzilla attacks the city — military mobilises
      { ingredients: ["gz_godzilla", "gz_city"     ], result: [
          { id: "gz_flames",   emoji: "💥", name: "City in Flames",  panel: true },
          { id: "gz_military", emoji: "🪖", name: "Military",         panel: true },
      ]},
      // Godzilla defeats the military — reigns supreme
      { ingredients: ["gz_godzilla", "gz_military" ], result: { id: "gz_king", emoji: "👑", name: "King of Monsters" } },
    ],
    winItem: "gz_king",
  },

};
