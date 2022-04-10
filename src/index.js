import React from 'react';
import { render } from 'react-dom';

import App from './app';
import { loadConfig } from '@core/config';
import './css/styles.css';

const reactApp = async () => {
  await loadConfig();
  render(<App />, document.getElementById('app'));
};

reactApp();
