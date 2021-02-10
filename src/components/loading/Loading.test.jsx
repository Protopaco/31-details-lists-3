import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
    afterEach(() => cleanup());
    it('renders Loading', () => {
        const { asFragment } = render(
            <Router>
                <Loading />
            </Router>);
        expect(asFragment()).toMatchSnapshot();
    });
});
