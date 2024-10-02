// src/components/Projects.js
import React from 'react';
import './Project.css';

const projects = [
 
  {
    title: 'College Website',
    description: 'An College website built through HTML & CSS.',
    image: 'https://via.placeholder.com/300', // Replace with your project image
    link: 'https://shaxnaa.github.io/College/', // Link to GitHub or live demo
  },
 
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
