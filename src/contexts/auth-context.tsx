import React, { createContext, useContext, useState, ReactNode } from 'react'
import Cookies from 'js-cookie'

interface AuthContextType {
  isLoggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('isLoggedIn'))

  const login = () => {
    Cookies.set('isLoggedIn', 'true', { expires: 1 })
    setIsLoggedIn(true)
  }

  const logout = () => {
    Cookies.remove('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
