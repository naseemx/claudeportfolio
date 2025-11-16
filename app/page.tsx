import Navbar from '@/components/Navbar';
import HeroEnhanced from '@/components/HeroEnhanced';
import MarqueeSection from '@/components/MarqueeSection';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import ProjectsEnhanced from '@/components/ProjectsEnhanced';
import CaseStudy from '@/components/CaseStudy';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroEnhanced />
      <MarqueeSection />
      <About />
      <Skills />
      <MarqueeSection />
      <Services />
      <ProjectsEnhanced />
      <CaseStudy />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
