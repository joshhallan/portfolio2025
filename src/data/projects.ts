export const PROJECTS_DATA = [
  {
    id: 1,
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
    status: "Complete"
  },
  {
    id: 2,
    title: "Meal Planner / Shopping List",
    category: "Full Stack Development",
    description:
      "An application to create a meal plan and menu and transfer the ingredients into a shopping list",
    fullDescription: "I created this application to help my family plan the meals that we would have having throughout the week. This allows to carefully plan and budget for what we need and what we would like. It allows you to transfer the menu into a shopping list to that you can get all of the ingredients needed for the different meals.",
    tech: ["NextJS", "Tailwind", "AWS"],
    image: "/images/projects/shopping-list.jpg", 
    link: "",
    githubUrl: "https://github.com/joshhallan/shopping-list",
    name: "shopping-list",
    status: "WIP"
  },
  {
    id: 3,
    title: "Digital Ten Frames",
    category: "Frontend Development",
    description: "An interactive educational tool with full dark/light mode support for early-years maths.",
    fullDescription: "After seeing my son use physical ten frames at school, I developed this digital version to support his learning at home. The app features a clean, distraction-free interface with high-contrast Dark and Light mode support to ensure accessibility in any environment. I focused specifically on 'subitizing' - the ability to recognize quantities without counting - while utilizing a multi-site Firebase architecture for a seamless deployment.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase"],
    image: "/images/projects/number-frames.png",
    link: "https://number-frames.findjosh.dev",
    githubUrl: "https://github.com/joshhallan/number-frames",
    name: "ten-frames",
    status: "Complete"
  }
];
