function Holidays() {
  const holidays = [
    { name: "Republic Day", date: "26-01-2026" },
    { name: "Independence Day", date: "15-08-2026" },
    { name: "Gandhi Jayanti", date: "02-10-2026" }
  ];

  return (
    <div>
      <h2>Public Holidays</h2>
      <ul>
        {holidays.map((h, i) => (
          <li key={i}>
            {h.name} - {h.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Holidays;
