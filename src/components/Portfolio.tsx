'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sistema de Registro de Víctimas Automatizado',
    description: 'Desarrollo de una solución integral para la Comisión Ejecutiva de Atención a Víctimas que automatiza el proceso de registro, eliminando la necesidad de completar documentos manualmente persona por persona.',
    technologies: ['Python', 'Pandas', 'Automatización'],
    delay: 0.1,
  },
  {
    title: 'Sistema de Notificaciones Automatizadas',
    description: 'Implementación de un sistema que automatiza el contacto con víctimas a través de WhatsApp, reemplazando el proceso manual de llamadas telefónicas y mejorando significativamente la eficiencia.',
    technologies: ['Python', 'WhatsApp API', 'Automatización'],
    delay: 0.2,
  },
  {
    title: 'Análisis Exploratorio de Datos - Honduras',
    description: 'Análisis exhaustivo de datos para tesis de investigación, aplicando técnicas avanzadas de EDA para descubrir patrones y tendencias en datos socioeconómicos.',
    technologies: ['Python', 'R', 'EDA'],
    delay: 0.3,
  },
  {
    title: 'Análisis de Nuevo Laredo',
    description: 'Estudio exploratorio de datos sobre el municipio de Nuevo Laredo, Tamaulipas, proporcionando insights valiosos para la toma de decisiones políticas y sociales.',
    technologies: ['Python', 'Análisis Estadístico', 'Visualización'],
    delay: 0.4,
  },
  {
    title: 'Diplomado en Ciencia de Datos - MIDE',
    description: 'Participación en el módulo "Herramientas computacionales para el manejo de datos: Python" del Diplomado de ciencia de datos del MIDE, desarrollando habilidades avanzadas en análisis de datos.',
    technologies: ['Python', 'Jupyter', 'Ciencia de Datos'],
    delay: 0.5,
  },
  {
    title: 'Análisis de Desapariciones CDMX',
    description: 'Proyecto de análisis de datos sobre desapariciones en la Ciudad de México, aplicando técnicas de ciencia de datos para comprender patrones y tendencias en este fenómeno social.',
    technologies: ['Python', 'Análisis Social', 'Datos Públicos'],
    delay: 0.6,
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Proyectos Destacados
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Soluciones reales que han transformado organizaciones
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-card neon-border p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 170, 255, 0.2)' }}
            >
              <h3 className="text-xl font-bold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="skill-tag text-xs py-1 px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  <span>Ver detalles</span>
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 