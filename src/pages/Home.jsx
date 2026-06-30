import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import FeaturedCarousel from '../components/FeaturedCarousel';
import './Home.css';

// Featured projects, shuffled once per page load (stable while navigating;
// avoids an impure call / setState during render).
const FEATURED = projectsData.filter(p => p.featured).sort(() => 0.5 - Math.random());

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    // The hero parallax/fade only makes sense where the hero is sticky (desktop).
    // On mobile it scrolls normally, so we skip the fade to avoid a blank gap.
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 901px)');
        const sync = () => setIsDesktop(mq.matches);
        sync();
        mq.addEventListener('change', sync);
        return () => mq.removeEventListener('change', sync);
    }, []);

    useEffect(() => {
        // Throttle scroll updates to one per animation frame so the hero
        // parallax doesn't re-render on every raw scroll event.
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setScrollY(window.scrollY);
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroY = scrollY * 0.4;
    const heroOpacity = Math.max(0, 1 - (scrollY / 500));
    const heroStyle = isDesktop
        ? { opacity: heroOpacity, transform: `translateY(${heroY}px)` }
        : undefined;

    return (
        <div className="page-wrapper">
            <div className="hero-curtain-container" id="main-content">
                <header className="container hero-clean-desk" style={heroStyle}>
                    <div className="hero-left-col">
                        <h1 className="hero-title-massive">
                            <span className="reveal-mask"><span className="reveal-text delay-1">VINIT</span></span><br/>
                            <span className="reveal-mask"><span className="reveal-text delay-2 text-red">RAO.</span></span>
                        </h1>
                        <p className="hero-subtitle">
                            I like to create. I want to learn.
                        </p>

                        <div className="hero-actions">
                            <Link to="/projects" className="glass-btn btn-primary">
                                SEE MY WORK
                            </Link>
                            <Link to="/resume" className="glass-btn">
                                RESUME
                            </Link>
                            <Link to="/contact" className="glass-btn">
                                CONTACT
                            </Link>
                        </div>

                        <div className="hero-socials">
                            <a href="https://github.com/vinit-rao" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a>
                            <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://youtube.com/@OfficialVinitRao" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
                            <a href="https://instagram.com/instavinitgram" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className="hero-right-col">
                        <div className="hero-featured-head">
                            <span className="hero-featured-label">FEATURED WORK</span>
                            <Link to="/projects" className="hero-featured-all">ALL PROJECTS →</Link>
                        </div>
                        <FeaturedCarousel projects={FEATURED} />
                    </div>
                </header>
            </div>

            <div className="content-slide-over" style={{
                backgroundColor: 'var(--bg-main)',
                backgroundImage: 'linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                backgroundAttachment: 'fixed',
                position: 'relative',
                zIndex: 10
            }}>
                
                <section id="about" className="container about-section" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                    <ScrollReveal direction="up">
                        <div className="section-header">
                            <h2>ABOUT ME</h2>
                            <span className="meta-text">GPA: 3.7 / 4.0</span>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        
                        <ScrollReveal direction="up" delay={0.1}>
                            <div className="about-card">
                                <div className="about-top">
                                    <div className="bio-text">
                                        <p className="bio-paragraph">
                                            I'm a third-year Interactive Multimedia & Design student at <span className="red-marker"> Carleton University. </span> I specialize in bridging the gap between digital and physical—programming C# game systems, creating motion graphics, and engineering custom Arduino controllers.
                                        </p>

                                        <div className="bio-lists-grid">
                                            <div className="bio-list-block">
                                                <strong className="bio-list-title">// Currently Working On:</strong>
                                                <ul className="bio-list">
                                                    <li>Music Videos for Clients</li>
                                                    <li>Modding an IPOD Classic</li>
                                                    <li>Learning 3D Printing</li>
                                                    <li>Working at Marcan</li>
                                                </ul>
                                            </div>

                                            <div className="bio-list-block">
                                                <strong className="bio-list-title">// Hobbies:</strong>
                                                <ul className="bio-list">
                                                    <li>After Effects video editing</li>
                                                    <li>Tennis, Soccer, Pickleball</li>
                                                    <li>Playing guitar & drums</li>
                                                    <li>Pixel art & gaming</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <figure className="about-portrait">
                                        <img src="/images/vinit.jpg" alt="Vinit Rao" loading="lazy" decoding="async" />
                                        <figcaption>VINIT RAO // OTTAWA, ON</figcaption>
                                    </figure>
                                </div>

                                <hr className="scrap-divider" />

                                <div className="dossier-tech-grid">
                                    <div className="stack-group">
                                        <h4>LANGUAGES</h4>
                                        <p>C#, C++, Python, Java, SQL (Postgres, SQLite), HTML/CSS/JS</p>
                                    </div>
                                    <div className="stack-group">
                                        <h4>CREATIVE</h4>
                                        <p>Adobe CC, Figma, Final Cut Pro, Blender, Maya, Aseprite</p>
                                    </div>
                                    <div className="stack-group">
                                        <h4>ENGINES & HW</h4>
                                        <p>Unity, Unreal, Godot, Arduino, Linux (Arch), Git, Django</p>
                                    </div>
                                    <div className="stack-group">
                                        <h4>EXPERIENCE</h4>
                                        <p>Systems Analyst @ Marcan Pharmaceuticals Inc.<br/>Freelance Multimedia @ WhyDNA<br/>UX/UI + Motion Designer @ cuHacking</p>
                                    </div>
                                </div>
                                
                                <hr className="scrap-divider" />
                                
                                {/* LF COOP TAG */}
                                {/* <div className="status-callout">
                                    <i className="fas fa-satellite-dish" style={{ marginRight: '10px', color: 'var(--accent)' }}></i>
                                    STATUS: Seeking <span className="text-red">Summer 2026 Co-op</span> placement.
                                </div> */}
                                
                                <div className="bento-actions">
                                    <Link to="/resume" className="glass-btn">RESUME</Link>
                                    <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noopener noreferrer" className="glass-btn">LINKEDIN</a>
                                    <Link to="/contact" className="glass-btn">CONTACT ME</Link>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="up" delay={0.2}>
                            <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ 
                                    width: '100%', background: 'var(--bg-surface)', 
                                    border: '10px solid var(--accent)', padding: '12px', 
                                    boxShadow: 'var(--shadow-soft)', transform: 'translateZ(0)', 
                                    backfaceVisibility: 'hidden', transition: 'all 0.3s ease', display: 'flex',
                                    flexDirection: 'column'
                                }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = 'translate3d(-4px,-4px,0)'; e.currentTarget.style.boxShadow = '15px 15px 0px rgba(0,0,0,0.1)'; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = 'translateZ(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-soft)'; }}
                                >
                                    <div style={{ position: 'relative', width: '100%', display: 'flex', overflow: 'hidden' }}>
                                        <img 
                                            src="/images/herobg.jpg" 
                                            alt="Maravanthe Beach" 
                                            style={{ width: '100%', maxHeight: '600px', objectFit: 'cover' }} 
                                        />
                                        <div className="photo-metadata-overlay">
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)' }}></i> 
                                                MARAVANTHE BEACH
                                            </span>
                                            <span className="metadata-separator" style={{ opacity: 0.3 }}>|</span>
                                            <span style={{ color: '#A0A0A0' }}>GOOGLE PIXEL 7a</span>
                                            <span className="metadata-separator" style={{ opacity: 0.3 }}>|</span>
                                            <span style={{ color: '#A0A0A0' }}>MOBILE // RAW</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                    </div>
                </section>

                <Footer />
            </div>
            
        </div>
    );
};

export default Home;