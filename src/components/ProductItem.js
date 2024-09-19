import React, { useState } from 'react';

function ProductItem({ product,togetcardata }) {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);
  const [cart, setCart] = useState([]);


  const handleAddToCart = () => {
    if (!selected) return; // Only add if selected

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

    console.log(cart);
    
    setQuantity(1);
    setSelected(false);
  };

  

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="checkbox"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
