const URL = 'https://restcountries.eu/rest/v2/';
export const findCountries = () => {
    return fetch(`${URL}all`)
        .then(res => res.json())
        .then(({ results }) => results.map(result => ({
            name: result.name,
            code: result.alpha3Code,
            flagURL: result.flag
        })));
}

export const findCountryByCode = code => {
    return fetch(`${URL}alpha/${code}`)
        .then(res => res.json())
        .then(result => ({
            name: result.name,
            nativeName: result.nativeName,
            code: result.code,
            flagURL: result.flag,
            capital: result.capital
        }))
}