import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartSummary({ cartItems, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const navigate=useNavigate();

  return (
    <div >
      <h2>Cart Summary</h2>
      {cartItems.map(item => (
        <div key={item.id} className="product-item">
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} className="product-image"/>
          <p className="product-price">Price: ${item.price}</p>
          <input 
            type="number" 
            value={item.quantity} 
            className="quantity-input"
            onChange={(e) => updateQuantity(item.id, e.target.value)} 
          />
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button className="add-to-cart-button"  onClick={() => {alert("Proceeding to checkout..."); navigate('/thank-you') }}>Proceed to Checkout</button>
    </div>
  );
}

export default CartSummary;
