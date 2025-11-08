import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const isLoggedIn = Cookies.get('isLoggedIn')

  if (!isLoggedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to send them along to that page after they login.
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
