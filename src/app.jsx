import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Route from './route';
import { AppConfigContextProvider } from 'src/contexts/app-config';

const App = (props) => {
  useEffect(() => {
    props.init();
  }, []);

  return (
    <AppConfigContextProvider>
      <Route />
    </AppConfigContextProvider>
  );
};

App.propTypes = {
  init: PropTypes.func,
};
App.defaultProps = {
  init() {},
};

export { App };

export default App;
