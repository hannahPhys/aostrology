import SunCalc from "suncalc";

// Full 30-phase Maramataka calendar with your detailed notes
const maramatakaPhases = [
  { day: 1, name: "Whiro", meaning: "new moon - Māori god of darkness - rises with the sun - you cannot ever see Whiro" },
  { day: 2, name: "Tirea", meaning: "spring forth - to grow" },
  { day: 3, name: "Hoata", meaning: "a growing shadow" },
  { day: 4, name: "Ōuenuku", meaning: "many different colours - earth shine - rises as sun has already risen so colours along the horizon" },
  { day: 5, name: "Okoro", meaning: "hopes and desires" },
  { day: 6, name: "Tamatea-āio", meaning: "the calm of Tamatea" },
  { day: 7, name: "Tamatea-angana", meaning: "strong, obstinate and resilient" },
  { day: 8, name: "Tamatea-kai-ariki", meaning: "to consume the high born or a rip in the ocean" },
  { day: 9, name: "Tamatea-tūhāhā", meaning: "stay away" },
  { day: 10, name: "Ariroa", meaning: "clear to see" },
  { day: 11, name: "Huna", meaning: "all is hidden - hard time to hunt - getting brighter" },
  { day: 12, name: "Māwharu", meaning: "a great stirring - activity in nature" },
  { day: 13, name: "Ohua", meaning: "becoming full - ripen" },
  { day: 14, name: "Atua whakahaehae", meaning: "haehae is the pathway in which te ra travels to visit his summer and winter wives" },
  { day: 15, name: "Ōturu", meaning: "fixed in place - the pillar that fixes the full moon in place" },
  { day: 16, name: "Rakaunui", meaning: "nui meaning big and rakau meaning tree" },
  { day: 17, name: "Rakaumatohi", meaning: "to divide produce - planting and harvesting" },
  { day: 18, name: "Takirau", meaning: "the multitudes" },
  { day: 19, name: "Oike", meaning: "to strike - strikes between really good period and the hardest part of the calendar" },
  { day: 20, name: "Korekore-hahani", meaning: "kore meaning no. korekore meaning hell no." },
  { day: 21, name: "Korekore-whiwhia", meaning: "nothingness" },
  { day: 22, name: "Korekore-rawea", meaning: "no excellence" },
  { day: 23, name: "Korekore-piri-ki-Tangaroa", meaning: "nothingness attached to Tangaroa" },
  { day: 24, name: "Tangaroa-a-mua", meaning: "the first Tangaroa - sustenance from ocean and fresh water" },
  { day: 25, name: "Tangaroa-a-roto", meaning: "tangaroa from within" },
  { day: 26, name: "Tangaroa-whakapau", meaning: "widespread harvesting and feasting" },
  { day: 27, name: "Tangaroa-whāriki-kiokio", meaning: "a blanket of palm leaf fern - best for looking after the ngahere" },
  { day: 28, name: "Ōtāne", meaning: "the time of Tāne - sustenance from the forest" },
  { day: 29, name: "Ōrongo", meaning: "the time of Rongo - god of the kumara" },
  { day: 30, name: "Ōmutu", meaning: "the end is near - slow down" },
];

const mutuwhenua = { day: 31, name: "Mutuwhenua", meaning: "It all comes to an end" };

// Full 13 Māori months array
const maramatakaMonths = [
  { 
    number: 1, 
    maoriName: "Tahi o Pipiri (Matahi a Puaka)", 
    commonName: "Pipiri",
    englishMonth: "June",
    description: "The Māori New Year begins. Pipiri means to cling, come or huddle together in the cold. The stars cluster together in the sky as we huddle together on earth."
  },
  { 
    number: 2, 
    maoriName: "Te Rua o Takurua", 
    commonName: "Hōngongoi",
    englishMonth: "July",
    description: "Associated with cold weather. Hōngongoi means to be crouched down due to the cold."
  },
  { 
    number: 3, 
    maoriName: "Te Toru Here o Puna", 
    commonName: "Hereturikōkā",
    englishMonth: "August",
    description: "Signs that winter has passed. Hereturikōkā means your knees are charred from kneeling by the fire."
  },
  { 
    number: 4, 
    maoriName: "Te Whā o Mahuru", 
    commonName: "Mahuru",
    englishMonth: "September",
    description: "The return of life. Pīpīwharauroa and kōekoeā return to Aotearoa to breed."
  },
  { 
    number: 5, 
    maoriName: "Te Rima o Whiringa-ā-Nuku", 
    commonName: "Whiringa-ā-Nuku",
    englishMonth: "October",
    description: "Heat in the land. Native birds begin breeding including tui, kiwi, kākā, and ruru."
  },
  { 
    number: 6, 
    maoriName: "Te Ono o Whiringa-ā-Rangi", 
    commonName: "Whiringa-ā-Rangi",
    englishMonth: "November",
    description: "Heat in the atmosphere. Warmth of summer is felt, new growth across the land."
  },
  { 
    number: 7, 
    maoriName: "Te Whitu o Hakihea", 
    commonName: "Hakihea",
    englishMonth: "December",
    description: "Tawa tree is ripe. Pohutukawa first flowers. Hakihea is a star rising just before the sun."
  },
  { 
    number: 8, 
    maoriName: "Te Waru o Rehua", 
    commonName: "Kohitātea",
    englishMonth: "January",
    description: "Many insects active - ngā manu o Rehua."
  },
  { 
    number: 9, 
    maoriName: "Te Iwa o Hui-tanguru", 
    commonName: "Hui-tanguru",
    englishMonth: "February",
    description: "Summer fruits are ripe, including tītoki."
  },
  { 
    number: 10, 
    maoriName: "Te Tekau o Poutūterangi", 
    commonName: "Poutūterangi",
    englishMonth: "March",
    description: "Kumara is ready to be lifted."
  },
  { 
    number: 11, 
    maoriName: "Te Ngahuru mā Tahi o Pāengawhāwhā", 
    commonName: "Pāengawhāwhā",
    englishMonth: "April",
    description: "Piharau (lamprey) is caught using noose and trap."
  },
  { 
    number: 12, 
    maoriName: "Te Ngahuru mā Rua o Haratua", 
    commonName: "Haratua",
    englishMonth: "May",
    description: "Harvest has ended, bounty of the year has been stored."
  },
  { 
    number: 13, 
    maoriName: "Rūhama Tahi Whetūwhenua", 
    commonName: "Muhanui",
    englishMonth: "Intercalary",
    description: "The lazy month - inserted every three years to align the lunar calendar with the seasonal cycle."
  }
];

// Find the most recent new moon before a given date
function findPreviousNewMoon(date, lat, lon) {
  let currentDate = new Date(date);
  let previousPhase = SunCalc.getMoonIllumination(currentDate).phase;
  
  // Go back in time until we find a new moon
  for (let i = 0; i < 60; i++) {
    currentDate.setDate(currentDate.getDate() - 1);
    const currentPhase = SunCalc.getMoonIllumination(currentDate).phase;
    
    // New moon is when phase is very close to 0 or crosses from ~1 to ~0
    if (currentPhase < 0.02 || (previousPhase < 0.1 && currentPhase > 0.9)) {
      return currentDate;
    }
    previousPhase = currentPhase;
  }
  
  return null;
}

// Find all new moons between two dates
function findAllNewMoons(startDate, endDate) {
  const newMoons = [];
  let previousPhase = null;
  
  for (let d = new Date(startDate); d < endDate; d.setDate(d.getDate() + 1)) {
    const currentDate = new Date(d);
    const moonData = SunCalc.getMoonIllumination(currentDate);
    const currentPhase = moonData.phase;
    
    // Detect new moon: phase crosses from high (near 1) to low (near 0)
    if (previousPhase !== null) {
      if ((previousPhase > 0.9 && currentPhase < 0.1) || currentPhase < 0.02) {
        newMoons.push(new Date(currentDate));
        d.setDate(d.getDate() + 20); // Skip ahead to avoid duplicate detection
      }
    }
    previousPhase = currentPhase;
  }
  
  return newMoons;
}

// Determine if a Māori year has 13 months by counting new moons
function getNewMoonsInMaoriYear(year) {
  // Māori year runs roughly from June to June (Matariki to Matariki)
  // We'll count from June 1st to May 31st of the following year
  const yearStart = new Date(year, 5, 1);  // June 1st
  const yearEnd = new Date(year + 1, 5, 31); // May 31st next year
  
  return findAllNewMoons(yearStart, yearEnd);
}

// Check if this Māori year has the intercalary 13th month
export function hasIntercalaryMonth(year) {
  const newMoons = getNewMoonsInMaoriYear(year);
  return newMoons.length >= 13;
}

export function getMaramatakaPhase(date, lat = -41, lon = 174) {
  // Find the previous new moon
  const newMoonDate = findPreviousNewMoon(date, lat, lon);
  
  if (!newMoonDate) {
    return { name: "Unknown", meaning: "Could not calculate moon phase" };
  }
  
  // Calculate days since new moon
  const timeDiff = date - newMoonDate;
  let daysSinceNewMoon = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  console.log('Date:', date.toDateString());
  console.log('New Moon Date:', newMoonDate.toDateString());
  console.log('Days since new moon:', daysSinceNewMoon);
  
  // Determine if east or west coast (affects timing by 1 day)
  const isEastCoast = lon > 175;
  if (isEastCoast) {
    daysSinceNewMoon = daysSinceNewMoon + 1;
  }
  
  // The Maramataka day calculation
  // Day 0 (same day as new moon) = Whiro (day 1)
  // Day 1 = Tirea (day 2), etc.
  let maramatakaDay = daysSinceNewMoon + 1;
  
  // Handle wrap-around for lunar cycles longer than 30 days
  if (maramatakaDay > 30) {
    maramatakaDay = ((maramatakaDay - 1) % 30) + 1;
  }
  
  console.log('Maramataka Day:', maramatakaDay);
  
  // Handle edge case for 31-day cycle
  if (maramatakaDay === 31) {
    return mutuwhenua;
  }
  
  // Find matching phase (day 1-30)
  const phase = maramatakaPhases.find(p => p.day === maramatakaDay);
  
  console.log('Phase found:', phase);
  
  return phase || { name: "Unknown", meaning: "Phase not found" };
}

export function getMaoriMonthByBirthDate(birthDate) {
  const year = birthDate.getFullYear();
  
  // Get all new moons for this Māori year (June to June)
  const maoriYearStart = new Date(year, 5, 1); // June 1st
  const maoriYearEnd = new Date(year + 1, 5, 31); // May 31st next year
  
  const newMoons = findAllNewMoons(maoriYearStart, maoriYearEnd);
  
  // Check if this is an intercalary year
  const isIntercalaryYear = newMoons.length >= 13;
  
  // Find which lunar month the birth date falls in
  let monthIndex = -1;
  for (let i = 0; i < newMoons.length; i++) {
    if (birthDate >= newMoons[i]) {
      monthIndex = i;
    } else {
      break;
    }
  }
  
  if (monthIndex === -1) {
    // Birth date is before the first new moon of this Māori year
    // Check previous Māori year
    const prevYearStart = new Date(year - 1, 5, 1);
    const prevYearEnd = new Date(year, 5, 31);
    const prevNewMoons = findAllNewMoons(prevYearStart, prevYearEnd);
    
    for (let i = prevNewMoons.length - 1; i >= 0; i--) {
      if (birthDate >= prevNewMoons[i]) {
        monthIndex = i;
        break;
      }
    }
  }
  
  // The Māori year starts with the first new moon after Matariki (around late June)
  // Month 1 is the first month after Matariki
  let monthNumber = monthIndex + 1;
  
  // Wrap if necessary
  if (monthNumber > 13) {
    monthNumber = monthNumber - 13;
  } else if (monthNumber > 12 && !isIntercalaryYear) {
    monthNumber = 1; // Wrap to next year if no intercalary month
  }
  
  // Ensure we're within bounds
  if (monthNumber < 1) monthNumber = 1;
  if (monthNumber > 13) monthNumber = 13;
  
  const month = maramatakaMonths[monthNumber - 1];
  
  return {
    number: month.number,
    maoriName: month.maoriName,
    commonName: month.commonName,
    englishMonth: month.englishMonth,
    description: month.description,
    isIntercalary: monthNumber === 13,
    isIntercalaryYear: isIntercalaryYear,
    lunarMonthStart: newMoons[monthIndex],
    totalMonthsThisYear: newMoons.length
  };
}