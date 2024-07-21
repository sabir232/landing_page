"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MeetAheadCard: React.FC = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 relative mt-7 mb-32">
      <div
        className="bg-bgPeach overflow-hidden relative flex flex-col md:flex-row rounded-lg"
        style={{ minHeight: "450px" }}
      >
        <div className="basis-1/2 p-4 sm:p-6 md:p-7">
          <div className="flex flex-col mt-10 md:mt-20 gap-3">
            <div>
              <p className="text-base sm:text-md md:text-lg text-left">
                Built Out of Frustration
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                Meet the ahead app
              </p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-12 w-full md:w-4/5 items-center px-4 md:px-0">
            <div>
              <p className="text-base sm:text-lg md:text-lg">
                A personalized pocket coach that provides bitesized,
                science-driven tools to boost emotional intelligence.
              </p>
            </div>
            <div>
              <p className="text-base sm:text-lg md:text-lg">
                Think of it as a pocket cheerleader towards a better, more
                fulfilling life.
              </p>
            </div>
          </div>
        </div>

        {/* Circle div */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            hidden: { opacity: 1, x: 0, y: 20 },
            visible: { x: [0, -550], y: [55, -18] },
          }}
          animate={{ x: [0, -550], y: [55, -18] }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.3,
          }}
          className="bg-darkPeach h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-60 lg:w-60 absolute rounded-full"
          style={{ bottom: "-16px", right: "10%" }}
        ></motion.div>

        {/* Leaves division */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          initial="hidden"
          variants={{
            visible: { x: [0, 10], y: [55, -25], rotate: 25 },
            hidden: { y: 55 },
          }}
          animate={{ x: [0, 10], y: [55, -5], rotate: 25 }}
          transition={{
            type: "tween",
            duration: 1.2,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 absolute"
          style={{ right: "30%", top: "20%", transform: "translate(50%,50%)" }}
        >
          <Image height={100} width={100} src="/leaf.png" alt="" />
        </motion.div>

        {/* Ghost Div */}
        <div
          className="absolute flex justify-center items-center rounded-full bg-white h-24 w-24 md:h-44 md:w-44 border-4 md:border-8 border-borderGrey"
          style={{ top: "62%", left: "15%", transform: "translate(-50%,-50%)" }}
        >
          <motion.div
            transition={{ duration: "1.5" }}
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { rotate: [0, 25, -15, 0] },
              hidden: { opacity: 0, scale: 0.5, rotate: 0 },
            }}
            className="h-10 w-10 md:h-20 md:w-16 inline-block"
          >
            <Image
              height={100}
              width={100}
              src="/newGhost.png"
              className="h-full w-full"
              alt=""
            />
          </motion.div>
          {/* Badge */}
          <motion.div
            whileInView="visible"
            viewport={{ once: true }}
            initial="hidden"
            variants={{
              visible: { opacity: 1, scale: 1, y: 0, zIndex: -10 },
              hidden: { y: 60, opacity: 0, scale: 0.5 },
            }}
            transition={{
              type: "spring",
              duration: "1.5",
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute h-6 w-6 md:h-11 md:w-11"
            style={{ top: "-16px" }}
          >
            <Image height={100} width={100} src="/badge.png" alt="" />
          </motion.div>
        </div>
      </div>
      {/* Flower div */}
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        initial="hidden"
        variants={{
          visible: { opacity: 1, rotate: 360 },
          hidden: { opacity: 1 },
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 2,
        }}
        className="h-6 w-6 sm:h-8 sm:w-8 md:h-11 md:w-11 absolute"
        style={{ right: "20%", top: "-10%" }}
      >
        <Image height={100} width={100} src="/flower.png" alt="" />
      </motion.div>
    </div>
  );
};

export default MeetAheadCard;
