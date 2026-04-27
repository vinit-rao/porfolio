import { useState, useMemo, useEffect } from 'react';
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import './ProjectsArchive.css';

const ProjectsArchive = () => {
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    
    // 12 items perfectly fills a 4-column desktop grid with exactly 3 rows.
    const itemsPerPage = 12; 

    const categories = ['all', 'graphics', 'video', 'code', 'photos'];
    
    const filtered = useMemo(() => {
        return projectsData.filter(p => filter === 'all' || p.category === filter);
    }, [filter]);

    // Calculate Pagination Math
    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filtered.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (c) => {
        setFilter(c);
        setCurrentPage(1); // Reset to page 1 when changing filters
    };

    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="container" style={{ paddingTop: '140px', flexGrow: 1 }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '60px' }}>
                    <h1 className="massive-title" style={{ textShadow: 'none', textAlign: 'left' }}>ARCHIVE</h1>
                    
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        {categories.map(c => (
                            <button key={c} onClick={() => handleFilterChange(c)} className={`filter-btn ${filter === c ? `active-${c}` : ''}`}>
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* BULLETPROOF GRID VIEW */}
                <div className="glass-grid">
                    {currentProjects.map((p, idx) => <ProjectCard key={idx} project={p} />)}
                </div>

                {/* TRUE PAGINATION CONTROLS */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button 
                            className="page-btn" 
                            disabled={currentPage === 1} 
                            onClick={() => setCurrentPage(prev => prev - 1)}
                        >
                            PREV
                        </button>
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button 
                                key={page} 
                                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}

                        <button 
                            className="page-btn" 
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