// src/components/portfolio-sourin/Footer.tsx
import type { FooterData, SocialLinkItem } from '@/types';
import { Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  data: FooterData;
}

const socialIconMap: { [key: string]: JSX.Element } = {
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export default function Footer({ data }: FooterProps) {
  const { copyrightText, socialLinks } = data;

  return (
    <footer className="bg-primary text-primary-foreground py-8 print-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-accent transition-colors"
              aria-label={`Sourin Dey on ${link.platform}`}
            >
              {socialIconMap[link.platform] || <span>{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>}
            </a>
          ))}
        </div>
        <p className="text-sm text-primary-foreground/70">{copyrightText}</p>
      </div>
    </footer>
  );
}
