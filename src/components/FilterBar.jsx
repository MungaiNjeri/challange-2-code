import React, { useState } from 'react';

const FilterBar = ({ applyFilter }) => {
  const [activeFilter, setActiveFilter] = useState('');

  const filterOptions = ['Support', 'Medic', 'Assault', 'Defender', 'Captain', 'Witch'];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    applyFilter(filter);
  };

  return (
    <div>
      <h3>Filter by class:</h3>
      {filterOptions.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={activeFilter === filter ? 'active' : ''}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
