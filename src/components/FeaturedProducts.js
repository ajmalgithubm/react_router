import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const FeaturedProducts = () => {
  return (
    <div>
        <div>

              <h1>List of Featured Products</h1>
              <div style={{display:'flex', gap:'20px', marginTop:"10px"}}>
                <NavLink to='trending'>Trending</NavLink>
                <NavLink to="low-price">Low Price</NavLink>
                <NavLink to="high-price">High Price</NavLink>
              </div>
              <Outlet/>
        </div>
    </div>
  )
}

export default FeaturedProducts
