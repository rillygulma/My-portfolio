import React, { useState } from "react";
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../../layout/Title";
import { testimonialOne, testimonialTwo, quote } from "../../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-xl text-gray-400
      flex justify-center items-center absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-full text-xl text-gray-400 
      flex justify-center items-center absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

function Testimonial() {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div>
        <ul className="flex gap-3 justify-center mt-6">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full cursor-pointer ${
          i === dotActive ? "bg-red-500" : "bg-gray-400"
        }`}
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 px-4 sm:px-6 lg:px-8 border-b border-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENT SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {[testimonialOne, testimonialTwo].map((image, index) => (
            <div key={index} className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Section */}
              <div className="w-full lg:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-md">
                <img
                  className="w-full h-64 rounded-lg object-cover"
                  src={image}
                  alt={`testimonial ${index + 1}`}
                />
                <div className="mt-4">
                  <p className="text-sm uppercase text-designColor tracking-wide mb-1">
                    Bound - Trolola
                  </p>
                  <h3 className="text-xl font-bold">Rilly Gulma</h3>
                  <p className="text-sm text-gray-500">Operation Officer</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-[60%] flex flex-col justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-6 rounded-lg shadow-md">
                <img className="w-12 mb-4" src={quote} alt="quote" />
                <div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                    <div>
                      <h3 className="text-lg font-medium">Mobile App</h3>
                      <p className="text-sm text-gray-400 mt-1">
                        via Upwork - Sep 30, 2023 - Oct 30, 2023
                      </p>
                    </div>
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mt-4 leading-6">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
