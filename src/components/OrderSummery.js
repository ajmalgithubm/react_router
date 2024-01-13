import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom';

const OrderSummery = () => {

  const location = useLocation();
  const navigate = useNavigate();

 


  return (
    <div>
      <h1>Order List</h1>
      <h2>{location.state.name} {location.state.price}</h2>
      <button className='back-btn' onClick={() => navigate(-1) }>Go back</button>
    </div>
  )
}

export default OrderSummery
