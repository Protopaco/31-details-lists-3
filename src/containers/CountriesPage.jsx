
import React from 'react';
import CountryList from '../components/countries/CountryList';
import Loading from '../components/loading/Loading';
import { useCountries } from '../hooks/Countries';

const CountriesPage = () => {
    const { loading, countries } = useCountries();

    if (loading) return <Loading />;
    return <CountryList countries={countries} />;
}

export default CountriesPage;
