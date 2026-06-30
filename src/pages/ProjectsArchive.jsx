import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import projectsData from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import './ProjectsArchive.css';

const KNOWN_CATS = ['all', 'code', 'video', 'graphics', 'photos', 'hardware'];

const FILTER_CARDS = [
    { id: 'all', label: 'ALL', icon: 'fas fa-layer-group', color: 'var(--accent)', ink: '#fff' },
    { id: 'code', label: 'CODE', icon: 'fas fa-code', color: 'var(--cat-code)', ink: '#0b0b0d' },
    { id: 'video', label: 'VIDEO', icon: 'fas fa-film', color: 'var(--cat-video)', ink: '#0b0b0d' },
    { id: 'graphics', label: 'GRAPHICS', icon: 'fas fa-shapes', color: 'var(--cat-graphics)', ink: '#0b0b0d' },
    { id: 'photos', label: 'PHOTOS', icon: 'fas fa-camera', color: 'var(--cat-photos)', ink: '#0b0b0d' },
    { id: 'hardware', label: 'HARDWARE', icon: 'fas fa-microchip', color: 'var(--cat-hardware)', ink: '#0b0b0d' },
];

const ProjectsArchive = () => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const [searchParams] = useSearchParams();

    // Let the command palette (or a shared link) deep-link into a category/search.
    useEffect(() => {
        const cat = (searchParams.get('cat') || '').toLowerCase();
        const q = searchParams.get('q') || '';
        /* eslint-disable react-hooks/set-state-in-effect */
        if (cat && KNOWN_CATS.includes(cat)) setFilter(cat);
        if (q) setSearch(q);
        if (cat || q) setCurrentPage(1);
        /* eslint-enable react-hooks/set-state-in-effect */
    }, [searchParams]);

    // How many projects sit in each category (for the chip count badges)
    const counts = useMemo(() => {
        const c = { all: projectsData.length };
        projectsData.forEach(p => {
            const k = p.category?.toLowerCase();
            if (k) c[k] = (c[k] || 0) + 1;
        });
        return c;
    }, []);

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        return projectsData.filter(p => {
            const catOk = filter === 'all' || p.category?.toLowerCase() === filter;
            if (!catOk) return false;
            if (!q) return true;
            const haystack = [p.title, p.description, ...(p.badges || [])].join(' ').toLowerCase();
            return haystack.includes(q);
        });
    }, [filter, search]);

    const totalPages = Math.ceil(filtered.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProjects = filtered.slice(startIndex, startIndex + itemsPerPage);

    const handleFilterChange = (c) => {
        setFilter(c);
        setCurrentPage(1);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage, filter, search]);

    const renderGithubStats = () => {
        const username = 'vinit-rao';
        return (
            <div className="github-stats-wrapper">
                <h4 className="gh-graph-title">LIVE COMMIT ACTIVITY</h4>
                <div className="gh-heatmap-container">
                    <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer">
                        <img src={`https://ghchart.rshah.org/D91C1C/${username}`} alt={`${username} GitHub contribution chart`} />
                    </a>
                </div>
            </div>
        );
    };

    return (
        <div className="archive-wrapper">
            <div className="container archive-container" id="main-content">
                <header className="archive-header">
                    <h1 className="massive-title" style={{ textShadow: 'none', textAlign: 'left' }}>Projects</h1>
                    <p className="archive-subtitle">A working archive of code, motion, hardware &amp; photography.</p>
                </header>

                <div className="archive-toolbar">
                    <div className="archive-search">
                        <i className="fas fa-search" aria-hidden="true"></i>
                        <input
                            type="search"
                            value={search}
                            onChange={handleSearchChange}
                            placeholder="Search projects, tools, tech…"
                            aria-label="Search projects"
                            className="archive-search-input"
                        />
                        {search && (
                            <button type="button" className="search-clear" onClick={() => { setSearch(''); setCurrentPage(1); }} aria-label="Clear search">
                                <i className="fas fa-times" aria-hidden="true"></i>
                            </button>
                        )}
                    </div>

                    <div className="filter-chip-row" role="group" aria-label="Filter projects by category">
                        {FILTER_CARDS.map(card => (
                            <button
                                type="button"
                                key={card.id}
                                className={`filter-chip ${filter === card.id ? 'active' : ''}`}
                                style={{ '--chip-color': card.color, '--chip-ink': card.ink }}
                                onClick={() => handleFilterChange(card.id)}
                                aria-pressed={filter === card.id}
                            >
                                <i className={card.icon} aria-hidden="true"></i>
                                <span className="chip-label">{card.label}</span>
                                <span className="chip-count">{counts[card.id] || 0}</span>
                            </button>
                        ))}
                    </div>

                    <p className="archive-result-count" aria-live="polite">
                        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
                        {search ? ` matching “${search}”` : ''}
                    </p>
                </div>

                {filter === 'code' && renderGithubStats()}

                {currentProjects.length > 0 ? (
                    <div className="archive-grid">
                        {currentProjects.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </div>
                ) : (
                    <div className="archive-empty">
                        <i className="fas fa-folder-open" aria-hidden="true"></i>
                        <p>No projects found. Try a different search or category.</p>
                        <button type="button" className="glass-btn" onClick={() => { setSearch(''); setFilter('all'); setCurrentPage(1); }}>RESET FILTERS</button>
                    </div>
                )}

                {totalPages > 1 && (
                    <nav className="scrap-pagination" aria-label="Project pages">
                        <button className="glass-btn" disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)} aria-label="Previous page">PREV</button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                className={`glass-btn ${currentPage === page ? 'active-page' : ''}`}
                                onClick={() => setCurrentPage(page)}
                                aria-label={`Page ${page}`}
                                aria-current={currentPage === page ? 'page' : undefined}
                            >{page}</button>
                        ))}
                        <button className="glass-btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)} aria-label="Next page">NEXT</button>
                    </nav>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default ProjectsArchive;
