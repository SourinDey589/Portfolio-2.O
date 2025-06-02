
import type { HeroData } from '@/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Hash, Bell, Users, Play, Star, Youtube as YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

interface HeroSectionProps {
  heroData: HeroData;
}

const iconMap: { [key: string]: React.ElementType } = {
  Youtube: YoutubeIcon,
};

export default function HeroSection({ heroData }: HeroSectionProps) {
  return (
    <section className="flex-grow container mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center">
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2 lg:w-2/5 relative mb-10 md:mb-0 flex justify-center">
        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
          <Image
            src={heroData.mainImageUrl}
            alt="Emma Holistic"
            layout="fill"
            objectFit="cover"
            className="rounded-full shadow-2xl border-4 border-white"
            data-ai-hint="woman vlogger healthy food"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/70 hover:bg-white p-4 rounded-full shadow-lg transition-colors">
              <Play className="h-8 w-8 text-accent" />
            </button>
          </div>
          {/* Small circular icons */}
          <div
            className="absolute top-[10%] left-[-5%] bg-accent/80 text-accent-foreground p-3 rounded-full shadow-md w-14 h-14 flex items-center justify-center"
            data-ai-hint="hashtag icon"
          >
            <Hash className="w-6 h-6" />
          </div>
          <div
            className="absolute top-[30%] right-[-10%] bg-pink-300/80 text-pink-700 p-3 rounded-full shadow-md w-12 h-12 flex items-center justify-center"
            data-ai-hint="notification bell"
          >
            <Bell className="w-5 h-5" />
          </div>
          <div
            className="absolute bottom-[5%] left-[0%] bg-purple-300/80 text-purple-700 p-3 rounded-full shadow-md w-14 h-14 flex items-center justify-center"
            data-ai-hint="community users"
          >
            <Users className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Right Column - Text Content */}
      <div className="w-full md:w-1/2 lg:w-3/5 md:pl-12 lg:pl-20 text-center md:text-left">
        <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
          {heroData.mainHeading}
        </h1>
        <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
          {heroData.description}
        </p>
        <ul className="space-y-4 mb-10">
          {heroData.bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <Star className="h-5 w-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <p className="text-foreground">
                <span className="font-semibold text-primary">{point.lead}:</span> {point.text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {heroData.buttons.map((buttonInfo) => {
            const IconComponent = buttonInfo.icon ? iconMap[buttonInfo.icon] : null;
            return (
              <Button
                key={buttonInfo.label}
                asChild
                size="lg"
                className={
                  buttonInfo.variant === 'primary' 
                  ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                  : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground border border-accent/50'
                }
              >
                <Link href={buttonInfo.href}>
                  {IconComponent && <IconComponent className="mr-2 h-5 w-5" />}
                  {buttonInfo.label}
                </Link>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
