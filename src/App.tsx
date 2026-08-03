import { useState } from 'react';
import FilterBar from './components/FilterBar';
import TicketList from './components/TicketList';
import './components/tickets.css';
import { FilterState, Priority } from './types/ticket';

function App() {
  // State values — the single source of truth for filter criteria
  const [filterState, setFilterState] = useState<FilterState>({
    searchTerm: '',
    selectedPriority: 'All'
  });

  const handleSearchChange = (value: string) => {
    setFilterState(prev => ({ ...prev, searchTerm: value }));
  };

  const handlePriorityChange = (value: Priority) => {
    setFilterState(prev => ({ ...prev, selectedPriority: value }));
  };

  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>SUPPORT TICKET BOARD</h1>
      </header>

      {/* Pass state values + callback functions as props */}
      <FilterBar
        searchTerm={filterState.searchTerm}
        selectedPriority={filterState.selectedPriority}
        onSearchChange={handleSearchChange}
        onPriorityChange={handlePriorityChange}
      />

      {/* Pass filter values so TicketList can compute what to display */}
      <TicketList
        searchTerm={filterState.searchTerm}
        selectedPriority={filterState.selectedPriority}
      />
    </main>
  );
}

export default App;
