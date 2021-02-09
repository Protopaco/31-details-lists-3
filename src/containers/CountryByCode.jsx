import React from 'react';
import PropTypes from 'prop-types';
import { useCountryByCode } from '../hooks/Countries';
import CountryDetail from '../components/details/CountryDetail';
import Loading from '../components/loading/Loading';

const CountryByCode = ({ match }) => {
    const { loading, country } = useCountryByCode(match.params.code);

    if (loading) return <Loading />;
    return <CountryDetail {...country} />;
}

CountryByCode.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            code: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default CountryByCode;
