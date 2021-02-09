import { useState, useEffect } from 'react';
import { findCountryByCode, findCountries } from '../services/countries';

export const useCountries = () => {
    const [loading, setLoading] = useState(true);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        findCountries()
            .then(countries => {
                setCountries(countries);
                setLoading(false);
            });
    }, []);

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