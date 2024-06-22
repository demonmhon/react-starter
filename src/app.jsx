import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';
import { Header } from '@components';
import { AppConfigContextProvider } from '@contexts/app-config';

const App = (props) => {
  useEffect(() => {
    props.init();
  }, []);

  return (
    <BrowserRouter>
      <AppConfigContextProvider>
        <div id="app-container">
          <Header />
          <Route />
        </div>
      </AppConfigContextProvider>
    </BrowserRouter>
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
