import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import './FeaturedCarousel.css';

const AUTO_MS = 5000;

const FeaturedCarousel = ({ projects = [] }) => {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const count = projects.length;

    // Auto-advance, but pause on hover/focus and honour reduced-motion.
    useEffect(() => {
        if (count <= 1 || paused) return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
        const id = setInterval(() => setIndex(i => (i + 1) % count), AUTO_MS);
        return () => clearInterval(id);
    }, [count, paused]);

    if (!count) return null;

    const go = (n) => setIndex(((n % count) + count) % count);

    return (
        <div
            className="featured-carousel"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Featured projects"
        >
            <div className="fc-viewport">
                <div className="fc-track" style={{ transform: `translateX(-${index * 100}%)` }}>
                    {projects.map((p, i) => (
                        <div
                            className="fc-slide"
                            key={p.title}
                            aria-hidden={i !== index}
                            inert={i !== index}
                        >
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>
            </div>

            {count > 1 && (
                <div className="fc-controls">
                    <button className="fc-arrow" onClick={() => go(index - 1)} aria-label="Previous featured project">
                        <i className="fas fa-arrow-left" aria-hidden="true"></i>
                    </button>
                    <div className="fc-dots">
                        {projects.map((p, i) => (
                            <button
                                key={p.title}
                                className={`fc-dot ${i === index ? 'active' : ''}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Show ${p.title}`}
                                aria-current={i === index ? 'true' : undefined}
                            ></button>
                        ))}
                    </div>
                    <button className="fc-arrow" onClick={() => go(index + 1)} aria-label="Next featured project">
                        <i className="fas fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeaturedCarousel;
