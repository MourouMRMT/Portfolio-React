import React from "react";
import "../styles/projects.css";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React and TypeScript.",
    },
    {
      title: "Snake Game Reinforcement Learning",
      description: "Ai Snake Game using Reinforcement Learning.",
    },
  ];

  return (
    <section id="projects" className="projects-section" data-aos="zoom-in">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
