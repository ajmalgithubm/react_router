import React from 'react';
import { useLocation, useNavigate,} from 'react-router-dom';
import '../App.css';
import useAuth from './Auth';

const Home = () => {
  
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  console.log("Home Location", location);

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <h3>name: {auth?.user}</h3>
      <button onClick={() => navigate("/place-order", { state: { name:"AJMAL", price: "12100"}})}>Place Order</button>
    </div>
  )
}

export default Home
