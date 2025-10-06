'use client';

import React, { useState } from 'react';
import { EXPERIENCE_DATA } from '@/data/experience'; 
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const neonPink = 'var(--neon-pink)';
const neonBlue = 'var(--neon-blue)';

interface JobProps {
  job: (typeof EXPERIENCE_DATA)[0];
}

const JobDetail: React.FC<JobProps> = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const borderColour = neonPink;
  const interactiveColor = neonBlue;

  const tagBgColor = job.id % 2 === 0 ? neonBlue + '10' : neonPink + '10';

  return (
    <div className="relative">
      
      <span 
        className="absolute -left-[30.5px] top-1 w-4 h-4 rounded-full" 
        style={{ 
            backgroundColor: borderColour, 
            boxShadow: `0 0 10px ${borderColour}`,
            zIndex: 10 
        }}
      />

      <div className="mb-4">
        <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
        <p className="text-xl mb-1" style={{ color: interactiveColor, fontWeight: 600 }}>
          {job.company}
        </p>
        <p className="text-sm italic text-white/50">{job.duration}</p>
        <p className="text-sm italic text-white/50">{job.location}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs rounded-md font-medium whitespace-nowrap"
            style={{ 
                color: borderColour, 
                backgroundColor: tagBgColor,
                border: `1px solid ${borderColour}50`
            }}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-semibold mb-3 transition-colors hover:scale-[1.02] cursor-pointer"
        style={{ color: interactiveColor, textShadow: `0 0 5px ${interactiveColor}80` }}
        aria-expanded={isOpen}
      >
        {isOpen ? 'Hide Key Responsibilities' : 'Show Key Responsibilities'}
        <span className="ml-2 transition-transform duration-300 transform">
            {isOpen ? <FaChevronUp className="w-3 h-3" /> : <FaChevronDown className="w-3 h-3" />}
        </span>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0' 
        }`}
      >
        <ul className="text-white/80 space-y-2 list-disc ml-5 text-base">
          {job.responsibilities.map((res, index) => (
            <li key={index} className="pl-1">{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function FullCareerTimeline() {
  const borderColour = neonPink; 

  return (
    
    <div className="min-h-screen pt-24 pb-16">
      <section id="full-career" className="container mx-auto max-w-4xl px-8 py-8">
        
       
        <h1 
          className="text-5xl font-extrabold mb-4 text-center text-white"
          style={{ textShadow: `0 0 15px ${borderColour}60` }} 
        >
          Career Timeline
        </h1>
                
        <div 
          className="relative border-l-2 pl-6 md:pl-10 space-y-12"
          style={{ borderColor: borderColour, paddingLeft: '24px' }}
        >
          {EXPERIENCE_DATA.map((job) => (
              <JobDetail 
                  key={job.id} 
                  job={job} 
              />
          ))}
        </div>
      </section>
    </div>
  );
}
