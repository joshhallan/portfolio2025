"use client";

import React from "react";
import Image from "next/image";
import { QUALIFICATIONS_DATA } from "@/data/qualifications";
import Card from "../../Global/Card/Card";
import styles from "./About.module.css";

interface Certification {
  id: number;
  title: string;
  institution: string;
  shortName: string;
  classification: "Degree" | "Certification";
  grade: string;
  status: "Active" | "In progress" | "Lapsed";
  logo: string | null;
}

export default function About() {
  const degrees = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Degree",
  ) as Certification[];
  const certifications = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Certification",
  ) as Certification[];

  return (
    <section id="about" className="page-wrapper">
      <div className="container">
        {/* Using our standardized section title */}
        <h2 className="section-title --underline">About Me</h2>

        <div className={styles.topGrid}>
          {/* Main Bio Text */}
          <div className={styles.bioText}>
            <p>
              Hello! I&apos;m a highly motivated and solutions-driven{" "}
              <span className={styles.accentHighlight}>
                Lead Frontend Engineer
              </span>{" "}
              with{" "}
              <span className={styles.accentHighlight}>
                over 10 years of professional experience
              </span>
              , specializing in crafting responsive, high-performance user
              interfaces. My passion lies in bridging the gap between design,
              functionality, and inclusive accessibility, ensuring an
              exceptional user experience (UX) across all platforms.
            </p>

            <p>
              Professionally, I excel in{" "}
              <span className={styles.accentHighlight}>
                architectural strategy and mentorship
              </span>
              . I act as a technical bridge between product and engineering,
              liaising with
              <span className={styles.accentHighlight}>
                {" "}
                stakeholders, BAs, and Designers
              </span>{" "}
              to assess code feasibility and usability. I take a lead role in
              partitioning complex requirements into actionable stories,
              ensuring the backlog is technically sound and optimized for team
              delivery.
            </p>

            <p>
              I appreciate the collaborative synergy of group work, leveraging
              collective knowledge and support, yet I thrive equally when highly{" "}
              <span className={styles.accentHighlight}>self-motivated</span> to
              independently tackle complex problems. My enthusiasm for
              continuous learning fuels my proactive approach to seeking new
              opportunities for growth, such as my current deep-dive into cloud
              architecture.
            </p>

            <p>
              Outside of work, my primary focus is on quality time with my wife,
              Caitlyn, and our two young sons, Max (5) and Oscar (2). When I
              find free moments, I enjoy playing video games with my wife.
              Additionally, I also play{" "}
              <span className={styles.accentHighlight}>
                Dungeons and Dragons
              </span>{" "}
              with old school friends once a month, which is a great exercise in{" "}
              <span className={styles.accentHighlight}>
                creative problem-solving
              </span>{" "}
              and teamwork!
            </p>
          </div>

          {/* KEY FACTS COLUMN */}
          <div className={styles.factsColumn}>
            <Card variant="cyan">
              <Card.Header>
                <h3 className={styles.cardHeadingSecondary}>Key Facts</h3>
              </Card.Header>
              <Card.Body>
                <div className={styles.factList}>
                  <FactItem label="Location" value="Sunderland, UK" />
                  <FactItem
                    label="Primary Stack"
                    value="TypeScript, React, Next.js"
                  />
                  <FactItem
                    label="Current learning focus"
                    value="AWS Solutions Architect (SAA-C03)"
                  />
                  <FactItem
                    label="Leadership Style"
                    value="Architectural Strategy & Mentorship"
                  />
                  <FactItem label="D&D Alignment" value="Forever DM" />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* EDUCATION & CERTS */}
        <Card variant="pink">
          <Card.Header>
            <h3 className={styles.cardHeadingPrimary}>
              Education & Certifications
            </h3>
          </Card.Header>

          <Card.Body>
            <div className={styles.educationLayout}>
              {degrees.length > 0 && (
                <div>
                  <h4 className={styles.educationHeading}>Education</h4>
                  <div className={styles.scrollContainer}>
                    {degrees.map((cert) => (
                      <CertRow key={cert.id} cert={cert} />
                    ))}
                  </div>
                </div>
              )}

              {certifications.length > 0 && (
                <div>
                  <h4 className={styles.educationHeading}>Certifications</h4>
                  <div className={styles.scrollContainer}>
                    {certifications.map((cert) => (
                      <CertRow key={cert.id} cert={cert} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card.Body>

          <Card.Footer>
            <div className={styles.footerFlex}>
              <span className={styles.scrollHint}>Scroll to explore →</span>
              <a
                href="https://www.credly.com/users/joshua-allan.01d3e079"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.verifyLink}
              >
                Verify on Credly →
              </a>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </section>
  );
}

/* Internal Sub-Components */

const FactItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.factItem}>
    <p className={styles.factLabel}>{label}</p>
    <p className={styles.factValue}>{value}</p>
  </div>
);

const CertRow = ({ cert }: { cert: Certification }) => (
  <div className={styles.certItem}>
    <div className={styles.certLogoWrapper}>
      {cert.logo ? (
        <Image
          src={cert.logo}
          alt={`${cert.title} badge`}
          width={48}
          height={48}
          className={`${styles.certLogo} ${cert.status !== "Active" ? styles.inactive : ""}`}
        />
      ) : (
        <div className={styles.certLogoPlaceholder}>
          <span>{cert.shortName}</span>
        </div>
      )}
    </div>
    <div className={styles.certInfo}>
      <h5 className={styles.certTitle}>{cert.title}</h5>
      <p className={styles.certInstitution}>{cert.institution}</p>
      {cert.status !== "Active" && (
        <span className={styles.statusBadge}>{cert.status}</span>
      )}
    </div>
  </div>
);
