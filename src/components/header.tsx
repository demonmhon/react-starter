import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import logo from '../assets/logo.png'
import { useAuth } from '../contexts/auth-context'

const Header = () => {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const { isLoggedIn } = useAuth()

  return (
    <header className={`app-header`}>
      <span className={`app-header-logo`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <ul className={`app-main-nav`}>
        <li className={pathname === '/' ? 'active' : undefined}>
          <Link to="/">{t('navigation.home')}</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : undefined}>
          <Link to="/about">{t('navigation.about')}</Link>
        </li>
      </ul>
      <ul className={`app-main-menu`}>
        <li className={pathname === '/account' ? 'active' : undefined}>
          <Link to="/account">
            {t(isLoggedIn ? 'navigation.account' : 'navigation.login')}
          </Link>
        </li>
      </ul>
    </header>
  )
}

Header.defaultProps = {
  match: {},
  location: {},
  history: {},
}

export default Header
