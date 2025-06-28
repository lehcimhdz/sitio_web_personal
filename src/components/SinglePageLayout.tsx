'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Github, Instagram, MapPin } from 'lucide-react';

const SinglePageLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[calc(100vh-120px)]">
          
          {/* Columna izquierda - Contacto y navegación */}
          <motion.div 
            className="flex flex-col gap-8 overflow-auto pr-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Nombre y foto */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500/30">
                <Image
                  src="/img/profile-photo.jpg"
                  alt="Michel Cano"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h1 className="text-3xl font-bold text-white">
                Michel Cano
              </h1>
            </div>
            
            {/* Contacto */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Contacto
              </h2>
              
              <div className="flex flex-col gap-3">
                <motion.a
                  href="mailto:bmichelcano@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Mail size={18} className="text-blue-400" />
                  <span>bmichelcano@gmail.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/lehcimhdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Github size={18} className="text-blue-400" />
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/chlehcim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  <Instagram size={18} className="text-blue-400" />
                  <span>Instagram</span>
                </motion.a>
                
                <motion.div
                  className="flex items-center gap-2 text-gray-300"
                  whileHover={{ x: 3 }}
                >
                  <MapPin size={18} className="text-blue-400" />
                  <span>Ciudad de México, México</span>
                </motion.div>
              </div>
            </div>
            
            {/* Navegación simplificada */}
            <div>
              <motion.a 
                href="#" 
                className="block text-2xl font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Services
              </motion.a>
              
              <motion.a 
                href="#" 
                className="block text-2xl font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Portfolio
              </motion.a>
              
              <motion.a 
                href="#" 
                className="block text-2xl font-bold text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Skills
              </motion.a>
            </div>
          </motion.div>
          
          {/* Columna derecha - Sobre mí */}
          <motion.div 
            className="flex flex-col overflow-auto pl-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Sobre Mí
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hola, soy <span className="text-blue-400 font-semibold">Michel Cano</span>. 
                Soy un apasionado de la automatización y la inteligencia artificial. 
                Cuento con más de tres años de experiencia en ciencia de datos, 
                automatización, inteligencia artificial y desarrollo de soluciones 
                tecnológicas que han transformado instituciones públicas.
              </p>

              <p>
                Además, poseo amplia experiencia y dominio de{' '}
                <span className="text-blue-400 font-semibold">
                  Python, Javascript, SQL, n8n
                </span>, 
                entre otras herramientas.
              </p>

              <p>
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
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-auto pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-sm text-gray-400">Proyectos Completados</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageLayout; 