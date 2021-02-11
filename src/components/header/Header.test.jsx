import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import Header from './Header';
import { ThemeProvider } from '../../context/theme-context'


describe('Header component', () => {
    afterEach(() => cleanup());
    it('renders Header', () => {
        const { asFragment } = render(
            <Router>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
