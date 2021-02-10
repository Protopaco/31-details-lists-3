import React from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'

const Header = ({ page, changePage }) => (
    <div className={styles.header}>
        <div className={styles.backButton}>
            <Link to={'/'}>
                <button className={styles.homeButton}>
                    HOME
                </button>
            </Link>
        </div>
        <div className={styles.text}>
            FLAGS OF THE WORLD
        </div>
    </div>
)

export default Header;