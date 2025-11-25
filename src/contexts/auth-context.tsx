import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'
import type { ReactNode } from 'react'

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
    Cookies.remove('isLoggedIn')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export default AuthProvider
