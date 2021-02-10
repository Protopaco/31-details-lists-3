import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Country from './Country';

describe('Country component', () => {
    afterEach(() => cleanup());
    it('renders Country', () => {
        const { asFragment } = render(<Country name={'f'} flagURL={'f'} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
