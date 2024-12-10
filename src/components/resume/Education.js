import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

function Education() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row gap-12 md:gap-20"
    >
      {/* Education Quality Section */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-2xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="BSc in Information Technology"
            subTitle="Maryam Abacha American University Of Niger, Niger Republic (2020 - 2023)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work
            in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="National Diploma In Computer Science"
            subTitle="Waziri Umaru Federal Polytechnic B/K, Nigeria (2009-2012)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of academic National Diploma."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Nagari Science College Birnin Kebbi, Nigeria (2002 - 2008)"
            result="5.00/5"
            des="Secondary education or Post-primary education covers two phases on the 
            International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* Skills and Certifications Section */}
      <div className="w-full md:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-2xl md:text-4xl font-bold">Additional Skills & Certifications</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="HNG Tech (June 2024 - August 2024)"
            result="HNG 11 Internship"
            des="A fast-paced, immersive program designed to equip participants with practical experience in building modern web applications. Interns collaborate with cross-functional teams to develop responsive user interfaces using HTML, CSS, JavaScript, and frameworks like React.js."
          />
          <ResumeCard
            title="Basics Of JavaScript Programming"
            subTitle="(21-June-2023)"
            result="OpenWeaver"
            des="A foundational course designed to introduce learners to the core concepts and syntax of JavaScript. This course covers essential topics such as variables, data types, functions, loops, and DOM manipulation."
          />
          <ResumeCard
            title="Beginner and Advanced Google Analytics"
            subTitle="(27-May-2023)"
            result="Google Analytics Academy"
            des="A comprehensive course designed to help learners understand and leverage Google Analytics to measure and optimize website performance. The advanced section dives deeper into configuring custom reports, goal tracking, and advanced analysis techniques."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
