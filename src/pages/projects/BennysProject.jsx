import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import './BennysProject.css';

const BennysProject = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const [activeMedia, setActiveMedia] = useState(0);
    const [socialSlide, setSocialSlide] = useState(0);

    const heroMedia = [
        { id: 0, type: 'iframe', src: 'https://www.youtube.com/embed/_w7nBbe73mw?autoplay=1&mute=1&loop=1', thumb: 'https://img.youtube.com/vi/_w7nBbe73mw/maxresdefault.jpg' },
        { id: 1, type: 'image', src: '/images/project_25.jpg', thumb: '/images/project_25.jpg' }, 
        { id: 2, type: 'image', src: '/images/project_25-1.png', thumb: '/images/project_25-1.png' },
        { id: 3, type: 'image', src: '/images/project_25-2.png', thumb: '/images/project_25-2.png' },
        { id: 4, type: 'image', src: '/images/project_25-3.png', thumb: '/images/project_25-3.png' }
    ];

    const socialEmbeds = [
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7447751953352343553",
        "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7452080624288305152"
    ];

    const techStack = ['MAYA', 'ARDUINO IDE', 'PREMIERE PRO', 'FL STUDIO', 'AFTER EFFECTS', 'VSCODE', 'UNITY', 'C#', 'FIGMA', 'TRELLO', 'C++'];

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ paddingTop: '100px', flexGrow: 1, paddingBottom: '100px' }}>
                
                <div style={{ marginBottom: '30px' }}>
                    <Link to="/projects" className="bp-back-btn">[ ← RETURN TO ARCHIVE ]</Link>
                </div>

                <div className="bp-header">
                    <h1 className="bp-massive-title">BENNY'S FROZEN ADVENTURE</h1>
                </div>

                <div className="bp-hero-split">
                    
                    <div className="bp-project-info">
                        <h2 className="bp-section-title">THE PROJECT</h2>
                        <p className="bp-text">
                            Benny’s Frozen Adventure is a frantic, isometric arcade game built in Unity. The core loop requires players to catch falling ice cream scoops and perfectly match customer orders before the timer runs out.
                        </p>
                        {/* UPDATED TEXT HERE */}
                        <p className="bp-text">
                            I developed this project alongside three other team members as our final assignment for Carleton University's IMD2006 Game Development course. We collaborated over the entire semester to build, integrate, and polish a fully working game for the year-end Demo Day.
                        </p>
                        
                        <div className="bp-hero-actions">
                            <a href="https://github.com/vinit-rao/bennys-frozen-adventure" target="_blank" rel="noreferrer" className="glass-btn btn-github">
                                VIEW REPOSITORY
                            </a>
                            <a href="https://vinitrao.itch.io/bennys-frozen-adventure-demo" target="_blank" rel="noreferrer" className="glass-btn btn-play">
                                [ ▶ PLAY GAME ]
                            </a>
                        </div>
                    </div>

                    <div className="bp-media-gallery">
                        <div className="bp-main-media">
                            {heroMedia[activeMedia].type === 'iframe' && (
                                <iframe src={heroMedia[activeMedia].src} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Trailer" loading="lazy"></iframe>
                            )}
                            {heroMedia[activeMedia].type === 'image' && (
                                <img src={heroMedia[activeMedia].src} alt="Gameplay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            )}
                            {heroMedia[activeMedia].type === 'placeholder' && (
                                <div className="bp-placeholder blueprint-bg">PENDING RENDER</div>
                            )}
                        </div>
                        
                        <div className="bp-thumbnails-list">
                            {heroMedia.map((media, idx) => (
                                <div 
                                    key={media.id} 
                                    className={`bp-thumbnail ${activeMedia === idx ? 'active' : ''}`}
                                    onClick={() => setActiveMedia(idx)}
                                >
                                    {media.thumb ? (
                                        <img src={media.thumb} alt={`Thumb ${idx}`} />
                                    ) : (
                                        <div className="bp-thumb-placeholder blueprint-bg">{media.text}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bp-tech-stack-section">
                    <div className="bp-tech-label">TECH STACK //</div>
                    <div className="marquee-wrapper" style={{ padding: '15px 0', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                        <div className="marquee-track fast-track">
                            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
                                <span key={i} className="sharp-tag" style={{ fontSize: '0.75rem', padding: '10px 20px', background: 'transparent' }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bp-bottom-split">
                    
                    <div className="bp-social-col">
                        <h2 className="bp-section-title">SOCIAL LOG</h2>
                        <div className="bp-carousel-container">
                            <div className="bp-carousel-viewport social-viewport">
                                <iframe src={socialEmbeds[socialSlide]} frameBorder="0" allowFullScreen title="LinkedIn Embed" loading="lazy"></iframe>
                            </div>
                            <div className="bp-carousel-controls">
                                <button onClick={() => setSocialSlide(prev => (prev === 0 ? socialEmbeds.length - 1 : prev - 1))}>[ PREV ]</button>
                                <span className="bp-carousel-indicator">{socialSlide + 1} / {socialEmbeds.length}</span>
                                <button onClick={() => setSocialSlide(prev => (prev === socialEmbeds.length - 1 ? 0 : prev + 1))}>[ NEXT ]</button>
                            </div>
                        </div>
                    </div>

                    <div className="bp-contributions-col">
                        <h2 className="bp-section-title">CONTRIBUTIONS</h2>
                        <div className="bp-contribution-list">
                            <div className="bp-contribution-card">
                                <h3>[ 01 ] CUSTOM ARDUINO HARDWARE</h3>
                                <p>Engineered a physical controller using an Arduino Uno, joysticks, and LEDs housed in a custom Lego shell. Wrote serial communication logic for real-time Unity hardware feedback.</p>
                            </div>
                            <div className="bp-contribution-card">
                                <h3>[ 02 ] CORE GAMEPLAY LOGIC</h3>
                                <p>Programmed falling/catching physics via C#. Handled grid-based player movement using smooth <code>Mathf.Lerp</code> and <code>Quaternion.Slerp</code> math to achieve a snappy, arcade-style feel.</p>
                            </div>
                            <div className="bp-contribution-card">
                                <h3>[ 03 ] DYNAMIC UI ENGINE</h3>
                                <p>Overhauled a static text UI into a dynamic 2D visual order system. Built robust <code>Time.timeScale</code> logic for the pause menu infrastructure.</p>
                            </div>
                            <div className="bp-contribution-card">
                                <h3>[ 04 ] GLOBAL AUDIO MANAGER</h3>
                                <p>Built a persistent Audio Manager using <code>DontDestroyOnLoad</code> for seamless cross-scene music/SFX tracking.</p>
                            </div>
                            <div className="bp-contribution-card">
                                <h3>[ 05 ] ADDITIONAL POLISH</h3>
                                <p>Directed creative implementation of music and recorded custom SFX. Edited the official game trailer, refined animations, and polished UI scaling for delivery.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
};

export default BennysProject;