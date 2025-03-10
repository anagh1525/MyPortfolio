import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "Python",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "Machine Learning",
    image:
      "https://img.icons8.com/external-becris-lineal-becris/64/000000/external-machine-learning-data-science-becris-lineal-becris.png",
  },
  {
    name: "Computer Vision",
    image: "https://img.icons8.com/ios/50/000000/artificial-intelligence.png",
  },
  {
    name: "Image Processing",
    image: "https://img.icons8.com/color/48/000000/image.png",
  },
  {
    name: "Natural Language Processing",
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQElKn2koPJAyA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712413894338?e=2147483647&v=beta&t=ZMtWf-Zg7qQRx6bpSCvd-NLh8Ps-wTmCSdw86HsM92k",
  },
  {
    name: "CNN",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "scikit-learn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "panda",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg",
  },
  {
    name: "Generative AI",
    image: "https://img.icons8.com/color/48/000000/robot.png",
  },
  {
    name: "LLMs (Large Language Model)",
    image: "https://img.icons8.com/color/48/000000/brain.png",
  },
  {
    name: "TensorFlow",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "OpenCV",
    image:
      "data:image/png;base64,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",
  },
  {
    name: "Flask",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
  },
  {
    name: "SQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "Nosql",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    name: "Google GCP",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
  },
  {
    name: "React.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  },
  {
    name: "Node.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Javascript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
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
            <img
              src={skill.image}
              alt={skill.name}
              className="skill-logo"
              // Optionally set width/height inline to ensure consistency:
              style={{ width: "48px", height: "48px" }}
            />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
