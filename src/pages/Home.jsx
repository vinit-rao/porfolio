import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import DynamicBackground from '../components/DynamicBackground'; 
import './Home.css';

const Home = () => {
    const [featured, setFeatured] = useState([]);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const randomized = projectsData.filter(p => p.featured).sort(() => 0.5 - Math.random()).slice(0, 2);
        setFeatured(randomized);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroY = scrollY * 0.4;    
    const heroOpacity = Math.max(0, 1 - (scrollY / 500));

    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="page-wrapper">
            <Navbar />
            <DynamicBackground />
            
            <div className="hero-curtain-container">
                <header className="container hero-clean-desk" style={{ opacity: heroOpacity, transform: `translateY(${heroY}px)` }}>
                    <div className="hero-left-col">
                        <h1 className="hero-title-massive">
                            <span className="reveal-mask"><span className="reveal-text delay-1">VINIT</span></span><br/>
                            <span className="reveal-mask"><span className="reveal-text delay-2 text-red">RAO.</span></span>
                        </h1>
                        <p className="hero-subtitle">
                            Interactive designer and software developer.
                        </p>
                        
                        <div className="hero-actions" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link to="/projects" className="glass-btn btn-primary" style={{ background: 'var(--text-primary)', color: 'var(--bg-surface)', border: 'none' }}>
                                SEE MY WORK
                            </Link>
                            <button onClick={scrollToAbout} className="glass-btn">
                                ABOUT ME
                            </button>
                            <Link to="/resume" className="glass-btn">
                                RESUME
                            </Link>
                        </div>
                    </div>

                    <div className="hero-right-col">
                        <div className="hero-social-board">
                            <div className="hero-social-cluster">
                                <a href="https://github.com/vinit-rao" target="_blank" rel="noreferrer" className="hero-social-link">
                                    GITHUB <i className="fab fa-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noreferrer" className="hero-social-link">
                                    LINKEDIN <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://youtube.com/@OfficialVinitRao" target="_blank" rel="noreferrer" className="hero-social-link">
                                    YOUTUBE <i className="fab fa-youtube"></i>
                                </a>
                                <a href="https://instagram.com/officialvinitrao" target="_blank" rel="noreferrer" className="hero-social-link">
                                    INSTAGRAM <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
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
                
                <section className="container works-section" style={{ paddingTop: '100px' }}>
                    <ScrollReveal direction="up">
                        <div className="section-header">
                            <h2>FEATURED</h2>
                            <Link to="/projects" className="view-all-link">ALL PROJECTS</Link>
                        </div>
                    </ScrollReveal>
                    
                    <div className="projects-grid">
                        {featured.map((p, idx) => (
                            <ScrollReveal key={idx} direction="up" delay={idx * 0.15}>
                                <ProjectCard project={p} />
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                <section id="about" className="container about-section" style={{ paddingTop: '40px', paddingBottom: '100px' }}>
                    <ScrollReveal direction="up">
                        <div className="section-header">
                            <h2>ABOUT ME</h2>
                            <span className="meta-text">GPA: 3.7 / 4.0</span>
                        </div>
                    </ScrollReveal>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                        
                        <ScrollReveal direction="up" delay={0.1}>
                            <div style={{ 
                                background: 'var(--bg-surface)', border: '1px solid var(--border-color)', 
                                padding: '40px', position: 'relative', boxShadow: 'var(--shadow-soft)', 
                                display: 'flex', flexDirection: 'column', gap: '30px', transform: 'translateZ(0)' 
                            }}>
                                <div className="bio-text">
                                    <p className="bio-paragraph" style={{ marginBottom: '25px' }}>
                                        I'm a third-year Interactive Multimedia & Design student at <span className="red-marker"> Carleton University. </span> I specialize in bridging the gap between digital and physical—programming C# game systems, creating motion graphics, and engineering custom Arduino controllers.
                                    </p>
                                    
                                    <div className="bio-lists-grid">
                                        <div className="bio-list-block">
                                            <strong className="bio-list-title">// Currently Working On:</strong>
                                            <ul className="bio-list">
                                                <li>Godot Roguelike Platformer</li>
                                                <li>Self hosting MC server & integrating API bot</li>
                                                <li>Learning how to make FPV drone</li>
                                            </ul>
                                        </div>

                                        <div className="bio-list-block">
                                            <strong className="bio-list-title">// Hobbies:</strong>
                                            <ul className="bio-list">
                                                <li>After Effects video editing</li>
                                                <li>Tennis, Soccer, Pickleball</li>
                                                <li>Playing guitar & drums</li>
                                                <li>Pixel art & Video games</li>
                                            </ul>
                                        </div>
                                    </div>
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
                                        <p>Freelance Multimedia<br/>cuHacking UX/UI & Motion Design</p>
                                    </div>
                                </div>
                                
                                <hr className="scrap-divider" />
                                
                                <div className="status-callout">
                                    <i className="fas fa-satellite-dish" style={{ marginRight: '10px', color: 'var(--accent)' }}></i>
                                    STATUS: Seeking <span className="text-red">Summer 2026 Co-op</span> placement.
                                </div>
                                
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