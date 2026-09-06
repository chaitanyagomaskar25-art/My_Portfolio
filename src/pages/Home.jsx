// src/pages/Home.jsx
import React from 'react';
import Projects from '../components/projects/Projects';
import Certificates from '../components/certificates/Certificates';
import Contact from '../components/contact/Contact';
import About from '../components/About';
import Education from '../components/education/Education';
import { Skills } from '../components/skills/Skills';

const Home = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden flex flex-col">
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default Home;