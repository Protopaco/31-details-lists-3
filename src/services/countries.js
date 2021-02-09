const URL = 'https://restcountries.eu/rest/v2/all';
export const findCountries = () => {
    return fetch(URL)
        .then(res => res.json())
        .then(({ results }) => results.map(result => ({
            name: result.name,
            code: result.alpha3Code,
            flagURL: result.flag
        })));
}

export const findCharacterById = code => {
    return fetch(URL)
        .then(res => res.json())
        .then(result => ({
            name: result.name,
            nativeName: result.nativeName,
            code: result.code,
            flagURL: result.flag,
            capital: result.capital
        }))
}