import React from "react";
import "./Skills.css";

// Example: devicon / wiki links for logos
const skills = [
  {
    name: "Python",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    // No standard devicon, so using a placeholder. Replace with your own image if desired.
    image:
      "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-machine-learning-data-science-becris-lineal-becris.png",
  },
  {
    name: "Computer Vision",
    // Another placeholder
    image: "https://img.icons8.com/ios/50/000000/artificial-intelligence.png",
  },
  {
    name: "SQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "NoSQL",
    // Using MongoDB icon as an example for NoSQL
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "React.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Google GCP",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "Flask",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
  },
  {
    name: "scikit-learn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "and etc..",
    // Simple placeholder icon
    image: "https://img.icons8.com/ios-filled/50/000000/more.png",
  },
];

function Skills() {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.image} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
