import AppHeader from '@/components/app/AppHeader'; // Updated path
import HeroSection from '@/components/app/HeroSection'; // Updated path
import { heroData } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AppHeader 
        siteName={heroData.siteName}
        navLinks={heroData.navLinks}
        socialLinks={heroData.socialLinks}
      />
      <HeroSection heroData={heroData} />
      {/* Footer can be added here if desired, example did not have a prominent one */}
    </div>
  );
}
