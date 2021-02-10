import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import CountryList from './CountryList';

describe('CountryList component', () => {
    afterEach(() => cleanup());
    it('renders CountryList', () => {
        const { asFragment } = render(
            <Router>
                <CountryList
                    countries={[{ "name": 'f', "code": 'f', "flagURL": 'f' }]}
                    changePage={() => console.log('f')}
                    page={'f'} />
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
