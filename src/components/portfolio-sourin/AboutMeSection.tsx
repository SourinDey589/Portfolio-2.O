// src/components/portfolio-sourin/AboutMeSection.tsx
import type { AboutMeData } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Briefcase, Users, Palette } from 'lucide-react';

interface AboutMeSectionProps {
  data: AboutMeData;
}

export default function AboutMeSection({ data }: AboutMeSectionProps) {
  const { headline, summaryPoints, education, internship, personalSkills } = data;

  return (
    <section id="about-me" className="py-16 md:py-24 text-foreground print-break-inside-avoid"> {/* REMOVED bg-secondary/30 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 print-text-black">{headline}</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <Card className="shadow-xl print-shadow-none bg-card/80 backdrop-blur-sm"> {/* ADDED bg-card/80 backdrop-blur-sm */}
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                {summaryPoints.map((point, index) => (
                  <p key={index} className="text-lg text-card-foreground/90 mb-4 leading-relaxed print-text-black"> {/* Ensure text color contrasts with card */}
                    {point}
                  </p>
                ))}
              </div>
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center print-text-black">
                    <GraduationCap className="h-6 w-6 mr-3 text-accent" /> Education
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-card-foreground/80 print-text-black"> {/* Ensure text color contrasts with card */}
                    {education.map((edu, index) => (
                      <li key={index}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center print-text-black">
                    <Briefcase className="h-6 w-6 mr-3 text-accent" /> Internship
                  </h3>
                  <p className="text-card-foreground/80 print-text-black">{internship}</p> {/* Ensure text color contrasts with card */}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-primary mb-4 flex items-center print-text-black">
                  <Palette className="h-6 w-6 mr-3 text-accent" /> Personal Skills & Hobbies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {personalSkills.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1.5 rounded-full print-bg-transparent print-text-black">
                      {skill}
                    </span>
                  ))}
                </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}
