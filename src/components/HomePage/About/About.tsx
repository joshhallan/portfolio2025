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
    <section id="about" className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="section-title text-center">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-lg text-white/90 leading-relaxed">
            <p>
              Hello! I&apos;m a highly motivated and solutions-driven{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                Lead Frontend Engineer
              </span>{" "}
              with{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                over 10 years of professional experience
              </span>
              , specializing in crafting responsive, high-performance user
              interfaces. My passion lies in bridging the gap between design,
              functionality, and inclusive accessibility, ensuring an
              exceptional user experience (UX) across all platforms.
            </p>

            <p>
              Professionally, I excel in{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                architectural strategy and mentorship
              </span>
              . I act as a technical bridge between product and engineering,
              liaising with
              <span className="text-[var(--color-secondary)] font-bold">
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
              <span className="text-[var(--color-secondary)] font-bold">
                self-motivated
              </span>{" "}
              to independently tackle complex problems. My enthusiasm for
              continuous learning fuels my proactive approach to seeking new
              opportunities for growth, such as my current deep-dive into cloud
              architecture.
            </p>

            <p>
              Outside of work, my primary focus is on quality time with my wife,
              Caitlyn, and our two young sons, Max (5) and Oscar (2). When I
              find free moments, I enjoy playing video games with my wife.
              Additionally, I also play{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                Dungeons and Dragons
              </span>{" "}
              with old school friends once a month, which is a great exercise in{" "}
              <span className="text-[var(--color-secondary)] font-bold">
                creative problem-solving
              </span>{" "}
              and teamwork!
            </p>
          </div>

          {/* KEY FACTS COLUMN */}
          <div className="lg:col-span-4">
            <Card variant="cyan">
              <Card.Header>
                <h3 className="font-semibold uppercase tracking-widest text-sm text-[var(--color-secondary)] text-center">
                  Key Facts
                </h3>
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
            <h3 className="font-semibold uppercase tracking-wider text-sm text-center text-[var(--color-primary)]">
              Education & Certifications
            </h3>
          </Card.Header>

          <Card.Body>
            <div className="space-y-12">
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
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span className="text-[10px] text-white/50 uppercase tracking-[0.3em]">
                Scroll to explore →
              </span>
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

const FactItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-[10px] uppercase text-white/40 tracking-[0.2em] mb-1 font-mono">
      {label}
    </p>
    <p className="text-sm font-bold text-white/90">{value}</p>
  </div>
);

const CertRow = ({ cert }: { cert: Certification }) => (
  <div className={styles.certItem}>
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center mr-4">
      {cert.logo ? (
        <Image
          src={cert.logo}
          alt={`${cert.title} badge`}
          width={48}
          height={48}
          className={`object-contain ${cert.status !== "Active" ? "opacity-40 grayscale" : ""}`}
        />
      ) : (
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
          <span className="text-[10px] font-bold text-white uppercase">
            {cert.shortName}
          </span>
        </div>
      )}
    </div>
    <div className="flex-grow min-w-0 pt-1">
      <h5 className="text-sm font-bold text-white leading-tight">
        {cert.title}
      </h5>
      <p className="text-xs text-white/50 mt-1">{cert.institution}</p>
      {cert.status !== "Active" && (
        <span className={styles.statusBadge}>{cert.status}</span>
      )}
    </div>
  </div>
);
