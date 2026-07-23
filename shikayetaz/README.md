# ShikayetAZ

Citizen Complaints Dashboard — a React panel for operators at the Baku City
Executive Authority to view, filter, and search citizen complaints and see
overall statistics at a glance.

## How to run

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Stages completed

- **Stage 1 — Components and props**: `StatusBadge`, `ComplaintCard`,
  `ComplaintList` render the mock data with no state, using `id` as the list
  key.
- **Stage 2 — State and events**: `FilterBar` lifts its selected value up to
  `App`; selecting a filter updates the visible list instantly.
- **Stage 3 — Hooks**: data loads via `fetchComplaints()` inside
  `useEffect` (empty dependency array — the fetch only needs to happen once,
  on mount) with a `loading` state. Stats (total / open / closed) are
  derived, not stored, via `useMemo` (wrapped in a custom hook, see below).
- **Stage 4 — Styling**: status colours (blue / amber / green), card hover
  lift, red left stripe on high-priority cards, a styled active filter
  button, and a styled empty state.

## Bonus completed

- Search-by-title input, combined with the status filter (both apply
  together).
- Clicking a card cycles its status `new → in_progress → closed`, updating
  state immutably with `map` + spread.
- Statistics calculation extracted into a custom hook,
  `src/hooks/useComplaintStats.js`.

## Nothing left unfinished

All stages and all three bonus items are implemented.
