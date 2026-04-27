import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const [isTouchActive, setIsTouchActive] = useState(false);
    const cardRef = useRef(null);

    // Listens for taps ANYWHERE on the screen. If it's outside this specific card, it turns off the hover state.
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (cardRef.current && !cardRef.current.contains(e.target)) {
                setIsTouchActive(false);
            }
        };
        document.addEventListener('touchstart', handleOutsideClick);
        return () => document.removeEventListener('touchstart', handleOutsideClick);
    }, []);

    const getCategoryColor = (cat) => {
        switch(cat.toLowerCase()) {
            case 'video': return 'var(--cat-video)';
            case 'code': return 'var(--cat-code)';
            case 'graphics': return 'var(--cat-graphics)';
            case 'photos': return 'var(--cat-photos)';
            default: return '#ffffff';
        }
    };

    const cardColor = getCategoryColor(project.category);

    // This intercepts your data file's ['| C# | Unity |'] format and converts it into ['C#', 'Unity']
    const cleanBadges = project.badges
        .flatMap(b => b.split('|'))
        .map(b => b.trim())
        .filter(b => b.length > 0);

    const handleClick = (e) => {
        if (window.matchMedia('(hover: none)').matches) {
            if (!isTouchActive) {
                e.preventDefault();
                setIsTouchActive(true);
                return;
            }
        }
        
        if (project.internalLink) {
            navigate(project.internalLink);
        } else if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <div 
            ref={cardRef}
            className={`sharp-project-card ${isTouchActive ? 'touch-active' : ''}`}
            onClick={handleClick}
            onMouseLeave={() => setIsTouchActive(false)}
            style={{ '--card-color': cardColor }}
        >
            <img src={project.image} alt={project.title} className="card-bg-img" />
            
            <div className="card-category-top">
                <div className="category-glow-dot"></div>
                <span className="category-text">{project.category}</span>
            </div>

            <div className={`card-idle-info ${isTouchActive ? 'fade-out' : ''}`}>
                <h3 className="idle-title">{project.title}</h3>
            </div>

            <div className={`card-hover-overlay ${isTouchActive ? 'active' : ''}`}>
                <h3 className="hover-title">{project.title}</h3>
                
                <div className="hover-bottom-content">
                    <p className="hover-desc">{project.description}</p>
                    
                    <div className="marquee-wrapper">
                        <div className="marquee-track">
                            {cleanBadges.map((badge, idx) => (
                                <span key={idx} className="sharp-tag">{badge}</span>
                            ))}
                            {cleanBadges.map((badge, idx) => (
                                <span key={`dup-${idx}`} className="sharp-tag">{badge}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;