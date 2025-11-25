import React, { useEffect } from 'react'

import Route from './route'
import { AppConfigContextProvider } from '@/contexts/app-config'
import { AuthProvider } from '@/contexts/auth-context'

const App = () => {
  useEffect(() => {}, [])

  return (
    <AppConfigContextProvider>
      <AuthProvider>
        <Route />
      </AuthProvider>
    </AppConfigContextProvider>
  )
}

export { App }

export default App
