
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/content';
import useScrollPosition from '@/hooks/useScrollPosition';

const Navbar = (): JSX.Element => {
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
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
          ? 'bg-slate-900/90 backdrop-blur-md border-slate-800 py-4'
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <nav className="container-custom flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-bold text-xl tracking-tight text-slate-100"
        >
          {personalInfo.name}
          <span className="text-blue-500">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <motion.button
              key={link.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-slate-400 hover:text-blue-500 transition-colors"
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-lg font-medium text-slate-400 hover:text-blue-500 py-2"
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