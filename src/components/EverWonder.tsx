"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EverWonder: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      className="mt-8 mb-16 rounded-3xl bg-blue-50 p-6 sm:p-8 md:p-10 lg:p-12 mx-4 sm:mx-6 md:mx-8 lg:mx-24"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          hidden: { opacity: 0, scale: 0.5 },
        }}
        className="text-center"
      >
        <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-600">
          Let your friends, family, and co-workers (anonymously) rate your
          social skills
        </h3>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">
          Ever wondered what others think of you?
        </h1>
      </motion.div>

      <div className="mt-6 md:mt-8 lg:mt-12 flex flex-col md:flex-row justify-center items-center relative">
        <div className="absolute top-[0.5rem] w-full max-w-4xl text-transparent border-t border-yellow-700 h-4 border-dashed"></div>
        <div className="flex flex-col md:flex-row justify-center w-full md:w-auto gap-6 md:gap-8 lg:gap-12 z-10">
          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              <Image width={40} height={40} alt="badge" src="/badge.png" />
            </div>
            <div className="text-sm sm:text-base md:text-lg">
              Answer questions on <br />
              your skill.
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              <Image width={40} height={40} alt="badge" src="/badge.png" />
            </div>
            <div className="text-sm sm:text-base md:text-lg">
              Let others anonymously answer <br />
              questions about you.
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex justify-center mb-2">
              <Image width={40} height={40} alt="badge" src="/badge.png" />
            </div>
            <div className="text-sm sm:text-base md:text-lg">
              Find where others and <br />
              you view things similarly.
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <div className="shadow bg-white rounded-xl w-full max-w-4xl p-6 py-12 relative">
          <div className="flex justify-between items-center">
            <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-violet-600 z-10 relative">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                  duration: 1,
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, scale: 0.5 },
                }}
              >
                <div className="absolute text-white p-1 md:p-2 bg-violet-600 rounded top-[-2rem] left-[-2rem]">
                  You
                </div>
              </motion.div>
            </div>
            <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-blue-400 z-10 relative">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute whitespace-nowrap text-white p-2 md:p-3 bg-blue-400 rounded top-[1.5rem] left-[70%]">
                  Anonymous 1
                </div>
              </motion.div>
            </div>
            <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-orange-400 z-10 relative">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute whitespace-nowrap text-white p-2 md:p-3 bg-orange-400 rounded top-[-2rem] left-[-1rem]">
                  Anonymous 2
                </div>
              </motion.div>
            </div>
            <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-green-400 z-10 relative">
              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 0.4 }}
                variants={{
                  visible: { opacity: 1, scale: 1, x: 0, y: 0 },
                  hidden: { opacity: 0.5, scale: 0.5 },
                }}
              >
                <div className="absolute whitespace-nowrap text-white p-2 md:p-3 bg-green-400 rounded top-[1.5rem] left-[70%]">
                  Anonymous 3
                </div>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-yellow-700 h-1 absolute top-[50%] w-full max-w-4xl"></div>
        </div>
      </div>
    </section>
  );
};

export default EverWonder;
