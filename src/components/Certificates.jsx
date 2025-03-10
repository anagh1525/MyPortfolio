import React, { useState } from "react";
import "./Certificates.css";

// Certificate icon URL (update as needed)
const CERT_ICON_URL = "https://cdn-icons-png.flaticon.com/512/7238/7238706.png";

function Certificates() {
  // Updated certificate data from the resume
  const certificates = [
    {
      title: "Machine Learning Specialization",
      skill: "Machine Learning",
      link: "https://coursera.org/share/a00bc379633e5efad5094d85e3cb71c2",
    },
    {
      title: "Introduction to Computer Vision and Image Processing",
      skill: "Computer Vision",
      link: "https://coursera.org/share/8ed71ff683c7e42d4b5eb9a45e9d4a1f",
    },
    {
      title: "Convolutional Neural Networks",
      skill: "Deep Learning",
      link: "", // Link not provided in the resume
    },
    {
      title: "Natural Language Processing in TensorFlow",
      skill: "NLP",
      link: "", // Link not provided in the resume
    },
    {
      title: "Generative AI for Everyone",
      skill: "AI & ML",
      link: "", // Link not provided in the resume
    },
    {
      title: "Google Cloud Certified Cloud Digital Leader",
      skill: "Cloud Computing",
      link: "https://drive.google.com/file/d/1Xx4ZrnMOz5Md-PX7U8YOx03yiB5RCfmD/view?usp=sharing",
    },
    {
      title: "Programming Foundations with Python",
      skill: "Programming",
      link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PPVBHLVXBG",
    },
    {
      title: "React Js",
      skill: "Web Development",
      link: "https://certificates.ccbp.in/academy/react-js?id=KVKABMRDRL",
    },
    {
      title: "Node JS",
      skill: "Backend Development",
      link: "https://certificates.ccbp.in/academy/node-js?id=ZHQBFNUFVQ",
    },
    {
      title: "JavaScript Essentials",
      skill: "Web Development",
      link: "https://certificates.ccbp.in/academy/javascript-essentials?id=LWUCDNLYNG",
    },
  ];

  // Carousel logic: show 3 cards per page
  const itemsPerPage = 3;
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(certificates.length / itemsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % pageCount);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + pageCount) % pageCount);
  };

  // Get current slice of certificates for the carousel
  const startIndex = page * itemsPerPage;
  const currentCertificates = certificates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="certificates-wrapper">
      <div className="certificates-container">
        <h2>Certificates</h2>
        <div className="cert-carousel">
          <button onClick={handlePrev} className="carousel-btn">
            ‹
          </button>
          <div className="cert-cards-row">
            {currentCertificates.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <img
                  src={CERT_ICON_URL}
                  alt="Certificate Icon"
                  className="cert-icon"
                />
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-skill">{cert.skill || "Other"}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-view-btn"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="carousel-btn">
            ›
          </button>
        </div>
        <div className="cert-pagination">
          {[...Array(pageCount)].map((_, i) => (
            <div
              key={i}
              className={`dot ${page === i ? "active" : ""}`}
              onClick={() => setPage(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
