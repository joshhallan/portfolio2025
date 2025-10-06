'use client'

import React, { useState} from 'react';
import { SKILLS_DATA, SKILL_CATEGORIES } from '@/data/skills'; 

const COLOUR_MAP: { [key: string]: string } = {
  'Languages & Markup': 'var(--neon-red, #FF3333)',       
  'Frameworks & Libraries': 'var(--neon-purple, #CC33FF)',  
  'Tools & Version Control': 'var(--neon-green, #39FF14)',        
  'Testing': 'var(--neon-yellow, #FFFF33)',    
  'Databases': 'var(--neon-dark-blue, #2727F5)',    
  'All': 'var(--foreground)', 
};

const getCategoryColour = (category: string) => {
  return COLOUR_MAP[category] || 'var(--foreground)';
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <section id="skills" className="container mx-auto max-w-6xl px-8 py-16">
      
      <div className="flex flex-col items-center mb-8">
        
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3 w-full mb-4">
          {SKILL_CATEGORIES.map(category => {
            const categoryColour = getCategoryColour(category); 
            const isActive = activeCategory === category;
            
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 text-sm rounded-full border-2 
                  transition-all duration-200 bg-transparent text-white cursor-pointer
                  ${isActive ? 'font-semibold' : 'opacity-70'}
                `}
                style={{
                  borderColor: categoryColour, 
                  color: 'var(--foreground)',
                  boxShadow: isActive 
                             ? `1px 1px 10px ${categoryColour}, 1px 1px 10px ${categoryColour}`
                             : 'none', 
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {SKILLS_DATA.map(skill => {
            const skillBorderColour = getCategoryColour(skill.category);
            
            const shouldGlow = 
                activeCategory === 'All' || 
                activeCategory === skill.category;

            const opacityClass = shouldGlow ? 'opacity-100' : 'opacity-30';
            
            const skillBoxShadow = shouldGlow
                ? `1px 1px 10px ${skillBorderColour}, 1px 1px 10px ${skillBorderColour}`
                : 'none';

            return (
              <div 
                key={skill.name} 
                className={`p-4 text-center rounded-lg border-2 text-white/90 shadow-md transition-opacity duration-300 ${opacityClass}`}
                style={{ 
                  borderColor: skillBorderColour, 
                  color: 'var(--foreground)', 
                  boxShadow: skillBoxShadow,
                }}
              >
                {skill.name}
              </div>
            );
          })}
      </div>
    </section>
  );
}