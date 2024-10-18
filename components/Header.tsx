"use client"

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          小森貴文
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#skills" className="hover:text-primary">Skills</Link>
          <Link href="#portfolio" className="hover:text-primary">Portfolio</Link>
          <Link href="#blog" className="hover:text-primary">Blog</Link>
          <Link href="#certifications" className="hover:text-primary">Certifications</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 p-4 bg-background/90 backdrop-blur-sm">
            <Link href="#about" className="hover:text-primary" onClick={toggleMenu}>About</Link>
            <Link href="#skills" className="hover:text-primary" onClick={toggleMenu}>Skills</Link>
            <Link href="#portfolio" className="hover:text-primary" onClick={toggleMenu}>Portfolio</Link>
            <Link href="#blog" className="hover:text-primary" onClick={toggleMenu}>Blog</Link>
            <Link href="#certifications" className="hover:text-primary" onClick={toggleMenu}>Certifications</Link>
            <Link href="#contact" className="hover:text-primary" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;