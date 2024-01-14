import React, { useEffect } from 'react'
import useAuth from './Auth'
import { useLocation, useNavigate } from 'react-router-dom';
const Profile = () => {

    const navigate = useNavigate();
    const auth = useAuth();
    const location = useLocation();

    const handleLogOut = () => {
        console.log("Logout Location", location)
        auth.logout();
        navigate("/", {state:{logout:true}})
    }
  
  return (
    <div>
      <h1>Profile Page </h1>
      <h1>Username : {auth?.user}</h1>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Profile
