"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/ahead-logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-[100]">
      <header className="flex justify-between items-center h-20 py-3 px-4 sm:px-10 w-full">
        <div className="flex-shrink-0">
          <Image width={50} height={50} alt="Ahead Logo" src={logo} />
        </div>
        <nav className="hidden md:flex gap-6 items-center">
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer font-semibold">Emotions</li>
            <li className="cursor-pointer font-semibold">Manifesto</li>
            <li className="cursor-pointer font-semibold">
              Self awareness test
            </li>
            <li className="cursor-pointer font-semibold">Work with us</li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
            Download App
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={handleMenuToggle} className="text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {menuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-start gap-2 p-4">
            <li className="cursor-pointer font-semibold">Emotions</li>
            <li className="cursor-pointer font-semibold">Manifesto</li>
            <li className="cursor-pointer font-semibold">
              Self awareness test
            </li>
            <li className="cursor-pointer font-semibold">Work with us</li>
            <li>
              <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold w-full text-left">
                Download App
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
