import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectHref } from '../lib/projectUtils';
import './ProjectCard.css';

const CATEGORY_COLORS = {
    video: 'var(--cat-video)',
    code: 'var(--cat-code)',
    graphics: 'var(--cat-graphics)',
    photos: 'var(--cat-photos)',
    hardware: 'var(--cat-hardware)',
};

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();
    const [showPreview, setShowPreview] = useState(false);

    const catColor = CATEGORY_COLORS[project.category?.toLowerCase()] || 'var(--text-primary)';
    const href = projectHref(project);

    const videoSrc = project.video
        ? (project.video.startsWith('/') ? project.video : `/${project.video}`)
        : null;

    const cleanBadges = project.badges
        ? project.badges.flatMap(b => b.split('|')).map(b => b.trim()).filter(Boolean)
        : [];

    // Memory-safe hover preview: the <video> only exists while hovering/focused.
    const startPreview = useCallback(() => {
        if (videoSrc && !prefersReducedMotion()) setShowPreview(true);
    }, [videoSrc]);
    const stopPreview = useCallback(() => setShowPreview(false), []);

    const handleActivate = () => navigate(href);
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navigate(href);
        }
    };

    return (
        <div
            className="card-shell"
            style={{ '--cat-color': catColor }}
            onClick={handleActivate}
            onKeyDown={handleKeyDown}
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
            onFocus={startPreview}
            onBlur={stopPreview}
            role="button"
            tabIndex={0}
            aria-label={`${project.title}. ${project.category} project. Open project.`}
        >
            <article className="scrap-project-card">
                <div className="card-img-frame">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="card-bg-img"
                        loading="lazy"
                        decoding="async"
                    />

                    {showPreview && videoSrc && (
                        <video
                            className="card-preview-video"
                            src={videoSrc}
                            muted
                            loop
                            playsInline
                            autoPlay
                            preload="none"
                            tabIndex={-1}
                            aria-hidden="true"
                        />
                    )}

                    {/* category sits in the top-left of the image — neutral, colours on hover */}
                    <span className="scrap-category-stamp">{project.category}</span>

                    {videoSrc && (
                        <span className="card-play-hint" aria-hidden="true"><i className="fas fa-play"></i></span>
                    )}
                </div>

                <div className="polaroid-info">
                    <h3 className="polaroid-title">{project.title}</h3>

                    {cleanBadges.length > 0 && (
                        <div className="polaroid-tags-container">
                            {cleanBadges.map((badge, idx) => (
                                <span key={idx} className="polaroid-tag-stamp">{badge}</span>
                            ))}
                        </div>
                    )}

                    <span className="card-cta" aria-hidden="true">
                        VIEW PROJECT <i className="fas fa-arrow-right"></i>
                    </span>
                </div>
            </article>
        </div>
    );
};

export default ProjectCard;
