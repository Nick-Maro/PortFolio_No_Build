import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/main.css';
import LeetCode from './components/LeetCode';
import Achievements from './components/Achievements';
function App() {
  useEffect(() => {

    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const navLinks = document.querySelectorAll('.nav-link');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div id="overlay" className="overlay"></div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements/>
      <Skills />
      <LeetCode/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;