import React from 'react';
import { render } from 'react-dom';
import '@demonmhon/dx-components'

import App from './app';
import { loadConfig } from '@core/config';
import './css/styles.css';
import '@demonmhon/dx-components/dist/themes/themes.css';

const reactApp = async () => {
  await loadConfig();
  render(<App />, document.getElementById('app'));
};

reactApp();
