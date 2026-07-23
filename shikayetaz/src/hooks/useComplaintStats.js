import { useMemo } from "react";

// Bonus task: pulling this out of App.jsx into its own hook doesn't change
// *what* is computed, only *where*. It's still useMemo underneath — a custom
// hook is just a function that calls other hooks so the logic can be reused
// or tested on its own, separate from App's JSX.
export function useComplaintStats(complaints) {
  return useMemo(() => {
    const total = complaints.length;
    const closed = complaints.filter((c) => c.status === "closed").length;
    const open = total - closed; // "new" + "in_progress"
    return { total, open, closed };
  }, [complaints]);
}
