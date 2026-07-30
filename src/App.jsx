import React, { useState } from 'react';
import FilterBar from './components/FilterBar';
import TicketList from './components/TicketList';
import './components/tickets.css';

function App() {
  // State values — the single source of truth for filter criteria
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('All');

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>SUPPORT TICKET BOARD</h1>
      </header>

      {/* Pass state values + callback functions as props */}
      <FilterBar
        searchTerm={searchTerm}
        selectedPriority={selectedPriority}
        onSearchChange={setSearchTerm}
        onPriorityChange={setSelectedPriority}
      />

      {/* Pass filter values so TicketList can compute what to display */}
      <TicketList
        searchTerm={searchTerm}
        selectedPriority={selectedPriority}
      />
    </main>
  );
}

export default App;
