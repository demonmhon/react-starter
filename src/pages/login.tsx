import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { BlankPage } from '@/components'
import { useAuth } from '../contexts/auth-context'
import { useAppConfig } from '@/contexts/app-config'

const Login = () => {
  const { config } = useAppConfig()
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const { login } = useAuth()!

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // In a real app, you'd validate credentials here before calling login.
    login()

    const from = location.state?.from?.pathname || '/account'
    navigate(from, { replace: true })
  }

  return (
    <BlankPage title={t('loginPage.pageTitle')}>
      <form onSubmit={handleSubmit}>
        {}
        <div>
          <label htmlFor="username">{t('loginPage.field.username')}:</label>
          <input type="text" id="username" name="username" />
        </div>
        <br />
        <div>
          <label htmlFor="password">{t('loginPage.field.password')}:</label>
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <button type="submit">{t('loginPage.button.login')}</button>
      </form>
    </BlankPage>
  )
}

export default Login
