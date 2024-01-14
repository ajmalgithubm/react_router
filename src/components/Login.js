import React, { useState } from 'react'
import useAuth from './Auth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {

    // set username here
  const [user, setUser] = useState();
  const auth = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  // trigger login button click
  const handleLogin = () => {
    auth.login(user);
    console.log("Login State", location.state);
    navigate(location.state.path || '/')
  }
return (
    <div>
      <label>Username: </label><input placeholder='' onChange={(e) => setUser(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
