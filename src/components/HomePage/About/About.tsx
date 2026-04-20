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
              I&apos;m a{" "}
              <span className={styles.accentHighlight}>
                Lead Frontend Engineer
              </span>{" "}
              with over 10 years of experience - and honestly, what keeps me
              here is the{" "}
              <span className={styles.accentHighlight}>artistry</span> of it.
              Bringing together components, code, and creativity to build
              something that looks genuinely great and that I&apos;m proud to
              show off.
            </p>

            <p>
              Day to day, I sit between the people who want things done and the
              people can do those things. I communicate with{" "}
              <span className={styles.accentHighlight}>
                design on technical feasibility
              </span>
              ; I talk to{" "}
              <span className={styles.accentHighlight}>
                product owners and business analysts
              </span>{" "}
              on how to shape the backlog for upcoming sprints; I mentor
              developers and make sure that the team ships work they&apos;re
              actually proud of - including features that generated{" "}
              <span className={styles.accentHighlight}>
                over £500k in revenue
              </span>{" "}
              within the first month of launch.
            </p>

            <p>
              Outside of building interfaces, I&apos;m currently deep in{" "}
              <span className={styles.accentHighlight}>
                AWS cloud architecture
              </span>{" "}
              - working toward my Solutions Architect certification to become a
              more rounded engineer, even if my heart will always be in the
              frontend.
            </p>

            <p>
              When I&apos;m not coding, I&apos;m with my wife and our two boys.
              Me and my wife love playing video games together, whether
              that&apos;s trying to get best lap times on{" "}
              <span className={styles.accentHighlight}>Mario Kart</span> or
              teaming up in{" "}
              <span className={styles.accentHighlight}>Fortnite</span>. Once a
              month I sit down with old school friends for some{" "}
              <span className={styles.accentHighlight}>
                Dungeons and Dragons
              </span>{" "}
              - which can be great managerial practice, as playing with them is
              like trying to herd cats.
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
