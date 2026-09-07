export const SKILLS_DATA = [
  // Frontend Engineering
  { name: "React", category: "Frontend Engineering" },
  { name: "Next.js", category: "Frontend Engineering" },
  { name: "TypeScript", category: "Frontend Engineering" },
  { name: "JavaScript", category: "Frontend Engineering" },
  { name: "HTML", category: "Frontend Engineering" },
  { name: "CSS", category: "Frontend Engineering" },
  { name: "SCSS", category: "Frontend Engineering" },

  // Architecture & UI
  { name: "Frontend Architecture", category: "Architecture & UI" },
  { name: "Design Systems", category: "Architecture & UI" },
  { name: "Component Libraries", category: "Architecture & UI" },
  { name: "UI Engineering", category: "Architecture & UI" },

  // Accessibility
  { name: "WCAG 2.2", category: "Accessibility" },
  { name: "WAI-ARIA", category: "Accessibility" },
  { name: "Accessible Component Design", category: "Accessibility" },
  { name: "Keyboard Accessibility", category: "Accessibility" },

  // Frameworks & Libraries
  { name: "Angular", category: "Frameworks & Libraries" },
  { name: "AngularJS", category: "Frameworks & Libraries" },
  { name: "Bootstrap", category: "Frameworks & Libraries" },
  { name: "Foundation", category: "Frameworks & Libraries" },

  // Testing & Tooling
  { name: "Unit Testing", category: "Testing & Tooling" },
  { name: "Automated Testing", category: "Testing & Tooling" },
  { name: "Manual Testing", category: "Testing & Tooling" },
  { name: "Git", category: "Testing & Tooling" },
  { name: "SVN", category: "Testing & Tooling" },

  // Additional Technologies
  { name: "Firebase", category: "Additional Technologies" },
  { name: "MongoDB", category: "Additional Technologies" },
];

// Automatically generates the categories, including 'All'
export const SKILL_CATEGORIES = [
  "All",
  ...new Set(SKILLS_DATA.map((skill) => skill.category)),
];
