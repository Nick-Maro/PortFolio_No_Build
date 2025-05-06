import React, { useState, useEffect } from 'react';
import './Projects.css';
import VideoModal from './VideoModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const projects = [
    {
      id: 1,
      title: '"This" E-commerce',
      description: 'A project that utilizes multiple APIs with the goal of creating a complete store.',
      image: 'image4.png',
      tech: ['API Integration', 'E-commerce','Full stack'],
      hostedLink: 'https://this-ecommerce-store.netlify.app/',
      sourceLink: 'https://github.com/Nick-Maro/This_Ecommerce_Backend',
      imageStyle: 'webapp-img',
      bg: '#222222'
    },
    {
      id: 2,
      title: 'Olicyber stats Readme',
      description: 'Contributed to the development of a card displaying key statistics and insights derived from data obtained from the OliCyber training platform, organizing and structuring the data to create clear and informative visual representations',
      image: 'olicyber.png',
      tech: ['GitHub','TeamWork'],
      sourceLink: 'https://github.com/utcq/ocbadge',
      imageStyle: 'webapp-img',
      bg: '#0d0c16'
    },
    {
      id: 3,
      title: 'Legacy-BLE-Distance-Tracker-Android',
      description: 'An Android project that tracks BLE devices and calculates their distance using RSSI.',
      image: 'image6.png',
      tech: ['Android', 'BLE', 'RSSI', 'Java'],
      liveLink: '#',
      sourceLink: 'https://github.com/Nick-Maro/Legacy-BLE-Distance-Tracker-Android',
      imageStyle: 'phone-img',
      bg: '#110303'
    },
    {
      id: 4,
      title: 'Tkinter DB Login',
      description: 'A simple Tkinter-based application for database login management.',
      image: 'image2.png',
      tech: ['Python', 'Tkinter', 'SQL'],
      liveLink: 'https://www.youtube.com/embed/S9_eiL_j8bU',
      sourceLink: 'https://github.com/Nick-Maro/Tkinter_Db_Login',
      imageStyle: 'video-img',
      bg: '#0a0a0a'
    },
    {
      id: 5,
      title: 'Aim Trainer',
      description: 'An aim training application built to enhance your accuracy and speed.',
      image: 'image3.png',
      tech: ['Python', 'GUI'],
      liveLink: 'https://www.youtube.com/embed/FgzX8SddStQ',
      sourceLink: 'https://github.com/Nick-Maro/Aimtrainer',
      imageStyle: 'video-img',
      bg: '#121212'
    }
  ];
  
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const openVideoModal = (videoUrl) => {
    if (videoUrl && videoUrl !== '#') {
      setCurrentVideoUrl(videoUrl);
      setVideoModalOpen(true);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="carousel-container">
          <div
            className={`carousel-track ${isAnimating ? 'animating' : ''}`}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="carousel-slide">
                <div className="projects-grid">
                  {projects
                    .slice(slideIndex * projectsPerSlide, (slideIndex + 1) * projectsPerSlide)
                    .map((project) => (
                      <div key={project.id} className="project-card">
                        <div 
                          className={`project-img ${project.imageStyle || ''}`}
                          style={{ backgroundColor: project.bg || '#f5f5f5' }}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className={project.imageStyle === 'phone-img' ? "image-phone" : ""}
                          />
                          {project.liveLink && project.liveLink.includes('youtube.com/embed') && (
                            <div
                              className="project-overlay"
                              onClick={() => openVideoModal(project.liveLink)}
                            >
                              <button className="view-video-btn">Watch Video</button>
                            </div>
                          )}
                        </div>
                        <div className="project-content">
                          <h3 className="project-title">{project.title}</h3>
                          <p className="project-description">{project.description}</p>
                          <div className="project-tech">
                            {project.tech.map((tech, index) => (
                              <span key={index} className="tech-tag">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="project-links">
                            {project.hostedLink && (
                              <a
                                href={project.hostedLink}
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FontAwesomeIcon icon={faExternalLinkAlt} /> Visit Site
                              </a>
                            )}
                            {project.liveLink && project.liveLink.includes('youtube.com/embed') && (
                              <button
                                onClick={() => openVideoModal(project.liveLink)}
                                className="project-link video-btn"
                              >
                                <FontAwesomeIcon icon={faExternalLinkAlt} /> Watch Video
                              </button>
                            )}
                            <a
                              href={project.sourceLink}
                              className="project-link"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FontAwesomeIcon icon={faGithub} /> Source Code
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          {}
          <div className="carousel-navigation">
            <button
              onClick={prevSlide}
              className="carousel-btn prev-btn"
              disabled={isAnimating}
              aria-label="Previous slide"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="carousel-indicators">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                  disabled={isAnimating}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? 'true' : 'false'}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="carousel-btn next-btn"
              disabled={isAnimating}
              aria-label="Next slide"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
      {}
      <VideoModal
        videoUrl={currentVideoUrl}
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </section>
  );
};

export default Projects;