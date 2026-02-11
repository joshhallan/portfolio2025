"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <section id="all-projects" className="container mx-auto max-w-6xl px-8">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white tracking-tighter">
            PROJECTS
          </h1>
          <div className="h-1 w-20 bg-[var(--neon-blue)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                project={project}
                style="long"
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
