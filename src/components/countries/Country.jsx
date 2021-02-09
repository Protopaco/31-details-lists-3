import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, flagURL }) => (
    <figure>
        <img src={flagURL} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>
)

Country.propTypes = {
    flagURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Country
