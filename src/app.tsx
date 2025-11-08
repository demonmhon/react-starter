import React, { useEffect } from 'react';

import Route from './route';
import { AppConfigContextProvider } from './contexts/app-config';

const App = () => {
  useEffect(() => {
    
  }, []);

  return (
    <AppConfigContextProvider>
      <Route />
    </AppConfigContextProvider>
  );
};

export { App };

export default App;
