import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

import { BlankPage } from '@/components';
import { useAuth } from '../contexts/auth-context';

const AccountPage = (props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { logout } = useAuth()!;

  const handleLogout = (event: React.FormEvent) => {
    event.preventDefault();
    logout();
    navigate('/');
  };

  return (
    <BlankPage title={`Account`}>
      <form onSubmit={handleLogout}>
        <button type="submit">{t('account.buttonLogout')}</button>
      </form>
    </BlankPage>
  )
};

AccountPage.propTypes = {};
AccountPage.defaultProps = {};

export { AccountPage as HomePage };
export default AccountPage;
