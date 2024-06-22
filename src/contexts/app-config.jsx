import React, { createContext, useContext, useState, useEffect } from 'react';

export const AppConfigContext = createContext(null);

export const AppConfigContextProvider = ({ children }) => {
  const [config, setConfig] = useState(null);

  const loadConfig = async () => {
    const response = await fetch('/config.json');
    const config = await response.json();
    setConfig(config);
  };

  useEffect(() => {
    loadConfig();
  }, []);

  return (
    <AppConfigContext.Provider value={config}>
      {children}
    </AppConfigContext.Provider>
  );
};

export const useAppConfigContext = () => useContext(AppConfigContext);
