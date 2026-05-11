import { useState, useMemo, useEffect } from 'react';
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import DynamicBackground from '../components/DynamicBackground';
import './ProjectsArchive.css';

const ProjectsArchive = () => {
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12; 

    // Verified image files for the horizontal selector
    const filterCards = [
        { id: 'all', label: 'ALL FILES', icon: 'fas fa-database', img: '/images/project_25-5.jpg' }, 
        { id: 'graphics', label: 'GRAPHICS', icon: 'fas fa-shapes', img: '/images/project_15.jpg' },
        { id: 'video', label: 'VIDEO', icon: 'fas fa-film', img: '/images/project_11.jpg' },
        { id: 'code', label: 'CODE', icon: 'fas fa-code', img: '/images/project_25-5.jpg' },
        { id: 'photos', label: 'PHOTOS', icon: 'fas fa-camera', img: '/images/project_36.jpg' }
    ];
    
    const activeCard = filterCards.find(c => c.id === filter);

    const filtered = useMemo(() => {
        return projectsData.filter(p => filter === 'all' || p.category === filter);
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

    // Pulls real image data from your GitHub username
    const renderGithubStats = () => {
        const username = "vinit-rao";
        
        return (
            <div className="github-stats-wrapper">

                <div className="gh-contribution-section">
                    <h4 className="gh-graph-title">LIVE COMMIT ACTIVITY</h4>
                    <div className="gh-heatmap-container">
                        <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                            {/* Uses your red accent color (D91C1C) for the heatmap */}
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

                {/* THE MASTER-DETAIL HERO SELECTOR */}
                <div className="archive-hero-selector">
                    
                    {/* LEFT SIDE: The active viewing stage */}
                    <div className="hero-main-stage">
                        <div key={activeCard.id} className="stage-anim-wrapper">
                            <img src={activeCard.img} alt={activeCard.label} className="stage-bg-img" />
                            
                            <div className="stage-overlay">
                                <h2 className="stage-title">{activeCard.id === 'all' ? 'FULL DATABASE' : activeCard.label}</h2>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: The vertically stacked items */}
                    <div className="hero-side-stack">
                        {filterCards.map(card => (
                            <div 
                                key={card.id}
                                className={`side-stack-item ${filter === card.id ? 'active' : ''}`}
                                onClick={() => handleFilterChange(card.id)}
                            >
                                <div className="stack-item-left">
                                    <i className={card.icon} style={{ width: '25px', textAlign: 'center' }}></i>
                                    {card.label}
                                </div>
                                <div className="stack-status">
                                    {filter === card.id ? '●' : ''}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* CONDITIONAL GITHUB BANNER (Only renders if CODE is selected) */}
                {filter === 'code' && renderGithubStats()}

                {/* THE PROJECT GRID (Always renders) */}
                <div className="archive-grid">
                    {currentProjects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="scrap-pagination">
                        <button 
                            className="glass-btn" 
                            disabled={currentPage === 1} 
                            onClick={() => setCurrentPage(prev => prev - 1)}
                        >
                            PREV
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button 
                                key={page} 
                                className={`glass-btn ${currentPage === page ? 'active-page' : ''}`} 
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        
                        <button 
                            className="glass-btn" 
                            disabled={currentPage === totalPages} 
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                            NEXT
                        </button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ProjectsArchive;