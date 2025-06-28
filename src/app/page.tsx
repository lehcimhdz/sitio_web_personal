import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import SinglePageLayout from '@/components/SinglePageLayout';

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <main className="h-screen">
        <SinglePageLayout />
      </main>
    </>
  );
} 