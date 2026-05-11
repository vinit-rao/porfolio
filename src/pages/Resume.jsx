import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';

const Resume = () => {
    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <DynamicBackground />

            {/* FIX: Removed conflicting padding shorthand, restored paddingTop */}
            <div className="container" style={{ paddingTop: '140px', flexGrow: 1, display: 'flex', flexDirection: 'column', zIndex: 10 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                    <div>
                        <h1 className="massive-title" style={{ margin: 0 }}>RESUME</h1>
                        <p className="meta-text" style={{ marginTop: '10px' }}>
                            VINIT RAO // INTERACTIVE MULTIMEDIA & DESIGN
                        </p>
                    </div>
                    
                    <a href="/Vinit_Rao_Resume.pdf" download="Vinit_Rao_Resume.pdf" className="glass-btn" style={{ background: 'var(--accent)', color: '#FFF', borderColor: 'var(--accent)' }}>
                        DOWNLOAD PDF
                    </a>
                </div>

                {/* PHYSICAL FOLDER CONTAINER FOR PDF */}
                <div style={{ 
                    flexGrow: 1, 
                    background: 'var(--bg-surface)', 
                    border: '1px solid var(--border-color)',
                    minHeight: '75vh', 
                    marginBottom: '60px', 
                    position: 'relative',
                    padding: '15px',
                    boxShadow: 'var(--shadow-soft)',
                    transform: 'rotate(-0.5deg)'
                }}>
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(2deg)',
                        width: '100px', height: '30px', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(2px)',
                        border: '1px solid rgba(0,0,0,0.1)', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                    }}></div>

                    <iframe 
                        src="/Vinit_Rao_Resume.pdf" 
                        width="100%" 
                        height="100%" 
                        style={{ border: '1px solid var(--border-color)' }}
                        title="Vinit Rao Resume" 
                        loading="lazy"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Resume;