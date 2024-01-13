import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css'
const Navbar = () => {

    const LinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : "white",
            textDecoration:'none',
        }
    }

    return(
        <>
            <nav>
                <div style={{ display: 'flex', justifyContent: "start", gap: "20px" }}>
                    <NavLink style={LinkStyle} to="/" >HOME</NavLink>
                    <NavLink style={LinkStyle} to="/about">ABOUT</NavLink>
                    <NavLink style={LinkStyle} to="/products">PRODUCTS</NavLink>
                </div>
            </nav>
        </>
    )

}

export default Navbar
