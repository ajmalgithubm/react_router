import React, { useState } from 'react';
import { useContext, createContext } from 'react';

const userContext = createContext(null);

export const AuthProvider = ({children}) => {

   // creating a context api
  const [user, setUser] = useState(null);

  // login function
  const login = (user) => {
    setUser(user)
  }
  // logout the user
  const logout = () => {
    setUser(null)
  }

  return (
    <userContext.Provider value={{user, login, logout}}>
        {children}
    </userContext.Provider>
  )
}

// when call return the object
const useAuth = () => {
    return useContext(userContext)
}

export default useAuth;


