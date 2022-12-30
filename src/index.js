import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './app';
import { loadConfig } from '@core/config';
import './css/styles.css';

const reactApp = async () => {
  await loadConfig();

  const root = createRoot(document.getElementById('app'));
  root.render(<App />);
};

reactApp();
