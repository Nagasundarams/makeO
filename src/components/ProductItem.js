import React, { useState } from 'react';

function ProductItem({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(false);

  const handleAddToCart = () => {
    if (!selected) return; // Only add if selected
    addToCart(product, quantity);
    setQuantity(1);
    setSelected(false);
  };

  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="product-image"/>
      <p className="product-info">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p>{product.inStock ? "Stock Available" : "out of stock"}</p>
      <input
        type="number"
        value={quantity}
        className="quantity-input"
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <input
        type="checkbox"
        checked={selected}
        onChange={() => setSelected(!selected)}
      />
      <button className="add-to-cart-button"  onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductItem;
