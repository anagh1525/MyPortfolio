import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [binaryText, setBinaryText] = useState('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const generateBinary = () => {
      let binary = '';
      for (let i = 0; i < 60; i++) {
        binary += Math.round(Math.random());
      }
      setBinaryText(binary);
    };
    
    const interval = setInterval(generateBinary, 100);
    generateBinary();
    
    return () => clearInterval(interval);
  }, []);

  const binaryVariants = {
    animate: {
      transition: {
        staggerChildren: 0.01
      }
    }
  };
  
  const characterVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0.2, 1, 0.2],
      transition: { 
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
        delay: Math.random() * 0.5
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-background-dark z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        variants={binaryVariants}
        initial="initial"
        animate="animate"
        className="binary-loader text-lg md:text-2xl text-primary mb-8 overflow-hidden"
      >
        {binaryText.split('').map((char, i) => (
          <motion.span 
            key={i}
            variants={characterVariants}
            className="binary-character"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
      
      <div className="relative w-64 h-1 bg-background-light rounded-full overflow-hidden">
        <motion.div 
          className="absolute h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>
      
      <motion.p 
        className="text-primary font-mono mt-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Initializing...
      </motion.p>
    </motion.div>
  );
};

export default Loading;