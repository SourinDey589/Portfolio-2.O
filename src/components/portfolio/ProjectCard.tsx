"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { ProjectData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye, Sparkles, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import AISummaryGenerator from './AISummaryGenerator';

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isAISummaryOpen, setIsAISummaryOpen] = useState(false);
  const [currentShortDescription, setCurrentShortDescription] = useState(project.shortDescription);
  
  const initialTextForAI = `Project Title: ${project.title}\nCategory: ${project.category}\nTechnologies: ${project.technologies.join(', ')}\nExisting short description (optional): ${project.shortDescription}\nDetailed description (if available): ${project.detailedDescription || 'N/A'}\n\nGenerate a concise and impactful short description.`;


  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow print-shadow-none print-break-inside-avoid">
      <CardHeader className="p-4">
        {project.thumbnailUrl && (
          <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={project.dataAiHint || "project image"}
            />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-primary print-text-black">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{project.category}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-foreground/80 text-sm leading-relaxed mb-3 print-text-black">
          {currentShortDescription}
        </p>
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex gap-2 print-hidden">
          {project.detailedDescription && (
            <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Info className="mr-2 h-4 w-4" /> Details
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.category}</DialogDescription>
                </DialogHeader>
                <div className="py-4 prose prose-sm max-w-none dark:prose-invert">
                  <p>{project.detailedDescription}</p>
                  <h4 className="font-semibold mt-4">Technologies Used:</h4>
                  <ul>
                    {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
                <DialogFooter>
                  <Button onClick={() => setIsDetailsOpen(false)}>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          <Button variant="outline" size="sm" onClick={() => setIsAISummaryOpen(true)}>
            <Sparkles className="mr-2 h-4 w-4 text-accent" /> AI Summary
          </Button>
        </div>
        <div className="flex gap-2">
          {project.projectUrl && (
            <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> View Project
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
      <AISummaryGenerator
        isOpen={isAISummaryOpen}
        setIsOpen={setIsAISummaryOpen}
        initialText={initialTextForAI}
        contentType="project"
        onSummaryGenerated={(summary) => {
          if (!summary.startsWith("AI could not generate a summary.")) {
             setCurrentShortDescription(summary); // Update the displayed summary
          }
        }}
      />
    </Card>
  );
}
