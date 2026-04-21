"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SKILLS_DATA, SKILL_CATEGORIES } from "@/data/skills";
import styles from "./Skills.module.css";

const COLOUR_MAP: { [key: string]: string } = {
  Languages: "var(--color-primary)",
  "Frameworks & Libraries": "var(--color-secondary)",
  Tools: "var(--color-accent)",
  Testing: "#FFD700",
  "Cloud & Infrastructure": "#FF9900",
  Databases: "#00FFD1",
};

export const SkillsAccordion = () => {
  const categories = SKILL_CATEGORIES.filter((c) => c !== "All");
  const [openCategory, setOpenCategory] = useState<string | null>(
    categories[0] ?? null,
  );

  return (
    <div className={styles.accordionContainer}>
      {categories.map((category) => {
        const isOpen = openCategory === category;
        const categoryColor = COLOUR_MAP[category] || "#FFFFFF";
        const skills = SKILLS_DATA.filter((s) => s.category === category);

        return (
          <div key={category} className={styles.accordionItem}>
            <button
              onClick={() => setOpenCategory(isOpen ? null : category)}
              className={styles.accordionToggle}
              style={{ "--accent-color": categoryColor } as React.CSSProperties}
            >
              <span
                className={styles.categoryTitle}
                style={{ color: categoryColor }}
              >
                {category}
              </span>
              <span className={styles.chevron}>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            <div
              className={`${styles.collapsibleContent} ${isOpen ? styles.open : ""}`}
            >
              <div className={styles.pillContainer}>
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={styles.skillPill}
                    style={
                      { "--pill-color": categoryColor } as React.CSSProperties
                    }
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
