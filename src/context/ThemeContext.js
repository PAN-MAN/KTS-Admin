import React, { createContext, useState, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext();

// Create a ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // Toggle dark mode function
    const toggleTheme = () => setDarkMode(prevMode => !prevMode);

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
