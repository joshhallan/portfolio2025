"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCE_DATA } from "@/data/experience";
import Card from "@/components/Global/Card/Card";
import styles from "./Experience.module.css";

const MAX_JOBS_TO_SHOW = 4;
const summaryData = EXPERIENCE_DATA.slice(0, MAX_JOBS_TO_SHOW);

export default function ExperienceSummary() {
  return (
    <section id="experience" className="page-wrapper">
      <div className="container">
        <h2 className="section-title --underline">Career</h2>

        <div className={styles.jobGrid}>
          {summaryData.map((job, index) => {
            const variant = index % 2 === 0 ? "cyan" : "pink";

            return (
              <Card
                key={job.id}
                variant={variant}
                className={styles.summaryCard}
              >
                <Card.Header>
                  <div className={styles.headerFlex}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>{" "}
                    {job.id === 1 && <span className={styles.pulseIndicator} />}
                  </div>
                </Card.Header>

                <Card.Body className={styles.cardBody}>
                  <p className={styles.companyName}>{job.company}</p>
                  <p className={styles.duration}>{job.duration}</p>
                </Card.Body>

                <Card.Footer className={styles.cardFooter}>
                  <div className={styles.techPills}>
                    {job.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className={styles.techPill}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card.Footer>
              </Card>
            );
          })}
        </div>

        <div className={styles.actionWrapper}>
          <Link href="/career" className="viewAllLink">
            <span>View All Roles</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
