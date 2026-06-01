"use client";
import { useState } from "react";
import { SKILLS_DATA, SKILL_CATEGORIES } from "@/data/skills";
import { SkillsAccordion } from "./SkillsAccordion";
import { GridX, Section, Cell, Typography, Container } from "fj-elements";
import styles from "./Skills.module.css";
import SectionTitle from "../../Global/SectionTitle/SectionTitle";

const COLOUR_MAP: { [key: string]: string } = {
  Languages: "var(--color-primary)",
  "Frameworks & Libraries": "var(--color-secondary)",
  Tools: "var(--color-accent)",
  Testing: "#FFD700",
  "Cloud & Infrastructure": "#FF9900",
  Databases: "#00FFD1",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Section id="skills" size="lg">
      <Container>
        <GridX>
          <Cell small={12}>
            <SectionTitle color="white">Technical Skills</SectionTitle>
          </Cell>
          {/* Skills accordion - hidden on desktop */}
          <Cell small={12} className="hide-on-desktop">
            <SkillsAccordion />
          </Cell>
          {/* Skills filter - hidden on mobile */}
          <Cell small={12} className="hide-on-mobile">
            {/* CATEGORY FILTERS */}
            <div className={styles.filterContainer}>
              {SKILL_CATEGORIES.map((category) => {
                const categoryColor = COLOUR_MAP[category] || "#FFFFFF";
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
                    style={
                      {
                        "--accent-color": categoryColor,
                        textAlign: "left",
                      } as React.CSSProperties
                    }
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* SKILLS GRID */}
            <Container>
              <GridX gap="md">
                {SKILLS_DATA.map((skill) => {
                  const skillColor = COLOUR_MAP[skill.category] || "#FFFFFF";
                  const isHighlighted =
                    activeCategory === "All" ||
                    activeCategory === skill.category;

                  return (
                    <Cell
                      small={3}
                      key={skill.name}
                      gap="md" // Ensure the layout gap token matches the GridX container gap token
                      className={`${styles.skillCardWrapper} ${isHighlighted ? styles.glow : styles.dimmed}`}
                      style={
                        { "--skill-color": skillColor } as React.CSSProperties
                      }
                    >
                      {/* Visual Card Content Container handles internal card styling */}
                      <div className={styles.skillCardInner}>
                        <Typography as="span" className={styles.skillName}>
                          {skill.name}
                        </Typography>
                      </div>
                    </Cell>
                  );
                })}
              </GridX>
            </Container>
          </Cell>
        </GridX>
      </Container>
    </Section>
  );
}
