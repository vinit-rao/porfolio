import { createContext, useContext, useState, useEffect } from 'react';

const readSaved = () => {
    try {
        return localStorage.getItem('theme') || 'dark';
    } catch {
        return 'dark';
    }
};

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(readSaved);

    useEffect(() => {
        if (theme === 'light') document.body.classList.add('light-theme');
        else document.body.classList.remove('light-theme');
        try { localStorage.setItem('theme', theme); } catch { /* ignore */ }
    }, [theme]);

    const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
