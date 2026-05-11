import { useMemo } from 'react';
import './DynamicBackground.css';

const DynamicBackground = () => {
    // Generate a smaller array of short, random streaks for a cleaner look
    const streaks = useMemo(() => {
        const count = 15; // FEWER LINES: reduced from 55 to 15
        const data = [];
        
        for (let i = 0; i < count; i++) {
            // Increased the density of red streaks slightly for flavor
            const isRed = Math.random() > 0.45; 
            const color = isRed ? 'red' : 'dark';
            
            // Randomize duration (slow and elegant speeds between 8s and 20s)
            const duration = Math.random() * (20 - 8) + 8; 
            
            // Randomize delay (staggered starts)
            const delay = Math.random() * -12; 
            
            // Randomize vertical placement (0% to 95% down the screen)
            const top = Math.random() * 95; 
            
            // Randomize size/length (make them shorter)
            const scaleX = Math.random() * (1.1 - 0.4) + 0.4; 
            
            data.push({
                id: i,
                color,
                style: {
                    top: `${top}%`,
                    // Inject randomized animation and length properties inline
                    '--draw-duration': `${duration}s`,
                    '--draw-delay': `${delay}s`,
                    '--draw-scaleX': `${scaleX}`
                }
            });
        }
        return data;
    }, []);

    return (
        <div className="dynamic-bg-wrapper">
            {streaks.map(streak => (
                <div 
                    key={streak.id}
                    className={`streak-line ${streak.color}`}
                    style={streak.style}
                />
            ))}
        </div>
    );
};

export default DynamicBackground;