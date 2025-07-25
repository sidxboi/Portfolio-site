import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  return (
    <div className="bg-[var(--navy)] text-gray-100 overflow-x-hidden">
      <Navigation />
      <FloatingParticles />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
