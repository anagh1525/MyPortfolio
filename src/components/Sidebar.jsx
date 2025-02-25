import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // On hover in/out, toggle the menu
    <div
      className="sidebar-wrapper"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/certificates">Certificates</Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/14j_sdisBL2NoD6z_TB_-f7XrwMzHK1WV/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Icon (stack of 3 lines) */}
      <div className="hamburger-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
}

export default Sidebar;
