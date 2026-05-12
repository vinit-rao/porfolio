import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';
import './ProjectsArchive.css';

const ProjectsArchive = () => {
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeProject, setActiveProject] = useState(null);
    const itemsPerPage = 12; 

    const getCategoryColor = (cat) => {
        switch(cat?.toLowerCase()) {
            case 'video': return 'var(--cat-video)';
            case 'code': return 'var(--cat-code)';
            case 'graphics': return 'var(--cat-graphics)';
            case 'photos': return 'var(--cat-photos)';
            case 'hardware': return '#E67E22'; 
            default: return 'var(--text-primary)';
        }
    };

    const filterCards = [
        { id: 'all', label: 'ALL FILES', icon: 'fas fa-database', img: '/images/project_25-5.jpg', color: 'var(--text-primary)' }, 
        { id: 'hardware', label: 'HARDWARE', icon: 'fas fa-microchip', img: '/images/project_25-5.jpg', color: '#E67E22' },
        { id: 'graphics', label: 'GRAPHICS', icon: 'fas fa-shapes', img: '/images/project_15.jpg', color: 'var(--cat-graphics)' },
        { id: 'video', label: 'VIDEO', icon: 'fas fa-film', img: '/images/project_11.jpg', color: 'var(--cat-video)' },
        { id: 'code', label: 'CODE', icon: 'fas fa-code', img: '/images/project_25-5.jpg', color: 'var(--cat-code)' },
        { id: 'photos', label: 'PHOTOS', icon: 'fas fa-camera', img: '/images/project_36.jpg', color: 'var(--cat-photos)' }
    ];
    
    const activeCard = filterCards.find(c => c.id === filter);

    const filtered = useMemo(() => {
        return projectsData.filter(p => filter === 'all' || p.category?.toLowerCase() === filter);
    }, [filter]);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filtered.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (c) => {
        setFilter(c);
        setCurrentPage(1); 
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, filter]); 

    useEffect(() => {
        if (activeProject) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [activeProject]);

    const renderGithubStats = () => {
        const username = "vinit-rao";
        return (
            <div className="github-stats-wrapper">
                <div className="gh-contribution-section">
                    <h4 className="gh-graph-title">LIVE COMMIT ACTIVITY</h4>
                    <div className="gh-heatmap-container">
                        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                            <img src={`https://ghchart.rshah.org/D91C1C/${username}`} alt={`${username} GitHub chart`} />
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="archive-wrapper">
            <Navbar />
            <DynamicBackground />
            
            <div className="container archive-container">
                <header className="archive-header">
                    <h1 className="massive-title" style={{ textShadow: 'none', textAlign: 'left' }}>Projects</h1>
                </header>

                <div className="archive-hero-selector">
                    <div className="hero-main-stage">
                        <div key={activeCard.id} className="stage-anim-wrapper">
                            <img src={activeCard.img} alt={activeCard.label} className="stage-bg-img" />
                            <div className="stage-overlay">
                                <h2 className="stage-title">{activeCard.id === 'all' ? 'ALL PROJECTS' : activeCard.label}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="hero-filter-grid">
                        {filterCards.map(card => (
                            <div 
                                key={card.id}
                                className={`filter-grid-item ${filter === card.id ? 'active' : ''}`}
                                onClick={() => handleFilterChange(card.id)}
                            >
                                <i className={card.icon} style={{ color: filter === card.id ? 'var(--accent)' : card.color, opacity: filter === card.id ? 1 : 0.7 }}></i>
                                <span className="filter-label">{card.label}</span>
                                {filter === card.id && <div className="active-dot"></div>}
                            </div>
                        ))}
                    </div>
                </div>
                
                {filter === 'code' && renderGithubStats()}

                <div className="archive-grid">
                    {currentProjects.map((p, idx) => (
                        <ProjectCard key={idx} project={p} onClick={setActiveProject} />
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="scrap-pagination">
                        <button className="glass-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>PREV</button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button key={page} className={`glass-btn ${currentPage === page ? 'active-page' : ''}`} onClick={() => setCurrentPage(page)}>{page}</button>
                        ))}
                        <button className="glass-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>NEXT</button>
                    </div>
                )}
            </div>

            {/* --- DOSSIER MODAL --- */}
            {activeProject && (
                <div className="dossier-modal-overlay" onClick={() => setActiveProject(null)}>
                    <div className="dossier-modal-panel" onClick={e => e.stopPropagation()}>
                        
                        <div className="modal-header">
                            <h3 className="modal-title">// {activeProject.title}</h3>
                            <button className="modal-close" onClick={() => setActiveProject(null)}>[ X ]</button>
                        </div>
                        
                        <div className="modal-scroll-area">
                            <div className="modal-hero-container">
                                {/* THE COLORED TAPE IN THE MODAL */}
                                <div className="modal-category-stamp" style={{ '--cat-color': getCategoryColor(activeProject.category) }}>
                                    {activeProject.category}
                                </div>
                                
                                {activeProject.images && activeProject.images.length > 0 ? (
                                    <div className="modal-image-gallery">
                                        {activeProject.images.map((img, i) => (
                                            <img key={i} src={img} alt={`${activeProject.title} ${i + 1}`} className="modal-hero-img gallery-img" />
                                        ))}
                                    </div>
                                ) : (
                                    <img src={activeProject.image} alt={activeProject.title} className="modal-hero-img" />
                                )}
                            </div>

                            <div className="modal-manifest">
                                <h4>[ SYSTEM MANIFEST ]</h4>
                                <div className="manifest-tags">
                                    {activeProject.badges?.flatMap(b => b.split('|')).map(b => b.trim()).filter(b => b !== '').map((b, i) => (
                                        <span key={i} className="manifest-tag">{b}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-teardown">
                                {activeProject.category?.toLowerCase() === 'hardware' ? (
                                    <>
                                        <h4>01. THE OBJECTIVE</h4>
                                        <p>{activeProject.objective}</p>
                                        
                                        <h4>02. THE BUILD</h4>
                                        <p>{activeProject.process}</p>
                                        
                                        <h4>03. THE FRICTION & RESOLUTION</h4>
                                        <p>{activeProject.friction}</p>
                                    </>
                                ) : (
                                    <>
                                        <h4>DESCRIPTION</h4>
                                        <p>{activeProject.description}</p>
                                    </>
                                )}
                            </div>

                            <div className="modal-actions">
                                {activeProject.internalLink && <Link to={activeProject.internalLink} className="glass-btn action-btn primary-action-btn" onClick={() => setActiveProject(null)}>VIEW FULL PROJECT</Link>}
                                
                                {activeProject.link && <a href={activeProject.link} target="_blank" rel="noreferrer" className="glass-btn action-btn">VIEW LIVE</a>}
                                {activeProject.github && <a href={activeProject.github} target="_blank" rel="noreferrer" className="glass-btn action-btn">SOURCE CODE</a>}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default ProjectsArchive;