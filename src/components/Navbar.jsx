import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="sharp-nav-wrapper">
            <nav className="sharp-nav container">
                
                {/* LEFT: BRANDING */}
                <div className="nav-brand-container">
                    <Link to="/" className="nav-brand">
                        <span className="brand-full">VINIT RAO</span>
                        <span className="brand-short">VR</span>
                    </Link>
                </div>
                
                {/* LINKS */}
                <div className="nav-links-group">
                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>WORK</Link>
                    <span className="nav-divider">|</span>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
                    <span className="nav-divider">|</span>
                    <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>RESUME</Link>
                </div>

                {/* INVISIBLE BALANCER (Hidden on desktop, active on mobile) */}
                <div className="nav-balancer"></div>
                
            </nav>
        </div>
    );
};

export default Navbar;