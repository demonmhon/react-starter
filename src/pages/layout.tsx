import React, { useEffect } from 'react'
import { Outlet } from 'react-router'

import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { Header } from '@/components'
import { useAppConfigContext } from '@/contexts/app-config'

const Layout = (props) => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const lang = searchParams.get('lang')
  const config = useAppConfigContext()
  const defaultLang = config?.app?.defaultLang

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [defaultLang, lang])

  return (
    <div id="app-container">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
