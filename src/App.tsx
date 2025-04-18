import React, { Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import { ProjectData } from './data/projectsData';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState<ProjectData | null>(null);
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  const openProject = (project: ProjectData) => {
    setCurrentProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setCurrentProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <ParticlesBackground />
          <ScrollProgress />
          <Navigation />
          
          <main>
            <Hero />
            <Experience />
            <Projects openProject={openProject} />
            <Skills />
            <Certificates />
          </main>
          
          <Footer />

          {/* Project Modal */}
          <AnimatePresence>
            {currentProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                onClick={closeProject}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: 'spring', damping: 30 }}
                  className="bg-background-light rounded-xl p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{currentProject.title}</h3>
                    <button 
                      onClick={closeProject}
                      className="p-2 rounded-full hover:bg-background-dark transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {currentProject.image && (
                    <div className="mb-6 rounded-lg overflow-hidden">
                      <img 
                        src={currentProject.image} 
                        alt={currentProject.title} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {currentProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-background-dark rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4">{currentProject.description}</p>
                    
                    {currentProject.details && (
                      <div className="mt-4">
                        <h4 className="text-xl font-bold mb-2">Details</h4>
                        <p className="text-gray-300">{currentProject.details}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    {currentProject.demoLink && (
                      <a 
                        href={currentProject.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        Live Demo
                      </a>
                    )}
                    {currentProject.codeLink && (
                      <a 
                        href={currentProject.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;