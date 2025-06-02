import type {
  SourinHeaderData,
  SourinHeroData,
  AboutMeData,
  SourinSkillsPageData,
  SourinProjectsPageData,
  AchievementData,
  SourinContactInfo,
  FooterData,
  SocialLinkItem
} from '@/types';

// --- Sourin Dey Portfolio Data ---

export const sourinSocialLinks: SocialLinkItem[] = [
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/sourin-dey-b575b8227/' },
  { platform: 'github', url: 'https://github.com/Sourin07' },
];

export const sourinHeaderData: SourinHeaderData = {
  brandName: "Sourin Dey",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about-me" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: sourinSocialLinks,
};

export const sourinHeroData: SourinHeroData = {
  headline: "Sourin Dey | Aspiring Full Stack Developer",
  subHeadline: "Bringing outstanding computer and communication skills to innovative projects.",
  ctaProjectsText: "View My Projects",
  ctaContactText: "Connect with Me",
  photoUrl: "https://placehold.co/400x400.png", // Replace with actual photo
  dataAiHintPhoto: "professional portrait developer",
};

export const aboutMeData: AboutMeData = {
  headline: "My Journey & Passion for Technology",
  summaryPoints: [
    "Confident Student passionate about learning new skills.",
    "Ambitious and driven individual ready and willing to work hard and learn from professionals.",
    "Possess outstanding computer and communication skills, crucial for thriving in collaborative and innovative tech environments."
  ],
  education: [
    "Dr. B.C. Roy Engineering College Academy Of Professional Courses, Durgapur (B.Tech in Computer Science & Engineering, 2020-2024, CGPA: 8.45)",
    "Ukhra Kunja Behari Institution (Higher Secondary, WBCHSE, 2020, Percentage: 81%)",
    "Ukhra Kunja Behari Institution (Secondary, WBBSE, 2018, Percentage: 80%)"
  ],
  internship: "Completed a valuable internship with Globsyn Finishing School, Kolkata, gaining practical industry exposure.",
  personalSkills: ["Team Management", "Positive Attitude", "Easy Adaptable by Nature", "Hard Working", "Coding", "Singing", "Playing Guitar", "Drawing", "Playing Badminton"],
};

export const sourinSkillsData: SourinSkillsPageData = {
  headline: "My Technical Toolkit",
  categories: [
    {
      categoryName: "Programming Languages",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "C" }],
      iconName: "Code2",
    },
    {
      categoryName: "Web Technologies",
      skills: [{ name: "HTML" }, { name: "JavaScript" }, { name: "CSS" }, { name: "React JS" }, { name: "Node.js" }, { name: "Express.js" }],
      iconName: "Globe",
    },
    {
      categoryName: "Databases",
      skills: [{ name: "SQL" }, { name: "Oracle" }, { name: "MongoDB" }],
      iconName: "Database",
    },
    {
      categoryName: "Other Technical Skills",
      skills: [{ name: "Computer Networking" }, { name: "MERN Stack" }, { name: "Material-UI"}],
      iconName: "Network",
    },
  ],
  languages: [
    { name: "English", proficiency: "Fluent" },
    { name: "Hindi", proficiency: "Fluent" },
    { name: "Bengali", proficiency: "Fluent (Native)" },
  ],
};

export const sourinProjectsData: SourinProjectsPageData = {
  headline: "Showcasing My Work",
  projects: [
    {
      id: "project-tour-booking",
      title: "Tour-Booking Website",
      description: "Collaborated in a team of two to design and develop a comprehensive Tour-Booking Website. This platform aims at streamlining tour booking processes, offering users an intuitive interface to browse, select, and book tours. Key features include user authentication, tour listings with detailed descriptions, a secure booking system, and an admin panel for managing tours and bookings.",
      technologies: ["React.js", "Express.js", "Node.js", "MongoDB", "Material-UI"],
      teamSize: 2,
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHintImage: "travel website booking",
      repoUrl: "https://github.com/Sourin07/Tour-Booking-Website",
      // liveDemoUrl: "#" // Add if available
    },
    {
      id: "project-portfolio",
      title: "Personal Portfolio Website",
      description: "Developed a dynamic personal portfolio website to showcase my skills, projects, and achievements. This website is built using Next.js and Tailwind CSS, featuring a clean, modern design and responsive layout. It serves as a central hub for potential employers and collaborators to learn more about my work and capabilities.",
      technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHintImage: "portfolio website developer",
      repoUrl: "https://github.com/Sourin07/My-Portfolio", // Example link
    },
    // Add more projects as needed
    // {
    //   id: "project-placeholder",
    //   title: "Upcoming Project (Coming Soon)",
    //   description: "Details about this exciting new project will be available soon. Stay tuned!",
    //   technologies: ["TBD"],
    //   imageUrl: "https://placehold.co/600x400.png",
    //   dataAiHintImage: "technology abstract",
    // }
  ],
};

export const achievementsData: AchievementData = {
  headline: "Recognitions & Accomplishments",
  achievements: [
    "Successfully completed RDBMS PostgreSQL course with a score of 77.50% from the Spoken Tutorial Project, IIT Bombay.",
    "Active Member of the Computer Society of India (CSI).",
    "Successfully completed Android app development using Kotlin course with a score of 85.00% from the Spoken Tutorial Project, IIT Bombay.",
  ],
};

export const sourinContactData: SourinContactInfo = {
  headline: "Let's Connect!",
  email: "sourindey510@gmail.com",
  phone: "+91 7478888311",
  linkedinUrl: "https://www.linkedin.com/in/sourin-dey-b575b8227/",
  githubUrl: "https://github.com/Sourin07",
  location: "Dakshinkhanda, Andal, West Bengal, India - 713321",
};

export const footerData: FooterData = {
  copyrightText: `© ${new Date().getFullYear()} Sourin Dey. All rights reserved.`,
  socialLinks: sourinSocialLinks,
};
