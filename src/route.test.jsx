import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { AppRouter } from './route';

// app.test.js
it('Render home page', () => {
  render(<AppRouter />, { wrapper: MemoryRouter });

  expect(screen.getByText(/React 18x Starter/i)).toBeInTheDocument();
});
