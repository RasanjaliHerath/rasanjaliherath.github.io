import { useTheme } from './ThemeContext';
import { portfolioData } from './portfolioData';
import './About.css';

function About() {
  const { isDark } = useTheme();

  return (
    <section id="about" className={`about ${isDark ? 'dark' : 'light'}`}>
      <div className="about-container">
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-section">
            <h3>Education</h3>
            <div className="timeline">
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.institution}</h4>
                    <p className="degree">{edu.degree}</p>
                    <p className="period">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h3>Experience</h3>
            <div className="timeline">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                    <p className="description">{exp.description}</p>
                    <p className="period">{exp.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
