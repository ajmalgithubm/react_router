import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div style={{padding:"10px 20px"}}>
      <div>
        <input style={{padding:"10px"}} placeholder='search..'></input>
        <div style={{display:'flex', gap:"20px", marginTop:"20px"}}>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Products
