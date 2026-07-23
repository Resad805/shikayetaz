const FILTERS = [
  { value: "all", label: "All" },
  { value: "new", label: "New" },
  { value: "in_progress", label: "In progress" },
  { value: "closed", label: "Closed" },
];

// FilterBar is "controlled" from outside: it receives which filter is
// active and a callback to request a change. It never calls useState for
// the filter itself — that's what "the state lives in App.jsx" / "lifting
// state up" means: a single source of truth that both FilterBar and
// ComplaintList can read from, instead of two components disagreeing.
export default function FilterBar({ active, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter by status">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          type="button"
          className={`filter-btn${active === value ? " filter-btn--active" : ""}`}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
