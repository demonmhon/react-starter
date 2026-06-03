import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import Layout from '../pages/layout'
import ProtectedRoute from './components/protected-route'
import PublicRoute from './components/public-route'
import Pages from '../pages'

const Home = React.lazy(() => import('../pages/home'))
const About = React.lazy(() => import('../pages/about'))
const Location = React.lazy(() => import('../pages/location'))
const Dashboard = React.lazy(() => import('../pages/dashboard'))
const Account = React.lazy(() => import('../pages/account'))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback="Loading...">
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <React.Suspense fallback="Loading...">
            <About />
          </React.Suspense>
        ),
      },
      {
        path: 'location',
        element: (
          <React.Suspense fallback="Loading...">
            <Location />
          </React.Suspense>
        ),
      },
      {
        element: <PublicRoute />,
        children: [{ path: 'login', element: (<Pages.Login />) }],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'dashboard',
            element: (
              <React.Suspense fallback="Loading...">
                <Dashboard />
              </React.Suspense>
            ),
          },
          {
            path: 'dashboard/:id',
            element: (
              <React.Suspense fallback="Loading...">
                <Dashboard />
              </React.Suspense>
            ),
          },
          {
            path: 'account',
            element: (
              <React.Suspense fallback="Loading...">
                <Account />
              </React.Suspense>
            ),
          },
        ],
      },
      { path: '404', element: <Pages.Error404 /> },
      { path: '*', element: <Navigate to="/404" replace /> },
    ],
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
