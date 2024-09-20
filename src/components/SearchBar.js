import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input 
    className='search'
      type="text" 
      placeholder="Search products..." 
      value={searchTerm} 
      onChange={(e) => setSearchTerm(e.target.value)} 
    />
  );
}

export default SearchBar;
