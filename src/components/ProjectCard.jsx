import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
    const navigate = useNavigate();

    const getCategoryColor = (cat) => {
        switch(cat?.toLowerCase()) {
            case 'video': return 'var(--cat-video)';
            case 'code': return 'var(--cat-code)';
            case 'graphics': return 'var(--cat-graphics)';
            case 'photos': return 'var(--cat-photos)';
            case 'hardware': return '#E67E22'; /* Distinct Industrial Orange */
            default: return 'var(--text-primary)';
        }
    };

    // STRICT CLEANUP: Removes all empty boxes caused by the | characters
    const cleanBadges = project.badges
        ? project.badges.flatMap(b => b.split('|')).map(b => b.trim()).filter(b => b !== '')
        : [];

    const handleClick = () => {
        if (onClick) {
            onClick(project);
            return;
        }
        if (project.internalLink) navigate(project.internalLink);
        else if (project.link) window.open(project.link, '_blank');
    };

    return (
        <div className="scrap-project-card" onClick={handleClick}>
            <div className="tape-strip"></div>
            
            <div className="scrap-category-stamp" style={{ color: getCategoryColor(project.category), borderColor: getCategoryColor(project.category) }}>
                {project.category}
            </div>

            <img src={project.image} alt={project.title} className="card-bg-img" />
            
            <div className="polaroid-info">
                <h3 className="polaroid-title">{project.title}</h3>
                
                <div className="polaroid-tags-container">
                    {cleanBadges.map((badge, idx) => (
                        <span key={idx} className="polaroid-tag-stamp">{badge}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;