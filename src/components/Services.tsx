'use client';

import { motion } from 'framer-motion';
import { Code, Database, Zap, LineChart } from 'lucide-react';

const services = [
  {
    title: 'Análisis Exploratorio de Datos',
    description: 'Desarrollo análisis exhaustivos para descubrir patrones, tendencias y insights ocultos en tus datos, utilizando Python, R y herramientas avanzadas de visualización.',
    icon: <LineChart className="w-10 h-10 text-blue-400" />,
    delay: 0.1
  },
  {
    title: 'Automatización de Procesos',
    description: 'Diseño e implemento soluciones automatizadas para optimizar flujos de trabajo, reducir errores manuales y aumentar la eficiencia operativa.',
    icon: <Zap className="w-10 h-10 text-purple-400" />,
    delay: 0.2
  },
  {
    title: 'Web Scraping & ETL',
    description: 'Extracción, transformación y carga de datos desde múltiples fuentes web, creando pipelines robustos para el análisis de datos.',
    icon: <Database className="w-10 h-10 text-green-400" />,
    delay: 0.3
  },
  {
    title: 'Consultoría en Ciencia de Datos',
    description: 'Te guío en la implementación de estrategias de datos, desde la conceptualización hasta la puesta en marcha de soluciones analíticas.',
    icon: <Code className="w-10 h-10 text-pink-400" />,
    delay: 0.4
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Servicios
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Soluciones tecnológicas avanzadas para transformar tu negocio
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card neon-border p-8 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0, 170, 255, 0.2)' }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-300 flex-grow">{service.description}</p>
                <motion.div 
                  className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: service.delay + 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 