
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-900 min-h-screen">
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