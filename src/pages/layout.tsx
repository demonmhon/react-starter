import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'

import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'

import { Header } from '@/components'
import { useAppConfig } from '@/contexts/app-config'

import styles from './layout.module.css'

const Layout = () => {
  const { i18n } = useTranslation()
  const [searchParams] = useSearchParams()
  const lang = searchParams.get('lang')
  const config = useAppConfig()
  const defaultLang = config?.app?.defaultLang

  return (
    <div className={styles.appContainer}>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
