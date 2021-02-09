import React from 'react';
import PropTypes from 'prop-types';

const CountryDetail = ({ name, nativeName, flagURL, capital }) => (
    <figure>
        <img src={flagURL} alt={name} />
        <figcaption>
            <p>{name}</p>
            <p>{nativeName}</p>
            <p>{capital}</p>
        </figcaption>
    </figure>
);

CountryDetail.propTypes = {
    name: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    flagURL: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired
};

export default CountryDetail;
