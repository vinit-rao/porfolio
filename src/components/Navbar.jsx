import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close the mobile drawer whenever the route changes (covers nav links as
    // well as browser back/forward). Syncing UI to the router is a valid effect.
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMenuOpen(false);
    }, [location]);

    return (
        <nav className="navbar-container" aria-label="Primary">
            <div className="container">
                <div className="navbar-inner">
                    <Link to="/" className="nav-logo">VINIT RAO</Link>

                    <div className="nav-mobile-controls">
                        <button
                            className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="nav-menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>

                    <div className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
                        <div className="nav-links">
                            <Link to="/projects" className={`nav-framed-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>PROJECTS</Link>
                            <Link to="/contact" className={`nav-framed-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>CONTACT</Link>
                            <Link to="/resume" className={`nav-framed-link ${location.pathname === '/resume' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>RESUME</Link>
                        </div>

                        <div className="nav-mobile-socials">
                            <a href="https://github.com/vinit-rao" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a>
                            <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://youtube.com/@OfficialVinitRao" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                            <a href="https://instagram.com/instavinitgram" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;