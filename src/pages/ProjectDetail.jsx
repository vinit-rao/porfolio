import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { findProjectBySlug, youtubeId } from '../lib/projectUtils';
import './ProjectDetail.css';

const CATEGORY_COLORS = {
    video: 'var(--cat-video)',
    code: 'var(--cat-code)',
    graphics: 'var(--cat-graphics)',
    photos: 'var(--cat-photos)',
    hardware: 'var(--cat-hardware)',
};

// Extra write-up blocks for the detail page (legacy hardware fields still supported).
const buildSections = (project) => {
    if (project.sections?.length) return project.sections;
    if (project.objective) {
        return [
            { heading: 'The Objective', body: project.objective },
            { heading: 'The Build', body: project.process },
            { heading: 'The Friction & Resolution', body: project.friction },
        ].filter((s) => s.body);
    }
    return [];
};

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = findProjectBySlug(slug);
    const [activeImg, setActiveImg] = useState(0);

    if (!project) return <Navigate to="/projects" replace />;

    const catColor = CATEGORY_COLORS[project.category?.toLowerCase()] || 'var(--text-primary)';
    const ytId = project.linkType === 'youtube' || /youtu/.test(project.link || '')
        ? youtubeId(project.link)
        : null;

    const badges = project.badges
        ? project.badges.flatMap((b) => b.split('|')).map((b) => b.trim()).filter(Boolean)
        : [];
    const sections = buildSections(project);
    const gallery = project.images?.length ? project.images : (project.image ? [project.image] : []);
    const localVideo = project.video
        ? (project.video.startsWith('/') ? project.video : `/${project.video}`)
        : null;

    const actions = [];
    if (project.link && project.link !== '#') {
        const label =
            project.linkType === 'youtube' ? 'Watch on YouTube' :
            project.linkType === 'github' ? 'Source Code' :
            project.linkType === 'photo' ? 'Open Gallery' :
            'View Live';
        actions.push({ label, url: project.link, icon: project.linkType === 'github' ? 'fab fa-github' : 'fas fa-external-link-alt' });
    }
    if (project.github) actions.push({ label: 'Source Code', url: project.github, icon: 'fab fa-github' });

    return (
        <div className="page-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main className="container pd-container" id="main-content">
                <Link to="/projects" className="pd-back">[ ← BACK TO ARCHIVE ]</Link>

                <header className="pd-header">
                    <span className="pd-category" style={{ '--cat-color': catColor }}>{project.category}</span>
                    <h1 className="pd-title">{project.title}</h1>
                    {badges.length > 0 && (
                        <div className="pd-badges">
                            {badges.map((b, i) => <span key={i} className="pd-badge">{b}</span>)}
                        </div>
                    )}
                </header>

                {/* ---- MEDIA ---- */}
                <div className="pd-media">
                    {ytId ? (
                        <div className="pd-video-frame">
                            <iframe
                                src={`https://www.youtube.com/embed/${ytId}`}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    ) : localVideo ? (
                        <div className="pd-video-frame">
                            <video src={localVideo} controls playsInline preload="metadata" poster={project.image}></video>
                        </div>
                    ) : (
                        <>
                            <div className="pd-hero-img">
                                <img src={gallery[activeImg]} alt={project.title} />
                            </div>
                            {gallery.length > 1 && (
                                <div className="pd-thumbs">
                                    {gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            className={`pd-thumb ${i === activeImg ? 'active' : ''}`}
                                            onClick={() => setActiveImg(i)}
                                            aria-label={`View image ${i + 1}`}
                                        >
                                            <img src={img} alt="" aria-hidden="true" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* extra image gallery shown beneath a video hero */}
                    {(ytId || localVideo) && project.images?.length > 0 && (
                        <div className="pd-gallery-strip">
                            {project.images.map((img, i) => (
                                <img key={i} src={img} alt={`${project.title} — view ${i + 1}`} loading="lazy" decoding="async" />
                            ))}
                        </div>
                    )}
                </div>

                {/* ---- BODY ---- */}
                <div className="pd-body">
                    <article className="pd-prose">
                        <p className="pd-lead">{project.longDescription || project.description}</p>

                        {sections.map((s, i) => (
                            <section key={i} className="pd-section">
                                <h2 style={{ '--cat-color': catColor }}>{s.heading}</h2>
                                <p>{s.body}</p>
                            </section>
                        ))}
                    </article>

                    <aside className="pd-aside">
                        <div className="pd-aside-card">
                            <h3>Details</h3>
                            <dl className="pd-meta">
                                <dt>Category</dt>
                                <dd style={{ color: catColor, textTransform: 'capitalize' }}>{project.category}</dd>
                                {badges.length > 0 && (
                                    <>
                                        <dt>Tools</dt>
                                        <dd>{badges.join(' · ')}</dd>
                                    </>
                                )}
                            </dl>

                            {actions.length > 0 && (
                                <div className="pd-actions">
                                    {actions.map((a, i) => (
                                        <a
                                            key={i}
                                            href={a.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={`glass-btn ${i === 0 ? 'btn-primary' : ''} pd-action`}
                                        >
                                            <i className={a.icon} aria-hidden="true"></i> {a.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProjectDetail;
