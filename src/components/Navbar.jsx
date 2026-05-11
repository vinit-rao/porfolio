import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check for saved user preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDark(true);
            document.body.classList.add('dark-theme');
        } else {
            setIsDark(false);
            document.body.classList.remove('dark-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    return (
        <div className="nav-wrapper">
            <nav className="nav-container container">
                <Link to="/" className="nav-brand">VINIT RAO</Link>
                
                <div className="nav-links">
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>WORK</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
                    <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>RESUME</Link>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {isDark ? 'LIGHT' : 'DARK'}
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;