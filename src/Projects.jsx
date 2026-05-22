import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { portfolioData } from './portfolioData';
import './Projects.css';

function Projects() {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className={`projects ${isDark ? 'dark' : 'light'}`}>
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="filter-section">
          <div className="category-buttons">
            {portfolioData.projectCategories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {project.image}
              </div>
              
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className="project-category-badge">{portfolioData.projectCategories.find(c => c.id === project.category)?.name}</span>
              </div>

              <p className="project-description">{project.description}</p>
              
              <p className="project-long-description">{project.longDescription}</p>

              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  <span>💻 GitHub</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                  <span>🌐 Live Demo</span>
                </a>
                <a href={project.videoDemo} target="_blank" rel="noopener noreferrer" className="project-link video-link">
                  <span>▶️ Video</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
