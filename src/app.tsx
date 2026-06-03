import { AppConfigContextProvider } from '@/contexts/app-config'
import { LanguageProvider } from '@/contexts/language-context'
import { AuthProvider } from '@/contexts/auth-context'
import AppRouter from './routes/app-route'

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <AppConfigContextProvider>
    <LanguageProvider>
      <AuthProvider>{children}</AuthProvider>
    </LanguageProvider>
  </AppConfigContextProvider>
)

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}

export default App
