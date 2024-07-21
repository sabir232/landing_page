"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const customAnimation = keyframes`
  from {
    opacity: 0.1;
    transform: translate(-50px, 0);
    transparent: 0;
  }

  to {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const SelfImprovement: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 mt-10 mb-24" ref={ref}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 1.9, type: "spring", bounce: 0.1 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <div className="text-lg md:text-xl font-bold text-black">
            Wrong with self improvement & how we&apos;re fixing it.
          </div>
          <div className="text-3xl md:text-4xl lg:text-6xl pb-3 font-bold text-black">
            Self Improvement. Ugh.
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -500],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
          className="flex items-center justify-center mt-4 md:mt-0"
        >
          <Image
            src="/blue-ghost.png"
            alt="download applestore"
            width={50}
            height={50}
            className="sm:w-60 sm:h-60 md:w-70 md:h-70 lg:w-80 lg:h-80"
          />
        </motion.div>
      </div>

      <div className="timeline px-4 sm:px-6 md:px-8 lg:px-20 pt-10 md:pt-14 h-80 md:h-96 overflow-y-scroll">
        <div className="border-l-2 border-l-violet-300 flex flex-col gap-12 md:gap-16">
          <Reveal keyframes={customAnimation} triggerOnce={false}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="relative">
                <motion.div className="max-w-full md:max-w-[40rem] relative pl-6 md:pl-8">
                  <div className="absolute -left-3 md:-left-4 text-xl md:text-2xl">
                    🟣
                  </div>
                  <p className="text-lg md:text-xl font-bold">
                    It&apos;s not easy as 1-2-3
                  </p>
                  <p className="mt-2 md:mt-3 text-sm md:text-base">
                    The journey may be long but our sessions are quick. We get
                    to the point and tell you what you want to know (and nothing
                    else).
                  </p>
                </motion.div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default SelfImprovement;
