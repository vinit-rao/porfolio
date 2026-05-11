import { useMemo } from 'react';
import './DynamicBackground.css';

const DynamicBackground = () => {
    // Generates short, sweeping wave pulses
    const streaks = useMemo(() => {
        const count = 18; // Increased count slightly since they are shorter and fade out
        const data = [];
        
        for (let i = 0; i < count; i++) {
            const isRed = Math.random() > 0.55; 
            const color = isRed ? 'red' : 'dark';
            
            // Randomize duration (faster than before to feel like data pulses)
            const duration = Math.random() * (16 - 8) + 8; 
            
            const delay = Math.random() * -20; 
            
            // Randomize how long the physical "dash" is
            const streakLength = Math.random() * (400 - 100) + 100;
            
            const startY = Math.random() * 1000;
            const cp1Y = Math.random() * 1000; 
            const cp2Y = Math.random() * 1000; 
            const endY = Math.random() * 1000;
            
            const pathD = `M -100 ${startY} C 600 ${cp1Y}, 1400 ${cp2Y}, 2100 ${endY}`;
            
            data.push({
                id: i,
                color,
                d: pathD,
                style: {
                    '--draw-duration': `${duration}s`,
                    '--draw-delay': `${delay}s`,
                    '--streak-length': `${streakLength}` /* Passed to CSS */
                }
            });
        }
        return data;
    }, []);

    return (
        <div className="dynamic-bg-wrapper">
            <svg className="dynamic-bg-svg" viewBox="0 0 2000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                {streaks.map(streak => (
                    <path 
                        key={streak.id}
                        d={streak.d} 
                        className={`wavy-path ${streak.color}`}
                        style={streak.style}
                    />
                ))}
            </svg>
        </div>
    );
};

export default DynamicBackground;