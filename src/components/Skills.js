
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPython, 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faJava, 

} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skills = [
    { id: 1, name: 'Python', icon: faPython },
    { id: 2, name: 'HTML', icon: faHtml5 },
    { id: 3, name: 'CSS', icon: faCss3Alt },
    { id: 4, name: 'JavaScript', icon: faJs },
    { id: 5, name: 'Java', icon: faJava },
    { id: 6, name: 'C++', icon: faCode } 
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.id} className="skill-card">
                <div className="skill-icon">
                  <FontAwesomeIcon icon={skill.icon} size="3x" />
                </div>
                <h4 className="skill-name">{skill.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;