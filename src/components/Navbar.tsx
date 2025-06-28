'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold text-blue-400"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Michel Cano
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-400 hover:text-blue-400 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-black/95 z-40 flex items-center justify-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.ul 
            className="flex flex-col items-center gap-8 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300" onClick={() => setIsOpen(false)}>
                Skills
              </a>
            </motion.li>
          </motion.ul>
          
          <button 
            className="absolute top-5 right-5 text-gray-400 hover:text-blue-400"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 