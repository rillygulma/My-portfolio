import React, { useState } from "react";
import Title from "../layout/Title";
import Education from "./Education";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Skills from "./Skills";

function Resume() {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      {/* Title Section */}
      <div className="flex justify-center items-center text-center">
        <Title title="2+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>

      {/* Navigation Tabs */}
      <div className="mt-10">
        <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              educationData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="mt-10">
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
        {achievementData && <Achievement />}
      </div>
    </section>
  );
}

export default Resume;
