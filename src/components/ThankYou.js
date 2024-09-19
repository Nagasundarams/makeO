import React from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  return (
    <div>
      <h1>Thank You for Your Purchase!</h1>
      
      <button onClick={()=>{window.location.href = '/'}}>Home</button>
      
    </div>
  );
}

export default ThankYou;
