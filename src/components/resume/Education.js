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
    <h2 className='text-4xl font-bold'>Job Experience</h2>
  </div>
  <div className=' mt-14 w-full h-[1000px] border-l-[6px] border-1-black
  border-opacity-30 flex flex-col gap-10'>
    <ResumeCard
      title="System Analyst"
      subTitle="Federal University Birnin Kebbi (2016 - Present)"
      result="Staff"
      des="I am a systems analyst in Federal University Birnin Kebbi, An IT professional who works on a high level in an organization to ensure that systems,
       infrastructures and computer systems are functioning as effectively and efficiently as possible."
    />
    <ResumeCard 
      title="Front-end Developer"
      subTitle="(2020 - Present)"
      result="Self"
      des="A front-end developer architects and develops websites and applications using web technologies 
      (i.e., HTML, CSS, DOM, and JavaScript), which run on the Open Web Platform or act as compilation input for non-web platform 
      environments (i.e., React Native)."
    />
    <ResumeCard
      title="Web Developer & Trainer"
      subTitle="Gulma Tech Institute (2021 - 2022)"
      result="Tutor"
      des="Taught Web development course such as HTML, CSS, JavaScript."
    />
    </div>
    </div>
    </motion.div>
  )
}

export default Education
