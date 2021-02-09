import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Country from './Country'

const CountryList = ({ countries }) => {
    const countryElements = countries.map(country => (
        <li key={country.code}>
            <Link to={`/country/${country.code}`}>
                <Country flagURL={country.flagURL} name={country.name} />
            </Link>
        </li>
    ));

    return (
        <ul data-testid="countries">
            {countryElements}
        </ul>
    );
};

CountryList.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        flagURL: PropTypes.string.isRequired
    })).isRequired
};
export default CountryList;
