import { useState, useEffect } from 'react';
import TicketCard from './TicketCard';
import type { Ticket, Priority } from '../types/ticket';

interface TicketListProps {
  searchTerm: string;
  selectedPriority: Priority;
}

function TicketList({ searchTerm, selectedPriority }: TicketListProps) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      setError(null);
      try {
        const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5210/api/tickets';
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to load tickets.');
        }
        const data = await response.json();
        setTickets(data);
      } catch (err) {
        setError('Failed to load tickets. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <p className="loading-state">Loading tickets...</p>;
  }

  if (error) {
    return <p className="error-state">{error}</p>;
  }

  // Database Empty State
  if (tickets.length === 0) {
    return <p className="empty-state">No tickets found.</p>;
  }

  // Normalize once before filtering
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredTickets = tickets
    .filter((ticket) =>
      ticket.title.toLowerCase().includes(normalizedSearch) ||
      ticket.category.toLowerCase().includes(normalizedSearch)
    )
    .filter((ticket) =>
      selectedPriority === 'All' || ticket.priority === selectedPriority
    );

  // Filter Empty State
  if (filteredTickets.length === 0) {
    return (
      <p className="empty-state">No matching tickets found.</p>
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
