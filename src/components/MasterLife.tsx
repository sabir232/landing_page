"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MasterLife: React.FC = () => {
  return (
    <div className="px-4 md:px-20 mt-14 md:mt-28">
      <div
        style={{ minHeight: "550px" }}
        className="bg-bgBlue relative rounded-3xl flex flex-col md:flex-row overflow-hidden"
      >
        <div className="flex basis-1/2 items-center justify-center p-4 md:p-0">
          <div className="flex items-center justify-start flex-col text-center md:text-left">
            <div className="w-full">
              <p className="text-lg">Ahead app</p>
            </div>
            <div>
              <p className="mt-5 text-2xl md:text-5xl font-bold leading-tight">
                Master Your life by mastering emotions
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-7 items-center w-full mt-5">
              <Image
                width={150}
                height={30}
                alt="Apple Play Store"
                src="/appleStoreIcon.svg"
                className="cursor-pointer"
              />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      alt="star"
                      src="/starIcon.svg"
                      width={16}
                      height={16}
                      key={index}
                    />
                  ))}
                </div>
                <p className="">100+ AppStore reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 flex items-center justify-center w-full relative">
          <div className="flex items-center justify-center bg-bgMobile h-40 w-40 md:h-60 md:w-60 rounded-full">
            <div className="h-48 w-48 md:h-64 md:w-64 flex items-center">
              <Image
                className="h-full w-full"
                height={100}
                width={100}
                src="/mobile.svg"
                alt="Mobile"
              />
            </div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, rotate: 360 },
            }}
            transition={{
              type: "tween",
              duration: 2,
              ease: "easeInOut",
            }}
            style={{ border: "3px solid white ", borderStyle: "dashed" }}
            className="absolute rounded-full h-72 w-72 md:h-96 md:w-96 border-dashed border-white"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              animate={{ rotate: -360 }}
              transition={{ type: "spring", duration: 4, bounce: 0.4 }}
              style={{ top: "35px" }}
              className="absolute h-12 w-10 md:h-16 md:w-12"
            >
              <Image
                height={100}
                width={100}
                className="h-full w-full"
                src="/blue-ghost.png"
                alt="Blue Ghost"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              animate={{ rotate: -360 }}
              transition={{ type: "spring", duration: 4, bounce: 0.4 }}
              style={{
                right: "-20px",
                top: "50%",
                transform: "translate(-50%,-50%)",
              }}
              className="absolute h-12 w-10 md:h-16 md:w-12"
            >
              <Image
                height={100}
                width={100}
                className="h-full w-full"
                src="/red-ghost.png"
                alt="Red Ghost"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              animate={{ rotate: -360 }}
              transition={{ type: "spring", duration: 4, bounce: 0.4 }}
              style={{ bottom: "-12px", right: "50%" }}
              className="absolute h-12 w-10 md:h-14 md:w-12"
            >
              <Image
                height={100}
                width={100}
                src="/newGhost.png"
                alt="Violet Ghost"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            visible: {
              x: [0, 10],
              y: [55, -25],
              rotate: 25,
            },
            hidden: { y: 35 },
          }}
          animate={{
            x: [0, 10],
            y: [55, -5],
            rotate: 25,
          }}
          transition={{
            type: "tween",
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-20 w-20 md:h-28 md:w-24 absolute"
          style={{ right: "50%", top: "40%", transform: "translate(50%,50%)" }}
        >
          <Image height={100} width={100} src="/leaf.png" alt="Leaf" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          animate={{ x: -150 }}
          transition={{ type: "spring", duration: 4, bounce: 0.4 }}
          style={{ bottom: "-13px", left: "150px" }}
          className="absolute bg-orange-300 rounded-full h-8 w-8 md:h-12 md:w-12"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          animate={{ y: -150 }}
          transition={{ type: "spring", duration: 4, bounce: 0.4 }}
          style={{ left: "-15px", top: "50%" }}
          className="absolute bg-blue-300 rounded-full h-8 w-8 md:h-12 md:w-12"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          animate={{ x: -150 }}
          transition={{ type: "spring", duration: 4, bounce: 0.4 }}
          style={{ right: "150px", top: "-15px" }}
          className="absolute bg-yellow-300 rounded-full h-8 w-8 md:h-12 md:w-12"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          animate={{ x: 150 }}
          transition={{ type: "spring", duration: 4, bounce: 0.4 }}
          style={{ left: "150px", top: "0px" }}
          className="absolute h-8 w-8 md:h-12 md:w-12"
        >
          <Image
            src="/singleLeaf.png"
            height={48}
            width={48}
            alt="Single Leaf"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MasterLife;
