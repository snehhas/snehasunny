import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
