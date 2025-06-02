
import type { NavLink, SocialLinks } from '@/types';
import { Youtube, Twitter, Facebook, MessageCircle } from 'lucide-react'; // MessageCircle for TikTok as placeholder
import Link from 'next/link';

interface AppHeaderProps {
  siteName: string;
  navLinks: NavLink[];
  socialLinks: SocialLinks;
}

const socialIconMap = {
  youtube: <Youtube className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  tiktok: <MessageCircle className="h-5 w-5" />, // Placeholder for TikTok
};

export default function AppHeader({ siteName, navLinks, socialLinks }: AppHeaderProps) {
  return (
    <header className="w-full py-4 px-6 md:px-10 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary hover:text-accent transition-colors">
          #{siteName.toUpperCase()}
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-3">
            {socialLinks.youtube && (
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                {socialIconMap.youtube}
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                {socialIconMap.twitter}
              </a>
            )}
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                {socialIconMap.facebook}
              </a>
            )}
            {socialLinks.tiktok && (
              <a href={socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
                {socialIconMap.tiktok}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
