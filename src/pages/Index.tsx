import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Education from "@/components/portfolio/Education";
import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground antialiased">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Education />
    <Projects />
    <Contact />
  </main>
);

export default Index;
