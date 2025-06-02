// src/components/portfolio-sourin/ProjectsSection.tsx
import type { SourinProjectsPageData } from '@/types';
import ProjectCardSourin from './ProjectCardSourin'; // Ensure this is the correct adapted component

interface ProjectsSectionProps {
  data: SourinProjectsPageData;
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const { headline, projects } = data;

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30 text-foreground print-break-inside-avoid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 print-text-black">{headline}</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCardSourin key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No projects to display yet. Add your projects here!</p>
        )}
      </div>
    </section>
  );
}
