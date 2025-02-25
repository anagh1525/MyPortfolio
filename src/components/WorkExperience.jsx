import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import "../styles/App.css";
import { LuExternalLink } from "react-icons/lu";

const workExperiences = [
  {
    role: "Machine Learning Engineer",
    dateRange: "2024-05 – 2024-07",
    company: "ISSA DRDO",
    description: `Engineered and deployed ML models using Python (pandas, NumPy, scikit-learn) 
                  for comparative analysis of k-NN, Linear, and Polynomial Regression. 
                  Developed a Flask-based web interface for seamless deployment 
                  and enhanced user interaction. Gained hands-on experience with large 
                  language models (LLMs) through real-world projects.`,
    link: "https://drive.google.com/file/d/1jcHhBchYUELSb81ZcG-IytI2dJiOu8oY/view?usp=sharing",
  },
  {
    role: "INTERNSHIP cum TRAINING PROGRAM",
    dateRange: "2023-08 – 2023-12",
    company: "MES",
    description: `Collaborated on multiple projects, analyzing hardware systems 
                  (servers, firewalls, storage devices) to ensure optimal performance 
                  and robust security. Gained practical insights into cybercell operations 
                  and implemented secure intranet communication protocols. 
                  Supported technical troubleshooting and contributed to effective 
                  team-based problem-solving.`,
    link: "https://drive.google.com/file/d/1Eya7fe7KJ80tHFs9bG-EbqR_jHyp4lLV/view?usp=sharing",
  },
];

function WorkExperience() {
  return (
    <div className="work-background">
      <div className="work-container">
        {/* Title with icon */}
        <div className="work-header">
          <MdOutlineWorkOutline className="work-icon" />
          <h2>Work Experience</h2>
        </div>

        {workExperiences.map((exp, index) => (
          <React.Fragment key={index}>
            {/* Card */}
            <div className="work-card">
              <div className="work-card-header">
                <div className="flex-container">
                  <h3>{exp.role}</h3>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    <LuExternalLink />
                  </a>
                </div>
                <span className="work-date">{exp.dateRange}</span>
              </div>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>

            {/* Divider: appears only if this isn't the last card */}
            {index < workExperiences.length - 1 && (
              <div className="divider">
                <span></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
