import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';

import Route from './route';
import { Header } from '@components';

const App = (props) => {
  useEffect(() => {
    props.init();
  }, []);

  return (
    <BrowserRouter>
    <dx-button>Test</dx-button>
      <div id="app-container">
        <Header />
        <Route />
      </div>
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
