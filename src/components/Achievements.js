import React from 'react';
import './Achievements.css';

const careerMilestones = [
  {
    year: 2025,
    title: "Olicyber2025 National Finals",
    rank: "51st Place out of 2600",
    description: "Qualified for the Olicyber2025 national finals, placing 51st out of 2600 high school competitors in Italy.",
    color: "#A78BFA",
    isCurrent: false
  },
  {
    year: 2025,
    title: "PascalCTF Competition",
    rank: "107th Place",
    description: "Competed in a cybersecurity challenge, demonstrating technical skills and problem-solving abilities.",
    color: "#FF6B6B"
  },
  {
    year: 2025,
    title: "Cisco IT Essentials",
    description: "Currently studying for the Cisco IT Essentials certification.",
    color: "#4A90E2",
    isCurrent: true
  },
  {
    year: 2024,
    title: "Internship at Aguazu – DTC Publicidad",
    description: "Performed routine maintenance and machinery installations, contributed to graphic and website development, and helped install a faster, higher-quality printer that boosted document output speed by 10%.",
    color: "#3B82F6"
  },
  {
    year: 2023,
    title: "Cambridge B2 English Certificate",
    score: "158/200",
    description: "Achieved a score of 158/200 on the Cambridge B2 English exam.",
    color: "#00E8A2"
  },
  {
    year: 2023,
    title: "EF College – New York City",
    description: "Completed an intensive English training program in New York City, enhancing language proficiency and cultural immersion.",
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
