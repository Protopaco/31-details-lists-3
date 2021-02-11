
import React from 'react';
import CountryList from '../components/countries/CountryList.jsx';
import Loading from '../components/loading/Loading';
import { usePagination, useCountries } from '../hooks/Countries';


const CountriesPage = () => {
    const { page, changePage } = usePagination();
    const { loading, countries } = useCountries(page);

    if (loading) return <Loading />;
    return <CountryList
        countries={countries}
        changePage={changePage}
        page={page}
    />;
}

export default CountriesPage;
