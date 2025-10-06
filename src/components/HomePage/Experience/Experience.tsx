import React from 'react';
import { EXPERIENCE_DATA } from '@/data/experience'; 

const MAX_JOBS_TO_SHOW = 4;

const summaryData = EXPERIENCE_DATA.slice(0, MAX_JOBS_TO_SHOW);

export default function ExperienceSummary() {
  const neonPink = 'var(--neon-pink)';
  const neonBlue = 'var(--neon-blue)';
  
  const neonAccentStyle = { color: neonBlue };

  return (
    <section id="experience" className="container mx-auto max-w-6xl px-8 py-16">
      <h2 
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Career Highlights
      </h2>
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {summaryData.map((job, index) => {
            const cardColor = index % 2 === 0 ? neonBlue : neonPink;
            
            return (
                <div 
                    key={job.id} 
                    className="p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] 
                               flex flex-col justify-between h-full"
                    style={{
                        border: `1px solid ${cardColor}50`,
                        boxShadow: `0 0 15px ${cardColor}20`,
                        backgroundColor: '#00000040', 
                    }}
                >
                    <div>
                        <h3 
                            className="text-xl font-bold mb-1" 
                            style={{ color: cardColor, textShadow: `0 0 5px ${cardColor}` }}
                        >
                            {job.title}
                        </h3>
                        <p className="text-white/80 text-lg font-semibold mb-3">{job.company}</p>
                    </div>

                    <div className="mt-auto">
                        <p className="text-sm italic text-white/60 mb-2">{job.duration}</p>
                        
                        <div className="flex flex-wrap gap-1">
                            {job.technologies.slice(0, 3).map((tech, i) => (
                                <span 
                                    key={i}
                                    className="px-2 py-0.5 text-xs rounded font-medium"
                                    style={{ 
                                        color: cardColor, 
                                        border: `1px solid ${cardColor}30`,
                                        backgroundColor: cardColor + '10'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                            {job.technologies.length > 3 && (
                                <span className="px-2 py-0.5 text-xs text-white/50">...</span>
                            )}
                        </div>
                    </div>
                </div>
            );
        })}
      </div>
      
      <div className="text-center mt-12">
        <a
          href="/career"
          rel="noopener noreferrer"
          className="text-lg font-bold transition-colors hover:underline"
          style={neonAccentStyle}
        >
          View All Roles →
        </a>
      </div>
    </section>
  );
}
