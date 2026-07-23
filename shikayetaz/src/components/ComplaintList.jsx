import ComplaintCard from "./ComplaintCard";

export default function ComplaintList({ items, onStatusClick }) {
  if (items.length === 0) {
    // Styled as a card in CSS (.empty-state) so it doesn't look like a bug —
    // it looks like a deliberate "nothing matches" message.
    return <p className="empty-state">No complaints found.</p>;
  }

  return (
    <div className="complaint-list">
      {items.map((complaint) => (
        // key={complaint.id} — never the array index. Index-as-key breaks
        // when the array is filtered/reordered: React would reuse a DOM node
        // for the wrong complaint and mismatch its internal state.
        <ComplaintCard
          key={complaint.id}
          complaint={complaint}
          onStatusClick={onStatusClick}
        />
      ))}
    </div>
  );
}
