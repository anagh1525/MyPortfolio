import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skillsData";

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 lg:px-12" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">
                {category.category}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                animate={isInView ? "show" : "hidden"}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="bg-background-light p-4 rounded-lg flex flex-col items-center text-center hover:bg-background-light/70 transition-colors"
                  >
                    <div className="h-12 flex items-center justify-center mb-2">
                      {skill.image ? (
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-10 h-10 rounded-full object-contain"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="font-medium">{skill.name}</h4>

                    {skill.level && (
                      <div className="w-full h-1 bg-background-dark mt-2 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
