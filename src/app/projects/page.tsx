"use client";
import React from "react";
import { PROJECTS_DATA } from "@/data/projects";
import { Cell, Grid, ProjectCard, Section } from "fj-elements";
import Link from "next/link";
import SectionTitle from "../components/Global/SectionTitle/SectionTitle";

export default function ProjectsPage() {
  return (
    <main className="page-wrapper">
      <Section id="all-projects">
        <Section>
          <Grid gap="lg">
            <Cell small={12}>
              <SectionTitle underline={true} color={"white"}>
                All Projects
              </SectionTitle>
            </Cell>

            {PROJECTS_DATA.map((project) => (
              <Cell key={project.id} small={12} large={6}>
                <ProjectCard
                  project={project}
                  variant="long"
                  renderLink={({ href }, className, children) => (
                    <Link href={href} className={className}>
                      {children}
                    </Link>
                  )}
                />
              </Cell>
            ))}
          </Grid>
        </Section>
      </Section>
    </main>
  );
}
