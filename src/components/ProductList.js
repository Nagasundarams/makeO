import React, { useState } from 'react';
import ProductItem from './ProductItem';

function ProductList({ products,onStateChange }) {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    const itemInCart = cart.find(item => item.id === product.id);

    if (itemInCart) {
      // If item already in cart, update its quantity
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Add new item to the cart
      setCart([...cart, { ...product, quantity }]);
    }
    onStateChange(cart);

    console.log(cart);
  };

  

  return (
    <div>
      {products.map(product => (
        <ProductItem 
          key={product.id} 
          product={product} 
          addToCart={handleAddToCart} 
          className="container"
        />
      ))}
    </div>
  );
}

export default ProductList;
