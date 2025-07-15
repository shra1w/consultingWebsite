"use client"
import React, { useState, useEffect } from 'react';

const HeroBackDesign = () => {
  const [squareSize, setSquareSize] = useState(100);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const generateGrid = () => {
    const { width, height } = dimensions;
    if (width === 0 || height === 0) return [];

    const cols = Math.ceil(width / squareSize) + 2;
    const rows = Math.ceil(height / squareSize) + 2;
    const centerX = width / 2;
    const centerY = height / 2;
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

    const squares = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * squareSize - squareSize;
        const y = row * squareSize - squareSize;
        const squareCenterX = x + squareSize / 2;
        const squareCenterY = y + squareSize / 2;
        
        // Calculate distance from center of screen
        const distance = Math.sqrt(
          Math.pow(squareCenterX - centerX, 2) + 
          Math.pow(squareCenterY - centerY, 2)
        );
        
        // Calculate opacity based on distance (stronger in center)
        const normalizedDistance = distance / maxDistance;
        const opacity = Math.max(0, Math.min(1, 1 - normalizedDistance * 1.2));
        
        squares.push({
          id: `${row}-${col}`,
          x,
          y,
          opacity: opacity * 0.8 // Reduce overall intensity
        });
      }
    }

    return squares;
  };

  const squares = generateGrid();

  return (
    <div className="absolute z-10 left-0 top-0 w-full h-screen opacity-65 min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            rgba(16, 185, 129, 0.15) 0%, 
            rgba(16, 185, 129, 0.1) 50%, 
            rgba(16, 185, 129, 0.08) 80%, 
            transparent 70%)`
        }}
      />
      
      {/* Grid squares */}
      <div className="absolute z-10 inset-0">
        {squares.map((square) => (
          <div
            key={square.id}
            className="absolute border border-emerald-500/30"
            style={{
              left: `${square.x}px`,
              top: `${square.y}px`,
              width: `${squareSize}px`,
              height: `${squareSize}px`,
              opacity: square.opacity,
              backgroundColor: `rgba(16, 185, 129, ${square.opacity * 0.1})`,
              borderColor: `rgba(186, 196, 200, ${square.opacity * 0.25})`,
              boxShadow: square.opacity > 0.3 ? 
                `0 0 ${square.opacity * 10}px rgba(16, 185, 129, ${square.opacity * 0.1})` : 
                'none'
            }}
          />
        ))}
      </div>

     

      {/* Additional glow effect */}
      <div 
        className="absolute inset-0  z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            transparent 40%, 
            rgba(17, 24, 39, 0.3) 60%, 
            rgba(17, 24, 39, 0.8) 100%)`
        }}
      />

      {/* Custom slider styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgb(16, 185, 129);
          cursor: pointer;
          border: 2px solid rgb(6, 78, 59);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgb(16, 185, 129);
          cursor: pointer;
          border: 2px solid rgb(6, 78, 59);
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HeroBackDesign;