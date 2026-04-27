import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const getCategoryColor = (cat) => {
        switch(cat.toLowerCase()) {
            case 'video': return 'var(--cat-video)';
            case 'code': return 'var(--cat-code)';
            case 'graphics': return 'var(--cat-graphics)';
            case 'photos': return 'var(--cat-photos)';
            default: return '#ffffff';
        }
    };

    const tags = project.badges?.[0]?.split('|').map(b => b.trim()).filter(Boolean) || [];

    const handleCardClick = () => {
        // If it has an internal link, navigate inside the app. Otherwise, open external link.
        if (project.internalLink) {
            navigate(project.internalLink);
        } else if (project.link) {
            window.open(project.link, '_blank');
        }
    };

    return (
        <div 
            className="sharp-project-card" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
            style={{ '--card-color': getCategoryColor(project.category) }}
        >
            <img src={project.image} alt={project.title} className="card-bg-img" />
            
            <div className="card-category-top">
                <div className="category-glow-dot"></div>
                <span className="category-text">
                    {project.category}
                </span>
            </div>

            <div className={`card-idle-info ${isHovered ? 'fade-out' : ''}`}>
                <h3 className="idle-title">
                    {project.title}
                </h3>
            </div>

            <div className={`card-hover-overlay ${isHovered ? 'active' : ''}`}>
                <h3 className="hover-title">
                    {project.title}
                </h3>
                
                <div className="hover-bottom-content">
                    <p className="hover-desc">{project.description}</p>
                    
                    <div className="marquee-wrapper">
                        <div className="marquee-track">
                            {[...tags, ...tags, ...tags, ...tags].map((badge, i) => (
                                <span key={i} className="sharp-tag">{badge}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;