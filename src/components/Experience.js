import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: 'October 2024',
      title: 'IT Technician Intern',
      company: 'Aguazu – DTC Publicidad, Zaragoza, Spain',
      description: 'Performed regular maintenance and machinery installations and contributed to the creation of graphics and websites. Helped to install a high-quality, faster printer that improved document output speed by 10%, enhancing overall workflow efficiency.'
    },
    {
      id: 2,
      date: 'Summer 2024',
      title: 'Waiter',
      company: 'Hotel Relax, San Benedetto del Tronto, Italy',
      description: 'Managed customer orders and service in a dynamic environment, improving language skills in English and Spanish.'
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item clearfix">
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-company">{exp.company}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;