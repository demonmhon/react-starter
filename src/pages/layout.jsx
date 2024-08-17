import React from 'react';
import { Outlet } from 'react-router';

import { Header } from 'src/components';

const Layout = (props) => {
  return (
    <div id="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
