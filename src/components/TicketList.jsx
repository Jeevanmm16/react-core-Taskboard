import React from 'react';
import TicketCard from './TicketCard';

const tickets = [
  {
    id: 1,
    title: "Payment Failed",
    category: "Payment",
    priority: "High"
  },
  {
    id: 2,
    title: "Unable to Login",
    category: "Authentication",
    priority: "Medium"
  },
  {
    id: 3,
    title: "Page Not Loading",
    category: "Technical",
    priority: "Low"
  }
];

function TicketList() {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default TicketList;
