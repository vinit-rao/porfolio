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

    const socials = [
        { label: 'GITHUB', url: 'https://github.com/vinit-rao' },
        { label: 'INSTAGRAM', url: 'https://instagram.com/instavinitgram' },
        { label: 'YOUTUBE', url: 'https://youtube.com/@OfficialVinitRao' },
        { label: 'LINKEDIN', url: 'https://linkedin.com/in/vinitrao1/' }
    ];

    return (
        <footer className="scrap-footer-wrapper">
            <div className="container">
                
                <h2 className="footer-giant-title">
                    INITIATE<br/><span>CONTACT.</span>
                </h2>

                <div className="footer-links-grid">
                    {socials.map((s, idx) => (
                        <a key={idx} href={s.url} target="_blank" rel="noreferrer" className="scrap-social-link">
                            <span>{s.label}</span>
                        </a>
                    ))}
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-stamp">
                        LOCATION // OTTAWA, ON
                    </div>
                    <span>VINIT RAO // LOCAL TIME: {currentTime}</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;