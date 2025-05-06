import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  
  const closeMenu = () => {
    setMenuActive(false);
  };
  
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
        

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="#home" className="logo">N.Marotta</a>
          <button className="hamburger" id="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuActive ? faTimes : faBars} />
          </button>
          <ul className={`nav-menu ${menuActive ? 'active' : ''}`} id="navMenu">
            <li><a href="#home" className="nav-link active" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
            <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
            <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
            <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;