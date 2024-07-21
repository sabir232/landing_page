import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 border-gray-300 py-8 px-4 sm:px-8 md:px-12 border-t">
      <div className="flex flex-col items-center">
        <Image width={60} height={60} alt="Ahead Logo" src="/ahead-logo.png" />
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-700 mt-2">
          ahead
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center mt-4 font-semibold text-center sm:text-left">
        <div>AugustraBe 26, 10117 Berlin</div>
        <div>hi@ahead-app.com</div>
      </div>
      <div className="flex justify-center mt-4">
        <Image
          src="/appleStoreIcon.svg"
          alt="Download on the Apple Store"
          width={120}
          height={120}
          className="sm:w-40 sm:h-40"
        />
      </div>
      <div className="text-center text-sm text-gray-500 mt-4">
        &copy; Ahead App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
