import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certificates', to: 'certificates' },
  ];
  
  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={toggleMenu}
        className={`fixed top-5 right-5 z-50 p-2 rounded-full transition-colors ${
          scrolled || isOpen ? 'bg-background-light' : 'bg-transparent hover:bg-background-light/50'
        }`}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X className="text-white w-6 h-6" />
        ) : (
          <Menu className="text-white w-6 h-6" />
        )}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, translateY: '-100%' }}
            animate={{ opacity: 1, translateY: '0%' }}
            exit={{ opacity: 0, translateY: '-100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-background-dark/95 z-40 flex items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={800}
                    offset={-50}
                    className="text-2xl font-medium py-3 px-8 text-white hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                    href={`#${link.to}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;