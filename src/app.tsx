import React, { useEffect } from 'react'

import Route from './route'
import { AppConfigContextProvider } from '@/contexts/app-config'
import { AuthProvider } from '@/contexts/auth-context'
import { LanguageProvider } from '@/contexts/language-context'

const App = () => {
  useEffect(() => {}, [])

  return (
    <AppConfigContextProvider>
      <LanguageProvider>
        <AuthProvider>
          <Route />
        </AuthProvider>
      </LanguageProvider>
    </AppConfigContextProvider>
  )
}

export { App }

export default App
