import { useState, useEffect } from 'react';
import { findCountryByCode, findCountries } from '../services/countries';

export const useCountries = (pageNum) => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        findCountries()
            .then(countries => {
                let countryList = [];
                for (let i = ((pageNum - 1) * 24); i < countries.length && i < pageNum * 24; i++) {
                    countryList.push(countries[i])
                }
                setCountries(countryList);
                setLoading(false);
            });
    }, [pageNum]);

    return {
        loading,
        countries
    };
}

export const useCountryByCode = code => {
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        findCountryByCode(code)
            .then(country => {
                setCountry(country);
                setLoading(false);
            })
    }, [code]);

    return {
        loading,
        country
    }
}

export const usePagination = () => {
    const [page, setPage] = useState(1);

    const changePage = async (direction) => {
        if (direction > 0 && page < 11) await setPage(page + direction)
        if (direction < 0 && page > 1) await setPage(page + direction)
    };

    return { page, changePage }
}
