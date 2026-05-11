import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';

const Contact = () => {
    const socials = [
        { label: 'LinkedIn', link: 'https://linkedin.com/in/vinitrao1/', icon: 'fab fa-linkedin' },
        { label: 'GitHub', link: 'https://github.com/vinit-rao', icon: 'fab fa-github' },
        { label: 'Instagram', link: 'https://instagram.com/officialvinitrao', icon: 'fab fa-instagram' },
        { label: 'YouTube', link: 'https://youtube.com/@OfficialVinitRao', icon: 'fab fa-youtube' }
    ];

    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <DynamicBackground />

            {/* FIX: Removed conflicting padding shorthand, restored paddingTop */}
            <div className="container" style={{ paddingTop: '140px', flexGrow: 1, zIndex: 10 }}>
                <h1 className="massive-title" style={{ textAlign: 'center', marginBottom: '60px' }}>CONNECT</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', margin: '0 auto', paddingBottom: '80px' }}>

                    {/* COLUMN 1: SOCIAL LINKS */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '10px', letterSpacing: '2px' }}>Social Links</h3>
                        {socials.map((s, i) => (
                            <a key={i} href={s.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                <div style={{
                                    background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
                                    padding: '20px 25px', display: 'flex', alignItems: 'center', gap: '20px',
                                    boxShadow: '4px 4px 0px rgba(0,0,0,0.1)', transition: 'all 0.2s ease',
                                    transform: 'none'
                                }}
                                    onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(-4px, -4px)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '4px 4px 0px rgba(0,0,0,0.1)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
                                >
                                    <i className={s.icon} style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}></i>
                                    <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 900 }}>{s.label}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* COLUMN 2: CLIPBOARD NOTEPAD FORM */}
                    <div style={{
                        background: 'var(--bg-surface)', border: '1px solid var(--border-color)',
                        padding: '40px', display: 'flex', flexDirection: 'column', position: 'relative',
                        boxShadow: 'var(--shadow-soft)', transform: 'rotate(1deg)'
                    }}>
                        <div style={{
                            position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)',
                            width: '80px', height: '30px', background: 'rgba(220, 220, 220, 0.9)', /* Solid instead of blur */
                            border: '1px solid rgba(0,0,0,0.1)', zIndex: 5, boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                        }}></div>

                        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '30px', letterSpacing: '2px' }}>Send a Message</h3>

                        <form action="https://formspree.io/f/mojnppzg" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '30px', flexGrow: 1 }}>
                            <input type="text" name="name" placeholder="NAME" className="scrap-input" required />
                            <input type="email" name="email" placeholder="EMAIL" className="scrap-input" required />
                            <textarea name="message" rows="6" placeholder="MESSAGE" className="scrap-input" required style={{ resize: 'none' }}></textarea>

                            <button type="submit" className="glass-btn" style={{ marginTop: '10px', background: 'var(--text-primary)', color: 'var(--bg-surface)', border: 'none' }}>
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;