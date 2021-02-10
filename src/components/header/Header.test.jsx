import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
    afterEach(() => cleanup());
    it('renders Header', () => {
        const { asFragment } = render(
            <Router>
                <Header />
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
