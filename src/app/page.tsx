import IntroductionSection from '@/components/portfolio/IntroductionSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import PrintButton from '@/components/portfolio/PrintButton';
import { introductionData, skillsData, projectsData } from '@/lib/data';
import { Separator } from '@/components/ui/separator';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12 print:p-2 print:max-w-full">
        <header className="mb-8 text-center print-hidden">
          <h1 className="text-4xl font-bold text-primary">PortfolioPrint</h1>
          <p className="text-muted-foreground">My Professional Showcase</p>
        </header>

        <div className="space-y-12">
          <section id="introduction">
            <IntroductionSection data={introductionData} />
          </section>

          <Separator className="my-8 print-hidden" />

          <section id="skills">
            <SkillsSection data={skillsData} />
          </section>

          <Separator className="my-8 print-hidden" />

          <section id="projects">
            <ProjectsSection data={projectsData} />
          </section>

          <Separator className="my-8 print-hidden" />
          
          <section id="contact">
            <ContactSection contactInfo={introductionData.contact} />
          </section>
        </div>
        
        <footer className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm print-hidden">
          <p>&copy; {new Date().getFullYear()} {introductionData.name}. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </footer>

      </div>
      <PrintButton />
    </div>
  );
}
