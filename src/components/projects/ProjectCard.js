import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

function ProjectCard({ title, des, src }) {
  return (
    <div
      className="w-full px-6 md:px-8 lg:px-12 h-auto py-6 md:py-8 lg:py-10 rounded-lg shadow-shadowOne flex flex-col
      bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b
      hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      {/* Image Section */}
      <div className="w-full h-48 md:h-60 lg:h-72 overflow-hidden rounded-lg">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="Project Thumbnail"
        />
      </div>

      {/* Content Section */}
      <div className="w-full mt-5 flex flex-col gap-4 md:gap-6">
        {/* Title and Links */}
        <div className="flex items-center justify-between">
          <h3 className="text-base lg:text-lg uppercase text-designColor font-semibold">
            {title}
          </h3>
          <div className="flex gap-2">
            <a
              href="https://github.com/rillygulma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg w-8 md:w-10 h-8 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <BsGithub />
            </a>
            <a
              href="https://github.com/rillygulma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base md:text-lg w-8 md:w-10 h-8 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
            >
              <FaGlobe />
            </a>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-sm md:text-base tracking-wide hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
