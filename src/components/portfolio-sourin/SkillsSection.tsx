// src/components/portfolio-sourin/SkillsSection.tsx
import type { SourinSkillsPageData, SourinSkillCategory, LanguageSkill } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as LucideIcons from 'lucide-react'; // Import all to dynamically pick

interface SkillsSectionProps {
  data: SourinSkillsPageData;
}

const getIconComponent = (iconName?: string): React.ElementType => {
  if (iconName && LucideIcons[iconName as keyof typeof LucideIcons]) {
    return LucideIcons[iconName as keyof typeof LucideIcons] as React.ElementType;
  }
  return LucideIcons.Tag; // Default icon
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  const { headline, categories, languages } = data;

  return (
    <section id="skills" className="py-16 md:py-24 bg-background text-foreground print-break-inside-avoid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 print-text-black">{headline}</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category: SourinSkillCategory, index: number) => {
            const IconComponent = getIconComponent(category.iconName);
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow print-shadow-none">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary flex items-center print-text-black">
                    <IconComponent className="h-6 w-6 mr-3 text-accent" />
                    {category.categoryName}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm font-medium py-1 px-3">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center md:text-left print-text-black">Languages Known</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang: LanguageSkill, index: number) => (
              <Card key={index} className="shadow-md print-shadow-none">
                <CardContent className="p-4">
                  <p className="text-lg font-medium text-primary print-text-black">{lang.name}</p>
                  <p className="text-sm text-muted-foreground">{lang.proficiency}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
