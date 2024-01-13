import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css';

const Home = () => {
  
  const navigate = useNavigate();

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/place-order", { state: { name:"AJMAL", price: "12100"}})}>Place Order</button>
    </div>
  )
}

export default Home
