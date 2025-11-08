import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Layout from './pages/layout'
import Pages from './pages'
import ProtectedRoute from './protected-route'
import PublicRoute from './public-route'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Pages.Login />
            </PublicRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Pages.Account />
            </ProtectedRoute>
          }
        />
        <Route path="/404" element={<Pages.Error404 />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Route>
    </Routes>
  )
}

const AppBrowserRouter = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export { AppRouter, AppBrowserRouter }

export default AppBrowserRouter
