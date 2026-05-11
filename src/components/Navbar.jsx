import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // ENFORCED LIGHT START
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar-container">
            <div className="container">
                <div className="navbar-inner">
                    <Link to="/" className="nav-logo">VINIT RAO</Link>

                    <div className="nav-mobile-controls">
                        <button className="theme-toggle-btn mobile-only" onClick={toggleTheme}>
                            {theme === 'light' ? 'DARK' : 'LIGHT'}
                        </button>
                        <button className={`hamburger-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <div className="nav-links">
                            {/* FIX: URL path points to /projects to prevent blank page, but text says MY PROJECTS */}
                            <Link to="/projects" className="nav-framed-link">PROJECTS</Link>
                            <Link to="/contact" className="nav-framed-link">CONTACT</Link>
                            <Link to="/resume" className="nav-framed-link">RESUME</Link>
                        </div>
                        <button className="theme-toggle-btn desktop-only" onClick={toggleTheme}>
                            {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;