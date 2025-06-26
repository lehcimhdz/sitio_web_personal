'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card neon-border p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen de perfil */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500/30">
                  <Image
                    src="/img/profile-photo.jpg"
                    alt="Michel Cano"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contenido */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-white mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Sobre Mí
                </span>
              </motion.h2>

              <motion.div
                className="space-y-4 text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-lg">
                  Hola, soy <span className="text-blue-400 font-semibold">Michel Cano</span>. 
                  Soy un apasionado de la automatización y la inteligencia artificial. 
                  Cuento con más de tres años de experiencia en ciencia de datos, 
                  automatización, inteligencia artificial y desarrollo de soluciones 
                  tecnológicas que han transformado instituciones públicas.
                </p>

                <p className="text-lg">
                  Además, poseo amplia experiencia y dominio de{' '}
                  <span className="text-purple-400 font-semibold">
                    Python, Javascript, SQL, n8n
                  </span>, 
                  entre otras herramientas.
                </p>

                <p className="text-lg">
                  Cuento con resultados comprobables en la{' '}
                  <span className="text-blue-400 font-semibold">CEAVI</span> 
                  (Comisión Ejecutiva de Atención a Víctimas) y la{' '}
                  <span className="text-blue-400 font-semibold">
                    Agencia Legislativa Espacio Político
                  </span>{' '}
                  en la Ciudad de México, donde he desarrollado soluciones 
                  innovadoras que han mejorado la eficiencia, reducido la carga 
                  de trabajo, la necesidad de personal y han mejorado la calidad 
                  de los servicios en favor de la ciudadanía y los clientes.
                </p>

                <p className="text-lg">
                  Mi objetivo es utilizar las herramientas tecnológicas para 
                  ayudarte a transformar tu negocio y mejorar la calidad de 
                  tus servicios, reduciendo costos y aumentando la eficiencia 
                  de tus procesos.
                </p>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">3+</div>
                  <div className="text-sm text-gray-400">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-400">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-sm text-gray-400">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Soporte</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 