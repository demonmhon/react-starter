import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import './i18n';
import './css/styles.css';

const reactApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

reactApp();
