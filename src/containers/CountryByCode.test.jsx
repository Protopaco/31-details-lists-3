import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import countryByCodeResponse from '../fixtures/countryByCode.json'
import CountryById from './CountryByCode';

const server = setupServer(
    rest.get('https://restcountries.eu/rest/v2/alpha/AFG', (req, res, ctx) => {
        return res(ctx.json(countryByCodeResponse));
    })
);

describe('CountryByCode container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it("fetches and displays a country's detais", async () => {
        render(<CountryById match={{ params: { code: 'AFG' } }} />);

        screen.getByAltText('loading');

        return waitFor(() => {
            screen.getByText('Afghanistan');
            screen.getByText('افغانستان');
            screen.getByText('Kabul');
        })
    })
})