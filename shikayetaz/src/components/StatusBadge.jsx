// A tiny "dumb" component: one prop in, one label out.
// It holds no state and makes no decisions beyond "how do I look for this status".
const LABELS = {
  new: "New",
  in_progress: "In progress",
  closed: "Closed",
};

export default function StatusBadge({ status }) {
  // Template literal keeps the class name in sync with the status prop,
  // so CSS (badge--new / badge--in_progress / badge--closed) can target each one.
  return (
    <span className={`badge badge--${status}`}>
      {LABELS[status] ?? status}
    </span>
  );
}
