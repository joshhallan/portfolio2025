"use client";

import React, { useState } from "react";
import { EXPERIENCE_DATA, Job } from "@/data/experience";
import { FaChevronDown, FaChevronUp, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Career.module.css";

const RoleAccordion = ({
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

const CompanySection = ({
  company,
  roles,
  isFirstCompany,
}: {
  company: string;
  roles: Job[];
  isFirstCompany: boolean;
}) => {
  const latestRole = roles[0];

  return (
    <div className={styles.companyCard}>
      <div className={styles.companyHeader}>
        <h3 className="section-title">{company}</h3>
        <div className={styles.locationWrapper}>
          <FaMapMarkerAlt />
          <span>{latestRole.location}</span>
        </div>
      </div>

      <div className={styles.rolesList}>
        {roles.map((role, index) => (
          <RoleAccordion
            key={role.id}
            role={role}
            isDefaultOpen={isFirstCompany && index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default function FullCareerTimeline() {
  const groupedExperience = EXPERIENCE_DATA.reduce<Record<string, Job[]>>(
    (acc, job) => {
      if (!acc[job.company]) acc[job.company] = [];
      acc[job.company].push(job);
      return acc;
    },
    {},
  );

  return (
    <div className="min-h-screen pt-32 pb-24">
      <section className="max-w-[1200px] mx-auto px-8">
        <header className={styles.pageHeader}>
          <h2 className="section-title">Career History</h2>
          <div className={styles.headerUnderline}></div>
        </header>

        <div className={styles.timelineContainer}>
          {Object.entries(groupedExperience).map(([company, roles], index) => (
            <CompanySection
              key={company}
              company={company}
              roles={roles}
              isFirstCompany={index === 0}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
