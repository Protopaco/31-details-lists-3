import React, { createContext, useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const switchTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            document.documentElement.style.setProperty('--primary', 'brown');
            document.documentElement.style.setProperty('--secondary', 'beige');
            document.documentElement.style.setProperty('--tertiary', 'tan');
        }
        else if (theme === 'dark') {
            let randNum = [];
            for (let i = 0; i < 10; i++) {
                randNum.push(Math.floor(Math.random() * Math.floor(255)))
            }
            setTheme('random')
            document.documentElement.style.setProperty('--primary', `rgb(${randNum[0]}, ${randNum[1]}, ${randNum[2]})`);
            document.documentElement.style.setProperty('--secondary', `rgb(${randNum[3]}, ${randNum[4]}, ${randNum[5]})`);
            document.documentElement.style.setProperty('--tertiary', `rgb(${randNum[6]}, ${randNum[7]}, ${randNum[8]})`);
        }
        else if (theme === 'random') {
            setTheme('light')
            document.documentElement.style.setProperty('--primary', 'beige');
            document.documentElement.style.setProperty('--secondary', 'brown');
            document.documentElement.style.setProperty('--tertiary', 'tan');
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

