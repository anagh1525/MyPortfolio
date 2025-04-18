import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Download, Mail } from "lucide-react";
import ComputerModel from "./3D/ComputerModel";
import ContactPopover from "./ContactPopover";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-16 relative px-4 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-3 -top-3 text-lg sm:text-xl font-mono text-primary-light opacity-20"
          >
            &lt;header&gt;
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-2 text-white"
          >
            Hi there,{" "}
            <span className="text-primary">
              <Typewriter
                words={["I am Anagh"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xl sm:text-2xl font-medium mb-4 text-gray-300"
          >
            AI & Machine Learning Enthusiast
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-md sm:text-lg font-light italic text-gray-400 mb-6 tracking-wide"
          >
            B.Tech in Computer Science Engineering (CSE) • 2025 Graduate •
            Delhi, India
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-gray-300 mb-8 max-w-lg"
          >
            Innovative AI/ML enthusiast passionate about turning theory into
            real-world solutions. Skilled in Python, SQL, and modern web tech, I
            specialize in data-driven strategies, model optimization, and
            AI-powered applications. I thrive in fast-paced, creative
            environments, blending advanced algorithms with practical business
            needs to push technological boundaries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="https://www.linkedin.com/in/anagh-aggarwal"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/anagh1525"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/14j_sdisBL2NoD6z_TB_-f7XrwMzHK1WV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <Download size={18} />
              Resume
            </a>
            <ContactPopover />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-3 bottom-0 text-lg sm:text-xl font-mono text-primary-light opacity-20"
          >
            &lt;/header&gt;
          </motion.div>

          {/* 3D Computer Model */}
          <div className="hidden lg:block absolute bottom-0 right-[-80px] w-48 h-48 z-0">
            <Suspense
              fallback={
                <div className="w-full h-full bg-gray-800/20 rounded-lg animate-pulse"></div>
              }
            >
              <ComputerModel />
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/30 blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20 relative z-10"
            >
              <img
                src="src//public//photo.png"
                alt="Anagh portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link
          to="experience"
          smooth={true}
          duration={800}
          className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-primary transition-colors"
          href="#experience"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
