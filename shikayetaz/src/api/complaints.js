const DATA = [
  { id: 1, title: "Street light out on Nizami st. 42", district: "Nasimi",
    status: "new",         priority: "high",   date: "2026-07-21" },
  { id: 2, title: "Overflowing waste container in the yard", district: "Narimanov",
    status: "in_progress", priority: "medium", date: "2026-07-20" },
  { id: 3, title: "Elevator down for three days", district: "Yasamal",
    status: "new",         priority: "high",   date: "2026-07-21" },
  { id: 4, title: "Crosswalk markings worn out", district: "Khatai",
    status: "closed",      priority: "low",    date: "2026-07-18" },
  { id: 5, title: "Broken benches in the park", district: "Nasimi",
    status: "in_progress", priority: "low",    date: "2026-07-19" },
  { id: 6, title: "Burst water pipe, road flooded", district: "Binagadi",
    status: "new",         priority: "high",   date: "2026-07-22" },
];

// Simulates a server: resolves after 900 ms.
export function fetchComplaints() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(DATA), 900);
  });
}
