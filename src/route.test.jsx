import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { AppRoute } from './route';

// app.test.js
it('Render home page', () => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  render(<AppRoute />, { wrapper: MemoryRouter });

  expect(screen.getByText(/React 17x Starter/i)).toBeInTheDocument();
});
