import Footer from '../components/Footer';

const Resume = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ paddingTop: '140px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
                    <div>
                        <h1 className="massive-title" style={{ textShadow: 'none', margin: 0 }}>RESUME</h1>
                        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginTop: '10px', fontSize: '0.8rem', letterSpacing: '1px' }}>
                            VINIT RAO // INTERACTIVE MULTIMEDIA & DESIGN
                        </p>
                    </div>
                    
                    {/* DOWNLOAD BUTTON */}
                    <a href="/Vinit_Rao_Resume.pdf" download="Vinit_Rao_Resume.pdf" className="glass-btn" style={{ padding: '12px 24px' }}>
                        DOWNLOAD PDF
                    </a>
                </div>

                {/* PDF VIEWER WINDOW */}
                <div style={{ flexGrow: 1, border: '1px solid var(--glass-border)', background: '#0a0a0c', minHeight: '75vh', marginBottom: '60px', position: 'relative' }}>
                    <iframe 
                        src="/Vinit_Rao_Resume.pdf" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 'none', position: 'absolute', top: 0, left: 0 }} 
                        title="Vinit Rao Resume" loading="lazy"
                    />
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default Resume;