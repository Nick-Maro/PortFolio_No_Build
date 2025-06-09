import React from 'react';
import './about.css';
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div
            className="about-img"
            style={{
              maxWidth: "250px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
              src="foto.jpg"
              alt="Nicolò Marotta"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="about-text">
            <h3>I'm an aspiring <span>Software engineer</span></h3>
            <p>
              I am an aspiring software engineer with a strong passion
              for technology and problem-solving. I am looking for
              opportunities where I can apply my learnings in real-life
              situations and am open to diverse profiles where I can
              develop myself professionally. Feel free to reach out to
              me for any potential collaborations or job opportunities.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                Years of study
              </div>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                Projects Completed
              </div>
            </div>

            {}
            <div className="about-press" style={{ marginTop: "2rem" }}>
              <h4>In the Press</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <a
                    href="https://www.rivieraoggi.it/2025/05/29/416491/olimpiadi-cybersecurity-olicyber2025-ottimo-risultato-di-nicolo-marotta-nella-finale-nazionale/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Olimpiadi Cybersecurity Olicyber2025, ottimo risultato di Nicolò Marotta nella finale nazionale
                  </a>
                  <br />
                  <small>29 Maggio 2025 – Riviera Oggi</small>
                </li>
                <li style={{ marginTop: "0.5rem" }}>
                  <a
                    href="https://www.rivieraoggi.it/2025/05/12/415470/olimpiadi-di-cyber-sicurezza-il-giovanissimo-nicolo-marotta-rappresentera-le-marche-alla-finale-nazionale/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Olimpiadi di cyber sicurezza, il giovanissimo Nicolò Marotta rappresenterà le Marche alla finale nazionale
                  </a>
                  <br />
                  <small>12 Maggio 2025 – Riviera Oggi</small>
                </li>
              </ul>
            </div>
            {}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
