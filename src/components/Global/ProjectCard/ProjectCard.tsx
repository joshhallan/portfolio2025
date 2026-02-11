"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Project = (typeof PROJECTS_DATA)[number];

interface ProjectCardProps {
  project: Project;
  style?: "short" | "long";
}

const ProjectImageModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f1111] rounded-xl max-w-5xl w-full mx-auto p-2 border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-50 rounded-full bg-black/50"
          aria-label="Close modal"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`Enlarged view of ${project.title}`}
            fill
            className="object-contain"
          />
        </div>

        <div className="text-center p-4">
          <h4 className="text-xl font-semibold text-white">{project.title}</h4>
          <p className="text-white/50 text-xs mt-1">Click outside to close</p>
        </div>
      </div>
    </div>
  );
};

export default function ProjectCard({
  project,
  style = "short",
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isAWS = project.tech.includes("AWS");
  const themeColor = isAWS ? "var(--neon-blue)" : "var(--neon-pink)";
  const displayDescription =
    style === "long" ? project.fullDescription : project.description;

  return (
    <>
      <div
        className={`relative group overflow-hidden rounded-xl border border-white/10 transition-all duration-300 hover:border-white/30 cursor-pointer bg-[#0f1111] ${
          style === "long"
            ? "min-h-[500px] md:min-h-[550px]"
            : "h-[400px] md:h-[450px]"
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-40 md:opacity-50 group-hover:opacity-70 transition-opacity duration-500"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 md:via-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end">
          <div className="transform transition-transform duration-300 group-hover:translate-y-[-5px]">
            <div className="flex justify-between items-start mb-2">
              <p
                className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold"
                style={{ color: themeColor }}
              >
                {project.category}
              </p>
              {project.status === "WIP" && (
                <span className="text-[8px] md:text-[9px] bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded">
                  WIP
                </span>
              )}
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[var(--neon-blue)] transition-colors">
              {project.title}
            </h2>
            
            <div
              className={`overflow-y-auto pr-2 mb-4 custom-scrollbar ${
                style === "short"
                  ? "max-h-[60px]"
                  : "max-h-[150px] md:max-h-none"
              }`}
            >
              <p
                className={`text-xs md:text-sm text-white/60 leading-relaxed ${style === "short" ? "line-clamp-2" : ""}`}
              >
                {displayDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[9px] md:text-[10px] px-2 py-0.5 md:py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-white/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="flex gap-4 md:gap-6 pt-4 border-t border-white/5"
              onClick={(e) => e.stopPropagation()}
            >
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] md:text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-2"
              >
                <FaGithub className="text-sm" /> Source
              </Link>

              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] md:text-xs uppercase tracking-widest text-[var(--neon-blue)] hover:brightness-125 transition-all flex items-center gap-2"
                >
                  <FaExternalLinkAlt className="text-[8px] md:text-[10px]" />{" "}
                  Live Site
                </Link>
              )}
            </div>
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
