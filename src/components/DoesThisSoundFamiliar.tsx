"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DoesThisSoundsFamiliar: React.FC = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const boxContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-200px", threshold: 0.3 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && boxContainerRef.current) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: +500,
        behavior: "smooth",
      });
    }
  }, [isIntersecting]);

  return (
    <section className="overflow-x-hidden mt-12 mb-32 p-4 md:px-20" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="inline-block"
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
          transition={{ duration: 1.9, type: "spring", bounce: 0.1 }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold px-4 mb-5 text-center md:text-left">
            Does this sound familiar...
          </h1>
        </motion.div>
        <motion.div
          animate={isIntersecting ? "visible" : "hidden"}
          transition={{
            duration: 2.1,
            ease: "easeInOut",
            type: "spring",
            delay: 0.3,
          }}
          initial="hidden"
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
        >
          <Image width={70} height={70} alt="Red Ghost" src="/red-ghost.png" />
        </motion.div>
      </div>
      <div
        className="p-6 md:p-10 flex space-x-6 md:space-x-8 gap-4 md:gap-7 items-center overflow-x-auto hide-scrollbar h-[250px]"
        ref={boxContainerRef}
      >
        <div className="rounded-xl bg-purple-200 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive, instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-blue-300 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg text-white">
            You get a promotion at work
          </h3>
          <p className="text-gray-600">
            You question yourself and wonder if you are unqualified, instead of
            trusting yourself and your abilities
          </p>
        </div>

        <div className="rounded-xl bg-yellow-200 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">You attend a class reunion</h3>
          <p className="text-gray-700">
            You compare yourself with your peers instead of making your
            self-judgment more independent of others.
          </p>
        </div>

        <div className="rounded-xl bg-violet-600 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidently approaching strangers
            and striking up a chat.
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">
            You hit a dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get frazzled, nervous, and frustrated instead of staying
            optimistic and solution-oriented.
          </p>
        </div>

        <div className="rounded-xl bg-purple-200 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">You argue with a colleague</h3>
          <p className="text-gray-700">
            You get angry and defensive, instead of staying open and working
            towards common ground
          </p>
        </div>

        <div className="rounded-xl bg-violet-600 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">
            You are at a lively dinner party
          </h3>
          <p className="text-gray-700">
            You play on your phone instead of confidently approaching strangers
            and striking up a chat.
          </p>
        </div>

        <div className="rounded-xl bg-blue-100 min-w-[250px] md:min-w-[350px] p-4 md:p-6 flex flex-col gap-2 md:gap-4 hover:scale-110 hover:-rotate-12 hover:duration-300 ease-in-out">
          <Image
            width={50}
            height={50}
            alt="Angry Emoji"
            src="/angry-emoji.svg"
          />
          <h3 className="font-bold text-lg">
            You hit a dead end in a negotiation
          </h3>
          <p className="text-gray-700">
            You get frazzled, nervous, and frustrated instead of staying
            optimistic and solution-oriented.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoesThisSoundsFamiliar;
