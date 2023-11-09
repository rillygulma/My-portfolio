import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Achievement() {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
    className="py-12 font-titleFont flex gap-20">
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Professional Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="OpenWeaver"
            subTitle="Certificate of Participation"
            result="Success"
            des="Has Successfuly Complete of JavaScript Programming Training"
            
          />
          <ResumeCard
            title="Google Analytics Academy"
            subTitle="Certificate of Course Completion"
            result="Success"
            des="Advanced Google Analytics"
          />
          <ResumeCard
            title="Data Privacy and Creating a secure Cyber space"
            subTitle="Certificate of Commitment"
            result="Success"
            des="By Cyber Security Center of Excellence, Department of Information Technology and Electronics. Government of  West Bengal"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="National Youth Service Corps"
            subTitle="Data Analyst At Rima Radio Sokoto"
            result="Success"
            des="The National Youth Service Corps is a program set up by the Nigerian government during the military regime 
                 to involve Nigerian graduates in nation-building and the development of the country."
          />
          <ResumeCard
            title="Invention Link"
            subTitle="Computer Operator"
            result="Success"
            des="A computer operator is a role in IT which oversees the running of computer systems, 
                 ensuring that the machines, and computers are running properly."
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
