"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <section id="all-projects" className="max-w-[1200px] mx-auto px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} style="long" />
          ))}
        </div>
      </section>
    </div>
  );
}
