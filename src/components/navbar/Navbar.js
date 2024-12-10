import React from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';

function Navbar() {
  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor flex justify-between items-center px-4 md:px-10 lg:px-20 font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-2xl md:text-3xl lg:text-4xl font-bold py-2 px-4 md:py-4 md:px-6 rounded-lg shadow-lg">
        RILLY.TSX
      </h1>

      {/* Navigation Links */}
      <div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-sm lg:text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center text-gray-400">
          {/* Add mobile menu toggle logic or icon here if required */}
          <span className="text-lg cursor-pointer hover:text-designColor duration-300">☰</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
