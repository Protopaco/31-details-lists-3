import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import CountryDetail from './CountryDetail';

describe('CountryDetail component', () => {
    afterEach(() => cleanup());
    it('renders CountryDetail', () => {
        const { asFragment } = render(
            <Router>
                <CountryDetail
                    name={'f'}
                    nativeName={'f'}
                    flagURL={'f'}
                    capital={'f'}
                />
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
