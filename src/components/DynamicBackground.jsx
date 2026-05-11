import { useMemo } from 'react';
import './DynamicBackground.css';

const DynamicBackground = () => {
    const lines = useMemo(() => {
        const count = 10; 
        const data = [];
        
        for (let i = 0; i < count; i++) {
            const isRed = Math.random() > 0.7;
            const colorClass = isRed ? 'draw-red' : 'draw-grey';
            
            const duration = Math.random() * (12 - 6) + 6; 
            const delay = Math.random() * -10; 
            const top = Math.random() * 95;
            const width = Math.random() * (300 - 100) + 100; 

            // Creates a slightly imperfect "hand-drawn" wavy line
            const path = `M 0 10 Q ${width/4} ${Math.random()*20}, ${width/2} 10 T ${width} 10`;

            data.push({
                id: i,
                colorClass,
                path,
                width,
                style: {
                    top: `${top}%`,
                    left: `${Math.random() * 80}%`, // Random horizontal start
                    width: `${width}px`,
                    animationDuration: `${duration}s`,
                    animationDelay: `${delay}s`
                }
            });
        }
        return data;
    }, []);

    return (
        <div className="dynamic-bg-wrapper">
            {lines.map(line => (
                <svg 
                    key={line.id}
                    className={`trim-path-svg ${line.colorClass}`}
                    style={line.style}
                    viewBox={`0 0 ${line.width} 20`}
                >
                    <path d={line.path} />
                </svg>
            ))}
        </div>
    );
};

export default DynamicBackground;