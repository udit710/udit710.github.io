"use client";

import { NextPage } from 'next';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Intro from './components/Intro';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import { useState, useEffect, useRef } from 'react';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Volunteering from './components/Volunteering';
import Education from './components/Education';
import Contact from './components/Contact';
import VisitorCount from './components/VisitorCount';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const [canScroll, setCanScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Function to handle intersection observer updates
  const handleIntersection = (entries: any[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    if (isMobile) return; // Skip scroll logic on mobile

    const handleScroll = () => {
      if (mainRef.current) {
        const rect = mainRef.current.getBoundingClientRect();
        setCanScroll(rect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

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
      <div className={`flex ${isMobile ? 'flex-col' : 'max-h-[100vh]'}`}>
        {!isMobile && <Sidebar activeSection={activeSection} />}
        <main
          ref={mainRef}
          className={`flex-1 p-10 w-[100%] ${
            isMobile
              ? ''
              : canScroll ? 'overflow-y-auto' : 'overflow-y-hidden'
          } overscroll-hidden`}
        >
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
            <VisitorCount />
          </section>
          <footer className="mt-10 py-6 border-t border-gray-200 text-center text-sm text-gray-500 font-[Times]">
            &copy; {new Date().getFullYear()} Udit Malshe. All rights reserved.
          </footer>
        </main>
      </div>
    </>
  );
};

export default Home;