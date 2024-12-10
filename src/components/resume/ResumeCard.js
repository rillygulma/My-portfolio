import React from "react";

function ResumeCard({ title, subTitle, result, des }) {
  return (
    <div className="w-full group flex flex-col md:flex-row gap-4">
      {/* Timeline Dot and Line */}
      <div className="flex justify-center items-start md:items-center">
        <div className="w-10 h-[6px] bg-opacity-60 mt-4 md:mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
            <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
      </div>

      {/* Content Box */}
      <div className="flex-1 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-6 md:p-10 shadow-shadowOne">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="w-16 md:w-20 h-8 md:h-10 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs md:text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
