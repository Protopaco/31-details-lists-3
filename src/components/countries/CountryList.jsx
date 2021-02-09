import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Country from './Country'

const CountryList = ({ countries }) => {
    const countryElements = countries.map(country => (
        <li key={country.code}>
            <Link to={`/country/${counrty.code}`}>
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
    counrties: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        flagURL: PropTypes.string.isRequired
    })).isRequired
};
export default CountryList;
