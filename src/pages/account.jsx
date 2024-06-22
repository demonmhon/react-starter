import React from 'react';

import { BlankPage } from '@components';
import { useAppConfigContext } from '@contexts/app-config';

const AccountPage = (props) => {
  const appConfig = useAppConfigContext();
  return <BlankPage title={`Account`}></BlankPage>;
};

AccountPage.propTypes = {};
AccountPage.defaultProps = {};

export { AccountPage as HomePage };
export default AccountPage;
