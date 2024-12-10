import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

function Achievement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col md:flex-row gap-12 md:gap-20"
    >
      {/* Professional Certifications Section */}
      <div className="w-full md:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-2xl md:text-4xl font-bold">Professional Certifications</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="OpenWeaver"
            subTitle="Certificate of Participation"
            result="Success"
            des="Successfully completed JavaScript Programming Training."
          />
          <ResumeCard
            title="Google Analytics Academy"
            subTitle="Certificate of Course Completion"
            result="Success"
            des="Advanced Google Analytics."
          />
          <ResumeCard
            title="Data Privacy and Creating a Secure Cyberspace"
            subTitle="Certificate of Commitment"
            result="Success"
            des="By Cyber Security Center of Excellence, Department of Information Technology and Electronics, Government of West Bengal."
          />
        </div>
      </div>

      {/* Job Experience Section */}
      <div className="w-full md:w-1/2">
        <div className="py-8 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-2xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 md:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 md:gap-10">
          <ResumeCard
            title="National Youth Service Corps"
            subTitle="Data Analyst at Rima Radio Sokoto"
            result="Success"
            des="The National Youth Service Corps is a program set up by the Nigerian government to involve Nigerian graduates in nation-building and development."
          />
          <ResumeCard
            title="Invention Link"
            subTitle="Computer Operator"
            result="Success"
            des="Oversaw the running of computer systems, ensuring machines and computers were operating properly."
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
}

export default Achievement;
