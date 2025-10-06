"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from '@/data/projects'; 

type Project = (typeof PROJECTS_DATA)[number];

interface ProjectCardProps {
  project: Project;
  accentColor: string; 
}

const generateCardStyles = (color: string) => ({
    boxShadow: `0 0 4px #fff, 0 0 15px ${color}a0, 0 0 30px ${color}50`,
});

export default function ProjectCard({ project, accentColor }: ProjectCardProps) {
  const cardStyles = generateCardStyles(accentColor);
  const neonLinkClasses = "text-sm font-semibold transition-colors hover:scale-[1.03] duration-200";

  return (
    <div
      key={project.id}
      className="bg-[#0f1111] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] relative flex flex-col h-full"
      style={cardStyles}
    >
      
      <div className="relative w-full aspect-video flex items-center justify-center text-white/50 text-lg">
        <Image
          src={project.image} 
          alt={`Preview of ${project.title}`}
          width={800} 
          height={450} 
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

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-2 block">
          {project.category}
        </span>
        <h3 className="text-2xl font-bold text-white mb-3" style={{ color: accentColor }}>
          {project.title}
        </h3>
        <p className="text-white/70 mb-4 text-base flex-grow">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.slice(0, 4).map((tech) => ( 
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80"
              style={{ color: accentColor, border: `1px solid ${accentColor}40` }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4 pt-4 border-t border-white/10">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={neonLinkClasses}
            style={{ color: 'var(--neon-pink)' }}
          >
            GitHub →
          </Link>
        </div>
      </div>
    </div>
  );
}
