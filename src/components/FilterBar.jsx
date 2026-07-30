import React from 'react';

function FilterBar() {
  const filters = ['All', 'High', 'Medium', 'Low'];

  return (
    <div className="filter-bar">
      <span className="filter-label">Filter Tickets:</span>
      <div className="filter-options">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
