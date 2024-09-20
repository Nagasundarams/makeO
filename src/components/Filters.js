import React from 'react';

function Filters({ filters, setFilters }) {
  const handleReset = () => {
    setFilters({ category: '', size: '' });
  };

  return (
    <div className='filter'>
      <select style={{margin:10}} onChange={(e) => setFilters({...filters, category: e.target.value})}>
        <option value="">All Categories</option>
        <option value="Hoodie">Hoodie</option>
        <option value="T-shirt">T-shirt</option>
        <option value="sweater">Sweater</option>
        <option value="Other">Others</option>
      </select>
      <select style={{margin:10}} onChange={(e) => setFilters({...filters, size: e.target.value})}>
        <option value="">All Sizes</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <button style={{margin:5}} onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Filters;
