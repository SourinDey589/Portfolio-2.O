import Image from 'next/image';
import type { IntroductionData } from '@/types';
import { Card, CardContent } from '@/components/ui/card'; // CardHeader, CardTitle removed as not used in this version
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';

interface IntroductionSectionProps {
  data: IntroductionData;
}

// This component is no longer the primary display for introduction but can be kept for other uses or a more detailed "About Me" page.
// For the new design, HeroSection.tsx handles the main intro.
export default function IntroductionSection({ data }: IntroductionSectionProps) {
  const { name, title, professionalSummary, photoUrl, contact } = data;

  return (
    <Card className="w-full shadow-lg print-shadow-none print-break-inside-avoid">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <Image
              src={photoUrl}
              alt={name}
              width={150}
              height={150}
              className="rounded-full border-4 border-primary shadow-md"
              data-ai-hint="professional portrait"
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-primary print-text-black">{name}</h1>
            <p className="text-xl text-accent font-medium mt-1">{title}</p>
            <p className="mt-4 text-foreground/80 leading-relaxed print-text-black">
              {professionalSummary}
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="text-lg font-semibold text-primary mb-3 print-text-black">Contact Information</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center md:justify-start">
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Mail className="h-5 w-5 mr-2 text-accent group-hover:text-primary transition-colors" /> {contact.email}
              </a>
            )}
            {contact.phone && (
              <a href={`tel:${contact.phone}`} className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Phone className="h-5 w-5 mr-2 text-accent group-hover:text-primary transition-colors" /> {contact.phone}
              </a>
            )}
            {contact.linkedin && (
              <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Linkedin className="h-5 w-5 mr-2 text-accent group-hover:text-primary transition-colors" /> {contact.linkedin}
              </a>
            )}
            {contact.github && (
              <a href={`https://${contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Github className="h-5 w-5 mr-2 text-accent group-hover:text-primary transition-colors" /> {contact.github}
              </a>
            )}
            {contact.website && (
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-foreground hover:text-accent transition-colors group">
                <Globe className="h-5 w-5 mr-2 text-accent group-hover:text-primary transition-colors" /> {contact.website}
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
