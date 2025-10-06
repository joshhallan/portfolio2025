import React from 'react';

interface DividerProps {
  colourVariable: string; // e.g., 'var(--neon-pink)'
}

export default function Divider({ colourVariable }: DividerProps) {
  const baseClasses = "w-full h-1 my-16 opacity-70"; 

  return (
    <div className="container mx-auto max-w-5xl px-8">
      <hr 
        className={baseClasses}
        style={{ 
          backgroundColor: colourVariable, 
          border: 'none', 
          boxShadow: `0 0 10px ${colourVariable}, 0 0 20px ${colourVariable}40`,
        }}
      />
    </div>
  );
}