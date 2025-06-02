import { Separator } from '@/components/ui/separator';
import Header from '@/components/portfolio-sourin/Header';
import HeroSection from '@/components/portfolio-sourin/HeroSection';
import AboutMeSection from '@/components/portfolio-sourin/AboutMeSection';
import SkillsSection from '@/components/portfolio-sourin/SkillsSection';
import ProjectsSection from '@/components/portfolio-sourin/ProjectsSection';
import AchievementsSection from '@/components/portfolio-sourin/AchievementsSection';
import ContactSection from '@/components/portfolio-sourin/ContactSection';
import Footer from '@/components/portfolio-sourin/Footer';

import { 
  sourinHeaderData,
  sourinHeroData,
  aboutMeData,
  sourinSkillsData,
  sourinProjectsData,
  achievementsData,
  sourinContactData,
  footerData
} from '@/lib/data';

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground"> {/* REMOVED bg-background */}
      <Header data={sourinHeaderData} />
      
      <main className="flex-grow">
        <HeroSection data={sourinHeroData} />
        
        <AboutMeSection data={aboutMeData} />
        <Separator className="my-0 print-hidden" /> {/* Adjusted for section transition */}
        
        <SkillsSection data={sourinSkillsData} />
        <Separator className="my-0 print-hidden" />
        
        <ProjectsSection data={sourinProjectsData} />
        <Separator className="my-0 print-hidden" />
        
        <AchievementsSection data={achievementsData} />
        <Separator className="my-0 print-hidden" />
        
        <ContactSection data={sourinContactData} />
      </main>
      
      <Footer data={footerData} />
    </div>
  );
}
