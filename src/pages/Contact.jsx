import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <DynamicBackground />
        
        <div className="container contact-container">
            <div style={{ position: 'relative', marginBottom: '60px' }}>
                <h1 className="massive-title" style={{ textAlign: 'left', margin: 0, transform: 'translateZ(0)' }}>CONNECT</h1>
                <span style={{ position: 'absolute', bottom: '-8px', left: '0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(0,0,0,0.1)' }}>/// /// ///</span>
            </div>
            
            <div className="contact-grid">
                
                {/* COLUMN 1: LEFT SIDE */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    
                    <div className="contact-editorial-card">
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid rgba(0,0,0,0.1)', borderLeft: '2px solid rgba(0,0,0,0.1)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid rgba(0,0,0,0.1)', borderRight: '2px solid rgba(0,0,0,0.1)' }}></div>

                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 8vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
                            Let's build <span className="red-marker">iconic</span> work.
                        </h2>
                        
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                            Whether you need a fullstack application, custom hardware integration, or motion graphics—I'm open for collaboration.
                        </p>

                        <hr className="scrap-divider" style={{ margin: '10px 0' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <a href="mailto:vinitrao@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 'bold', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-primary)'}>
                                <i className="fas fa-envelope" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}></i>
                                vinitrao@gmail.com <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem', opacity: 0.3 }}></i>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 'bold' }}>
                                <i className="fas fa-map-marker-alt" style={{ color: 'var(--accent)', fontSize: '1.2rem' }}></i>
                                Ottawa, ON, Canada <i className="fas fa-satellite-dish" style={{ fontSize: '0.8rem', opacity: 0.3 }}></i>
                            </div>
                        </div>
                    </div>

                    <div className="contact-focus-card">
                        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '25px', letterSpacing: '2px' }}>
                            // Core Focus Areas
                        </h3>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', fontWeight: 'bold' }}>
                            <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>*</span> Interactive UI/UX Design
                            </span>
                            <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>*</span> Fullstack Web Development
                            </span>
                            <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>*</span> Motion Graphics & Video
                            </span>
                            <span style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 900 }}>*</span> Hardware & Arduino Systems
                            </span>
                        </div>
                    </div>
                </div>

                {/* COLUMN 2: RIGHT SIDE FORM */}
                <div className="contact-form-card">
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
                        width: '80px', height: '30px', background: 'var(--border-color)',
                        border: '1px solid rgba(0,0,0,0.1)', zIndex: 5
                    }}></div>

                    <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '35px', letterSpacing: '2px' }}>
                        DIRECT INQUIRY
                    </h3>
                    
                    <form action="https://formspree.io/f/mojnppzg" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '30px', flexGrow: 1 }}>
                        <input type="text" name="name" placeholder="YOUR NAME" className="scrap-input" required />
                        <input type="email" name="email" placeholder="YOUR EMAIL" className="scrap-input" required />
                        
                        <textarea name="message" placeholder="YOUR CREATIVE BRIEF OR MESSAGE" className="scrap-input" required style={{ resize: 'none', flexGrow: 1, minHeight: '120px' }}></textarea>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: 'auto', paddingTop: '20px' }}>
                            <button type="submit" className="glass-btn" style={{ background: 'var(--text-primary)', color: 'var(--bg-surface)', border: 'none', width: '100%', padding: '15px' }}>
                                SEND MESSAGE <i className="fas fa-paper-plane" style={{ marginLeft: '10px', fontSize: '0.9rem' }}></i>
                            </button>
                            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', textAlign: 'center', margin: 0 }}>
                                ( Seeking Summer 2026 Co-op placement ) <i className="fas fa-hand-pointer" style={{ opacity: 0.3, marginLeft: '5px' }}></i>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        <Footer />
    </div>
  );
};

export default Contact;