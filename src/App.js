import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Bee from './components/Bee'; // ✅ Import Bee

function App() {
  return (
    <>
      <Navbar />
      <Bee /> {/* ✅ Render Bee */}
      <div className="font-sans flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
