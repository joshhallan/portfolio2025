"use client";

import Link from "next/link";
import { Cell, Section, Grid, ProjectCard } from "fj-elements";
import SectionTitle from "../../Global/SectionTitle/SectionTitle";
import { PROJECTS_DATA } from "@/data/projects";
import ViewAllLink from "../../Global/ViewAllLink/ViewAllLink";

export default function Projects() {
  const featuredProjects = PROJECTS_DATA.slice(0, 2);

  return (
    <Section id="projects" size="lg">
      <Grid gap="lg">
        {/* Section Header Row */}
        <Cell small={12}>
          <SectionTitle color="white">Featured Projects</SectionTitle>
        </Cell>

        {/* Featured Cards Render Block */}
        {featuredProjects.map((project) => (
          <Cell key={project.id} small={12} large={6}>
            <ProjectCard
              project={project}
              variant="short"
              renderLink={({ href }, className, children) => (
                <Link href={href} className={className}>
                  {children}
                </Link>
              )}
            />
          </Cell>
        ))}

        <Cell small={12}>
          <ViewAllLink href="/projects">View All Projects</ViewAllLink>
        </Cell>
      </Grid>
    </Section>
  );
}
