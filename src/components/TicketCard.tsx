import { Ticket } from '../types/ticket';

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: TicketCardProps) {
  if (!ticket) return null;
  const { title, category, priority } = ticket;
  const priorityClass = `priority-${priority.toLowerCase()}`;

  return (
    <div className="ticket-card">
      <div className={`priority-indicator ${priorityClass}`}></div>
      <h3 className="ticket-title">{title}</h3>
      <div className="ticket-details">
        <div className="detail-item">
          <span className="detail-label">Category:</span>
          <span className="detail-value category-badge">{category}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Priority:</span>
          <span className={`detail-value priority-badge ${priorityClass}`}>{priority}</span>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
