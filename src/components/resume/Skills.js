import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      {/* Design Skills Section */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6">
          {[
            { skill: 'Photoshop', width: '100%' },
            { skill: 'Figma', width: '90%' },
            { skill: 'Adobe XD', width: '60%' },
            { skill: 'Adobe Illustrator', width: '70%' },
            { skill: 'Design', width: '95%' },
          ].map(({ skill, width }) => (
            <SkillBar key={skill} skill={skill} width={width} />
          ))}
        </div>
      </div>

      {/* Development Skills Section */}
      <div className="w-full lg:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6">
          {[
            { skill: 'React', width: '100%' },
            { skill: 'HTML 5', width: '95%' },
            { skill: 'CSS 3', width: '80%' },
            { skill: 'JavaScript', width: '75%' },
            { skill: 'Software', width: '90%' },
          ].map(({ skill, width }) => (
            <SkillBar key={skill} skill={skill} width={width} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Reusable SkillBar Component
function SkillBar({ skill, width }) {
  return (
    <div className="overflow-x-hidden">
      <p className="text-sm uppercase font-medium">{skill}</p>
      <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-sm relative"
          style={{ width }}
        >
          <span className="absolute -top-7 right-0">{width}</span>
        </motion.span>
      </span>
    </div>
  );
}

export default Skills;
