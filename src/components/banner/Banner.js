import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col md:flex-row items-center justify-between border-b border-black font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;
