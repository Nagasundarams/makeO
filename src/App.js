import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import ThankYou from './components/ThankYou';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [filters, setFilters] = useState({ category: '', size: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [forcart, setForcart] = useState([]);

  useEffect(() => {
    const filtered = products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesSize = !filters.size || product.size === filters.size;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSize && matchesSearch;
    });
    setFilteredProducts(filtered);
  }, [filters, searchTerm, products]);

  const getcartdata=(e)=>{
    setForcart(e);
  }

  return (
    <Router>
      <div>
        <h1>Product Listing</h1>
        <Filters filters={filters} setFilters={setFilters} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} togetcartdata={getcartdata}/>} />
          <Route path="/cart" element={<CartSummary cartItems={forcart}/>} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
