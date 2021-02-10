import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import countriesResponse from '../fixtures/countries';
import { MemoryRouter } from 'react-router-dom';
import CountriesPage from './CountriesPage';

const server = setupServer(
    rest.get('https://restcountries.eu/rest/v2/all', (req, res, ctx) => {
        return res(ctx.json(countriesResponse));
    })
);

describe('CountriesPage container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('fetches and displays a list of countries', async () => {
        render(
            <MemoryRouter>
                <CountriesPage />
            </MemoryRouter>
        )

        screen.getByAltText('loading');

        const listOfCountries = await screen.findByTestId('countries');

        return waitFor(() => {
            expect(listOfCountries).not.toBeEmptyDOMElement();
        });
    });
});
