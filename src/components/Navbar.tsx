import React from "react";
import Image from "next/image";
import logo from "../../public/ahead-logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-[100]">
      <header className="flex justify-between h-20 items-center py-3 px-10 w-screen">
        <div>
          <Image width={50} height={50} alt="Ahead Logo" src={logo} />
        </div>
        <div>
          <ul className="flex gap-6 items-center">
            <li className="cursor-pointer font-semibold">Emotions</li>
            <li className="cursor-pointer font-semibold">Manifesto</li>
            <li className="cursor-pointer font-semibold">
              Self awareness test
            </li>
            <li className="cursor-pointer font-semibold">Work with us</li>
          </ul>
        </div>
        <div>
          <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
            Download App
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
