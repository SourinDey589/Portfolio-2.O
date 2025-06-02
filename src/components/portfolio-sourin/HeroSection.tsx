// src/components/portfolio-sourin/HeroSection.tsx
import type { SourinHeroData } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, Briefcase, MessageSquare } from 'lucide-react';

interface HeroSectionProps {
  data: SourinHeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  const { headline, subHeadline, ctaProjectsText, ctaContactText, photoUrl, dataAiHintPhoto } = data;

  return (
    <section 
      id="home" 
      className="group min-h-screen flex items-center justify-center py-16 md:py-24 text-foreground [perspective:1200px]" // Removed bg-background
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            className="text-center md:text-left transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(-2deg)_translateZ(30px)_scale(1.01)]"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 mb-8 leading-relaxed">
              {subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
                <Link href="#projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  {ctaProjectsText}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 shadow-md hover:shadow-lg transition-shadow">
                <Link href="#contact">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {ctaContactText}
                </Link>
              </Button>
            </div>
          </div>
          <div 
            className="flex justify-center md:justify-end transition-transform duration-700 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(2deg)_translateZ(30px)_scale(1.01)]"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]">
              <Image
                src={photoUrl}
                alt="Sourin Dey - Aspiring Full Stack Developer"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-2xl border-4 border-accent/50"
                data-ai-hint={dataAiHintPhoto}
                priority
              />
            </div>
          </div>
        </div>
        <div className="text-center mt-16 md:mt-24 print-hidden">
          <Link href="#about-me" aria-label="Scroll to About Me section">
            <ArrowDown className="h-8 w-8 text-primary/70 animate-bounce hover:text-accent transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
}
