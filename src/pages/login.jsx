import React from 'react';

import LoginIcon from '../assets/icons/user.svg';
import { BlankPage } from 'src/components';

const LoginPage = (props) => {
  return <BlankPage title={`Please login`} />;
};

LoginPage.propTypes = {};
LoginPage.defaultProps = {};

export { LoginPage };
export default LoginPage;
