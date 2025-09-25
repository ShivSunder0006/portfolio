import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import ProjectModal from "./components/ProjectModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects setSelectedProject={setSelectedProject} />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;
