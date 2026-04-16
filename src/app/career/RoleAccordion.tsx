"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Job } from "@/data/experience";
import styles from "./Career.module.css";

export const RoleAccordion = ({
  role,
  isDefaultOpen,
}: {
  role: Job;
  isDefaultOpen: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <div className={styles.roleWrapper}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.accordionToggle}
      >
        <div className={styles.roleInfo}>
          <h4 className={styles.roleTitle}>{role.title}</h4>
          <span className={styles.roleDuration}>{role.duration}</span>
        </div>
        <span className={styles.chevron}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>
      <div
        className={`${styles.collapsibleContent} ${isOpen ? styles.open : ""}`}
      >
        <ul className={styles.responsibilityList}>
          {role.responsibilities.map((res, index) => (
            <li key={index} className={styles.responsibilityItem}>
              <span className={styles.bullet}></span>
              {res}
            </li>
          ))}
        </ul>
        <div className={styles.techStack}>
          {role.technologies.map((tech, index) => (
            <span key={index} className={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
