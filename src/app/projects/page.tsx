"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <section id="all-projects" className="container mx-auto max-w-6xl px-8">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
          Project Showcase
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => {
            const accentColor =
              index % 2 === 0 ? "var(--neon-pink)" : "var(--neon-blue)";
            return (
              <ProjectCard
                key={project.id}
                project={project}
                accentColor={accentColor}
                style="long"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
