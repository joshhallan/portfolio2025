export const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Lead Frontend Engineer",
    company: "Leighton",
    duration: "Apr 2023 - Present",
    location: "Newcastle, UK",
    responsibilities: [
      "Technical Lead across two development teams, introducing a shared design language and helping teams implement it consistently in production.",
      "Worked with the team to ship customer-facing functionality that generated over £500k in profit within the first month.",
      "Translate complex usability goals into technical approaches the team can actually deliver, including feasibility conversations with design.",
      "Partner with business analysts on stories and requirements, and keep stakeholders informed as work moves from idea to release.",
      "Mentor developers on frontend architecture, component design, and accessible implementation in React, Next.js and Angular.",
      "Introduce WCAG 2.2 accessibility standards across both teams, making accessible patterns part of day-to-day delivery rather than a late-stage audit.",
    ],
    technologies: [
      "Next.js",
      "React",
      "Accessibility",
      "Angular (13+)",
      "TypeScript",
      "Design Systems",
      "Leadership",
      "Mentorship",
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Leighton",
    duration: "Feb 2021 - Apr 2023",
    location: "Newcastle, UK",
    responsibilities: [
      "Led frontend delivery on large client programmes, including Home Group and British Airways.",
      "Designed and built scalable Angular and React interfaces for complex, long-lived product surfaces.",
      "Raised team quality through code standards, reviews, and practical guidance for less experienced engineers.",
      "Shipped an internal Manage My Booking beta to British Airways staff so the team could gather feedback before later iterations.",
    ],
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "Bootstrap",
      "Foundation",
      "Agile/Scrum",
    ],
  },
  {
    id: 3,
    title: "Software Developer",
    company: "Leighton",
    duration: "Jan 2017 - Feb 2021",
    location: "Sunderland, UK",
    responsibilities: [
      "Delivered client frontend work using HTML, CSS, jQuery and XSLT, learning professional delivery, Git, and code review in a consultancy environment.",
      "Moved into Angular and React as client work evolved, taking on more ownership of UI architecture and component-level delivery.",
      "Built the foundations for later senior and lead roles through hands-on delivery and mentoring from more experienced engineers.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "XSLT",
      "Angular",
      "React",
      "Git",
    ],
  },
  {
    id: 4,
    title: "Front End Web Developer",
    company: "FNVi",
    duration: "Jan 2015 - Jan 2017",
    location: "Middlesbrough, UK",
    responsibilities: [
      "Built and maintained client-facing websites for the business and its related entities, working closely with stakeholders on layout, content and delivery.",
      "Shipped responsive sites using HTML, CSS, JavaScript and Bootstrap, including WordPress and OpenCart builds where the project needed them.",
      "Started treating accessibility and clear user experience as part of the job, not an optional extra.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PHP",
      "WordPress",
      "OpenCart",
    ],
  },
  {
    id: 5,
    title: "Lead Developer",
    company: "GigSource (Digital City Fellowship)",
    duration: "Oct 2014 - Dec 2014",
    location: "Middlesbrough, UK",
    responsibilities: [
      "Built the GigSource website end to end as part of the Digital City Fellowship, covering profiles, search and the ability for users to contact one another.",
      "Owned frontend decisions from the user outwards, focusing on a clear, usable experience for a small product with no larger engineering team behind it.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
  },
  {
    id: 6,
    title: "Intern (Web Development)",
    company: "Clicksco",
    duration: "May 2014 - Sep 2014",
    location: "Middlesbrough, UK",
    responsibilities: [
      "Worked in a small team over a summer internship to design and build a functional MVP website.",
      "Implemented the frontend with HTML, CSS and jQuery, backed by a MySQL database.",
      "Helped get the MVP over the line within the internship window.",
    ],
    technologies: ["HTML", "CSS", "jQuery", "MySQL"],
  },
];

export interface Job {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}
