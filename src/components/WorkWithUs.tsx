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
    <div className="px-20 my-32">
      <section className="mt-16 rounded-2xl bg-violet-100 p-12 px-16">
        <div className="flex justify-between items-center text-5xl font-bold">
          <motion.div
            ref={headerRef1}
            initial="hidden"
            animate={isHeaderInView1 ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="">Work with us</span>
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
          >
            <span className="text-violet-800">ahead</span>
          </motion.div>
        </div>

        <div className="mt-12 flex gap-20 overflow-hidden">
          <div className="grow">
            <div className="rounded-2xl bg-white pt-8 max-w-[30rem] shadow-lg">
              <motion.div
                ref={imageRef}
                className="pl-4 inline-block"
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
                <Image width={60} height={60} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4">
                <h2 className="font-bold">About</h2>
                <p className="font-normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus fugit ipsum voluptate deserunt, non velit a
                  blanditiis officia dolor eligendi eveniet cumque quasi
                  reprehenderit minus?
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-8 p-4 rounded-2xl mt-8 bg-orange-50">
                <h2 className="font-bold">Product</h2>
                <p className="font-normal">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolore temporibus dignissimos, laboriosam corporis deleniti
                  quod quidem explicabo? Repellendus officiis odit corrupti
                  ducimus soluta dolor accusamus repellat, nostrum suscipit,
                  distinctio ipsam!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 max-h-[75vh] overflow-y-auto pr-6 custom-scrollbar">
            {[...Array(6)].map((val, index) => (
              <div
                className="p-4 bg-white rounded-2xl space-y-6 w-[20rem]"
                key={index}
              >
                <h2 className="font-bold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </h2>
                <p className="font-normal">
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
