export function BirthForm({ onSubmit, towns, town, setTown, date, setDate, time, setTime, timeUnknown, setTimeUnknown }) {
  return (
    <form onSubmit={onSubmit} className="form-section">
      <label>
        Whenua <br />
        <select value={town} name="town" onChange={(e) => setTown(e.target.value)} required>
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
        <input type="date" name="date_input" value={date} onChange={(e) => setDate(e.target.value)} required />
      </label>
      <br />
      <label>
        Time <br />
        <input type="time" name="time_input" value={time} onChange={(e) => setTime(e.target.value)} disabled={timeUnknown} required={!timeUnknown} />
      </label><br />
      <label style={{ marginLeft: '10px' }}>
        <input type="checkbox" name="time_unknown" checked={timeUnknown} onChange={(e) => setTimeUnknown(e.target.checked)} />
        Time unknown
      </label>
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  )
}