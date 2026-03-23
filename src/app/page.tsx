
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import DataFlowBackground from '@/components/DataFlowBackground';

// Lazy load below-the-fold components
const Experience = dynamic(() => import('@/components/Experience'), { ssr: true });
const Skills = dynamic(() => import('@/components/Skills'), { ssr: true });
const Portfolio = dynamic(() => import('@/components/Portfolio'), { ssr: true });
const About = dynamic(() => import('@/components/About'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michel Cano',
    jobTitle: 'Python Developer & Backend Developer',
    url: 'https://michel-cano.netlify.app',
    sameAs: [
      'https://www.linkedin.com/in/michel-cano-hernández',
      'https://github.com/lehcimhdz'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mexico City',
      addressCountry: 'MX'
    },
    knowsAbout: ['Python', 'Backend Development', 'Django', 'FastAPI', 'Apache Airflow', 'AWS', 'Terraform', 'ETL Pipelines', 'Data Engineering', 'SQL']
  };

  return (
    <main className="min-h-screen relative selection:bg-cyan-500/20 selection:text-cyan-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background - Lightweight CSS Animation */}
      <DataFlowBackground />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}