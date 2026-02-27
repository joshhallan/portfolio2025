"use client";

import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

export default function ProjectsPage() {
  return (
    <main className="page-wrapper">
      <section id="all-projects" className="container">
        <header className={styles.pageHeader}>
          <h2 className="section-title--underline">All Projects</h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} style="long" />
          ))}
        </div>
      </section>
    </main>
  );
}
