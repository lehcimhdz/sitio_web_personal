'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/content';
import useScrollPosition from '@/hooks/useScrollPosition';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(20);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Work', id: 'experience' },
    { name: 'Stack', id: 'skills' },
    { name: 'Projects', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-900'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-custom flex justify-between items-center py-4">
        <a
          href="#home"
          className="font-mono text-sm text-neutral-300 hover:text-neutral-100 transition-colors"
        >
          {personalInfo.name}
        </a>

        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-amber-300 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-neutral-100 p-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950 border-b border-neutral-900 overflow-hidden"
          >
            <div className="container-custom py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-amber-300 py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
