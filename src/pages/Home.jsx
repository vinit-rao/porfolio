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
        const randomized = projectsData.filter(p => p.featured).sort(() => 0.5 - Math.random()).slice(0, 3);
        setFeatured(randomized);

        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroY = scrollY * 0.4;    
    const heroOpacity = Math.max(0, 1 - (scrollY / 500));

    // Smooth scroll handler for the About button
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
                    
                    {/* LEFT: Name, Info, Buttons */}
                    <div className="hero-left-col">
                        <h1 className="hero-title-massive">
                            <span className="reveal-mask"><span className="reveal-text delay-1">VINIT</span></span><br/>
                            <span className="reveal-mask"><span className="reveal-text delay-2 text-red">RAO.</span></span>
                        </h1>
                        <p className="hero-subtitle">
                            Interactive Designer & Software Engineer. I build digital experiences from the ground up—blending end-to-end UX/UI design with fullstack applications and motion graphics.
                        </p>
                        
                        <div className="hero-actions" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            <Link to="/projects" className="glass-btn btn-primary" style={{ background: 'var(--text-primary)', color: 'var(--bg-surface)', border: 'none' }}>
                                SEE MY WORK
                            </Link>
                            {/* FIXED: Uses onClick to smoothly scroll down without breaking React Router */}
                            <button onClick={scrollToAbout} className="glass-btn">
                                ABOUT ME
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: Social Links inside a sticky note frame */}
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

            <div className="content-slide-over">
                
                {/* 1. SELECTED WORKS (MOVED TO TOP) */}
                <section className="container works-section" style={{ paddingTop: '100px' }}>
                    <ScrollReveal direction="up">
                        <div className="section-header">
                            <h2>SELECTED WORKS</h2>
                            <Link to="/projects" className="view-all-link">ALL FILES →</Link>
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

                {/* 2. ABOUT ME (MOVED TO BOTTOM) */}
                <section id="about" className="container about-section" style={{ paddingTop: '40px' }}>
                    <ScrollReveal direction="up">
                        <div className="section-header">
                            <h2>ABOUT ME</h2>
                            <span className="meta-text">GPA: 3.7 / 4.0</span>
                        </div>
                    </ScrollReveal>

                    <div className="bento-grid">
                        <ScrollReveal direction="right" delay={0.1}>
                            <div className="dossier-card">
                                
                                <div className="bio-text">
                                    <p style={{ marginBottom: '30px' }}>
                                        I'm a third-year Interactive Multimedia & Design student at <span className="red-marker"> Carleton University. </span> I specialize in bridging the gap between digital and physical—programming C# game systems, creating motion graphics, and engineering custom Arduino controllers.
                                    </p>
                                    
                                    {/* SIDE-BY-SIDE GRID FOR LISTS */}
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', marginBottom: '20px' }}>
                                        
                                        {/* COLUMN 1 */}
                                        <div>
                                            <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>// Currently Working On:</strong>
                                            <ul style={{ paddingLeft: '20px', marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>
                                                <li>Roguelike platformer in Godot</li>
                                                <li>Self hosting MC server & integrating API bot</li>
                                                <li>Learning how to make FPV drone</li>
                                            </ul>
                                        </div>

                                        {/* COLUMN 2 */}
                                        <div>
                                            <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>// Hobbies:</strong>
                                            <ul style={{ paddingLeft: '20px', marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>
                                                <li>After Effects video editing</li>
                                                <li>Sports (Tennis, Soccer, Pickleball)</li>
                                                <li>Playing guitar & drums</li>
                                                <li>Pixel art (Aseprite) & Video games</li>
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
                        
                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="photo-scatter-container single-photo">
                                <div className="single-polaroid">
                                    <img src="/images/herobg.jpg" alt="Vinit Rao Profile" />
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