import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import projectsData from '../data/projects';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
    const [featured, setFeatured] = useState([]);
    const [showContent, setShowContent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const randomized = projectsData.filter(p => p.featured).sort(() => 0.5 - Math.random()).slice(0, 4);
        setFeatured(randomized);

        const animationTimer = setTimeout(() => {
            setShowContent(true);
        }, 50);

        return () => clearTimeout(animationTimer);
    }, []);

    const getCategoryColor = (cat) => {
        switch (cat.toLowerCase()) {
            case 'video': return 'var(--cat-video)';
            case 'code': return 'var(--cat-code)';
            case 'graphics': return 'var(--cat-graphics)';
            case 'photos': return 'var(--cat-photos)';
            default: return '#ffffff';
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ paddingTop: '100px', flexGrow: 1 }}>

                <header style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

                    <div className="css-starfield"></div>

                    <div className="spline-container" style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}>
                        <spline-viewer
                            url="https://prod.spline.design/vyQWyAKaGzlKQJKm/scene.splinecode"
                            events-target="global"
                        ></spline-viewer>
                    </div>
                    
                    {/* LAYER 3: YOUR TEXT (Foreground) */}
                    <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                        <h2 style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '4px' }}>
                            INTERACTIVE DESIGNER
                        </h2>
                        <h1 className="massive-title" style={{ fontSize: 'clamp(4rem, 16vw, 12rem)', lineHeight: '0.85' }}>
                            VINIT<br />RAO.
                        </h1>
                    </div>
                </header>

                <section style={{ padding: '120px 0', borderTop: '1px solid var(--glass-border)' }}>
                    <h2 className="massive-title" style={{ fontSize: '3.5rem', marginBottom: '50px', textShadow: 'none' }}>ABOUT ME</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'stretch' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '15px' }}>
                                    <h3 style={{ fontSize: '1.5rem', color: '#fff', fontFamily: 'var(--font-display)' }}>VINIT RAO</h3>
                                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.9rem' }}>GPA: 3.7 / 4.0</span>
                                </div>
                                <p style={{ fontSize: '1rem', color: '#ccc', lineHeight: '1.8' }}>
                                    Interactive Multimedia and Design student at Carleton University. I architect digital experiences through end-to-end UX/UI design and custom hardware-to-engine integration. Based in Ottawa, I bridge the gap between creative vision and technical execution.
                                </p>
                            </div>

                            <div className="glass-card" style={{ padding: '30px' }}>
                                <span className="card-label">Tech Stack & Tools</span>
                                <ul style={{ listStyle: 'none', color: '#888', fontSize: '0.85rem', lineHeight: '1.8' }}>
                                    <li style={{ marginBottom: '12px' }}><b style={{ color: '#fff' }}>LANGUAGES:</b> Python, Java, C++, C#, HTML, CSS, JavaScript, SQL, Swift</li>
                                    <li style={{ marginBottom: '12px' }}><b style={{ color: '#fff' }}>CREATIVE:</b> Adobe CC, Figma, Final Cut, Blender, Maya</li>
                                    <li style={{ marginBottom: '12px' }}><b style={{ color: '#fff' }}>DEV TOOLS:</b> Arch Linux, Git, Unity, Unreal, Django</li>
                                </ul>
                            </div>

                            <div className="action-btn-group">
                                <Link to="/resume" className="glass-btn">VIEW RESUME</Link>
                                <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noopener noreferrer" className="glass-btn">LINKEDIN</a>
                                <Link to="/projects" className="glass-btn">VIEW PROJECTS</Link>
                            </div>
                        </div>

                        <div className="glass-card" style={{ padding: 0, overflow: 'hidden', height: '100%', minHeight: '400px', position: 'relative' }}>
                            <img
                                src="/images/herobg.jpg"
                                alt="Vinit Rao"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(100%) contrast(1.1) brightness(0.8)', transition: 'filter 0.5s ease' }}
                                onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%) contrast(1.1) brightness(1)'}
                                onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%) contrast(1.1) brightness(0.8)'}
                            />
                        </div>
                    </div>
                </section>

                <section style={{ paddingBottom: '100px', marginTop: '60px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontSize: '1rem', letterSpacing: '2px' }}>FEATURED PROJECTS</h2>
                        <Link to="/projects" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.8rem' }}>ALL PROJECTS →</Link>
                    </div>
                    <div className="accordion-wrapper">
                        {featured.map((p, idx) => (
                            <div
                                key={idx}
                                className="accordion-panel"
                                onClick={() => p.internalLink ? navigate(p.internalLink) : window.open(p.link, '_blank')}
                                style={{ '--card-color': getCategoryColor(p.category) }}
                            >
                                <img src={p.image} style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} alt={p.title} />
                                <div className="accordion-content">
                                    <h3 className="accordion-title" style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: '1.5rem', textTransform: 'uppercase' }}>{p.title}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                                        <div className="category-glow-dot"></div>
                                        <span style={{ fontFamily: 'var(--font-mono)', color: '#fff', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                            {p.category}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Home;