import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
    className="py-12 font-titleFont flex gap-20">
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="System Analyst"
            subTitle="Federal University Birnin Kebbi (2016 - Present)"
            result="Nigeria"
            des="An IT professional who works on a high level in an organization to ensure that systems,
            infrastructures and computer systems are functioning as effectively and efficiently as possible."
          />
          <ResumeCard
            title=" Data Analyst"
            subTitle="Rima Radio Sokoto - (2023 - Present)"
            result="Nigeria"
            des="a professional who collects and analyzes data across the organization or to make informed decisions or 
            assist other team members and leadership in making sound decisions."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Self - (2020 - Present)"
            result="Nigeria"
            des="A front-end web developer is responsible for implementing visual elements that users see and interact with in a web application. They are usually supported by
             back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
