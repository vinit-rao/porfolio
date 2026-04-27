import { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour12: false, hour: '2-digit', minute: '2-digit' });
            setCurrentTime(timeString);
        };
        updateClock();
        const intervalId = setInterval(updateClock, 60000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <footer className="social-footer">
            <div className="container">
                <div style={{ paddingBottom: '60px' }}>
                    <h2 className="massive-title" style={{ color: 'var(--accent)', fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '15px', textShadow: 'none' }}>
                        STAY CONNECTED
                    </h2>
                    <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', letterSpacing: '3px', fontSize: '0.75rem', marginBottom: '50px' }}>
                        FOLLOW MY SOCIALS OR INITIATE CONTACT
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '20px', flexWrap: 'wrap', marginBottom: '40px' }}>
                        <a href="https://github.com/vinit-rao" target="_blank" rel="noreferrer" className="footer-link">GITHUB</a>
                        <span className="footer-dot">|</span>
                        <a href="https://instagram.com/instavinitgram" target="_blank" rel="noreferrer" className="footer-link">INSTAGRAM</a>
                        <span className="footer-dot">|</span>
                        <a href="https://youtube.com/@OfficialVinitRao" target="_blank" rel="noreferrer" className="footer-link">YOUTUBE</a>
                        <span className="footer-dot">|</span>
                        <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noreferrer" className="footer-link">LINKEDIN</a>
                    </div>
                </div>

                <div style={{ width: '100%', position: 'relative', borderTop: '1px solid var(--glass-border)', padding: '25px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontSize: '0.8rem', letterSpacing: '1px' }}>
                        <span>OTTAWA, ON</span>
                        <span>VINIT RAO // LOCAL TIME: {currentTime}</span>
                    </div>
                </div>
            </div>
            <div className="footer-accent-bar"></div>
        </footer>
    );
};

export default Footer;