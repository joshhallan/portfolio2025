"use client";

import React, { useState } from "react";
import { SKILLS_DATA, SKILL_CATEGORIES } from "@/data/skills";

const COLOUR_MAP: { [key: string]: string } = {
  "Languages & Markup": "#FF3333",
  "Frameworks & Libraries": "#CC33FF",
  "Tools & Version Control": "#39FF14",
  Testing: "#FFFF33",
  Databases: "#2727F5",
  All: "#FFFFFF",
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section id="skills" className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title text-center">Technical Skills</h2>

          {/* CATEGORY FILTERS */}
          <div className="flex flex-wrap justify-center gap-4 w-full mb-8">
            {SKILL_CATEGORIES.map((category) => {
              const color = COLOUR_MAP[category] || "#FFFFFF";
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-widest rounded-full border-2 transition-all duration-300 bg-transparent cursor-pointer"
                  style={{
                    borderColor: color,
                    color: "white",
                    boxShadow: isActive
                      ? `0 0 15px ${color}, inset 0 0 5px ${color}`
                      : "none",
                    opacity: isActive ? 1 : 0.4,
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill) => {
            const skillColor = COLOUR_MAP[skill.category] || "#FFFFFF";
            const isHighlighted =
              activeCategory === "All" || activeCategory === skill.category;

            return (
              <div
                key={skill.name}
                className="p-6 text-center rounded-xl border-2 transition-opacity duration-500 ease-in-out"
                style={{
                  borderColor: skillColor,
                  color: "white",
                  boxShadow: isHighlighted
                    ? `0 0 12px ${skillColor}, inset 0 0 4px ${skillColor}`
                    : "none",
                  opacity: isHighlighted ? 1 : 0.15, // Smooth dimming
                }}
              >
                <span className="text-sm font-bold tracking-wider uppercase">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
