"use client";

import Image from "next/image";
import { Card, Cell, Section, Grid, Typography } from "fj-elements";
import { QUALIFICATIONS_DATA } from "@/data/qualifications";
import styles from "./AboutMe.module.css";
import SectionTitle from "../../Global/SectionTitle/SectionTitle";

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

export default function AboutMe() {
  const degrees = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Degree",
  ) as Certification[];
  const certifications = QUALIFICATIONS_DATA.filter(
    (q) => q.classification === "Certification",
  ) as Certification[];

  return (
    <Section id="aboutMe" size="lg">
      <Grid>
        <Cell small={12}>
          <SectionTitle color="white">About Me</SectionTitle>
        </Cell>
        {/* Bio text */}
        <Cell small={12} large={8}>
          <Typography as="p" className={styles.AboutCopy}>
            I&apos;m a{" "}
            <Typography as="span" gradient>
              Lead Frontend Engineer
            </Typography>{" "}
            with over 10 years of experience - and honestly, what keeps me here
            is the{" "}
            <Typography as="span" gradient>
              artistry
            </Typography>{" "}
            of it. Bringing together components, code, and creativity to build
            something that looks genuinely great and that I&apos;m proud to show
            off.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            Day to day, I sit between the people who want things done and the
            people can do those things. I communicate with{" "}
            <Typography as="span" gradient>
              design on technical feasibility
            </Typography>
            ; I talk to{" "}
            <Typography as="span" gradient>
              product owners and business analysts
            </Typography>{" "}
            on how to shape the backlog for upcoming sprints; I mentor
            developers and make sure that the team ships work they&apos;re
            actually proud of - including features that generated{" "}
            <Typography as="span" gradient>
              over £500k in revenue
            </Typography>{" "}
            within the first month of launch.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            Outside of building interfaces, I&apos;m currently deep in{" "}
            <Typography as="span" gradient>
              AWS cloud architecture
            </Typography>{" "}
            - working toward my Solutions Architect certification to become a
            more rounded engineer, even if my heart will always be in the
            frontend.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            When I&apos;m not coding, I&apos;m with my wife and our two boys. Me
            and my wife love playing video games together, whether that&apos;s
            trying to get best lap times on{" "}
            <Typography as="span" gradient>
              Mario Kart
            </Typography>{" "}
            or teaming up in{" "}
            <Typography as="span" gradient>
              Fortnite
            </Typography>
            . Once a month I sit down with old school friends for some{" "}
            <Typography as="span" gradient>
              Dungeons and Dragons
            </Typography>{" "}
            - which can be great managerial practice, as playing with them is
            like trying to herd cats.
          </Typography>
        </Cell>
        {/* Fun Facts */}
        <Cell small={12} large={4}>
          <Card variant="cyan">
            <Card.Header>
              <Typography
                as="p"
                style={{ color: "var(--cyan-500)", textAlign: "center" }}
              >
                Key Facts
              </Typography>
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
                  value="AWS Developer Associate"
                />
                <FactItem
                  label="Leadership Style"
                  value="Architectural Strategy & Mentorship"
                />
                <FactItem label="D&D Alignment" value="Forever DM" />
              </div>
            </Card.Body>
          </Card>
        </Cell>
        {/* Qualifications */}
        <Cell small={12}>
          <Card variant="pink">
            <Card.Header>
              <Typography
                as="p"
                style={{ color: "var(--pink-500)", textAlign: "center" }}
              >
                Qualifications and Certifications
              </Typography>
            </Card.Header>
            <Card.Body>
              <div className={styles.educationLayout}>
                {degrees.length > 0 && (
                  <div>
                    <Typography as="p" className={styles.educationHeading}>
                      Education
                    </Typography>
                    <div className={styles.scrollContainer}>
                      {degrees.map((cert) => (
                        <CertRow key={cert.id} cert={cert} />
                      ))}
                    </div>
                  </div>
                )}

                {certifications.length > 0 && (
                  <div>
                    <Typography as="p" className={styles.educationHeading}>
                      Certifications
                    </Typography>
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
                <Typography as="span" className={styles.scrollHint}>
                  Scroll to explore →
                </Typography>
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
        </Cell>
      </Grid>
    </Section>
  );
}

const FactItem = ({ label, value }: { label: string; value: string }) => (
  <div className={styles.factItem}>
    <Typography as="p" className={styles.factLabel}>
      {label}
    </Typography>
    <Typography as="p" className={styles.factValue}>
      {value}
    </Typography>
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
      <Typography as="p" className={styles.certTitle}>
        {cert.title}
      </Typography>
      <Typography as="small" className={styles.certInstitution}>
        {cert.institution}
      </Typography>
      {cert.status !== "Active" && (
        <Typography as="span" className={styles.statusBadge}>
          {cert.status}
        </Typography>
      )}
    </div>
  </div>
);
