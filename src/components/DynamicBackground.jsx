import React from 'react';

const DynamicBackground = () => {
    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none', overflow: 'hidden', backgroundColor: 'var(--bg-main)' }}>
            
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: `linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }} />

            {/* Hand-drawn organic SVG paths using Trim Path animations */}
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.7 }}>
                
                {/* Top Red Squiggle */}
                <path 
                    d="M -100 200 Q 200 150 400 250 T 900 200 T 1200 300" 
                    fill="none" 
                    stroke="var(--accent)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    className="scribble-path path-red" 
                />

                {/* Middle Charcoal Wave */}
                <path 
                    d="M -100 500 Q 150 580 300 480 T 700 550 T 1200 480" 
                    fill="none" 
                    stroke="var(--text-primary)" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    className="scribble-path path-grey" 
                />

                {/* Bottom White Jagged Line */}
                <path 
                    d="M -100 800 Q 300 880 600 750 T 1200 820" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    className="scribble-path path-white" 
                />
            </svg>
            
        </div>
    );
};

export default DynamicBackground;