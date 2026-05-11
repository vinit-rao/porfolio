import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';

const Contact = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        
        {/* DynamicBackground is kept global, but its internal style must be clean (no waves). */}
        <DynamicBackground />
        
        {/* Main Content Area */}
        <div className="container" style={{ paddingTop: '150px', flexGrow: 1, zIndex: 10 }}>
            {/* LEFT ALIGNED TITLE with subtle sketch underscore */}
            <div style={{ position: 'relative', marginBottom: '60px' }}>
                <h1 className="massive-title" style={{ textAlign: 'left', margin: 0, transform: 'translateZ(0)' }}>CONNECT</h1>
                {/* Tiny sketch lines under title for texture */}
                <span style={{ position: 'absolute', bottom: '-8px', left: '0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'rgba(0,0,0,0.1)' }}>/// /// ///</span>
            </div>
            
            {/* Bento-style grid structure for the composition */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', margin: '0 auto', paddingBottom: '80px' }}>
                
                {/* COLUMN 1: LEFT SIDE (EDITORIAL, RESTORED SKETCH DETAILS & UNSLANTED) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    
                    {/* Editorial Info Card */}
                    <div style={{ 
                        background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
                        padding: '40px', boxShadow: 'var(--shadow-soft)', 
                        transform: 'translateZ(0)', /* STRICTLY UNSLANTED */
                        display: 'flex', flexDirection: 'column', gap: '25px',
                        position: 'relative'
                    }}>
                        {/* Restore raw corner sketch details */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '10px', height: '10px', borderTop: '2px solid rgba(0,0,0,0.1)', borderLeft: '2px solid rgba(0,0,0,0.1)' }}></div>
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', borderBottom: '2px solid rgba(0,0,0,0.1)', borderRight: '2px solid rgba(0,0,0,0.1)' }}></div>

                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, margin: 0 }}>
                            Let's build <span className="red-marker">iconic</span> work.
                        </h2>
                        
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                            Whether you need a fullstack application, custom hardware integration, or motion graphics—I'm open for collaboration.
                        </p>

                        <hr className="scrap-divider" style={{ margin: '10px 0' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {/* UPDATED EMAIL & RAW COMMS LINK AESTHETIC */}
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

                    {/* RESTORED Focus Areas with RAW BRACKETS */}
                    <div style={{ 
                        background: 'var(--bg-surface)', color: 'var(--text-primary)',
                        padding: '35px 40px', border: '1px solid var(--border-color)', 
                        boxShadow: 'var(--shadow-soft)', transform: 'translateZ(0)',
                        position: 'relative'
                    }}>
                        {/* RESTORE: Tiny sketch data points and raw brackets aesthetic from image_a2134f.png */}
                        <div style={{ position: 'absolute', top: '-12px', right: '40px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(0,0,0,0.1)' }}> [DATA.SET_002] </div>

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

                {/* COLUMN 2: RIGHT SIDE (FORM, STILL SLANTED AS CONTRAST) */}
                <div style={{ 
                    background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
                    padding: '40px', display: 'flex', flexDirection: 'column', position: 'relative',
                    boxShadow: 'var(--shadow-soft)', transform: 'rotate(1deg) translateZ(0)',
                    height: '100%'
                }}>
                    {/* Solid clipboard tape */}
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
                        
                        {/* Textarea: Added flexGrow: 1 to stretch it down automatically */}
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