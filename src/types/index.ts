
export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface IntroductionData {
  name: string;
  title: string;
  professionalSummary: string;
  photoUrl: string;
  contact: ContactInfo;
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
  iconName?: string;
}

export interface ProjectData {
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

// New types for the "Emma Holistic" design
export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLinks {
  youtube?: string;
  twitter?: string;
  facebook?: string;
  tiktok?: string;
  instagram?: string; // Added just in case
}

export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string; // Icon name from lucide-react
}

export interface BulletPoint {
  lead: string;
  text: string;
}

export interface HeroData {
  siteName: string;
  mainHeading: string;
  description: string;
  bulletPoints: BulletPoint[];
  mainImageUrl: string;
  navLinks: NavLink[];
  socialLinks: SocialLinks;
  buttons: HeroButton[];
  contactEmail: string;
}
