// src/components/portfolio-sourin/ProjectCardSourin.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import type { SourinProjectData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Info, Users } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardSourinProps {
  project: SourinProjectData;
}

export default function ProjectCardSourin({ project }: ProjectCardSourinProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <Card className="flex flex-col h-full shadow-md hover:shadow-lg transition-shadow print-shadow-none print-break-inside-avoid">
      <CardHeader className="p-4">
        {project.imageUrl && (
          <div className="relative w-full h-48 mb-4 rounded-t-md overflow-hidden group">
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transform group-hover:scale-105 transition-transform duration-300"
              data-ai-hint={project.dataAiHintImage || "project image"}
            />
             {project.liveDemoUrl && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button asChild variant="secondary" size="sm">
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                </div>
              )}
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-primary print-text-black">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <p className="text-foreground/80 text-sm leading-relaxed mb-3 print-text-black line-clamp-3">
          {project.description}
        </p>
        <div className="mb-3">
          <h4 className="text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wider">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-primary/50 text-primary/80">{tech}</Badge>
            ))}
          </div>
        </div>
        {project.teamSize && (
          <div className="text-sm text-muted-foreground flex items-center">
            <Users className="mr-2 h-4 w-4" /> Team Size: {project.teamSize}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex gap-2 print-hidden">
          <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-primary hover:bg-primary/5">
                <Info className="mr-2 h-4 w-4" /> Details
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4 prose prose-sm max-w-none dark:prose-invert print-text-black">
                <p>{project.description}</p>
                <h4 className="font-semibold mt-4">Technologies Used:</h4>
                <ul className="list-disc pl-5">
                  {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                {project.teamSize && <p className="mt-2"><strong>Team Size:</strong> {project.teamSize}</p>}
              </div>
              <DialogFooter>
                <Button onClick={() => setIsDetailsOpen(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-2">
          {project.repoUrl && (
            <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent/80">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source
              </a>
            </Button>
          )}
          {project.liveDemoUrl && (
             <Button asChild variant="ghost" size="sm" className="text-accent hover:text-accent/80 md:hidden">
                <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
