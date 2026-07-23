// StatsBar calculates nothing — it only displays numbers it's handed.
// The math (total / open / closed) lives in App.jsx behind useMemo, so this
// component stays a pure "presentation" piece with a single responsibility.
export default function StatsBar({ total, open, closed }) {
  return (
    <div className="stats-bar">
      <div className="stat">
        <span className="stat__value">{total}</span>
        <span className="stat__label">Total</span>
      </div>
      <div className="stat">
        <span className="stat__value">{open}</span>
        <span className="stat__label">Open</span>
      </div>
      <div className="stat">
        <span className="stat__value">{closed}</span>
        <span className="stat__label">Closed</span>
      </div>
    </div>
  );
}
