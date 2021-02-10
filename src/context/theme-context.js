import React, { createContext, useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            document.documentElement.style.setProperty('--primary', 'brown');
            document.documentElement.style.setProperty('--secondary', 'beige');
        } else {
            setTheme('light')
            document.documentElement.style.setProperty('--primary', 'beige');
            document.documentElement.style.setProperty('--secondary', 'brown');
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    return { theme, switchTheme }
}

