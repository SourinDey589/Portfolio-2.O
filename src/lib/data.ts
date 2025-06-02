import type { IntroductionData, SkillCategory, ProjectData, HeroData } from '@/types';

// This data will be used by the new Hero section
export const heroData: HeroData = {
  siteName: "EMMA HOLISTIC",
  mainHeading: "Welcome to Emma Holistic",
  description: "Through nourishing recipes, mindful movement, and sustainable practices, I share my journey of balanced and healthy living.",
  bulletPoints: [
    {
      lead: "Explore",
      text: "Learn how to live healthier with my curated content designed to uplift and empower you.",
    },
    {
      lead: "Learn",
      text: "Access in-depth tutorials, tips, and guides tailored to help you live your happiest life.",
    }
  ],
  mainImageUrl: "https://placehold.co/600x600.png", // Main circular image
  navLinks: [
    { label: "MY VLOG", href: "#vlog" },
    { label: "MY STORY", href: "#story" },
    { label: "COLLABORATION", href: "#collaboration" },
    { label: "SOCIALS", href: "#socials" },
    { label: "CONTACTS", href: "#contacts" },
  ],
  socialLinks: {
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
    tiktok: "https://tiktok.com", // Assuming TikTok, based on icon
  },
  buttons: [
    { label: "My Vlogs", href: "#my-vlogs", variant: "primary" },
    { label: "YouTube Shorts", href: "#yt-shorts", variant: "secondary", icon: "Youtube" },
  ],
  contactEmail: "emma.holistic@example.com", // Added for potential use in contacts
};


// Existing data, can be repurposed or used for other pages later
export const introductionData: IntroductionData = {
  name: "Emma Holistic", // Updated to match example
  title: "Youtuber & Blogger", // Updated
  professionalSummary: heroData.description, // Re-using from heroData for consistency
  photoUrl: heroData.mainImageUrl, // Re-using
  contact: {
    email: heroData.contactEmail,
    phone: "+1 123-456-7890", // Placeholder
    linkedin: "linkedin.com/in/emmaholistic", // Placeholder
    github: "github.com/emmaholistic", // Placeholder
    website: "emmaholistic.com" // Placeholder
  },
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Content Creation",
    skills: ["Video Editing", "Script Writing", "Photography", "SEO Optimization"],
    iconName: "Code2", // Placeholder icon
  },
  {
    categoryName: "Wellness Topics",
    skills: ["Nutrition", "Mindfulness", "Yoga", "Sustainable Living"],
    iconName: "Palette", // Placeholder icon
  },
];

export const projectsData: ProjectData[] = [
  {
    id: "project1",
    title: "Nourishing Recipes Series",
    category: "Vlog Series",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "healthy food",
    shortDescription:
      "A collection of video recipes focusing on healthy and delicious meals.",
    detailedDescription:
      "This series showcases easy-to-follow recipes that promote a balanced diet. Each video includes nutritional information and cooking tips.",
    technologies: ["Video Production", "Recipe Development"],
    projectUrl: "#",
  },
  {
    id: "project2",
    title: "Mindful Movement Guide",
    category: "E-book",
    thumbnailUrl: "https://placehold.co/600x400.png",
    dataAiHint: "yoga meditation",
    shortDescription:
      "An e-book guide to incorporating mindful movement and meditation into daily life.",
    detailedDescription:
      "This guide provides practical exercises and tips for reducing stress and improving well-being through mindfulness and gentle movement.",
    technologies: ["Writing", "Graphic Design"],
    projectUrl: "#",
  },
];
