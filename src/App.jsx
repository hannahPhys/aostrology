import { useState } from 'react'
import { Link } from 'react-router-dom';
import { getMaramatakaPhase, getMaoriMonthByBirthDate } from "./utils/maramataka";
import { getSeasonalMarker } from './utils/seasonalMarkers';
import { getTownInfo } from "./data/nz-towns";
import { towns } from "./data/nz-towns";
import SunCalc from "suncalc";

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
    const moonImage = `/moon-phases/moon-${moonNumber}.png`;

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
          <form onSubmit={handleSubmit}>
            <label>
              Whenua <br />
              <select value={town} onChange={(e) => setTown(e.target.value)} required>
                <option value="" disabled>Select a town</option>
                {Object.keys(towns).map((key) => {
                  const townObj = towns[key];
                  const maoriName = townObj.maoriName;
                  const englishName = townObj.englishName;
                  let label = key;
                  if (maoriName && englishName) {
                    label = `${maoriName} (${englishName})`;
                  } else if (maoriName) {
                    label = maoriName;
                  } else if (englishName) {
                    label = englishName;
                  }
                  return (
                    <option key={key} value={key}>{label}</option>
                  );
                })}
              </select>
            </label>
            <br />
            <label>
              Date <br />
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </label>
            <br />
            <label>
              Time <br />
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} disabled={timeUnknown} required={!timeUnknown} />
            </label><br />
            <label style={{ marginLeft: '10px' }}>
              <input type="checkbox" checked={timeUnknown} onChange={(e) => setTimeUnknown(e.target.checked)} />
              Time unknown
            </label>
            <br /> <br />
            <button type="submit">Submit</button>
          </form>
          <div style={{ marginBottom: '1rem' }}>
            <br />
            <Link to="/about" className="about-link">
              learn more about the maramataka
            </Link>
          </div>
        </div>
        <div className="result-section">
          {result && (
            <div className="mt-6 p-4">
              <div>
                <p className="flex items-center">
                  You were born in the month <b>{result.maoriMonth.commonName}</b>
                </p>
                {result.maoriMonth && (
                  <p>{result.maoriMonth.description}</p>
                )}
                {result.markers && result.markers.length > 0 && (
                  <>
                    {result.markers.map((marker, index) => (
                      <p key={index}>{marker.indicator}</p>
                    ))}
                  </>
                )}
                You were born under the <b>{result.maramataka.name}</b> moon{" "}
                <p>{result.maramataka.meaning}</p>

                {result.timeUnknown && (
                  <p className="mt-2 text-sm italic text-yellow-300">
                    Time unknown - moon phase and Maramataka are approximate.
                  </p>
                )}
              </div>
              <img src={result.moonImage} alt={`Moon ${result.moonImage}`} style={{ height: '160px', verticalAlign: 'middle', marginLeft: '8px' }} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
