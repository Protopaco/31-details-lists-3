import React from 'react';
import PropTypes from 'prop-types';
import styles from './Country.css'

const Country = ({ name, flagURL }) => (
    <figure className={styles.figure}>
        <img src={flagURL} alt={name} className={styles.image} />
        <figcaption className={styles.caption}>{name}</figcaption>
    </figure>
)

Country.propTypes = {
    flagURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Country
