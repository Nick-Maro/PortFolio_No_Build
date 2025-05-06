import React from 'react';
import './Achievements.css';

const careerMilestones = [
  {
    year: 2025,
    title: "Olicyber National Finals",
    description: "Qualified for the national cybersecurity competition finals, ranking among the top 100 high school students in Italy in the cybersecurity sector.",
    color: "#A78BFA",
    isCurrent: true
  },
  {
    year: 2025,
    title: "PascalCTF Competition",
    rank: "107th Place",
    description: "Competed in a cybersecurity challenge, showcasing technical skills and problem-solving abilities.",
    color: "#FF6B6B"
  },
  {
    year: 2025,
    title: "IT Essentials CISCO",
    description: "Currently studying for Cisco IT Essentials.",
    color: "#4A90E2",
    isCurrent: true
  },
  {
    year: 2024,
    title: "Internship at Aguazu – DTC Publicidad",
    description: "Performed regular maintenance and machinery installations, and contributed to the creation of graphics and websites. Helped install a high-quality, faster printer that improved document output speed by 10%, enhancing overall workflow efficiency.",
    color: "#3B82F6"
  }
  
  ,
  {
    year: 2023,
    title: "Cambridge B2 English",
    score: "158/200",
    description: "Official English evaluation",
    color: "#00E8A2"
  },
  {
    year: 2023,
    title: "EF College - New York City",
    description: "Training program with EF in New York City, where I developed English language proficiency and attended courses",
    color: "#6366F1"
  }
];

const Achievements = () => {
  return (
    <div className="achievements-timeline">
      <div className="timeline-track">
        <div className="timeline-line"></div>
        {careerMilestones.map((milestone, index) => (
          <div
            key={index}
            className={`timeline-milestone ${milestone.isCurrent ? 'current' : ''}`}
            style={{
              '--milestone-color': milestone.color,
              '--milestone-delay': `${index * 0.2}s`
            }}
          >
            <div className="milestone-marker" style={{ backgroundColor: milestone.color }}></div>
            <div className="milestone-content">
              <div className="milestone-header">
                <span className="milestone-icon">{milestone.icon}</span>
                <span className="milestone-year">{milestone.year}</span>
              </div>
              <h3 className="milestone-title">{milestone.title}</h3>
              {milestone.score && (
                <div className="milestone-metadata">
                  Score: {milestone.score}
                </div>
              )}
              {milestone.rank && (
                <div className="milestone-metadata">
                  Rank: {milestone.rank}
                </div>
              )}
              <p className="milestone-description">{milestone.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;