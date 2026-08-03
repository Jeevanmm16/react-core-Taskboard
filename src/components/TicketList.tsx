import TicketCard from './TicketCard';
import { Ticket, Priority } from '../types/ticket';

// Hardcoded ticket data — stays at module scope in TicketList.
// App does not own this data; it only owns the filter criteria.
const tickets: Ticket[] = [
  {
    id: 1,
    title: 'Payment Failed',
    category: 'Payment',
    priority: 'High',
  },
  {
    id: 2,
    title: 'Unable to Login',
    category: 'Authentication',
    priority: 'Medium',
  },
  {
    id: 3,
    title: 'Page Not Loading',
    category: 'Technical',
    priority: 'Low',
  },
];

interface TicketListProps {
  searchTerm: string;
  selectedPriority: Priority;
}

// Accepts filter criteria from App via props.
// Applies a two-stage filter pipeline and renders matching TicketCards.
function TicketList({ searchTerm, selectedPriority }: TicketListProps) {
  // Normalize once before filtering:
  // trim() removes accidental leading/trailing whitespace,
  // toLowerCase() makes the match case-insensitive.
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredTickets = tickets
    .filter((ticket) =>
      // Stage 1 — search: match title OR category
      ticket.title.toLowerCase().includes(normalizedSearch) ||
      ticket.category.toLowerCase().includes(normalizedSearch)
    )
    .filter((ticket) =>
      // Stage 2 — priority: skip this filter when "All" is selected
      selectedPriority === 'All' || ticket.priority === selectedPriority
    );

  // Conditional rendering — show empty state when no tickets match
  if (filteredTickets.length === 0) {
    return (
      <p className="empty-state">No tickets found matching your filters.</p>
    );
  }

  return (
    <div className="ticket-list">
      {filteredTickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
