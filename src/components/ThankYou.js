import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  return (
    <div>
      <h1>Thank You So much Your Purchase, Have a Great Day:)</h1>
      
      <button className="add-to-cart-button"  onClick={()=>{window.location.href = '/'}}>Home</button>
      
    </div>
  );
}

export default ThankYou;
