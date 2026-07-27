import React from 'react';
import FilterBar from './components/FilterBar';
import TicketList from './components/TicketList';
import './components/tickets.css';

function App() {
  return (
    <main className="dashboard-container">
      <header className="dashboard-header">
        <h1>SUPPORT TICKET BOARD</h1>
      </header>
      <FilterBar />
      <TicketList />
    </main>
  );
}

export default App;
