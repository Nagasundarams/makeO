import React from 'react';

function CartSummary({ cartItems, updateQuantity }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <input 
            type="number" 
            value={item.quantity} 
            onChange={(e) => updateQuantity(item.id, e.target.value)} 
          />
        </div>
      ))}
      <h2>Total: ${total.toFixed(2)}</h2>
      <button onClick={() => alert("Proceeding to checkout...")}>Proceed to Checkout</button>
    </div>
  );
}

export default CartSummary;
