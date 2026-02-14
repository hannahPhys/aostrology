// seasonalMarkers.js

export const seasonalMarkers = [
  // SPRING (August - October)
  {
    name: "Kōwhai flowering",
    description: "Bright yellow flowers signal planting season for kūmara",
    month: "Mahuru", // September
    region: "all", // Throughout NZ
    tohuType: "whenua",
    indicator: "Kōwhai begin to flower, time to plant kūmara"
  },
  {
    name: "Pipiwharauroa (shining cuckoo) arrives",
    description: "The call of the shining cuckoo signals spring has arrived",
    month: "Mahuru",
    region: "all",
    tohuType: "whenua",
    indicator: "Spring is here, time to tend gardens"
  },
  {
    name: "Kōekoeā (long-tailed cuckoo) arrives",
    description: "Returns to Aotearoa to breed",
    month: "Mahuru",
    region: "all",
    tohuType: "whenua",
    indicator: "Time to prepare gardens for planting"
  },
  {
    name: "Tīe, kiwi, kākā, ruru begin breeding",
    description: "Native birds start nesting",
    month: "Whiringa-ā-Nuku", // October
    region: "all",
    tohuType: "whenua",
    indicator: "Season of new life"
  },

  // SUMMER (November - January)
  {
    name: "Pōhutukawa flowering",
    description: "Crimson red flowers bloom around Christmas time",
    month: "Hakihea", // December
    region: "north_island_coastal", // North of New Plymouth to Gisborne
    tohuType: "whenua",
    indicator: "Pōhutukawa flowering signals Christmas and summer for the north island coast"
  },
  {
    name: "Northern Rātā flowering",
    description: "Brilliant red flowers from November to January",
    month: "Whiringa-ā-Rangi", // November-January
    region: "north_island",
    tohuType: "whenua",
    indicator: "Northern Rātā flowering"
  },
  {
    name: "Southern Rātā flowering",
    description: "Red flowers covering the canopy",
    month: "Hakihea",
    region: "south_island_west_coast", // Especially West Coast
    tohuType: "whenua",
    indicator: "Southern Rātā flowering"
  },
  {
    name: "Tawa fruit ripening",
    description: "Pākēke (tawa pulp) ready for harvest",
    month: "Hakihea",
    region: "all",
    tohuType: "whenua",
    indicator: "Pākēke (tawa pulp) ready for harvest"
  },
  {
    name: "Tī kōuka (cabbage tree) flowering profusely",
    description: "Early and profuse flowering indicates long hot summer ahead",
    month: "Kohitātea", // January
    region: "south_island", // Especially Kāi Tahu
    tohuType: "whenua",
    indicator: "Tī kōuka (cabbage tree) flowering indicates long hot summer ahead"
  },
  {
    name: "Tītoki (karaka) fruit ripe",
    description: "Summer fruits ready for harvest",
    month: "Hui-tanguru", // February
    region: "north_island",
    tohuType: "whenua",
    indicator: "Tītoki (karaka) fruit ripe for the north island"
  },

  // AUTUMN (March - May)
  {
    name: "Kūmara harvest",
    description: "Kūmara is ready to be lifted",
    month: "Poutūterangi", // March
    region: "all",
    tohuType: "whenua",
    indicator: "Main harvest season"
  },
  {
    name: "Frosts begin (April)",
    description: "Cold weather and frosts starting",
    month: "Pāengawhāwhā",
    region: "te_urewera", // Ngāi Tūhoe region
    tohuType: "rangi",
    indicator: "Cold weather and frosts starting"
  },

  // WINTER (June - July)
  {
    name: "Matariki rises",
    description: "Pleiades star cluster visible in pre-dawn sky",
    month: "Pipiri", // June
    region: "all",
    tohuType: "rangi",
    indicator: "Matariki will dissapear then reappear in the pre-dawn sky"
  },
  {
    name: "Puanga (Rigel) rises",
    description: "Star signals New Year",
    month: "Pipiri",
    region: "far_north, taranaki, whanganui, south_island, chatham_islands",
    tohuType: "rangi",
    indicator: "Puanga will rise; the Maori new year marker for some iwi."
  },
  {
    name: "Last frosts finish (coastal)",
    description: "Frosts ending on south island coast",
    month: "Pipiri",
    region: "south_island_coastal",
    tohuType: "rangi",
    indicator: "Frosts ending on south island coast"
  },
  {
    name: "Whitebait season begins",
    description: "Whitebait start running up rivers",
    month: "Hereturikōkā", // August
    region: "all",
    tohuType: "moana",
    indicator: "Whitebait start running up rivers"
  }
];

// Helper function to get markers for a specific date and location
export function getSeasonalMarker(date, region) {
  const month = date.getMonth(); // 0-11

  // Map Gregorian months to approximate Māori months
  const monthMapping = {
    5: "Pipiri", // June
    6: "Hōngongoi", // July
    7: "Hereturikōkā", // August
    8: "Mahuru", // September
    9: "Whiringa-ā-Nuku", // October
    10: "Whiringa-ā-Rangi", // November
    11: "Hakihea", // December
    0: "Kohitātea", // January
    1: "Hui-tanguru", // February
    2: "Poutūterangi", // March
    3: "Pāengawhāwhā", // April
    4: "Haratua" // May
  };

  const maoriMonth = monthMapping[month];

  // Filter markers for this month and region
  const relevantMarkers = seasonalMarkers.filter(marker => {
    const monthMatch = marker.month === maoriMonth;
    const regionMatch = marker.region === "all" || marker.region === region;
    return monthMatch && regionMatch;
  });

  return relevantMarkers;
}