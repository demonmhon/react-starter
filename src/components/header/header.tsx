import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '@/assets/logo.png'
import { useAuth } from '@/contexts/auth-context'
import styles from './header.module.css'

const Header = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth() || {}

  const getNavActiveCssClass = (navPath: string) => {
    return pathname === navPath ? styles.active : undefined
  }

  return (
    <header className={styles.appHeader}>
      <span className={styles.appHeaderLogo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <ul className={styles.appMainNav}>
        <li className={getNavActiveCssClass('/')}>
          <Link to="/">{t('navigation.home')}</Link>
        </li>
        <li className={getNavActiveCssClass('/about')}>
          <Link to="/about">{t('navigation.about')}</Link>
        </li>
      </ul>
      <ul className={styles.appMainMenu}>
        <li className={getNavActiveCssClass('/account')}>
          <Link to="/account">
            {t(isLoggedIn ? 'navigation.account' : 'navigation.login')}
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
