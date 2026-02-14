'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/content';
import { Database, Server, Code, Terminal, Brain, Layout } from 'lucide-react';

const Skills = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Backend Engineering': return <Server size={24} className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />;
      case 'Frontend & Tools': return <Layout size={24} className="text-slate-500 group-hover:text-purple-400 transition-colors duration-300" />;
      case 'Data Engineering & Automation': return <Database size={24} className="text-slate-500 group-hover:text-emerald-400 transition-colors duration-300" />;
      default: return <Code size={24} className="text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />;
    }
  };

  return (
    <section id="skills" className="section-padding bg-slate-900 border-y border-slate-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-400">
            A focused stack built for reliability and scale.
            From low-level system design to user-facing interfaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group card bg-slate-800/50 hover:bg-slate-800 transition-all border border-slate-700/50 hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-slate-900 text-slate-300 border border-slate-700 rounded-md hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;