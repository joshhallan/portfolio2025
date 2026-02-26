"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

export default function Projects() {
  // Logic: Only show the top 2 projects on the landing page
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} style="short" />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="text-lg font-bold transition-all hover:brightness-125 flex items-center justify-center gap-2 group"
            style={{ color: "var(--color-secondary)" }}
          >
            <span>View All Projects</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
