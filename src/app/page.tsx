
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Michel Cano',
    jobTitle: 'Data Engineer',
    url: 'https://michel-cano.netlify.app',
    sameAs: [
      'https://www.linkedin.com/in/michel-cano-hernández-5a0474225',
      'https://github.com/lehcimhdz'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mexico City',
      addressCountry: 'MX'
    },
    knowsAbout: ['Data Engineering', 'Python', 'SQL', 'ETL', 'System Architecture']
  };

  return (
    <main className="bg-slate-900 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}