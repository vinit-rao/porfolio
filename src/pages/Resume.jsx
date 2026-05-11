import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';

const Resume = () => {
    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <DynamicBackground />

            {/* Main Content Area */}
            <main className="container" style={{ 
                paddingTop: '160px', 
                flexGrow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                zIndex: 10,
                position: 'relative'
            }}>
                
                {/* Header Block */}
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-end', 
                    marginBottom: '40px', 
                    flexWrap: 'wrap', 
                    gap: '20px', 
                    borderBottom: '1px solid var(--border-color)', 
                    paddingBottom: '20px' 
                }}>
                    <div>
                        <h1 className="massive-title" style={{ margin: 0 }}>RESUME</h1>
                        <p className="meta-text" style={{ marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                            Vinit Rao // Interactive Multimedia & Design
                        </p>
                    </div>
                    
                    <a 
                        href="/Vinit_Rao_Resume.pdf" 
                        download 
                        className="glass-btn" 
                        style={{ background: 'var(--accent)', color: '#FFF', borderColor: 'var(--accent)', transform: 'rotate(2deg)' }}
                    >
                        DOWNLOAD PDF
                    </a>
                </div>

                {/* PDF Viewer Container */}
                <div style={{ 
                    width: '100%',
                    maxWidth: '900px',
                    margin: '0 auto 100px auto',
                    background: 'var(--bg-surface)', 
                    border: '1px solid var(--border-color)',
                    position: 'relative',
                    padding: '10px',
                    boxShadow: 'var(--shadow-soft)',
                    transform: 'translateZ(0)', /* Keeps it stable */
                }}>
                    {/* Visual Tape Deco */}
                    <div style={{
                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(-1deg)',
                        width: '120px', height: '35px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(4px)',
                        border: '1px solid rgba(0,0,0,0.05)', zIndex: 5
                    }}></div>

                    {/* The Iframe with an aspect ratio to prevent layout shifting */}
                    <div style={{ width: '100%', aspectRatio: '1 / 1.41', background: '#fff', overflow: 'hidden' }}>
                        <iframe 
                            src="/Vinit_Rao_Resume.pdf#view=FitH" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 'none', display: 'block' }}
                            title="Vinit Rao Resume" 
                        />
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default Resume;