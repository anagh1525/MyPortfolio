import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "../data/experienceData";

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 lg:px-12" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isEven ? -30 : 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline line */}
                {index < experienceData.length && (
                  <div className="absolute left-[15px] md:left-1/2 top-16 bottom-0 w-1 bg-primary-dark/30 transform md:-translate-x-1/2 ml-[-12px]" />
                )}

                <div className="flex flex-col md:flex-row items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-[28px] w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 z-10 ml-[-12px]" />

                  {/* Mobile timeline dot */}
                  <div className="md:hidden absolute left-[15px] top-[28px] w-5 h-5 bg-primary rounded-full z-10" />

                  {/* Date - Mobile (left side) */}
                  <div className="pl-12 md:hidden text-sm mb-2 text-gray-400">
                    {experience.startDate} - {experience.endDate}
                  </div>

                  {/* Date - Desktop (changes sides) */}
                  <div
                    className={`hidden md:block md:w-1/2 ${
                      isEven ? "text-right pr-8" : "pl-8 order-last"
                    }`}
                  >
                    <div className="text-sm text-gray-400">
                      {experience.startDate} - {experience.endDate}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {experience.role}
                    </h3>
                    <h4 className="text-lg font-medium mb-4">
                      {experience.company}
                    </h4>
                  

                    {experience.highlights && (
                      <ul className="list-disc list-inside space-y-1 text-gray-300">
                        {experience.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
