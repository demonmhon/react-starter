import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Layout from './pages/layout'
import Pages from './pages'
import ProtectedRoute from './protected-route'
import PublicRoute from './public-route'

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/location" element={<Pages.Location />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Pages.Login />
            </PublicRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Pages.Dashboard />} />
          <Route path="/dashboard/:id" element={<Pages.Dashboard />} />
          <Route path="/account" element={<Pages.Account />} />
        </Route>
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
