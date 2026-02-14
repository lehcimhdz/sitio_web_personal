
'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/content';
import { MapPin, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background glow effect - subtle and professional */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-800/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-500 font-mono text-sm tracking-wider mb-4">
              Hi, I'm {personalInfo.name}
            </h2>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Data Engineer.
            <br />
            <span className="text-slate-400">
              Architecting scalable data platforms.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={scrollToExperience}
              className="btn-primary group"
            >
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="mailto:bmichelcano@gmail.com"
              className="btn-secondary inline-flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-500 text-slate-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links & Location */}
          <motion.div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-slate-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>

            <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full" />

            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:bmichelcano@gmail.com"
                className="hover:text-blue-500 transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;