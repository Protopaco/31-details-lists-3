import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Country from './Country'

const CountryList = ({ countries, changePage, page }) => {
    const countryElements = countries.map(country => (
        <li key={country.code}>
            <Link to={`/country/${country.code}`}>
                <Country flagURL={country.flagURL} name={country.name} />
            </Link>
        </li>
    ));

    return (
        <div>
            <ul>
                <li><button onClick={() => changePage(-1)}>&lt;</button></li>
                <li>{page}</li>
                <li><button onClick={() => changePage(+1)}>&gt;</button></li>
            </ul>
            <ul data-testid="countries">
                {countryElements}
            </ul>
        </div>
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
