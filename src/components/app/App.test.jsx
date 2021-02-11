import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { ThemeProvider } from '../../context/theme-context'

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(
      <ThemeProvider><App /></ThemeProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
