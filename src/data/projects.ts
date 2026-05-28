export const PROJECTS_DATA = [
  {
    id: 1,
    name: "FJ-Elements",
    title: "A Scalable, Atomic UI Library",
    category: "Design System / Architecture",
    status: "WIP",
    description:
      "A decoupled React component library built to eliminate 'utility class soup' and provide a consistent, high-performance UI engine for a multi-app ecosystem.",
    fullDescription:
      "Born out of a need to reclaim architectural control from utility-first frameworks, FJ-Elements is a bespoke design system built on Atomic Design principles. It leverages CSS Modules for strict style scoping and Storybook for isolated development and living documentation. The project features a full CI/CD pipeline via GitHub Actions, ensuring that the documentation and library remain the single source of truth across all consuming applications.",
    tech: ["React", "TypeScript", "CSS Modules", "Storybook", "Atomic Design"],
    image: "/images/projects/fj-elements.png",
    link: "https://elements.findjosh.dev",
    githubUrl: "https://github.com/joshhallan/fj-elements",
  },
  {
    id: 2,
    title: "Digital Ten Frames",
    category: "Frontend Development",
    description:
      "A focused educational tool with custom CI/CD and adaptive UI for early-years maths.",
    fullDescription:
      "Inspired by my son's classroom learning, I built this interactive tool to help children master 'subitizing.' This project was a deep dive into modern DevOps and clean UI design; I implemented a multi-site Firebase architecture and a custom GitHub Actions pipeline for automated deployments. The interface features a high-contrast, distraction-free 'sticky' control bar and full system-aware Dark Mode support to ensure accessibility and clarity.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Firebase",
      "GitHub Actions",
    ],
    image: "/images/projects/number-frames.png",
    link: "https://number-frames.findjosh.dev",
    githubUrl: "https://github.com/joshhallan/number-frames",
    name: "ten-frames",
    status: "Complete",
  },
  {
    id: 3,
    title: "Baby Health Tracker",
    category: "Full Stack Development",
    description: "Created a web application to track baby needs",
    fullDescription:
      "I created this web app a means of tracking my sons wellbeing. My partner and I found that we were having trouble tracking his feeds (probably due to lack of sleep) so I decided to create us a web app that can be used to track not only feeds, but nappies, sleeping and medication.",
    tech: ["React.js", "SCSS", "Firebase", "Materialize"],
    image: "/images/projects/baby-wellbeing.jpg",
    link: "",
    githubUrl: "https://github.com/joshhallan/BabyWellbeingPublic",
    name: "baby-tracker",
    status: "Complete",
  },
  {
    id: 4,
    title: "Meal Planner / Shopping List",
    category: "Full Stack Development",
    description:
      "An application to create a meal plan and menu and transfer the ingredients into a shopping list",
    fullDescription:
      "I created this application to help my family plan the meals that we would have having throughout the week. This allows to carefully plan and budget for what we need and what we would like. It allows you to transfer the menu into a shopping list to that you can get all of the ingredients needed for the different meals.",
    tech: ["NextJS", "Tailwind", "AWS"],
    image: "/images/projects/shopping-list.jpg",
    link: "",
    githubUrl: "https://github.com/joshhallan/shopping-list",
    name: "shopping-list",
    status: "WIP",
  },
  {
    id: 5,
    name: "tnn-coaching",
    title: "TNN Coaching Platform",
    category: "Technical Consulting & Architecture",
    status: "Staged",
    description:
      "Engineered an elite, production-ready brand platform for a personal training business under a strict zero-cost monthly operational mandate.",
    fullDescription:
      "Acting as a technical consultant, I designed and architected this platform to deliver sub-second performance with zero recurring infrastructure overhead. The frontend relies on Next.js configured for strict static site generation (SSG), serving compiled assets via Google's global CDN on the Firebase Spark Plan. Features a deep-integrated calendar scheduling system, custom styling tokens via Tailwind CSS, and a fully automated continuous deployment pipeline from GitHub directly into a live staging loop.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Firebase Hosting",
      "GitHub Actions",
    ],
    image: "/images/projects/tnn-coaching.png",
    link: "https://tnn-coaching.web.app/",
    githubUrl: "https://github.com/joshhallan/tnn-coaching",
  },
];
