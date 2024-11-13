"use client";

import { NextPage } from 'next';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Intro from './components/Intro';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import { useState, useEffect } from 'react';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Volunteering from './components/Volunteering';
import Education from './components/Education';
import Contact from './components/Contact';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('');
  // const [isDark, setIsDark] = useState(false);

  // Function to handle intersection observer updates
  const handleIntersection = (entries: any[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersection, options);
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <Nav />
      <About />
      <div className='flex max-h-[100vh] '>
        <Sidebar activeSection={activeSection} />
        <main className="flex-1 p-10 lg:overflow-y-auto scroll-smooth overflow-x-hidden">
          <section id='about'>
            <Intro />
          </section>
          <section id='experience'>
            <Experience />
          </section>
          <section id='skills'>
            <Skills />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='achievements'>
            <Achievements />
          </section>
          <section id='education'>
            <Education />
          </section>
          <section id='volunteering'>
            <Volunteering />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
