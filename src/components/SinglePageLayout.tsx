'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Github, Instagram, MapPin } from 'lucide-react';
import { useRef } from 'react';

const SinglePageLayout = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full h-full">
          
          {/* Columna izquierda - Foto, navegación y contacto */}
          <motion.div 
            className="flex flex-col justify-between overflow-y-auto pr-4 h-full py-8 scrollbar-thin"
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
              <h1 className="text-3xl font-bold text-white tracking-tight">
                Michel Cano
              </h1>
            </div>
            
            {/* Navegación simplificada */}
            <div className="my-auto py-8">
              <motion.a 
                href="#" 
                onClick={() => scrollToSection(aboutRef)}
                className="block text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Sobre Mí
              </motion.a>
              
              <motion.a 
                href="#" 
                onClick={() => scrollToSection(servicesRef)}
                className="block text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Services
              </motion.a>
              
              <motion.a 
                href="#" 
                onClick={() => scrollToSection(portfolioRef)}
                className="block text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Portfolio
              </motion.a>
              
              <motion.a 
                href="#" 
                onClick={() => scrollToSection(skillsRef)}
                className="block text-xl font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 mb-3"
                whileHover={{ x: 3 }}
              >
                Skills
              </motion.a>
            </div>
            
            {/* Contacto */}
            <div>
              <div className="flex flex-col gap-3">
                <motion.a
                  href="mailto:bmichelcano@gmail.com"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-mono text-sm"
                  whileHover={{ x: 3 }}
                >
                  <Mail size={18} className="text-blue-400" />
                  <span>bmichelcano@gmail.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/lehcimhdz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-mono text-sm"
                  whileHover={{ x: 3 }}
                >
                  <Github size={18} className="text-blue-400" />
                  <span>GitHub</span>
                </motion.a>
                
                <motion.a
                  href="https://instagram.com/chlehcim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 font-mono text-sm"
                  whileHover={{ x: 3 }}
                >
                  <Instagram size={18} className="text-blue-400" />
                  <span>Instagram</span>
                </motion.a>
                
                <motion.div
                  className="flex items-center gap-2 text-gray-300 font-mono text-sm"
                  whileHover={{ x: 3 }}
                >
                  <MapPin size={18} className="text-blue-400" />
                  <span>Ciudad de México, México</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Columna derecha - Secciones */}
          <motion.div 
            className="flex flex-col overflow-y-auto pl-4 h-full py-8 scrollbar-thin"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Sección Sobre Mí */}
            <div ref={aboutRef} className="mb-16">
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
                  <span className="font-mono text-blue-400 font-medium">
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
            </div>
            
            {/* Sección Services */}
            <div ref={servicesRef} className="mb-16">
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Automatización de procesos</h3>
                    <p>Desarrollo de soluciones que automatizan tareas repetitivas y optimizan flujos de trabajo.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Desarrollo de IA</h3>
                    <p>Implementación de soluciones basadas en inteligencia artificial para resolver problemas complejos.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Análisis de datos</h3>
                    <p>Extracción de insights valiosos a partir de grandes volúmenes de información.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Desarrollo web</h3>
                    <p>Creación de aplicaciones web modernas y responsivas con las últimas tecnologías.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sección Portfolio */}
            <div ref={portfolioRef} className="mb-16">
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Sistema de atención CEAVI</h3>
                    <p>Plataforma integral para la gestión de casos y seguimiento de víctimas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Automatización Espacio Político</h3>
                    <p>Sistema de monitoreo y análisis automatizado de información legislativa.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Análisis legislativo</h3>
                    <p>Herramientas de procesamiento de lenguaje natural para análisis de iniciativas y dictámenes.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sección Skills */}
            <div ref={skillsRef}>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">Python</h3>
                    <p className="text-sm">Data Science, Automation, Web Scraping</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">JavaScript</h3>
                    <p className="text-sm">React, Next.js, Node.js</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">SQL</h3>
                    <p className="text-sm">PostgreSQL, MySQL, SQLite</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">n8n</h3>
                    <p className="text-sm">Workflow Automation, API Integration</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="text-blue-400 text-2xl">•</div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">React/Next.js</h3>
                    <p className="text-sm">Frontend Development, SSR, Static Sites</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageLayout; 