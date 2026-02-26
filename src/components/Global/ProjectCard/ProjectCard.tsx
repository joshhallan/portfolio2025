"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectImageModal from "./ProjectImageModal";
import styles from "./ProjectCard.module.css";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  tech: string[];
  githubUrl: string;
  link?: string;
  status?: string;
}

interface ProjectCardProps {
  project: Project;
  style?: "short" | "long";
}

export default function ProjectCard({
  project,
  style = "short",
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayDescription =
    style === "long" ? project.fullDescription : project.description;

  return (
    <>
      <div
        className={`${styles.card} ${style === "long" ? styles.long : styles.short}`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={styles.bgImage}
        />
        <div className={styles.overlay} />

        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={styles.category}>{project.category}</span>
            {project.status === "WIP" && (
              <span className={styles.wipBadge}>WIP</span>
            )}
          </div>

          <h3 className={styles.title}>{project.title}</h3>

          <p
            className={`${styles.description} ${style === "short" ? "line-clamp-2" : ""}`}
          >
            {displayDescription}
          </p>

          <div className={styles.techList}>
            {project.tech.map((t) => (
              <span key={t} className={styles.techTag}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
            <Link
              href={project.githubUrl}
              target="_blank"
              className={styles.link}
            >
              <FaGithub /> Source
            </Link>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                className={`${styles.link} ${styles.live}`}
              >
                <FaExternalLinkAlt /> Live Site
              </Link>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ProjectImageModal
          project={project}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
