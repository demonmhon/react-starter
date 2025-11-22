import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'

import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { Header } from '@/components'
import { useAppConfigContext } from '@/contexts/app-config'

import styles from './layout.module.css'

const Layout = () => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const lang = searchParams.get('lang')
  const config = useAppConfigContext()
  const defaultLang = config?.app?.defaultLang
  const headerRef = useRef<HTMLDivElement>(null)
  const [paddingTop, setPaddingTop] = useState(0)

  useEffect(() => {
    if (lang) i18n.changeLanguage(lang)
  }, [defaultLang, lang])

  useEffect(() => {
    const updatePadding = () => {
      if (headerRef.current) {
        setPaddingTop(headerRef.current.firstElementChild?.clientHeight || 0)
      }
    }

    window.addEventListener('resize', updatePadding)
    updatePadding()

    return () => window.removeEventListener('resize', updatePadding)
  }, [])

  return (
    <div className={styles.appContainer} style={{ paddingTop }}>
      <div ref={headerRef}><Header /></div>
      <Outlet />
    </div>
  )
}

export default Layout
