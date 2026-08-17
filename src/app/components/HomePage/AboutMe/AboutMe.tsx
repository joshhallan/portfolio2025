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
              Frontend Technical Lead
            </Typography>{" "}
            with{" "}
            <Typography as="span" gradient>
              12+ years of experience building web applications
            </Typography>
            , with a particular focus on accessible React applications, frontend
            architecture and design systems.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            What keeps me interested in frontend is the combination of{" "}
            <Typography as="span" gradient>
              engineering and creativity
            </Typography>
            . I enjoy taking a complicated problem, breaking it down into
            reusable components and turning it into something that feels simple
            and intuitive for the person using it.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            Day to day, I sit somewhere between{" "}
            <Typography as="span" gradient>
              technical delivery, architecture and people
            </Typography>
            . I work closely with designers on technical feasibility and
            accessible implementation, collaborate with product owners and
            business analysts to shape upcoming work, and mentor developers as
            we build and maintain frontend systems that teams can be proud of.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            I&apos;ve worked extensively with{" "}
            <Typography as="span" gradient>
              HTML, CSS, JavaScript and React
            </Typography>
            , with accessibility being a particular area of interest throughout
            my career. I&apos;m especially interested in building{" "}
            <Typography as="span" gradient>
              accessible component libraries and design systems
            </Typography>{" "}
            that make doing the right thing easier for the developers using
            them.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            I&apos;m also currently working on expanding my accessibility
            knowledge through the{" "}
            <Typography as="span" gradient>
              IAAP CPACC and WAS certifications
            </Typography>
            , alongside continuing to develop my understanding of frontend
            architecture and the wider technology landscape.
          </Typography>

          <Typography as="p" className={styles.AboutCopy}>
            Outside of work, I&apos;m usually with my wife and our two boys. My
            wife and I love playing video games together, whether that&apos;s
            trying to get the best lap times on{" "}
            <Typography as="span" gradient>
              Mario Kart
            </Typography>{" "}
            or teaming up in{" "}
            <Typography as="span" gradient>
              Fortnite
            </Typography>
            . Once a month I sit down with some old school friends for{" "}
            <Typography as="span" gradient>
              Dungeons & Dragons
            </Typography>{" "}
            — which can be great managerial practice, as playing with them is
            basically trying to herd cats.
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
                <FactItem label="Experience" value="12+ Years" />
                <FactItem
                  label="Primary Stack"
                  value="TypeScript, React, Next.js"
                />
                <FactItem
                  label="Specialism"
                  value="Accessibility & Design Systems"
                />
                <FactItem
                  label="Leadership Style"
                  value="Architecture & Mentorship"
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
