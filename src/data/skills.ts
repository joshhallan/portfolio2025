export const SKILLS_DATA = [
  // Languages & Markup
  { name: 'HTML', category: 'Languages & Markup' },
  { name: 'CSS / SCSS', category: 'Languages & Markup' },
  { name: 'JavaScript (ES5/ES6)', category: 'Languages & Markup' },
  { name: 'Typescript', category: 'Languages & Markup' },
  
  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Angular', category: 'Frameworks & Libraries' },
  { name: 'AngularJS', category: 'Frameworks & Libraries' },
  { name: 'jQuery', category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', category: 'Frameworks & Libraries' },
  { name: 'Foundation', category: 'Frameworks & Libraries' },

  // Tools & Version Control
  { name: 'Git', category: 'Tools & Version Control' },
  { name: 'SVN', category: 'Tools & Version Control' },
  { name: 'AWS', category: 'Tools & Version Control' },

  // Testing
  { name: 'Unit Testing', category: 'Testing' },
  { name: 'Automated Testing', category: 'Testing' },
  { name: 'Manual Testing', category: 'Testing' },

  // Databases
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Firebase', category: 'Databases' },
];

// Automatically generates the categories, including 'All'
export const SKILL_CATEGORIES = [
  'All', 
  ...new Set(SKILLS_DATA.map(skill => skill.category))
];