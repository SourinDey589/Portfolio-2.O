
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
  icon?: React.ElementType;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  dataAiHint?: string;
  shortDescription: string;
  detailedDescription?: string; // Optional, for modal view
  technologies: string[];
  projectUrl?: string;
  repoUrl?: string;
}
