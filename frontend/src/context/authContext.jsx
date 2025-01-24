import React, { useEffect } from 'react'
import { createContext, useContext } from 'react'
import { useState } from 'react';
export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [token, setToken] = useState( localStorage.getItem('token') || null);
    const [user, setUser] = useState( JSON.parse(localStorage.getItem('userId')) || null);
    return (
        <authContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(authContext)
}