"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Test: React.FC = () => {
  const svgRef = useRef(null);
  const buttonRef = useRef(null);

  const isSvgInView = useInView(svgRef, { once: false });
  const isButtonInView = useInView(buttonRef, { once: false });

  return (
    <section className="mt-20 flex flex-col gap-3 text-center p-8">
      <p className="text-center">We take Privacy seriously</p>
      <p className="font-bold text-3xl">Before you get started</p>
      <p className="text-xl font-normal">
        &quot;We won't share your answers with anyone.
        <br /> (and won't tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="">Made with Love...</p>
        <motion.svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          width="170"
          height="70"
          viewBox="0 0 640 512"
          initial={{ opacity: 0, x: -10 }}
          animate={
            isSvgInView
              ? { opacity: [0, 0, 0, 0.5, 1], x: [0, 0, 2.5, 3, 2.7, 0] }
              : { opacity: 0, x: -10 }
          }
          transition={{ duration: 1.3 }}
        >
          <path
            id="Path_1"
            data-name="Path 1"
            d="M192 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 7.8c0 27.7-2.4 55.3-7.1 82.5l-84.4 25.3c-40.6 12.2-68.4 49.6-68.4 92l0 71.9c0 40 32.5 72.5 72.5 72.5c26 0 50-13.9 62.9-36.5l13.9-24.3c26.8-47 46.5-97.7 58.4-150.5l94.4-28.3-12.5 37.5c-3.3 9.8-1.6 20.5 4.4 28.8s15.7 13.3 26 13.3l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-83.6 0 18-53.9c3.8-11.3 .9-23.8-7.4-32.4s-20.7-11.8-32.2-8.4L316.4 198.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96s-96 43-96 96l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32zm-9.2 177l49-14.7c-10.4 33.8-24.5 66.4-42.1 97.2l-13.9 24.3c-1.5 2.6-4.3 4.3-7.4 4.3c-4.7 0-8.5-3.8-8.5-8.5l0-71.9c0-14.1 9.3-26.6 22.8-30.7zM24 368c-13.3 0-24 10.7-24 24s10.7 24 24 24l40.3 0c-.2-2.8-.3-5.6-.3-8.5L64 368l-40 0zm592 48c13.3 0 24-10.7 24-24s-10.7-24-24-24l-310.1 0c-6.7 16.3-14.2 32.3-22.3 48L616 416z"
            transform="translate(-0.672 78.836)"
            fill="none"
            stroke="#f68819"
            strokeWidth="1"
          />
        </motion.svg>
      </div>
      <motion.div
        initial="hidden"
        animate={isButtonInView ? "visible" : "hidden"}
        transition={{ ease: "easeInOut", duration: 1, delayChildren: 0.7 }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
      >
        <motion.div
          ref={buttonRef}
          initial="hidden"
          animate={isButtonInView ? "visible" : "hidden"}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%", // Adjust the width as needed
            overflow: "hidden", // Hide overflowing text while sliding
          }}
          className="pt-3"
        >
          <button className="rounded-3xl p-4 px-6 text-white bg-black">
            Start Test
          </button>
        </motion.div>
        <div className="text-sm mt-4">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
