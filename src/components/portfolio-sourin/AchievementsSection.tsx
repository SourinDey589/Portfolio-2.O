// src/components/portfolio-sourin/AchievementsSection.tsx
import type { AchievementData } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Award, CheckCircle, Star } from 'lucide-react';

interface AchievementsSectionProps {
  data: AchievementData;
}

export default function AchievementsSection({ data }: AchievementsSectionProps) {
  const { headline, achievements } = data;
  const icons = [<Award className="h-5 w-5 mr-3 text-accent flex-shrink-0" />, <CheckCircle className="h-5 w-5 mr-3 text-accent flex-shrink-0" />, <Star className="h-5 w-5 mr-3 text-accent flex-shrink-0" />];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-background text-foreground print-break-inside-avoid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 print-text-black">{headline}</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-xl print-shadow-none">
            <CardContent className="p-6 md:p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start text-lg text-foreground/90 print-text-black">
                    {icons[index % icons.length]}
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
