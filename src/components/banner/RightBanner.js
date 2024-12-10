import React from 'react';
import { bannerImg } from '../../assets/index';

function RightBanner() {
  return (
    <div className="w-full md:w-1/2 flex justify-center items-center relative px-4 md:px-0">
      <img
        className="w-[300px] h-[400px] md:w-[500px] md:h-[680px] z-10 ml-0 md:ml-10 rounded-2xl"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner;
