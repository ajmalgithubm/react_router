import React from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css'
import useAuth from './Auth'
const Navbar = () => {

    const LinkStyle = ({ isActive }) => {
        return {
            color: isActive ? "red" : "white",
            textDecoration:'none',
        }
    }

    const auth = useAuth();

    return(
        <>
            <nav>
                <div style={{ display: 'flex', justifyContent: "start", gap: "20px" }}>
                    <NavLink style={LinkStyle} to="/" >HOME</NavLink>
                    <NavLink style={LinkStyle} to="/about">ABOUT</NavLink>
                    <NavLink style={LinkStyle} to="/products">PRODUCTS</NavLink>
                    <NavLink style={LinkStyle} to="/users">USERS</NavLink>
                    <NavLink style={LinkStyle} to='/profile'>PROFILE</NavLink>
                    {
                    !auth?.user && <NavLink style={LinkStyle} to='/login'>LOGIN</NavLink>
                    }
                </div>
            </nav>
        </>
    )

}

export default Navbar
