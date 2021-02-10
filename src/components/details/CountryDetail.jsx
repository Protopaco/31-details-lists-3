import React from 'react';
import PropTypes from 'prop-types';
import styles from './CountryDetail.css'

const CountryDetail = ({ name, nativeName, flagURL, capital }) => (
    <div className={styles.frame} >
        <figure className={styles.figure}>
            <img className={styles.img} src={flagURL} alt={name} />
            <figcaption className={styles.caption}>
                <p>{name}</p>
                <p>{nativeName}</p>
                <p>{capital}</p>
            </figcaption>
        </figure>
    </div>
);

CountryDetail.propTypes = {
    name: PropTypes.string.isRequired,
    nativeName: PropTypes.string.isRequired,
    flagURL: PropTypes.string.isRequired,
    capital: PropTypes.string.isRequired
};

export default CountryDetail;
