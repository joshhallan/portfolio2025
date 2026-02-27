"use client";

import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import ProjectCard from "@/components/Global/ProjectCard/ProjectCard";
import styles from "./Featured.module.css";

export default function Projects() {
  // Logic: Only show the top 2 projects on the landing page
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <section id="projects" className="page-wrapper">
      <div className="container">
        <h2 className="section-title --underline">Featured Projects</h2>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} style="short" />
          ))}
        </div>

        <div className={styles.actionWrapper}>
          <Link href="/projects" className="viewAllLink">
            <span>View All Projects</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
