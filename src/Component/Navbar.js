import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div className="bg-blue-500 py-3 fixed z-50 w-full">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className=" text-pure-greys-100  cursor-pointer text-xl font-extrabold lg:ml-10 md:ml-10 sm:ml-10">KITAB</span>
          </div>
          <div className="lg:hidden ml-4">
            {!isMenuOpen && 
              <IoMenu onClick={toggleMenu} className="cursor-pointer text-3xl text-white sm:mr-10" />
            }
          </div>
          <ul className={`flex flex-col text-white lg:flex lg:flex-row lg:gap-10 ${isMenuOpen ? 'lg:hidden' : 'hidden lg:flex'} mr-4`}>
            <li className="mb-2 lg:mb-0 lg:mt-1 hover:text-pure-greys-100 cursor-pointer text-xl font-semibold">
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="mb-2 lg:mb-0 lg:mt-1 hover:text-pure-greys-100 cursor-pointer text-xl font-semibold">
              <Link to="/About" onClick={closeMenu}>About</Link>
            </li>
            <li className="mb-2 lg:mb-0 lg:mt-1 hover:text-pure-greys-100 cursor-pointer text-xl font-semibold">
              <Link to="/ContactUs" onClick={closeMenu}>Contact Us</Link>
            </li>
            {isMenuOpen && (
              <li className="mb-2 lg:mb-0 lg:mt-1 cursor-pointer text-2xl">
                <IoMdCloseCircleOutline onClick={toggleMenu} className="text-3xl text-white" />
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
