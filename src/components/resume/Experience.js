import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col md:flex-row gap-12 md:gap-20"
    >
      {/* Job Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-2xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="System Analyst"
            subTitle="Federal University Birnin Kebbi (2016 - Present)"
            result="Nigeria"
            des="An IT professional who works on a high level in an organization to ensure that systems,
            infrastructures and computer systems are functioning as effectively and efficiently as possible."
          />
          <ResumeCard
            title="Data Analyst"
            subTitle="Rima Radio Sokoto - (2023 - Present)"
            result="Nigeria"
            des="A professional who collects and analyzes data across the organization to make informed decisions or 
            assist other team members and leadership in making sound decisions."
          />
          <ResumeCard
            title="Intern Front-end Developer"
            subTitle="Self - (June 2024 - August 2024)"
            result="Nigeria"
            des="A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by
             back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do."
          />
        </div>
      </div>

      {/* Trainer Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-2xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="3MTT Volutee"
            subTitle="3 Million Technical Talent (3MTT)  (2023 - Present)"
            result="SOKOTO/ BIRNIN KEBBI"
            des="I involve activities like mentoring participants, helping with training sessions, assisting in talent development, or providing support for outreach programs."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="Gulma Tech (2020 - Present)"
            result="BIRNIN KEBBI"
            des="I involves designing and maintaining web applications while teaching web development skills such as HTML, CSS, JavaScript, and backend technologies. As an instructor, you'll develop training materials, lead workshops, and provide mentorship to learners, guiding them through hands-on projects and technical challenges. The role requires strong web development expertise, teaching ability, and a passion for empowering others to build technical skills and succeed in the digital world."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kotomo Primary School (2009 - 2010)"
            result="Teacher"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
