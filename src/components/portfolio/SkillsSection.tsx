"use client";

import { useState } from 'react';
import type { SkillCategory } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Tag } from 'lucide-react';
import AISummaryGenerator from './AISummaryGenerator'; // Ensure this path is correct

interface SkillsSectionProps {
  data: SkillCategory[];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const [isAISummaryOpen, setIsAISummaryOpen] = useState(false);
  const [selectedSkillText, setSelectedSkillText] = useState("");

  const handleOpenAISummary = (categoryName: string, skills: string[]) => {
    const textForAI = `Category: ${categoryName}\nSkills: ${skills.join(', ')}\n\nDescribe how these skills are applied or their importance.`;
    setSelectedSkillText(textForAI);
    setIsAISummaryOpen(true);
  };


  return (
    <Card className="w-full shadow-lg mt-8 print-shadow-none print-break-inside-avoid">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold text-primary print-text-black">Skills</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => handleOpenAISummary("Overall Skills", data.flatMap(cat => cat.skills))}
          className="print-hidden"
        >
          <Sparkles className="mr-2 h-4 w-4 text-accent" />
          Generate Skills Overview
        </Button>
      </CardHeader>
      <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((category, index) => (
          <div key={index} className="p-4 rounded-lg border bg-background hover:shadow-md transition-shadow print-shadow-none">
            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center print-text-black">
              {category.icon ? <category.icon className="h-5 w-5 mr-2 text-accent" /> : <Tag className="h-5 w-5 mr-2 text-accent" />} 
              {category.categoryName}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  <Badge variant="secondary" className="text-sm font-normal py-1 px-2.5">{skill}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardContent>
       <AISummaryGenerator
        isOpen={isAISummaryOpen}
        setIsOpen={setIsAISummaryOpen}
        initialText={selectedSkillText}
        contentType="skill"
        onSummaryGenerated={(summary) => {
          // Potentially update state here or display it, for now, it's just for copy
          console.log("Generated skill summary:", summary);
        }}
      />
    </Card>
  );
}
