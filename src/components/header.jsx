import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

import logo from '../assets/logo.png';

const Header = (props) => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const isLoggedIn = Cookies.get('isLoggedIn');

  return (
    <header className={`app-header`}>
      <span className={`app-header-logo`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </span>
      <ul className={`app-main-nav`}>
        <li className={pathname === '/' ? 'active' : null}>
          <Link to="/">{t('navigation.home')}</Link>
        </li>
        <li className={pathname === '/about' ? 'active' : null}>
          <Link to="/about">{t('navigation.about')}</Link>
        </li>
      </ul>
      <ul className={`app-main-menu`}>
        <li className={pathname === '/account' ? 'active' : null}>
          <Link to="/account">
            {t(isLoggedIn ? 'navigation.account' : 'navigation.login')}
          </Link>
        </li>
      </ul>
    </header>
  );
};

Header.defaultProps = {
  match: {},
  location: {},
  history: {},
};

export default Header;
