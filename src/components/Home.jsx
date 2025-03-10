import { React, useRef } from "react";
//import sketch from "../assets/sketch.png";
import "../styles/App.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileAlt,
  FaExternalLinkAlt,
  FaBookOpen,
} from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail, MdOutlineSmartphone } from "react-icons/md";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import Skills from "./Skills";
import Certificates from "./Certificates";

function Home() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Called whenever the mouse moves inside .photo-container
  const handleMouseMove = (e) => {
    if (!containerRef.current || !imageRef.current) return;

    // Get container bounds and mouse position
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;

    // Calculate how far from center (scale these factors as desired)
    const rotateX = ((y - halfHeight) / halfHeight) * 10;
    const rotateY = ((x - halfWidth) / halfWidth) * 10;

    // If you want the bottom to come forward when mouse is near top, invert rotateX:
    // e.g. rotateX(-rotateX) => top side forward if mouse is at top
    imageRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Reset on mouse leave
  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-inner">
          <div
            className="photo-container tilt-container"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="https://i.postimg.cc/Yq8zLn6B/IMG-0186-removebg-preview.png"
              alt="Sketch"
              ref={imageRef}
              className="sketch-image tilt-image"
            />
          </div>

          <div className="intro-content">
            <h2>Hi there ... I am</h2>
            <h1>Anagh</h1>
            <h2>AI & Machine Learning Enthusiast</h2>
            <div className="home-subtitle">
              <span className="badge">
                <FaBookOpen />
                Graduate on 2025
              </span>
              <span className="badge">
                <GiGraduateCap />B Tech (Bachelor of Technology)
              </span>
              <span className="badge">
                <GiGraduateCap />
                Computer Science Engineering (CSE)
              </span>
              <span className="badge">
                <CiLocationOn />
                Delhi/Gurugram
              </span>
              <span className="badge">
                <MdOutlineEmail />
                aggarwalanagh21@gmail.com
              </span>
              <span className="badge">
                <MdOutlineSmartphone />
                7014881549
              </span>
            </div>
            {/* Sub-info, badges, description, etc. */}
            <p className="home-description">
              I’m an innovative AI and Machine Learning enthusiast dedicated to
              transforming theoretical insights into actionable, real-world
              solutions. With robust expertise in Python, SQL, and modern web
              technologies, I specialize in leveraging data-driven strategies to
              optimize models, enhance system performance, and develop
              cutting-edge AI-powered applications. Driven by a commitment to
              continuous learning, I thrive on decoding complex challenges and
              seamlessly integrating advanced algorithms with practical business
              needs. I excel in dynamic, creative environments where technology
              converges with ingenuity, always pushing the boundaries of what’s
              possible.
            </p>

            {/* BUTTON GROUP */}
            <div className="button-group">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/anagh-aggarwal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn external-link-btn"
              >
                <FaLinkedinIn className="icon-left" />
                LinkedIn
                <FaExternalLinkAlt className="icon-right" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/anagh1525"
                target="_blank"
                rel="noopener noreferrer"
                className="btn external-link-btn"
              >
                <FaGithub className="icon-left" />
                Github
                <FaExternalLinkAlt className="icon-right" />
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/14j_sdisBL2NoD6z_TB_-f7XrwMzHK1WV/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn external-link-btn"
              >
                <FaFileAlt className="icon-left" />
                Resume
                <FaExternalLinkAlt className="icon-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <WorkExperience />
      <Projects />
      <Skills />
      <Certificates />
    </div>
  );
}

export default Home;
