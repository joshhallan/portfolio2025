"use client";

import React from 'react';
import { PROJECTS_DATA } from '@/data/projects'; 
import Image from 'next/image';
import { FaCheckCircle, FaTools } from 'react-icons/fa'; 

const neonPink = 'var(--neon-pink)';
const neonBlue = 'var(--neon-blue)';
const neonRed = 'var(--neon-red)'; 

interface DetailedProjectCardProps {
    project: (typeof PROJECTS_DATA)[0];
    accentColor: string;
}

const DetailedProjectCard: React.FC<DetailedProjectCardProps> = ({ project, accentColor }) => {
    
    const secondaryColor = accentColor === neonPink ? neonBlue : neonPink;

    
    let statusIcon = <FaCheckCircle className="inline mr-1" />;
    let statusColor = accentColor; 
    const statusText = project.status;

    if (project.status === 'WIP') {
        statusIcon = <FaTools className="inline mr-1" />;
        statusColor = neonRed;
    }

    return (
        <div 
            className="p-6 rounded-xl bg-black/40 backdrop-blur-sm flex flex-col h-full"
            style={{
                border: `1px solid ${accentColor}50`,
                boxShadow: `0 0 20px ${accentColor}20`,
            }}
        >
            
            <div className="flex justify-between items-start mb-4">
                <div className="flex-grow">
                    <h3 
                        className="text-2xl font-bold mb-1" 
                        style={{ color: accentColor, textShadow: `0 0 8px ${accentColor}90` }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-xs italic text-white/50">{project.category}</p>
                </div>
                
                
                <span 
                    className="flex items-center text-xs font-semibold px-2 py-1 rounded-full ml-2 whitespace-nowrap"
                    style={{
                        color: statusColor,
                        border: `1px solid ${statusColor}80`,
                        backgroundColor: statusColor + '15',
                        boxShadow: `0 0 5px ${statusColor}40`
                    }}
                >
                    {statusIcon}
                    {statusText}
                </span>
            </div>

            
            <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden border border-white/10">
                <Image
                    src={project.image} 
                    alt={`Preview of ${project.title}`}
                    width={1200} 
                    height={675} 
                    className="w-full h-full object-cover"
                    priority={project.id === 1}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        const parent = target.closest('.aspect-video');
                        if (parent) {
                             parent.innerHTML = `
                                <div class="absolute inset-0 flex items-center justify-center text-center text-red-500/80 bg-gray-900/50 p-4">
                                    <p class="text-sm font-semibold">Image not found: ${project.image}</p>
                                </div>
                            `;
                        }
                    }}
                />
            </div>

            
            <p className="text-white/90 text-sm mb-4 flex-grow whitespace-pre-line">
                {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/10">
                {project.tech.map((tech, index) => (
                    <span 
                        key={index}
                        className="px-2 py-0.5 text-xs rounded-full font-medium"
                        style={{ 
                            color: secondaryColor, 
                            border: `1px solid ${secondaryColor}60`,
                            backgroundColor: secondaryColor + '10'
                        }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 mt-3 pt-3 border-t border-white/10">
                {project.link && (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold transition-colors hover:text-white/90"
                        style={{ color: accentColor }}
                    >
                        View Live Project →
                    </a>
                )}
                <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/50 hover:text-white transition-colors"
                >
                    Code (GitHub)
                </a>
            </div>
        </div>
    );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      
      <section id="all-projects" className="container mx-auto max-w-6xl px-8">
        <h1 
          className="text-5xl font-extrabold mb-12 text-center text-white"
        >
          Project Showcase
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
              const accentColor = index % 2 === 0 ? neonPink : neonBlue;
              return (
                  <DetailedProjectCard 
                      key={project.id} 
                      project={project} 
                      accentColor={accentColor} 
                  />
              );
          })}
        </div>
      </section>
    </div>
  );
}
