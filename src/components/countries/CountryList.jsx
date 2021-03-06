import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Country from './Country'
import styles from './CountryList.css'


const CountryList = ({ countries, changePage, page }) => {
    const countryElements = countries.map(country => (
        <li key={country.code}>
            <Link to={`/country/${country.code}`}>
                <Country flagURL={country.flagURL} name={country.name} />
            </Link>
        </li>
    ));

    return (
        <div className={styles.frame}>
            <ul className={styles.list}>
                <li>
                    <button
                        className={styles.button}
                        onClick={() => changePage(-1)}>
                        &lt;
                    </button>
                </li>
                <li
                    className={styles.text}
                    data-testid="pageNum">
                    {page}
                </li>
                <li>
                    <button
                        className={styles.button}
                        data-testid="advancePage"
                        onClick={() => changePage(+1)}>
                        &gt;
                </button>
                </li>
            </ul >
            <ul data-testid="countries" className={styles.countryElements}>
                {countryElements}
            </ul>
        </div >
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
