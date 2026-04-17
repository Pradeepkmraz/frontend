import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Check local storage or default to dark (since the app is currently dark-themed)
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'dark';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        
        // Remove old theme classes
        root.classList.remove('light', 'dark');
        
        // Add new theme class
        root.classList.add(theme);
        
        // Persist theme
        localStorage.setItem('theme', theme);
        
        // Set color-scheme for scrollbars and system matches
        root.style.setProperty('color-scheme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
