import React, { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";
import "./Projects.css";

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  // Limit description length if not expanded
  const limit = 150;
  const description =
    project.description.length > limit && !expanded
      ? project.description.substring(0, limit) + "..."
      : project.description;

  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{description}</p>
      {project.description.length > limit && (
        <span onClick={toggleExpanded} className="view">
          {expanded ? "View Less" : "View More"}
        </span>
      )}
      <div className="badges-container">
        {project.badges.map((badge, i) => (
          <span key={i} className="badge">
            {badge}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="view-project-btn"
      >
        View Project
      </a>
    </div>
  );
};

function Projects() {
  // Updated projects array with 4 projects
  const projects = [
    {
      title: "AI-Based Diagnosis of Ebola Disease",
      description:
        "Developing an AI-driven diagnostic framework that integrates multi-modal data for early Ebola detection using NLP, CNNs, and machine learning. Designing a transparent model to assist healthcare professionals with decision support and risk assessment.",
      badges: ["Python", "Machine Learning", "NLP", "CNNs"],
      link: "",
    },
    {
      title: "Sign Language Detection",
      description:
        "Engineered and deployed ML models using Python (pandas, NumPy, scikitlearn) for comparative analysis of k-NN, Linear, and Polynomial Regression. Developed a Flask-based web interface for seamless deployment and enhanced user interaction. Gained hands-on experience with large language models (LLMs) through real-world projects.",
      badges: ["Python", "OpenCV", "TensorFlow", "Keras", "Label Studio"],
      link: "https://github.com/anagh1525/Sign-Language-Detection",
    },
    {
      title: "Advance Defense System",
      description:
        "Predictive analysis model using multiple data sets for strategic insights into military operations and tactical planning. Integrated data from various sources to forecast outcomes.",
      badges: ["Python", "Flask", "pandas", "scikit-learn"],
      link: "https://github.com/anagh1525/Advance-Defense-System",
    },
    {
      title: "Insta-Lite",
      description:
        "Instagram clone using React.js, Chakra UI, Firebase, and Vercel to provide a seamless and interactive social media experience with real-time updates and a responsive interface.",
      badges: ["React", "API", "Chakra UI", "Firebase", "Vercel"],
      link: "https://myinsta-mu.vercel.app/",
    },
  ];

  // Carousel logic: 3 items per page
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  const startIndex = page * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="projects-wrapper">
      {/* Full-page particle background */}
      <ParticlesBackground />

      <div className="projects-container">
        <h2>Projects</h2>
        <div className="carousel">
          <button onClick={handlePrev} className="carousel-btn">
            ‹
          </button>
          <div className="projects-row">
            {currentProjects.map((proj, idx) => (
              <ProjectCard key={idx} project={proj} />
            ))}
          </div>
          <button onClick={handleNext} className="carousel-btn">
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
