"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const WorkWithUs: React.FC = () => {
  const headerRef1 = useRef(null);
  const headerRef2 = useRef(null);
  const imageRef = useRef(null);

  const isHeaderInView1 = useInView(headerRef1, { once: false });
  const isHeaderInView2 = useInView(headerRef2, { once: false });
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 my-16 md:my-24 lg:my-32">
      <section className="rounded-2xl bg-violet-100 p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-4xl md:text-5xl lg:text-6xl font-bold">
          <motion.div
            ref={headerRef1}
            initial="hidden"
            animate={isHeaderInView1 ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
            className="text-center md:text-left"
          >
            <span>Work with us</span>
          </motion.div>

          <motion.div
            ref={headerRef2}
            initial="hidden"
            animate={isHeaderInView2 ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
            className="text-center md:text-right"
          >
            <span className="text-violet-800">ahead</span>
          </motion.div>
        </div>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row gap-6 md:gap-12 overflow-hidden">
          <div className="flex-1 max-w-full md:max-w-[30rem]">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <motion.div
                ref={imageRef}
                className="inline-block"
                initial="hidden"
                animate={isImageInView ? "visible" : "hidden"}
                transition={{ duration: 4 }}
                variants={{
                  visible: {
                    opacity: [0.8, 0.9, 1.01, 1],
                    scale: [0.6, 0.55, 0.8, 1],
                    rotate: [0, 45, -35, 10, 0],
                  },
                  hidden: { opacity: 0, scale: 0.5, rotate: 0 },
                }}
              >
                <Image
                  width={60}
                  height={60}
                  alt="Ghost icon"
                  src="/ghost.png"
                />
              </motion.div>
              <div className="flex flex-col gap-4 mt-4">
                <h2 className="font-bold text-xl md:text-2xl">About</h2>
                <p className="font-normal text-base md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit ipsum voluptate deserunt, non velit a
                  blanditiis officia dolor eligendi eveniet cumque quasi
                  reprehenderit minus?
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-8 p-4 rounded-2xl bg-orange-50">
                <h2 className="font-bold text-xl md:text-2xl">Product</h2>
                <p className="font-normal text-base md:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore temporibus dignissimos, laboriosam corporis deleniti
                  quod quidem explicabo? Repellendus officiis odit corrupti
                  ducimus soluta dolor accusamus repellat, nostrum suscipit,
                  distinctio ipsam!
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 max-h-[60vh] md:max-h-[75vh] overflow-y-auto pr-4 md:pr-6 custom-scrollbar">
            {[...Array(6)].map((val, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-4 md:space-y-6 mb-4"
                key={index}
              >
                <h2 className="font-bold text-lg md:text-xl">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h2>
                <p className="font-normal text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit ipsum voluptate deserunt, non velit a
                  blanditiis officia dolor eligendi eveniet cumque quasi
                  reprehenderit minus?
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkWithUs;
