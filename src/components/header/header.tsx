import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '@/assets/logo.png'
import { useAuth } from '@/contexts/auth-context'
import styles from './header.module.css'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth() || {}

  const getNavActiveCssClass = (navPath: string) => {
    return pathname === navPath ? styles.active : undefined
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <header className={styles.appHeader} data-mobile-nav-open={isNavOpen}>
      <span className={styles.appHeaderLogo}>
        <button
          className={styles.appMainNavToggleBtn}
          aria-label="Toggle navigation menu"
          onClick={toggleNav}
        >
          <span>{t('navigation.toggleBtn')}</span>
        </button>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <div
        className={styles.navOverlay}
        onClick={closeNav}
        aria-label="Close navigation"
      />
      <div className={`${styles.appMainNavContainer}`}>
        <div className={styles.mobileNavButton}>
          <button
            className={styles.appMainNavCloseBtn}
            aria-label="Close navigation menu"
            onClick={toggleNav}
          >
            <span>{t('navigation.toggleBtn')}</span>
          </button>
        </div>
        <ul className={styles.appMainNav}>
          <li className={getNavActiveCssClass('/')}>
            <Link to="/" onClick={closeNav}>{t('navigation.home')}</Link>
          </li>
          <li className={getNavActiveCssClass('/about')}>
            <Link to="/about" onClick={closeNav}>{t('navigation.about')}</Link>
          </li>
        </ul>
      </div>
      <ul className={styles.appMainMenu}>
        <li className={[getNavActiveCssClass('/location'), styles.locationLink].join(' ')}>
          <Link to="/location">{t('navigation.location')}</Link>
        </li>
        {isLoggedIn ? (
          <li className={[getNavActiveCssClass('/account'), styles.loginLink].join(' ')}>
            <Link to="/account">{t('navigation.account')}</Link>
          </li>
        ) : (
          <li className={[getNavActiveCssClass('/login'), styles.loginLink].join(' ')}>
            <Link to="/login">{t('navigation.login')}</Link>
          </li>
        )}
      </ul>
    </header>
  )
}

export default Header
