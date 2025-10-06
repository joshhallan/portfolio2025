"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";
import { FaCheckCircle, FaTools, FaTimes } from "react-icons/fa";

type Project = (typeof PROJECTS_DATA)[number];

interface ProjectCardProps {
  project: Project;
  accentColor: string;
  style: "short" | "long";
}

const generateCardStyles = (color: string) => ({
  border: "none",
  boxShadow: `
      0 0 4px #fff, 
      0 0 15px ${color}a0, 
      0 0 30px ${color}50
    `,
});

// --- Modal Component ---
interface ModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectImageModal: React.FC<ModalProps> = ({ project, onClose }) => {
  const isComplete = project.status === "Complete";
  const borderColor = isComplete ? "var(--neon-green)" : "var(--neon-blue)";

  const modalStyles = {
    boxShadow: `
          0 0 8px #fff, 
          0 0 25px ${borderColor}a0, 
          0 0 50px ${borderColor}50
        `,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0f1111] rounded-xl max-w-5xl w-full mx-auto p-2"
        style={modalStyles}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 z-50 rounded-full"
          aria-label="Close modal"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`Enlarged view of ${project.title}`}
            layout="fill"
            objectFit="contain"
            priority={true}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const parent = target.closest(".aspect-video");
              if (parent) {
                parent.innerHTML = `
                                    <div class="absolute inset-0 flex items-center justify-center text-center text-red-500/80 bg-gray-900/50 p-4">
                                        <p class="text-lg font-semibold">Could not load enlarged image.</p>
                                    </div>
                                `;
              }
            }}
          />
        </div>

        <div className="text-center p-4">
          <h4 className="text-xl font-semibold text-white">{project.title}</h4>
          <p className="text-white/70 text-sm mt-1">
            Click anywhere outside or the X to close.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function ProjectCard({
  project,
  accentColor,
  style,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cardStyles = generateCardStyles(accentColor);
  const neonLinkClasses =
    "text-sm font-semibold transition-colors hover:scale-[1.03] duration-200";

  const descriptionContent =
    style === "short" ? project.description : project.fullDescription;

  const isComplete = project.status === "Complete";
  const statusColor = isComplete ? "var(--neon-green)" : "var(--neon-red)";
  const StatusIcon = isComplete ? FaCheckCircle : FaTools;

  return (
    <>
      <div
        key={project.id}
        className="bg-[#0f1111] rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02] relative flex flex-col h-full"
        style={cardStyles}
      >
        <div
          className="relative w-full aspect-video flex items-center justify-center text-white/50 text-lg cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          title={`Click to enlarge ${project.title}`}
        >
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            width={800}
            height={450}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
            priority={project.id === 1}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              const parent = target.closest(".aspect-video");
              if (parent) {
                parent.innerHTML = `
                        <div class="absolute inset-0 flex items-center justify-center text-center text-red-500/80 bg-gray-900/50 p-4">
                            <p class="text-sm font-semibold">Image not found: ${project.image}</p>
                        </div>
                    `;
              }
            }}
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <span className="text-sm uppercase tracking-wider text-white/50 font-semibold mb-2 block">
            {project.category}
          </span>

          <div className="flex justify-between items-center mb-3">
            <h3
              className="text-2xl font-bold text-white"
              style={{ color: accentColor }}
            >
              {project.title}
            </h3>
            {style === "long" && (
              <div
                className="flex items-center text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap"
                style={{
                  color: statusColor,
                  border: `1px solid ${statusColor}80`,
                }}
              >
                <StatusIcon className="w-3 h-3 mr-1" />
                {project.status}
              </div>
            )}
          </div>

          <p className="text-white/70 mb-4 text-base flex-grow">
            {descriptionContent}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/80"
                style={{
                  color: accentColor,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 pt-4 border-t border-white/10">
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={neonLinkClasses}
              style={{ color: "var(--neon-pink)" }}
            >
              GitHub →
            </Link>
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
