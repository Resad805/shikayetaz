import { useEffect, useState } from "react";
import { fetchComplaints } from "./api/complaints";
import ComplaintList from "./components/ComplaintList";
import FilterBar from "./components/FilterBar";
import StatsBar from "./components/StatsBar";
import { useComplaintStats } from "./hooks/useComplaintStats";

const STATUS_ORDER = ["new", "in_progress", "closed"];

export default function App() {
  // ---- Stage 3.1: data comes from the "server", not a static import -----
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // ---- Stage 2.2: which filter button is active ----
  const [filter, setFilter] = useState("all");

  // ---- Bonus: search-as-you-type, combined with the status filter ----
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchComplaints().then((data) => {
      setComplaints(data);
      setLoading(false);
    });
    // Empty dependency array: this effect fetches the initial data set once,
    // when App first mounts. It doesn't depend on any prop or state value
    // that changes over time (filter/search only affect what we *display*,
    // not what we *fetch*), so re-running it on every render — or on every
    // filter change — would just refetch the same data pointlessly.
  }, []);

  const filtered = complaints
    .filter((c) => filter === "all" || c.status === filter)
    .filter((c) => c.title.toLowerCase().includes(search.toLowerCase()));

  // Derived data via a custom hook (bonus) that wraps useMemo internally.
  // Total/open/closed are *computed from* complaints, not their own source
  // of truth — storing them in useState would let them drift out of sync
  // with the real data (e.g. after the cycle-status bonus below) and would
  // need a manual update every time complaints changes. useMemo recomputes
  // automatically and only when complaints actually changes.
  const stats = useComplaintStats(complaints);

  // Bonus: clicking a card advances its status. Update is immutable —
  // map + spread returns a brand-new array/object rather than mutating the
  // existing one, which is what lets React detect the change and re-render.
  function handleCycleStatus(id) {
    setComplaints((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const nextIndex = (STATUS_ORDER.indexOf(c.status) + 1) % STATUS_ORDER.length;
        return { ...c, status: STATUS_ORDER[nextIndex] };
      })
    );
  }

  return (
    <div className="app">
      <header className="app__header">
        <p className="app__eyebrow">Baku City Executive Authority</p>
        <h1 className="app__title">ShikayetAZ</h1>
        <p className="app__subtitle">Citizen complaints, at a glance.</p>
      </header>

      <StatsBar total={stats.total} open={stats.open} closed={stats.closed} />

      <div className="toolbar">
        <FilterBar active={filter} onChange={setFilter} />
        <input
          type="search"
          className="search-input"
          placeholder="Search by title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search complaints by title"
        />
      </div>

      {loading ? (
        <p className="loading">Loading…</p>
      ) : (
        <ComplaintList items={filtered} onStatusClick={handleCycleStatus} />
      )}
    </div>
  );
}
