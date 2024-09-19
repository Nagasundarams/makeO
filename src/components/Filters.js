import React from 'react';

function Filters({ filters, setFilters }) {
  const handleReset = () => {
    setFilters({ category: '', size: '' });
  };

  return (
    <div>
      <select onChange={(e) => setFilters({...filters, category: e.target.value})}>
        <option value="">All Categories</option>
        <option value="Hoodie">Hoodie</option>
        <option value="T-shirt">T-shirt</option>
      </select>
      <select onChange={(e) => setFilters({...filters, size: e.target.value})}>
        <option value="">All Sizes</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Filters;
