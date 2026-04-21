export const SKILLS_DATA = [
  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Angular", category: "Frameworks & Libraries" },
  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "Bootstrap", category: "Frameworks & Libraries" },
  { name: "Foundation", category: "Frameworks & Libraries" },

  // Languages
  { name: "JavaScript (ES5/ES6)", category: "Languages" },
  { name: "TypeScript", category: "Languages" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "SVN", category: "Tools" },
  { name: "Storybook", category: "Tools" },

  // Cloud and Infrastructure
  { name: "AWS", category: "Cloud & Infrastructure" },
  { name: "Firebase Hosting", category: "Cloud & Infrastructure" },

  // Testing
  { name: "Unit Testing", category: "Testing" },
  { name: "Automated Testing", category: "Testing" },
  { name: "Manual Testing", category: "Testing" },

  // Databases
  { name: "MongoDB", category: "Databases" },
  { name: "Firebase", category: "Databases" },
];

// Automatically generates the categories, including 'All'
export const SKILL_CATEGORIES = [
  "All",
  ...new Set(SKILLS_DATA.map((skill) => skill.category)),
];
