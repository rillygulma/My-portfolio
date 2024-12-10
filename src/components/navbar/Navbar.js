import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-20 sticky top-0 z-50 bg-bodyColor flex justify-between items-center px-4 md:px-10 lg:px-20 font-titleFont border-b-[1px] border-b-gray-600">
      {/* Logo */}
      <h1 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-2xl md:text-3xl lg:text-4xl font-bold py-2 px-4 md:py-4 md:px-6 rounded-lg shadow-lg">
        RILLY.TSX
      </h1>

      {/* Navigation Links */}
      <div>
        {/* Desktop Menu */}
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center text-gray-400">
          <span
            className="text-lg cursor-pointer hover:text-designColor duration-300"
            onClick={handleMenuToggle}
          >
            ☰
          </span>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-bodyColor border-t-[1px] border-t-gray-600 md:hidden">
            <ul className="flex flex-col items-center gap-6 py-4">
              {navLinksdata.map(({ _id, title, link }) => (
                <li
                  className="text-sm font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  key={_id}
                  onClick={handleMenuToggle} // Close menu on link click
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
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
