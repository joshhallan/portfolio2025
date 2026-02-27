"use client";

import React, { useState } from "react";
import { SKILLS_DATA, SKILL_CATEGORIES } from "@/data/skills";
import styles from "./Skills.module.css";

const COLOUR_MAP: { [key: string]: string } = {
  "Languages & Markup": "var(--color-primary)",
  "Frameworks & Libraries": "var(--color-secondary)",
  "Tools & Version Control": "var(--color-accent)",
  Testing: "#FFD700",
  Databases: "#00FFD1",
  All: "#FFFFFF",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="skills" className="page-wrapper">
      <div className="container">
        <h2 className="section-title --underline">Technical Skills</h2>

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
                  { "--accent-color": categoryColor } as React.CSSProperties
                }
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* SKILLS GRID */}
        <div className={styles.skillsGrid}>
          {SKILLS_DATA.map((skill) => {
            const skillColor = COLOUR_MAP[skill.category] || "#FFFFFF";
            const isHighlighted =
              activeCategory === "All" || activeCategory === skill.category;

            return (
              <div
                key={skill.name}
                className={`${styles.skillCard} ${isHighlighted ? styles.glow : styles.dimmed}`}
                style={{ "--skill-color": skillColor } as React.CSSProperties}
              >
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
