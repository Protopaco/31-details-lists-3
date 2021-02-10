import React from 'react'
import styles from './Header.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../../context/theme-context'

const Header = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={styles.header}>
            <div className={styles.backButton}>
                <Link to={'/'}>
                    <button className={styles.homeButton}>
                        HOME
                </button>
                </Link>
                <button
                    className={styles.themeButton}
                    onClick={switchTheme}>
                    {theme}
                </button>
            </div>
            <div className={styles.text}>
                FLAGS OF THE WORLD
        </div>
        </div>
    )
}

export default Header;
