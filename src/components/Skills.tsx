'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'R', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'Pandas', level: 90 },
  { name: 'n8n', level: 85 },
  { name: 'Análisis de Datos', level: 95 },
  { name: 'Automatización', level: 90 },
  { name: 'Web Scraping', level: 85 },
  { name: 'Visualización', level: 80 },
  { name: 'Estadística', level: 85 },
  { name: 'ETL', level: 80 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologías y Herramientas
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Mi stack tecnológico para soluciones de datos y automatización
          </motion.p>
        </motion.div>

        <motion.div
          className="glass-card neon-border p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="text-sm text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.1 * index + 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="text-center p-4"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-sm text-gray-400">Años de Experiencia</div>
          </motion.div>
          <motion.div
            className="text-center p-4"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-sm text-gray-400">Proyectos Completados</div>
          </motion.div>
          <motion.div
            className="text-center p-4"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-sm text-gray-400">Satisfacción</div>
          </motion.div>
          <motion.div
            className="text-center p-4"
            whileHover={{ y: -5 }}
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-400">Soporte</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 