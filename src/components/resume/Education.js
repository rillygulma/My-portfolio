import React from 'react'
import { motion } from 'framer-motion'
import ResumeCard from './ResumeCard'

function Education() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} 
    className='w-full flex gap-20'>
    <div>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px]'>1998 - 2010</p>
    <h2 className='text-4xl font-bold'>Education Quality</h2>
  </div>
  <div className=' mt-14 w-full h-[1000px] border-l-[6px] border-1-black
  border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="BSc in Information Technology"
      subTitle="Maryam Abacha American University Of Niger, Niger Republic. (2020 - 2023)"
      result="3.90/4"
      des="The training provided by universities in order to prepare people to work
      in various sectors of the economy or areas of culture."
    />
    <ResumeCard 
      title="National Diploma In Computer Science"
      subTitle="Waziri Umaru Federal Polytechnic B/K, Nigeria (2009-2012)"
      result="4.75/5"
      des="Higher education is tertiary education leading to award of academic National Diploma. "
    />
    <ResumeCard
      title="Secondary School Education"
      subTitle="Nagari Science College Birnin Kebbi, Nigeria (2002 - 2008)"
      result="5.00/5"
      des="Secondary education or Post-primary education cover two phase on the 
      International Standard Classifaication of Education scale."
    />
    </div>
    </div>
    <div>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px]'>2016 - 2023</p>
    <h2 className='text-4xl font-bold'>Additional Skills & Certifications</h2>
  </div>
  <div className=' mt-14 w-full h-[1000px] border-l-[6px] border-1-black
  border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="Front-end Developer"
      subTitle="HNG Tech (June 2024 - August 2024)"
      result="HNG 11 Internship"
      des="Is a fast-paced, immersive program designed to equip participants with practical experience in building modern web applications. Interns collaborate with cross-functional teams to develop responsive user interfaces using HTML, CSS, JavaScript, and frameworks like React.js. The role focuses on translating design concepts into functional components, optimizing performance, and ensuring a seamless user experience. This hands-on internship provides valuable exposure to real-world projects, teamwork, and industry best practices, preparing developers for professional frontend roles in a dynamic and competitive environment."
    />
    <ResumeCard 
      title="Basics Of JavaScript Programming"
      subTitle="(21-June-2023)"
      result="OpenWeaver"
      des="Is a foundational course designed to introduce learners to the core concepts and syntax of JavaScript, the language of the web. This course covers essential topics such as variables, data types, functions, loops, conditionals, and DOM manipulation. By the end of the course, participants will have a solid understanding of JavaScript fundamentals and be able to build interactive and dynamic web applications. It’s an ideal starting point for aspiring web developers."
    />
    <ResumeCard
      title="Beginner and Advanced Google Analytics"
      subTitle="(27-May-2023)"
      result="Google Analytics Academy"
      des="Is a comprehensive course designed to help learners understand and leverage Google Analytics to measure and optimize website performance. The beginner section introduces foundational concepts, including setting up Google Analytics, understanding key metrics, navigating reports, and tracking user behavior. The advanced section dives deeper into configuring custom reports, goal tracking, event tagging, and utilizing advanced analysis techniques to gain actionable insights. This course is ideal for marketers, analysts, and business owners seeking to make data-driven decisions to enhance their digital strategies."
    />
    </div>
    </div>
    </motion.div>
  )
}

export default Education
