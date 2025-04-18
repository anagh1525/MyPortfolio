import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projectsData, ProjectData } from '../data/projectsData';

interface ProjectsProps {
  openProject: (project: ProjectData) => void;
}

const Projects: React.FC<ProjectsProps> = ({ openProject }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section 
      id="projects" 
      className="py-24 px-4 sm:px-8 lg:px-12 bg-background-light"
      ref={ref}
    >
      <div className="container mx-auto">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="card group cursor-pointer"
              onClick={() => openProject(project)}
            >
              {project.image && (
                <div className="mb-4 h-48 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-background-dark rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-background-dark rounded-full text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="text-primary text-sm flex items-center mt-2 group-hover:translate-x-2 transition-transform duration-300">
                <span>View Project</span>
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;