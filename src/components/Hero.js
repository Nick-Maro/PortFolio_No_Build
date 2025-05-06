import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import 'font-awesome/css/font-awesome.min.css';  

const Hero = () => {
  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    
    <section id="home">
      
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Nicolò Marotta</span></h1>
          <p className="hero-subtitle">Tech Enthusiast passionate about creating innovative solutions</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn" onClick={(e) => smoothScroll(e, '#contact')}>Contact Me</a>
            <a href="#about" className="btn btn-outline" onClick={(e) => smoothScroll(e, '#about')}>About Me</a>
          </div>
          <div className="social-links">
      <a href="https://github.com/Nick-Maro/" className="social-link" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} className="social-icon" />
      </a>
    </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;