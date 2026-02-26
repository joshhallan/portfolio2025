"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import styles from "./ProjectCard.module.css";

interface Project {
  title: string;
  image: string;
}

interface ModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectImageModal({ project, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className={styles.modalOverlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className={styles.modalImageContainer}>
          <Image
            src={project.image}
            alt={`Full screen view of ${project.title}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className={styles.modalFooter}>
          <h4 className="text-xl font-bold text-white">{project.title}</h4>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-2 font-mono">
            Click outside or press ESC to close
          </p>
        </div>
      </div>
    </div>
  );
}
