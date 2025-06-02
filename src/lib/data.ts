import type { IntroductionData, SkillCategory, ProjectData } from '@/types';

export const introductionData: IntroductionData = {
  name: "Your Name",
  title: "Aspiring Software Developer | Full-Stack Enthusiast",
  professionalSummary:
    "A recent graduate with a passion for developing innovative software solutions. Eager to apply theoretical knowledge and hands-on project experience to contribute to a dynamic team. Proficient in modern web technologies and quick to learn new skills.",
  photoUrl: "https://placehold.co/200x200.png",
  contact: {
    email: "your.email@example.com",
    phone: "+1 123-456-7890",
    linkedin: "linkedin.com/in/yourprofile",
    github: "github.com/yourusername",
    website: "yourportfolio.com"
  },
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java"],
    iconName: "Code2",
  },
  {
    categoryName: "Frontend Development",
    skills: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS", "Redux"],
    iconName: "Palette",
  },
  {
    categoryName: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL (Basic)"],
    iconName: "Database",
  },
  {
    categoryName: "Tools & Platforms",
    skills: ["Git & GitHub", "Docker (Basic)", "Firebase", "VS Code"],
    iconName: "Briefcase",
  },
  {
    categoryName: "Soft Skills",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Agile Methodologies"],
    iconName: "Brain",
  }
];

export const projectsData: ProjectData[] = [
  {
    id: "project1",
    title: "E-commerce Platform Concept",
    category: "Web Development",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "online shopping",
    shortDescription:
      "Developed a full-stack e-commerce platform prototype featuring product listings, user authentication, and a shopping cart.",
    detailedDescription:
      "This project involved building a responsive frontend with React and managing backend logic with Node.js and Express. Implemented JWT for secure authentication and integrated a mock payment gateway. The database was designed using MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    projectUrl: "#", // Replace with actual URL
    repoUrl: "#", // Replace with actual URL
  },
  {
    id: "project2",
    title: "Task Management App",
    category: "Web Application",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "to do list",
    shortDescription:
      "A web-based task management application allowing users to create, track, and manage their daily tasks with a clean UI.",
    detailedDescription:
      "Built with Next.js for server-side rendering and static site generation capabilities. Utilized Firebase Firestore for real-time data synchronization and Firebase Authentication for user management. Focused on a seamless user experience and performance.",
    technologies: ["Next.js", "Firebase", "TypeScript", "Chakra UI"],
    repoUrl: "#", // Replace with actual URL
  },
  {
    id: "project3",
    title: "Personal Portfolio Website",
    category: "Web Design",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "personal website",
    shortDescription:
      "Designed and developed this personal portfolio website to showcase skills and projects. (Meta, right?)",
    detailedDescription:
      "This website itself is a testament to my frontend development skills. Built using Next.js and Tailwind CSS, focusing on a clean, responsive, and print-friendly design. Leveraged server components for performance and ShadCN UI for pre-built components.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI"],
    projectUrl: "#", // Replace with actual URL
  },
];
