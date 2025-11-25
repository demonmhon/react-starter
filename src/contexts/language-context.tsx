import { createContext, useContext, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppConfig } from './app-config'
import type { ReactNode } from 'react'

interface LanguageContextType {
  language: string
  changeLanguage: (lang: string) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { config } = useAppConfig()
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || config?.app?.defaultLang || 'th-TH'
  )

  useEffect(() => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
  }, [language, i18n])

  return (
    <LanguageContext.Provider value={{ language, changeLanguage: setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageProvider
