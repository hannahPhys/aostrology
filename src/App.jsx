import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getMaramatakaPhase, getMaoriMonthByBirthDate } from "./utils/maramataka";
import { getSeasonalMarker } from './utils/seasonalMarkers';
import { getTownInfo } from "./data/nz-towns";
import { towns } from "./data/nz-towns";
import SunCalc from "suncalc";
import { BirthForm } from './components/birthform'
import { ResultDisplay } from './components/resultsection'

function App() {
  const [town, setTown] = useState('Dunedin')
  const [date, setDate] = useState('1996-10-18')
  const [time, setTime] = useState('06:00')
  const [timeUnknown, setTimeUnknown] = useState(false)
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !town) return;

    const usedTime = timeUnknown ? '12:00' : time;
    const fullDate = new Date(`${date}T${usedTime}:00`);

    const townInfo = getTownInfo(town);
    if (!townInfo) return;

    const marama = getMaramatakaPhase(fullDate, townInfo.latitude, townInfo.longitude);

    const markers = getSeasonalMarker(fullDate, townInfo.island);
    const maoriMonth = getMaoriMonthByBirthDate(fullDate);

    const moonIllumination = SunCalc.getMoonIllumination(fullDate);

    console.log(moonIllumination)
    // Map Maramataka day (1-30) to visual moon phase images (1-28)
    // Day 1 (Whiro) = New Moon = Image 1
    // Day 16 (Rakaunui) = Full Moon = Image 15
    function getVisualMoonPhase(maramatakaDay) {
      if (maramatakaDay <= 1) {
        return 1; // New moon
      } else if (maramatakaDay <= 15) {
        return maramatakaDay; // Waxing: days 2-15 map to images 2-15
      } else if (maramatakaDay === 16) {
        return 15; // Full moon (Rakaunui)
      } else if (maramatakaDay <= 30) {
        // Waning: days 17-30 map to images 14-1
        return maramatakaDay + 1;
      }
      return 1;
    }

    const moonNumber = getVisualMoonPhase(marama.day || 1);
    const moonImage = `${import.meta.env.BASE_URL}moon-phases/moon-${moonNumber}.png`;

    setResult({
      maramataka: marama,
      markers,
      town,
      date,
      time: usedTime,
      timeUnknown,
      maoriMonth,
      moonImage
    });
  };

  return (
    <>
      <h1>te ao - strology</h1>
      <div className="app-container">
        <div className="form-section">
          <BirthForm
            onSubmit={handleSubmit}
            towns={towns}
            town={town}
            setTown={setTown}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            timeUnknown={timeUnknown}
            setTimeUnknown={setTimeUnknown}
          />
          <div style={{ marginBottom: '1rem' }}>
            <br />
            <Link to="/about" className="about-link">
              learn more about the maramataka
            </Link>
          </div>
        </div>
        <ResultDisplay result={result} />
      </div>
    </>
  )
}

export default App
