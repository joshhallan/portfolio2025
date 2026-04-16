import React from "react";
import { EXPERIENCE_DATA, Job } from "@/data/experience";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Career.module.css";
import { Metadata } from "next";
import { RoleAccordion } from "./RoleAccordion";

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
    <main className="page-wrapper">
      <section className="container">
        <header className={styles.pageHeader}>
          <h2 className="section-title--underline">Career History</h2>
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
    </main>
  );
}

export const metadata: Metadata = {
  title: "Career History",
};
