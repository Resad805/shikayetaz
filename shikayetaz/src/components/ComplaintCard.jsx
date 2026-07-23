import StatusBadge from "./StatusBadge";

// Decision: receive the whole `complaint` object as one prop instead of five
// separate props (title, district, date, priority, status).
// Why: the fields always travel together (they come from one row of data),
// so one prop keeps the call site short (<ComplaintCard complaint={c} />)
// and means adding a future field (e.g. "assignee") doesn't require touching
// every place that renders a card. The tradeoff is that this component is
// slightly coupled to the shape of a "complaint" object rather than being
// fully generic — an acceptable tradeoff here since it's not reused for
// anything else.
//
// onStatusClick is optional (bonus): if App passes it down, clicking the
// card asks App to advance the status. ComplaintCard still stores nothing
// itself — it only reports the click upward.
export default function ComplaintCard({ complaint, onStatusClick }) {
  const { title, district, date, priority, status } = complaint;

  return (
    <article
      className={`card${priority === "high" ? " card--high-priority" : ""}`}
      onClick={onStatusClick ? () => onStatusClick(complaint.id) : undefined}
    >
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <div className="card__meta">
        <span className="card__district">{district}</span>
        <span className="card__dot">·</span>
        <span className="card__date">{date}</span>
        <span className="card__dot">·</span>
        <span className={`card__priority card__priority--${priority}`}>
          {priority} priority
        </span>
      </div>
    </article>
  );
}
