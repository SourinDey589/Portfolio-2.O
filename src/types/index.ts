
// --- Sourin Dey Portfolio Types ---

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  platform: 'linkedin' | 'github' | 'twitter' | 'facebook' | 'instagram';
  url: string;
}

export interface SourinHeaderData {
  brandName: string;
  navLinks: NavLink[];
  socialLinks: SocialLinkItem[];
}

export interface SourinHeroData {
  headline: string;
  subHeadline: string;
  ctaProjectsText: string;
  ctaContactText: string;
  photoUrl: string;
  dataAiHintPhoto: string;
}

export interface AboutMeData {
  headline: string;
  summaryPoints: string[];
  education: string[];
  internship: string;
  personalSkills: string[];
}

export interface SourinSkill {
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'; // Optional for skill bars later
}

export interface SourinSkillCategory {
  categoryName: string;
  skills: SourinSkill[];
  iconName?: string; // For Lucide icon
}

export interface LanguageSkill {
  name: string;
  proficiency: string;
}

export interface SourinSkillsPageData {
  headline: string;
  categories: SourinSkillCategory[];
  languages: LanguageSkill[];
}

export interface SourinProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  teamSize?: number;
  imageUrl?: string;
  dataAiHintImage?: string;
  repoUrl?: string;
  liveDemoUrl?: string;
}

export interface SourinProjectsPageData {
  headline: string;
  projects: SourinProjectData[];
}

export interface AchievementData {
  headline: string;
  achievements: string[];
}

export interface SourinContactInfo {
  headline: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string; // Added for footer/contact links
  location: string;
}

export interface FooterData {
  copyrightText: string;
  socialLinks: SocialLinkItem[];
}


// --- General PortfolioPrint types (can be phased out or kept for other uses) ---
export interface ContactInfo { // Used by original ContactSection and IntroductionSection
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface IntroductionData { // Used by original IntroductionSection
  name: string;
  title: string;
  professionalSummary: string;
  photoUrl: string;
  contact: ContactInfo;
}

export interface SkillCategory { // Used by original SkillsSection
  categoryName: string;
  skills: string[];
  iconName?: string;
}

export interface ProjectData { // Used by original ProjectCard/ProjectsSection
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  dataAiHint?: string;
  shortDescription: string;
  detailedDescription?: string;
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
}

// --- Emma Holistic Specific Types (can be removed if not used elsewhere) ---
export interface EmmaHeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string; // Icon name from lucide-react
}

export interface EmmaBulletPoint {
  lead: string;
  text: string;
}

export interface EmmaHeroData {
  siteName: string;
  mainHeading: string;
  description: string;
  bulletPoints: EmmaBulletPoint[];
  mainImageUrl: string;
  navLinks: NavLink[]; // Reuses NavLink
  socialLinks: { // Emma's specific social links
    youtube?: string;
    twitter?: string;
    facebook?: string;
    tiktok?: string;
    instagram?: string;
  };
  buttons: EmmaHeroButton[];
  contactEmail: string;
}
