"use client";

import { useState } from 'react';
import type { ProjectData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import AISummaryGenerator from './AISummaryGenerator';

interface ProjectsSectionProps {
  data: ProjectData[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
  const [isAISummaryOpen, setIsAISummaryOpen] = useState(false);
  // For a new project idea
  const newProjectInitialText = "Describe a new project idea: What problem does it solve? What are its key features? What technologies might be used? Who is the target audience?";

  return (
    <Card className="w-full shadow-lg mt-8 print-shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-primary print-text-black">Projects</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => setIsAISummaryOpen(true)}
          className="print-hidden"
        >
          <Sparkles className="mr-2 h-4 w-4 text-accent" />
          Get AI Idea for Project Description
        </Button>
      </CardHeader>
      <CardContent className="p-6">
        {data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No projects to display yet. Add your projects here!</p>
        )}
      </CardContent>
      <AISummaryGenerator
        isOpen={isAISummaryOpen}
        setIsOpen={setIsAISummaryOpen}
        initialText={newProjectInitialText} // For a generic project idea
        contentType="project"
        // onSummaryGenerated can be used to display this new idea, perhaps in a toast or a dedicated area
      />
    </Card>
  );
}
