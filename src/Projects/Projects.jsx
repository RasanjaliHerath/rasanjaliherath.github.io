// Projects.jsx

import { useState } from 'react';
import { useTheme } from '../ThemeContext';
import { portfolioData } from '../portfolioData';
import './Projects.css';
import { MdKeyboardDoubleArrowDown }
from 'react-icons/md';

function Projects() {

  const { isDark } = useTheme();

  const [selectedCategory, setSelectedCategory] =
    useState('all');

  const [visibleProjects, setVisibleProjects] =
    useState(9);

  // CURRENT IMAGE INDEX
  const [currentImages, setCurrentImages] =
    useState({});

  // EXPAND DESCRIPTION
  const [expandedCards, setExpandedCards] =
    useState({});

  const filteredProjects =
    selectedCategory === 'all'
      ? portfolioData.projects
      : portfolioData.projects.filter(
          (p) => p.category === selectedCategory
        );

  const displayedProjects =
    filteredProjects.slice(0, visibleProjects);

  const handleCategoryChange = (categoryId) => {

    setSelectedCategory(categoryId);

    setVisibleProjects(8);
  };

  const loadMoreProjects = () => {

    setVisibleProjects((prev) => prev + 8);
  };

  // NEXT IMAGE
  const nextImage = (
    projectId,
    totalImages
  ) => {

    setCurrentImages((prev) => ({

      ...prev,

      [projectId]:
        ((prev[projectId] || 0) + 1) %
        totalImages,

    }));
  };

  // PREVIOUS IMAGE
  const prevImage = (
    projectId,
    totalImages
  ) => {

    setCurrentImages((prev) => ({

      ...prev,

      [projectId]:
        ((prev[projectId] || 0) - 1 + totalImages) %
        totalImages,

    }));
  };

  // TOGGLE DESCRIPTION
  const toggleDescription = (projectId) => {

    setExpandedCards((prev) => ({

      ...prev,

      [projectId]:
        !prev[projectId],

    }));
  };

  return (

    <section
      id="projects"
      className={isDark ? 'dark' : 'light'}
    >

      <div className="projects-container">

        {/* FILTERS */}

        <div className="filter-section">

          <div className="category-buttons">

            {portfolioData.projectCategories.map(
              (cat) => (

                <button
                  key={cat.id}
                  className={`category-btn ${
                    selectedCategory === cat.id
                      ? 'active'
                      : ''
                  }`}
                  onClick={() =>
                    handleCategoryChange(cat.id)
                  }
                >

                  {cat.name}

                </button>

              )
            )}

          </div>

        </div>

        {/* GRID */}

        <div className="projects-grid">

          {displayedProjects.map((project) => {

            const currentIndex =
              currentImages[project.id] || 0;

            return (

              <div
                key={project.id}
                className="project-card"
              >

                {/* IMAGE */}

                <div className="project-image">

                  <img
                    src={
                      project.images[currentIndex]
                    }
                    alt={project.name}
                  />

                  {/* LEFT */}

                  <button
                    className="carousel-btn left"
                    onClick={() =>
                      prevImage(
                        project.id,
                        project.images.length
                      )
                    }
                  >

                    ❮

                  </button>

                  {/* RIGHT */}

                  <button
                    className="carousel-btn right"
                    onClick={() =>
                      nextImage(
                        project.id,
                        project.images.length
                      )
                    }
                  >

                    ❯

                  </button>

                  {/* DOTS */}

                  <div className="carousel-dots">

                    {project.images.map(
                      (_, index) => (

                        <span
                          key={index}
                          className={`dot ${
                            currentIndex === index
                              ? 'active-dot'
                              : ''
                          }`}
                          onClick={() =>
                            setCurrentImages(
                              (prev) => ({
                                ...prev,
                                [project.id]:
                                  index,
                              })
                            )
                          }
                        />

                      )
                    )}

                  </div>

                </div>

                {/* HEADER */}

                <div className="project-header">

                  <h3>

                    {project.name}

                  </h3>

                  <span className="project-category-badge">

                    {
                      portfolioData.projectCategories.find(
                        (c) =>
                          c.id ===
                          project.category
                      )?.name
                    }

                  </span>

                </div>

                {/* DESCRIPTION */}

                <p className="project-description">

                  {project.description}

                </p>

                {/* DOWN ARROW */}

                {/* DOWN ARROW */}

<div
  className={`expand-arrow ${
    expandedCards[project.id]
      ? 'rotate'
      : ''
  }`}
  onClick={() =>
    toggleDescription(project.id)
  }
>

 

  {/* <span className="expand-text">

    {
      expandedCards[project.id]
        ? 'Hide Details'
        : 'View Details'
    }

  </span> */}

</div>

                {/* LONG DESCRIPTION */}

                {expandedCards[
                  project.id
                ] && (

                  <p className="project-long-description">

                    {
                      project.longDescription
                    }

                  </p>

                )}

                {/* TECH */}

                <div className="project-tech">

                  {project.technologies.map(
                    (tech, index) => (

                      <span
                        key={index}
                        className="tech-badge"
                      >

                        {tech}

                      </span>

                    )
                  )}

                </div>

                {/* LINKS */}

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >

                    Live Demo

                  </a>

                </div>

              </div>

            );

          })}

        </div>

        {/* LOAD MORE */}

        {visibleProjects <
          filteredProjects.length && (

          <div className="load-more-wrapper">

            <button
              className="load-more-btn"
              onClick={loadMoreProjects}
            >

              View More Projects

            </button>

          </div>

        )}

      </div>

    </section>

  );
}

export default Projects;