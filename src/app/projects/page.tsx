"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <section id="all-projects" className="container mx-auto max-w-6xl px-8">
        <div className="mb-16 border-b border-white/5 pb-8">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-white">
            Projects
          </h1>
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
