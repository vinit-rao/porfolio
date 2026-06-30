import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container contact-container" id="main-content">
        <header className="contact-head">
          <h1 className="massive-title">Let's build something</h1>
          <p className="contact-coop">Seeking Winter 2027 Co-op placement.</p>
        </header>

        <div className="contact-grid">
          {/* direct contact details */}
          <div className="contact-info">
            <span className="contact-info-label">// Reach me directly</span>
            <a href="mailto:vinitrao@gmail.com" className="contact-line contact-link">
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <span>vinitrao@gmail.com</span>
            </a>
            <span className="contact-line">
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Ottawa, ON, Canada</span>
            </span>
            <span className="contact-line">
              <i className="fas fa-plane" aria-hidden="true"></i>
              <span>Open to relocating anywhere in North America (Canada&nbsp;+&nbsp;US)</span>
            </span>

            <div className="contact-socials">
              <a href="https://github.com/vinit-rao" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" aria-hidden="true"></i></a>
              <a href="https://linkedin.com/in/vinitrao1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" aria-hidden="true"></i></a>
              <a href="https://youtube.com/@OfficialVinitRao" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" aria-hidden="true"></i></a>
              <a href="https://instagram.com/instavinitgram" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" aria-hidden="true"></i></a>
            </div>
          </div>

          {/* contact form */}
          <form className="contact-form-card" action="https://formspree.io/f/mojnppzg" method="POST">
            <input type="text" name="name" placeholder="Name" aria-label="Your name" className="scrap-input" required />
            <input type="email" name="email" placeholder="Email" aria-label="Your email" className="scrap-input" required />
            <textarea name="message" placeholder="Message" aria-label="Your message" className="scrap-input" rows="5" required></textarea>
            <button type="submit" className="glass-btn btn-primary contact-send">
              Send message <i className="fas fa-arrow-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
