import React from 'react';
import useAuth from './Auth';
import { Navigate, useLocation } from 'react-router-dom';


const RequiredAuth = ({children}) => {

    const auth = useAuth();
    const location = useLocation();
    console.log("Location", location)
    return auth?.user ? children : <Navigate to={"/login"} state={{path: location.pathname}}/>
}

export default RequiredAuth
