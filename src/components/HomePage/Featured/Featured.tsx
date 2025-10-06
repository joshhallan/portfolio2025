"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";

const neonPink = "var(--neon-pink)";
const neonBlue = "var(--neon-blue)";

export default function Projects() {
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <section id="projects" className="container mx-auto max-w-6xl px-8 py-16">
      <h2
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project, index) => {
          const accentColor = index % 2 === 0 ? neonPink : neonBlue;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              accentColor={accentColor}
              style="short"
            />
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/projects"
          className="text-xl font-bold transition-colors hover:underline"
          style={{ color: neonBlue }}
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}
