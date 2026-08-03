import { ChangeEvent } from 'react';
import { Priority } from '../types/ticket';

const PRIORITIES: Priority[] = ['All', 'High', 'Medium', 'Low'];

interface FilterBarProps {
  searchTerm: string;
  selectedPriority: Priority;
  onSearchChange: (value: string) => void;
  onPriorityChange: (value: Priority) => void;
}

// Fully controlled component — no internal state.
// Displays current filter state received from App via props.
// Raises user events back up to App via callback props.
function FilterBar({ searchTerm, selectedPriority, onSearchChange, onPriorityChange }: FilterBarProps) {
  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="filter-bar">
      <span className="filter-label">Filter Tickets:</span>

      {/* Controlled search input — value comes from App state */}
      <input
        type="text"
        className="search-input"
        placeholder="Search tickets..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {/* Priority buttons — active class driven by selectedPriority prop, not hardcoded */}
      <div className="filter-options">
        {PRIORITIES.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${filter === selectedPriority ? 'active' : ''}`}
            onClick={() => onPriorityChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
