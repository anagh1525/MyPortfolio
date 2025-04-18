import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-background-dark pt-20 pb-8 px-4 sm:px-8 lg:px-12"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Anagh</h3>
            <p className="text-gray-300 mb-4">
              AI & Machine Learning Enthusiast building innovative solutions for
              real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aggarwalanagh21@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["home", "experience", "projects", "skills", "certificates"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth={true}
                      duration={800}
                      className="text-gray-300 hover:text-primary transition-colors cursor-pointer capitalize"
                      href={`#${item}`}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: aggarwalanagh21@gmail.com</li>
              <li>Location: Delhi, India</li>
              <li>
                Available for:
                <span className="text-primary ml-1">
                  Full-time opportunities
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-4">
              Have a project in mind or want to discuss AI & ML opportunities?
              Reach out and let's talk!
            </p>
            <a
              href="mailto:aggarwalanagh21@gmail.com"
              className="btn btn-primary"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Anagh. All rights reserved.
          </p>

          <motion.div whileHover={{ y: -2 }} className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={800}
              className="flex items-center text-gray-400 hover:text-primary transition-colors cursor-pointer"
              href="#home"
            >
              <span className="mr-2">Back to top</span>
              <ArrowUp size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
