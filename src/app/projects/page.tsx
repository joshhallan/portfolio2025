"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#050505]">
      <section id="all-projects" className="max-w-[1200px] mx-auto px-8">
        {/* HEADER SECTION - Using Tailwind for unique page layout */}
        <div className="mb-20 text-center">
          <h1 className="text-6xl md:text-9xl font-black mb-4 text-white tracking-tighter uppercase italic leading-none">
            Projects
          </h1>

          {/* Neon Divider with Brand Variable */}
          <div
            className="h-1.5 w-24 mx-auto rounded-full mb-8"
            style={{
              backgroundColor: "var(--color-secondary)",
              boxShadow: "0 0 20px var(--color-secondary)",
            }}
          />

          <p className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono font-bold">
            Full Archive <span className="mx-4 text-white/10">|</span> 2014 —
            2026
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              style="long" // Long style for full details
            />
          ))}
        </div>
      </section>
    </div>
  );
}
