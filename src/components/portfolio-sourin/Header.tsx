// src/components/portfolio-sourin/Header.tsx
"use client";

import type { SourinHeaderData, SocialLinkItem } from '@/types';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Linkedin, Github, Twitter, Facebook, Instagram } from 'lucide-react'; // Assuming you might add more later
import { useState, useEffect } from 'react';

interface HeaderProps {
  data: SourinHeaderData;
}

const socialIconMap: { [key: string]: JSX.Element } = {
  linkedin: <Linkedin className="h-5 w-5" />,
  github: <Github className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
};

export default function Header({ data }: HeaderProps) {
  const { brandName, navLinks, socialLinks } = data;
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (isMobile: boolean = false) => (
    navLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent ${isMobile ? 'block w-full text-left hover:bg-accent/10' : 'hover:bg-transparent'}`}
        onClick={() => isMobile && setIsSheetOpen(false)}
      >
        {link.label}
      </Link>
    ))
  );

  const renderSocialLinks = () => (
    socialLinks.map((link) => (
      <a
        key={link.platform}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-accent transition-colors p-2"
        aria-label={`Sourin Dey on ${link.platform}`}
      >
        {socialIconMap[link.platform] || <span>{link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}</span>}
      </a>
    ))
  );

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 print-no-sticky ${isScrolled ? 'bg-background/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
              {brandName}
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-1 text-primary">
            {renderNavLinks()}
          </nav>
          <div className="hidden md:flex items-center space-x-1">
            {renderSocialLinks()}
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary hover:text-accent">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-4">
                <div className="flex flex-col space-y-4">
                  <Link href="#home" className="text-xl font-bold text-primary mb-4" onClick={() => setIsSheetOpen(false)}>
                    {brandName}
                  </Link>
                  <nav className="flex flex-col space-y-2 text-primary">
                    {renderNavLinks(true)}
                  </nav>
                  <div className="border-t pt-4">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Connect</p>
                    <div className="flex items-center space-x-2">
                      {renderSocialLinks()}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
