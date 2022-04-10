import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Pages from './pages';

const AppRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Pages.Home />} />
      <Route path="/about" element={<Pages.About />} />
      <Route path="/account" element={<Pages.Account />} />
      <Route path="/404" element={<Pages.Error404 />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};

export { AppRoute };

export default AppRoute;
