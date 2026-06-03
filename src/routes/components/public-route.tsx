import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const PublicRoute = ({ children }: { children?: React.ReactNode }) => {
  const isLoggedIn = Cookies.get('isLoggedIn')

  if (isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return children || <Outlet />
}

export default PublicRoute
