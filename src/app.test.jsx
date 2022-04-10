import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { App } from './app';

describe('App', () => {
  test('Should rendered properly', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#app-container')).toBeInTheDocument();
  });
});
