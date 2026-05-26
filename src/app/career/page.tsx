"use client";
import React from "react";
import { EXPERIENCE_DATA, Job } from "@/data/experience";
import {
  Cell,
  Container,
  GridX,
  Section,
  Accordion,
  Card,
  Typography,
  Badge,
} from "fj-elements";
import SectionTitle from "../components/Global/SectionTitle/SectionTitle";
import { FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Career.module.css";

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
    <Card>
      <Card.Header>
        <Typography as={"h3"} style={{ textAlign: "center", color: "white" }}>
          {company}
        </Typography>
        <div className={styles.locationWrapper}>
          <FaMapMarkerAlt />
          <Typography as={"span"}>{latestRole.location}</Typography>
        </div>
      </Card.Header>
      <Card.Body>
        {roles.map((role, index) => (
          <Accordion
            key={role.id}
            title={role.title}
            subtitle={role.duration}
            defaultOpen={isFirstCompany && index === 0 ? true : false}
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
                <Badge key={index}>{tech}</Badge>
              ))}
            </div>
          </Accordion>
        ))}
      </Card.Body>
    </Card>
  );
};

export default function CareerTimeLine() {
  const groupedExperience = EXPERIENCE_DATA.reduce<Record<string, Job[]>>(
    (acc, job) => {
      if (!acc[job.company]) acc[job.company] = [];
      acc[job.company].push(job);
      return acc;
    },
    {},
  );

  console.log(groupedExperience);

  return (
    <main className="page-wrapper">
      <Section id="all-jobs">
        <Container>
          <GridX gap="lg">
            <Cell small={12}>
              <SectionTitle underline={true} color={"white"}>
                Career History
              </SectionTitle>
            </Cell>

            {Object.entries(groupedExperience).map(
              ([company, roles], index) => (
                <Cell key={company} small={12}>
                  <CompanySection
                    company={company}
                    roles={roles}
                    isFirstCompany={index === 0}
                  />
                </Cell>
              ),
            )}
          </GridX>
        </Container>
      </Section>
    </main>
  );
}
